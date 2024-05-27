import React from 'react';
import HistoryIcon from '@mui/icons-material/History';
import RedoIcon from '@mui/icons-material/Redo';
import UndoIcon from '@mui/icons-material/Undo';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = ({ saveFlow, loadFlow }) => {
  return (
    <div className="h-16 bg-[#FFFFFF] flex justify-end rounded-t-lg p-[10px] relative z-20 ">
      <button className="px-4 py-2 bg-white rounded-l-full border border-gray-500"><UndoIcon /></button>
      <button className="px-4 py-2 bg-white rounded-r-full border border-gray-500"><RedoIcon /></button>
      <button className="px-4 py-4 bg-white rounded-full flex items-center border border-gray-500 mr-12 ml-8">
        <HistoryIcon />
      </button>
      <button className="px-8 py-2 rounded-xl bg-white text-[#4058B1] border border-gray-500 mr-6">Probar</button>
      <button className="px-8 py-2 rounded-xl bg-[#4058B1] text-white mr-12" onClick={saveFlow}>Guardar</button>
      <input type="file" id="file" className="hidden" onChange={loadFlow} />
      <label htmlFor="file" className="px-8 py-2 rounded-xl bg-[#4058B1] text-white mr-12 cursor-pointer">Cargar</label>
      <button className="px-4 py-2 rounded-lg  mr-4"> <CloseIcon /></button>
    </div>
  );
};

export default Navbar;