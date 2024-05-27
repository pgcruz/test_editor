import React, { useState } from 'react';
import * as Icons from '@mui/icons-material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Handle } from 'reactflow';

const Opciones = ({ id, data, onDelete }) => {
  const [botones, setBotones] = useState([
    { id: 1, label: 'Opción 1' },
    { id: 2, label: 'Opción 2' }
  ]);

  const handleAddButton = () => {
    const newButton = { id: botones.length + 1, label: `Opción ${botones.length + 1}` };
    setBotones([...botones, newButton]);
  };

  const handleLabelChange = (id, newLabel) => {
    const updatedBotones = botones.map(boton =>
      boton.id === id ? { ...boton, label: newLabel } : boton
    );
    setBotones(updatedBotones);
  };

  const iconStyle = {
    color: "#001452",
    fontSize: "40px",
    padding: "6px",
    margin: "4px",
    borderRadius: "5px",
  };

  return (
    <div className="bg-[#FFFFFF] text-[#001452] p-2 rounded-lg w-[274px] h-[auto]">
      <Icons.ListOutlined style={iconStyle} /> Opciones
      <div className="w-full border-b border-[#C6C5D0] my-2"></div>
      <textarea className="resize-none bg-[#EFEDF1] rounded-md p-2 m-2 w-[248px] h-[77px] text-[#767680] focus:text-black" placeholder="Texto del mensaje..."></textarea>

      <div className="mb-4">
        {botones.map(boton => (
          <div key={boton.id} className="relative flex items-center mb-2">
            <Handle
              type="source"
              position="right"
              id={`output-${boton.id}`}
              style={{ top: '50%', background: '#555', right: -10 }}
            />
            <input
              type="text"
              value={boton.label}
              onChange={(e) => handleLabelChange(boton.id, e.target.value)}
              className="bg-[#EFEDF1] rounded-md p-2 m-2 w-full text-[#767680] focus:text-black"
            />
          </div>
        ))}
        <button className="border border-[#767680] w-full rounded-full p-2 text-[#4058B1] font-medium mt-4" onClick={handleAddButton}>
          <Icons.AddOutlined className="text-[#4058B1]" /> Agregar opción
        </button>
      </div>

      <div className='text-[#001452]'>
        <button><Icons.EditOutlined className="absolute bottom-3 right-4 text-[#001452]" /></button>
        <button onClick={onDelete}><DeleteForeverOutlinedIcon className="absolute bottom-3 right-20 text-[#001452]" /></button>
      </div>

    
      
    </div>
  );
};

export default Opciones;