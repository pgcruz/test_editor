import React, { useState, useRef } from 'react';
import * as Icons from '@mui/icons-material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const Ticket = ({ onDelete }) => {
  const iconStyle = {
    color: "#001452",
    backgroundColor: "#DDE1FF",
    fontSize: "40px",
    padding: "6px",
    margin: "4px",
    borderRadius: "5px",
  };

  const [isMinimized, setIsMinimized] = useState(true);
  const apiRef = useRef(null);

  const handleAddClickClose = () => {
    setIsMinimized(true);
  };

  return (
    <div
      ref={apiRef}
      className="bg-[#FBF8FD] text-[#001452] rounded-lg w-[274px] h-auto shadow-lg"
    >
      <div
        onClick={() => setIsMinimized(!isMinimized)}
        className="cursor-pointer p-2 flex justify-between items-center"
      >
        <div>
          <Icons.ConfirmationNumberOutlined style={iconStyle} /> Crear Ticket
        </div>
      </div>
      {!isMinimized && (
        <>
          <div className="text-m p-4 bg-[#FBF8FD] w-[383px] h-[422px] rounded-lg relative flex flex-col justify-between mt-[-4rem]">
            <div
              onClick={() => setIsMinimized(!isMinimized)}
              className="cursor-pointer p-2 flex justify-between items-center"
            >
              <div className="m-[-1.5rem] p-2 text-[#001452]">
                <Icons.ConfirmationNumberOutlined /> Crear Ticket
                <div className="w-full border-b border-[#C6C5D0] absolute left-0"></div>
              </div>
            </div>

            <div className="fixed top-[50px]">
              <p className="text-[#001452] font-medium">
                Introduce el asunto:
              </p>
              <textarea className='resize-none w-[314px] h-[36px] bg-[#EFEDF1] rounded-[10px] p-4' placeholder='Escribe el asunto' />

              <p className="text-[#001452] font-medium">
                Atributo del visitante
              </p>
              <div className="relative w-[314px] h-[36px]">
                <textarea
                  className='resize-none w-full h-full bg-[#EFEDF1] rounded-[10px] p-1 pr-[60px]'
                  placeholder='Ej. email, nombre, etc.'
                />
                <select className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#FFFFFF] h-[28px] rounded-[5px] p-1'>
                  <option value="">{"{}"}</option>
                  
                </select>
              </div>

              <p className="text-[#001452] font-medium">
                Conversación de destino
              </p>
              <select className='bg-[#FFFFFF] w-[314px] h-[40px] rounded-[10px]'>
                <option value="">Destino</option>
              </select>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={handleAddClickClose}
                className="p-2 rounded-full text-[#4058B1] border border-[#767680] font-medium w-[120px] h-[40px]"
              >
                Cancelar
              </button>
              <button className="bg-[#4058B1] p-2 rounded-full text-white font-medium w-[120px] h-[40px]">
                Aplicar
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Ticket;