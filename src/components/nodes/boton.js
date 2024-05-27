import React, { useState, useRef } from "react";
import * as Icons from "@mui/icons-material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const Boton = ({ onDelete }) => {
  const iconStyle = {
    color: "#001452",
    backgroundColor: "#DDE1FF",
    fontSize: "40px",
    padding: "6px",
    margin: "4px",
    borderRadius: "5px",
  };

  const [isMinimized, setIsMinimized] = useState(true);
  

  const handleAddClickClose = () => {
    setIsMinimized(true);
  };

  return (
    <div
      
      className="bg-[#FBF8FD] text-[#001452] rounded-lg w-[274px] h-auto shadow-lg"
    >
      <div
        onClick={() => setIsMinimized(!isMinimized)}
        className="cursor-pointer p-2 flex justify-between items-center"
      >
        <div>
          <Icons.SmartButtonOutlined style={iconStyle} /> Botón
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
                <Icons.SmartButtonOutlined /> Botón
                <div className="w-full border-b border-[#C6C5D0] absolute left-0"></div>
              </div>
            </div>

            <div className="fixed top-[50px]">
              <p className="text-[#001452] font-medium">
                Introduce el texto del botón:
              </p>
              <textarea
                className="resize-none w-[314px] h-[36px] bg-[#EFEDF1] rounded-[10px] p-2"
                placeholder="Texto del boton"
              />
              <div className="p-4">
                <div className="flex items-center mb-4">
                  <input
                    type="radio"
                    id="radio1"
                    name="option"
                    className="mr-4 w-[20px] h-[20px] cursor-pointer"
                  />
                  <label
                    htmlFor="radio1"
                    className="text-[#001452] font-medium"
                  >
                    Continuar con el flujo
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="radio2"
                    name="option"
                    className="mr-4 w-[20px] h-[20px] cursor-pointer"
                  />
                  <label
                    htmlFor="radio2"
                    className="text-[#001452] font-medium"
                  >
                    Introduce el url:
                  </label>
                </div>
              </div>

              <div className="relative w-[314px] h-[36px]">
                <textarea
                  className="resize-none w-full h-full bg-[#EFEDF1] rounded-[10px] p-1 pr-[60px]"
                  placeholder="http://tuenlaceaqui.com"
                />
                <select className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-[#FFFFFF] h-[28px] rounded-[5px] p-1">
                  <option value="">{"{}"}</option>
                </select>
              </div>

              <div className="p-4">
                <div className="flex items-center mb-4">
                  <input
                    type="radio"
                    id="radio1"
                    name="option"
                    className="mr-4 w-[20px] h-[20px] cursor-pointer"
                  />
                  <label
                    htmlFor="radio1"
                    className="text-[#001452] font-medium"
                  >
                    Introduce url de pago:
                  </label>
                </div>
               
              </div>
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

export default Boton;
