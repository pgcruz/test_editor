import React, { useState, useRef } from "react";
import * as Icons from "@mui/icons-material";

const Api = ({ onDelete }) => {
  const iconStyle = {
    color: "#001452",
    backgroundColor: "#DDE1FF",
    fontSize: "40px",
    padding: "6px",
    margin: "4px",
    borderRadius: "5px",
  };

  const [isMinimized, setIsMinimized] = useState(true);
  const [showTextarea, setShowTextarea] = useState(false);
  const apiRef = useRef(null);

  const handleAddClick = () => {
    setShowTextarea(true);
  };

  const handleAddClickClose = () => {
    setIsMinimized(true);
  };

  return (
    <div
      ref={apiRef}
      className="bg-[#FFFFFF] text-[#001452] rounded-lg w-[274px] h-auto shadow-lg"
    >
     <div
  onClick={() => setIsMinimized(!isMinimized)}
  className="cursor-pointer p-2 flex justify-between items-center"
>
  <div>
    <Icons.ApiOutlined style={iconStyle} /> Solicitud API
  </div>
  <div >
    <button onClick={onDelete}><Icons.DeleteForeverOutlined className="text-[#001452]"/></button>
    <button className="pl-4"><Icons.EditOutlined className="text-[#001452]"/></button>
  </div>
</div>
      {!isMinimized && (
        <>
          <div className="text-m p-4 bg-[#F5F3F7] w-[607px] h-[603px] rounded-lg relative flex flex-col justify-between">
            <div>
              <p className="text-black mb-2 font-medium">
                Configura la solicitud de la API
              </p>
              <div className="flex items-center mb-4">
                <select className="block w-[80px] mt-2 p-2 rounded-md bg-[#FFFFFF]">
                  <option>POST</option>
                  <option>GET</option>
                  <option>PUT</option>
                  <option>DELETE</option>
                </select>
                <div className="ml-4 flex-grow relative">
                  <input
                    id="api-url"
                    type="text"
                    placeholder="Ingresa un URL"
                    className="block w-full p-4 border border-[#767680] rounded bg-[#F5F3F7]"
                  />
                  <label
                    className="absolute left-2 -top-2.5 px-1 text-sm text-[#45464F] bg-[#F5F3F7]"
                    htmlFor="api-url"
                  >
                    URL
                  </label>
                </div>
              </div>
              <div className="text-[#1B1B1F] font-medium text-16px mb-4">
                Cuerpo de la solicitud
              </div>
              {showTextarea ? (
                <textarea
                  className="w-full h-60 p-2 resize-none border border-[#767680] bg-[#F5F3F7] rounded-lg flex-grow"
                  placeholder="Ingrese el cuerpo de la solicitud aquí..."
                ></textarea>
              ) : (
                <button
                  className="border border-[#767680] w-full rounded-lg p-2 mb-4 text-[#4058B1]"
                  onClick={handleAddClick}
                >
                  <Icons.AddOutlined className="text-[#4058B1]" /> Añadir
                </button>
              )}
            </div>
            <div className="flex justify-end space-x-4">
              <button className="bg-[#DEE1F9] p-2 rounded-full text-black font-medium">
                Realizar Prueba
              </button>
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

export default Api;
