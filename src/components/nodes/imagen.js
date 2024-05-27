import React, { useState, useEffect, useRef } from 'react';
import * as Icons from '@mui/icons-material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const Image = ({ onDelete }) => {
  const iconStyle = {
    color: "#001452",
    backgroundColor: "#DDE1FF",
    fontSize: "40px",
    padding: "6px",
    margin: "4px",
    borderRadius: "5px",
  };
  const [isMinimized, setIsMinimized] = useState(true);
  const [imagePreviews, setImagePreviews] = useState([]);
  const imageRef = useRef(null);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const newPreviews = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onloadend = () => {
        newPreviews.push(reader.result);
        if (newPreviews.length === files.length) {
          setImagePreviews(newPreviews);
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  return (
    <div ref={imageRef} className="bg-[#FFFFFF] text-[#001452] p-2 rounded-lg w-[274px] h-auto shadow-lg">
      <div onClick={() => setIsMinimized(!isMinimized)} className="cursor-pointer">
        <Icons.InsertPhotoOutlined style={iconStyle} /> Imagen
      </div>
      {!isMinimized && (
        <>
          <div className="w-full border-b border-[#C6C5D0] m-auto absolute left-0"></div>
          <div className='text-m'>
            <label htmlFor="img">Selector de imágenes:</label>
            <input className='text-[12px] mb-2 w-full' type="file" id="img" name="image" accept="image/png, image/jpeg" multiple onChange={handleFileChange} />
            <div className="grid grid-cols-2 gap-2 mb-12 ">
              {imagePreviews.map((preview, index) => (
                <img key={index} src={preview} alt={`Vista previa de la imagen ${index + 1}`} className='m-auto h-32 rounded-lg' />
              ))}
            </div>
          </div>
          <div>
            <button><Icons.EditOutlined className="absolute bottom-3 right-4 text-[#001452] "/></button>
            <button onClick={onDelete}><DeleteForeverOutlinedIcon className="absolute bottom-3 right-20 text-[#001452] "/></button>

          </div>
        </>
      )}
    </div>
  );
};

export default Image;