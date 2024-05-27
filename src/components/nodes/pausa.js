import React, { useState } from "react";
import * as Icons from "@mui/icons-material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

const Pausa = ({ onDelete }) => {
  const iconStyle = {
    color: "#001452",
    fontSize: "40px",
    padding: "6px",
   margin: "2px",
    borderRadius: "5px",
  };

  const [isMinimized, setIsMinimized] = useState(true);
  const [containerStyle, setContainerStyle] = useState({
    width: "274px",
    height: "auto",
    backgroundColor: "#FFFFFF",
  });
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const toggleMinimized = () => {
    setIsMinimized(!isMinimized);
    if (isMinimized) {
      setContainerStyle({
        ...containerStyle,
        width: "383px",
        backgroundColor: "#FBF8FD",
      });
    } else {
      setContainerStyle({
        ...containerStyle,
        width: "274px",
        backgroundColor: "#FFFFFF",
      });
    }
  };

  const handleAddClickClose = () => {
    setIsMinimized(true);
  };

  const handleHoursChange = (event) => {
    setHours(parseInt(event.target.value));
  };

  const handleMinutesChange = (event) => {
    setMinutes(parseInt(event.target.value));
  };

  const handleSecondsChange = (event) => {
    setSeconds(parseInt(event.target.value));
  };

  return (
    <div
      style={containerStyle}
      className="text-[#001452] p-2 rounded-lg relative shadow-lg"
    >
      <div onClick={toggleMinimized} className="cursor-pointer flex items-center">
  <Icons.BrowseGalleryOutlined style={iconStyle} /> Pausa
  {isMinimized && (
    <div className="ml-auto">
      <button onClick={onDelete}><DeleteForeverOutlinedIcon className="text-[#001452]"/></button>
      <button className="pl-4"><Icons.EditOutlined className="text-[#001452]"/></button>
    </div>
        )}
      </div>
      {!isMinimized && (
        <>
          <div className="w-full border border-[#C6C5D0]  absolute left-0 "></div>
          <div className="">
            <div className="mb-4">Tiempo de la pausa antes de responder:</div>
            <div className="flex mb-4">
              <div className="flex flex-col mr-4">
                <input
                  type="number"
                  className="border border-[#767680] rounded-md w-16 h-8 mb-1"
                  value={hours}
                  onChange={handleHoursChange}
                />
                <span className="text-[#1B1B1F] text-sm">horas</span>
              </div>
              <div className="flex flex-col mr-4">
                <input
                  type="number"
                  className="border border-[#767680] rounded-md w-16 h-8 mb-1"
                  value={minutes}
                  onChange={handleMinutesChange}
                />
                <span className="text-[#1B1B1F] text-sm">minutos</span>
              </div>
              <div className="flex flex-col">
                <input
                  type="number"
                  className="border border-[#767680] rounded-md w-16 h-8 mb-1"
                  value={seconds}
                  onChange={handleSecondsChange}
                />
                <span className="text-[#1B1B1F] text-sm">segundos</span>
              </div>
            </div>
            <textarea
              className="resize-none w-full h-24 border border-[#767680] rounded-md bg-[#F5F3F7] mb-4"
              placeholder="Texto del mensaje..."
            ></textarea>
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
        </>
      )}
    </div>
  );
};

export default Pausa;
