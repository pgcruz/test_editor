import React, { useState, useRef } from 'react';
import * as Icons from '@mui/icons-material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

const Archivo = ({ onDelete }) => {
  const iconStyle = {
    color: "#001452",
    backgroundColor: "#DDE1FF",
    fontSize: "40px",
    padding: "6px",
    margin: "4px",
    borderRadius: "5px",
  };
  const [isMinimized, setIsMinimized] = useState(true);
  const [filePreviews, setFilePreviews] = useState([]);
  const imageRef = useRef(null);

  const handleFileChange = (event) => {
    const files = event.target.files;
    const newPreviews = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onloadend = () => {
        const fileType = file.type.split('/')[0];
        const preview = {
          name: file.name,
          type: fileType,
          content: reader.result
        };
        newPreviews.push(preview);
        if (newPreviews.length === files.length) {
          setFilePreviews(newPreviews);
        }
      };
      if (file.type.startsWith('image/')) {
        reader.readAsDataURL(file);
      } else {
        reader.readAsText(file);
      }
    }
  };

  return (
    <div ref={imageRef} className="bg-[#FFFFFF] text-[#001452] p-2 rounded-lg w-[274px] h-auto shadow-lg">
      <div onClick={() => setIsMinimized(!isMinimized)} className="cursor-pointer">
        <Icons.AttachFileOutlined style={iconStyle} /> Archivo
      </div>
      {!isMinimized && (
        <>
          <div className="w-full border-b border-[#C6C5D0] m-auto absolute left-0"></div>
          <div className='text-m'>
            <label htmlFor="file">Selector de Archivos:</label>
            <input
              className='text-[12px] mb-2 w-full'
              type="file"
              id="file"
              name="files"
              accept=".png, .jpeg, .jpg, .pdf, .docx, .xlsx, .xml"
              multiple
              onChange={handleFileChange}
            />
            <div className="grid grid-cols-2 gap-2 mb-12 ">
              {filePreviews.map((file, index) => (
                <div key={index} className='m-auto'>
                  {file.type === 'image' ? (
                    <img src={file.content} alt={`Vista previa de ${file.name}`} className='h-32 rounded-lg' />
                  ) : (
                    <div className='p-2 border rounded-lg h-32 flex items-center justify-center'>
                      <Icons.DescriptionOutlined style={{ fontSize: '40px', color: '#767680' }} />
                      <p className='text-[10px] text-center'>{file.name}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div>
            <button>
              <Icons.EditOutlined className="absolute bottom-3 right-4 text-[#001452]" />
            </button>
            <button onClick={onDelete}>
              <DeleteForeverOutlinedIcon className="absolute bottom-3 right-20 text-[#001452]" />
            </button>
          </div>
        </>
      )}
    </div>
  );
};
export default Archivo;