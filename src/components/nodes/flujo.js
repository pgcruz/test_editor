import React, { useState,useRef } from 'react';
import * as Icons from '@mui/icons-material';

const Flujo = ({ onDelete }) => {
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
          <Icons.AccountTreeOutlined style={iconStyle} /> Flujo
        </div>
      </div>
      {!isMinimized && (
        <>
          <div className="text-m p-4 bg-[#FBF8FD] w-[383px] h-[230px] rounded-lg relative flex flex-col justify-between mt-[-4rem]">
            <div
              onClick={() => setIsMinimized(!isMinimized)}
              className="cursor-pointer p-2 flex justify-between items-center"
            >
              <div className="m-[-1.5rem] p-2 text-[#001452]">
                <Icons.AccountTreeOutlined /> Flujos
                <div className="w-full border-b border-[#C6C5D0] absolute left-0"></div>
              </div>
            </div>
<div>
  <label>Selecciona el flujo que deseas insertar:</label>
  <select>
    <option>Flujos</option>
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


export default Flujo;