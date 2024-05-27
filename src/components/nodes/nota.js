import React from 'react';
import * as Icons from '@mui/icons-material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const Nota = ({ onDelete }) => {
  return (
    <div className="bg-[#FFF2BC] text-[#001452] p-2 w-[170px] h-[172px] relative shadow-lg m-[-1rem] z-[999]">
      <textarea
        placeholder="Texto de la nota..."
        className="resize-none p-2 bg-[#FFF2BC] w-[148px] m-auto h-32 text-[12px] border-none focus:outline-none"
      />
      <div>
        <button>
          <Icons.EditOutlined className="absolute bottom-3 right-4 text-[#001452]" />
        </button>
        <button onClick={onDelete}>
          <DeleteForeverOutlinedIcon className="absolute bottom-3 right-20 text-[#001452]" />
        </button>
      </div>
    </div>
  );
};

export default Nota;