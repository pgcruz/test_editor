import React from "react";
import * as Icons from '@mui/icons-material';

export default () => {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  const iconStyle = {
    color: "#001452",
    backgroundColor: "#DDE1FF",
    fontSize: "40px",
    padding: "6px",
    margin: "4px",
    borderRadius: "5px",
  };
  const iconStylenote = {
    color: "#001452",
    backgroundColor: "#FFF2BC",
    fontSize: "40px",
    padding: "6px",
    margin: "4px",
    borderRadius: "5px",
  };
  const textStyle = {
    color: "#001452",
    fontSize: "22px",
    margin: "12px",
    padding: "12px",
    width: "177px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "flex",
    flexDirection: "column",
  };

  const containerStyle = {
    display: "flex",
    alignItems: "center",
   
  };

  return (
    <aside className="w-[500px] border-gray-300 p-4 m-4 text-sm bg-white rounded-lg overflow-hidden">
      <div className="mb-[10px] text-[#45464F] text-[20px]">
        Biblioteca de elementos
      </div>
      <div style={{ display: "flex", overflow: "hidden" }}>
        <div style={{ ...containerStyle, flexDirection: "column" }}>
          <div
            className="dndnode"
            onDragStart={(event) => onDragStart(event, "Mensaje")}
            draggable
          >
            <div style={containerStyle}>
              <Icons.MessageOutlined style={iconStyle} />
              <span style={textStyle}>Mensaje</span>
            </div>
          </div>
         {/*} <div
            className="dndnode"
            onDragStart={(event) => onDragStart(event, "Filtro")}
            draggable
          >
            <div style={containerStyle}>
              <Icons.FilterAltOutlined style={iconStyle} />
              <span style={textStyle}>Filtro</span>
            </div>
  </div>*/}
        </div>
        <div style={{ ...containerStyle, flexDirection: "column" }}>
          {/* <div
            className="dndnode"
            onDragStart={(event) => onDragStart(event, "Flujo")}
            draggable
          >
            <div style={containerStyle}>
              <Icons.AccountTreeOutlined style={iconStyle} />
              <span style={textStyle}>Flujo</span>
            </div>
            </div>*/}
          <div
            className="dndnode"
            onDragStart={(event) => onDragStart(event, "Pausa")}
            draggable
          >
            <div style={containerStyle}>
              <Icons.BrowseGalleryOutlined style={iconStyle} />
              <span style={textStyle}>Pausa</span>
            </div>
          </div>
         {/* <div
            className="dndnode"
            onDragStart={(event) => onDragStart(event, "Entrada")}
            draggable
          >
            <div style={containerStyle}>
              <Icons.AssignmentIndOutlined style={iconStyle} />
              <span style={textStyle}>
                <span>Entrada de</span>
                <span>usuario</span>
              </span>
            </div>
          </div>
          */}
        </div>
      </div>
      
      <div className="w-[100%] border-[1px] border-[#C6C5D0]"></div>

      <div style={{ display: "flex", overflow: "hidden" }}>
        <div style={{ ...containerStyle, flexDirection: "column" }}>
          <div
            className="dndnode"
            onDragStart={(event) => onDragStart(event, "Imagen")}
            draggable
          >
            <div style={containerStyle}>
              <Icons.InsertPhotoOutlined style={iconStyle} />
              <span style={textStyle}>Imagen</span>
            </div>
          </div>
          <div
            className="dndnode"
            onDragStart={(event) => onDragStart(event, "Archivo")}
            draggable
          >
            <div style={containerStyle}>
              <Icons.AttachFileOutlined style={iconStyle} />
              <span style={textStyle}>Archivo</span>
            </div>
          </div>
          {/*<div
            className="dndnode"
            onDragStart={(event) => onDragStart(event, "Transferir")}
            draggable
          >
            <div style={containerStyle}>
              <Icons.ForumOutlined style={iconStyle} />
              <span style={textStyle}>
                <span>Transferir</span>
                <span className="pl-6">chat</span>
              </span>
            </div>
        </div>
          <div
            className="dndnode"
            onDragStart={(event) => onDragStart(event, "Api")}
            draggable
          >
            <div className="mb-4" style={containerStyle}>
              <Icons.ApiOutlined style={iconStyle} />
              <span style={textStyle}>Solicitud API</span>
            </div>
          </div>*/}
        </div>
        <div style={{ ...containerStyle, flexDirection: "column" }}>
          <div
            className="dndnode"
            onDragStart={(event) => onDragStart(event, "Boton")}
            draggable
          >
            <div style={containerStyle}>
              <Icons.SmartButtonOutlined style={iconStyle} />
              <span style={textStyle}>Botón</span>
            </div>
          </div>
         {/*} <div
            className="dndnode"
            onDragStart={(event) => onDragStart(event, "Ticket")}
            draggable
          >
            <div style={containerStyle}>
              <Icons.ConfirmationNumberOutlined style={iconStyle} />
              <span style={textStyle}>Crear Ticket</span>
            </div>
        </div> */}
          <div
            className="dndnode mt-2"
            onDragStart={(event) => onDragStart(event, "Opciones")}
            draggable
          >
            <div style={containerStyle}>
              <Icons.ListOutlined style={iconStyle} />
              <span style={textStyle}>Opciones</span>
            </div>
          </div>
          <div
            className="dndnode mt-2"
            onDragStart={(event) => onDragStart(event, "Nota")}
            draggable
          >
            <div style={containerStyle}>
              <Icons.StickyNote2Outlined  style={iconStylenote} />
              <span style={textStyle}>
                Notas</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};
