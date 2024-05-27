import React, { useState } from 'react';
import * as Icons from '@mui/icons-material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const Message = ({ onDelete }) => {
  const iconStyle = {
    color: "#001452",
    fontSize: "40px",
    padding: "6px",
    margin: "4px",
    borderRadius: "5px",
  };

  return (
    <div className="bg-[#FFFFFF] text-[#001452] p-2 rounded-lg  w-[274px] h-[283px] shadow-lg">
      <Icons.MessageOutlined style={iconStyle} /> Mensaje
      <div className="w-full  border-b border-[#C6C5D0] m-auto absolute left-0"></div>
      <textarea className="resize-none bg-[#EFEDF1] rounded-md p-2 m-2 w-[248px] h-[77px] text-[#767680] focus:text-black overflow-y-auto " placeholder="Texto del mensaje..."></textarea>
      <div>
      <button><Icons.EditOutlined className="absolute bottom-3 right-4 text-[#001452] "/></button>
        <button onClick={onDelete}><DeleteForeverOutlinedIcon className="absolute bottom-3 right-20 text-[#001452] "/></button>
      </div>
    </div>
  );
};

export default Message;