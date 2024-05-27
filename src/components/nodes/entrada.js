import React, { useState, useRef } from "react";
import * as Icons from "@mui/icons-material";

const Entrada = () => {
  const iconStyle = {
    color: "#001452",
    backgroundColor: "#DDE1FF",
    fontSize: "40px",
    padding: "6px",
    margin: "4px",
    borderRadius: "5px",
  };

  const [isMinimized, setIsMinimized] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);
  const apiRef = useRef(null);

  const toggleMinimized = () => {
    setIsMinimized(!isMinimized);
  };

  const handleAddClickClose = () => {
    setIsMinimized(true);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div
      ref={apiRef}
      className="bg-[#FFFFFF] text-[#001452] rounded-lg w-[274px] h-auto shadow-lg"
    >
      <div onClick={toggleMinimized} className="cursor-pointer p-2">
        <Icons.AssignmentIndOutlined style={iconStyle} /> Entrada de Usuario
      </div>
      {!isMinimized && (
        <>
          <div className="text-m p-8 bg-[#F5F3F7] w-[678px] h-[auto] rounded-lg relative flex flex-col justify-between">
            <div>
              <div className="mb-8">
                <div className="text-[#1B1B1F] font-medium text-16px mb-4">
                  Palabras Clave
                </div>
                <p className="text-black">
                  La entrada del usuario le permite recopilar respuestas de los
                  usuarios. En este bloque, debes definir qué tipos de mensajes
                  de usuario desencadenarán la respuesta del asistente virtual a
                  continuación.
                </p>
              </div>
              <div className="text-[#1B1B1F] font-medium text-16px mb-4">
                Palabras Clave
              </div>
              <p className="mb-6 text-black">
                El sistema busca solo palabras clave específicas en la entrada
                del usuario e ignora el resto de la consulta. Cuando las
                encuentra, activa una respuesta del asistente virtual.
              </p>
              <button className="border border-[#767680] border-dashed w-[205px] rounded-full p-2 text-[#4058B1] font-medium">
                <Icons.AddOutlined className="text-[#4058B1] " /> Agrega
                palabras clave
              </button>
              <div className="text-[#1B1B1F] font-medium text-16px my-4">
                Comentarios del usuario
              </div>
              <p className="mb-6 text-black">
                Para configurar los comentarios del usuario, complete los campos
                de texto con todas las frases posibles que sus usuarios podrían
                escribir en el chat. Utilice varios sinónimos, estructuras
                gramaticales y formas para cubrir las consultas más populares.
              </p>
              <textarea
                className="resize-none w-[610px] h-[56px] border border-[#767680] rounded-md bg-[#F5F3F7] "
                placeholder="Ingresa una frase o comentario popular"
              ></textarea>
              <div className="text-[#1B1B1F] font-medium text-16px my-4">
                Variables
              </div>

              <div className="bg-[#FFFFFF] w-[610px] h-[auto] mb-6">
                <div>
                  <select
                    className="border border-[#767680] rounded-md bg-[#FFFFFF] w-[610px] h-[56px]"
                    value={selectedOption}
                    onChange={handleOptionChange}
                  >
                    <option value="option1">Nombre</option>
                    <option value="option2">Fecha de Nacimiento</option>
                    <option value="option3">E-mail</option>
                  </select>
                </div>
              </div>

              <div className="text-[#1B1B1F] font-medium text-16px my-4">
                Selecciona la siguiente opción si la respuesta se detona con
                cualquier palabra o dato:
              </div>

              <div>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio text-[#4058B1] h-5 w-5"
                    value="option1"
                    checked={selectedOption === "option1"}
                    onChange={handleOptionChange}
                  />
                  <span className="ml-2 text-[#1B1B1F]">Cualquier palabra</span>
                </label>
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

export default Entrada;
