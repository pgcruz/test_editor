import React, { useState, useRef } from 'react';
import * as Icons from '@mui/icons-material';

const Filtro = ({ onDelete }) => {
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
          <Icons.FilterAltOutlined style={iconStyle} /> Filtro
        </div>
      </div>
      {!isMinimized && (
        <>
          <div className="bg-[#FBF8FD] w-[607px] h-[724px] rounded-lg relative flex flex-col mt-[-4rem]">
            <div
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-[black] font-medium ml-2 p-4"
            >
              <Icons.FilterAltOutlined /> Filtro
            </div>
            <div className="w-full border-b border-[#C6C5D0] mb-2"></div>
            <div className="text-black text-base font-normal m-4">
              Los filtros le permiten decidir qué tipo de respuestas y acciones del asistente se activan según la información del usuario que recopila su asistente virtual.
            </div>
            <div className="flex flex-col m-4">
              <div className="flex justify-between space-x-4 mb-4">
                <div className="flex flex-col w-1/2">
                  <label htmlFor="atributo" className="text-[#001452] font-medium mb-2">
                    Atributo
                  </label>
                  <select id="atributo" className="bg-[#FFFFFF] w-full h-[40px] rounded-[10px] border border-[#C6C5D0] p-2">
                    <option value="">Atributo</option>   
                  </select>
                </div>
                <div className="flex flex-col w-1/2">
                  <label htmlFor="condicion" className="text-[#001452] font-medium mb-2">
                    Condición
                  </label>
                  <select id="condicion" className="bg-[#FFFFFF] w-full h-[40px] rounded-[10px] border border-[#C6C5D0] p-2">
                    <option value="">Condición</option>
                  </select>
                </div>
              </div>
              <label>Valor</label>
                <textarea placeholder='Ingresa un valor'></textarea>
                <button className="border border-[#767680] border w-[205px] rounded-full p-2 text-[#4058B1] font-medium">
                <Icons.AddOutlined className="text-[#4058B1] " /> Añadir
              </button>
              <div className="w-full border-b border-[#C6C5D0] mb-2"></div>
            </div>
            <div className="flex justify-end space-x-4 mt-auto p-4">
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

export default Filtro;