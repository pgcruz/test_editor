import React, { useCallback } from "react";
import Message from "../nodes/mensaje";
import Image from "../nodes/imagen";
import Api from "../nodes/api";
import Entrada from "../nodes/entrada";
import Pausa from "../nodes/pausa";
import Boton from "../nodes/boton";
import Filtro from "../nodes/filtro";
import Ticket from "../nodes/ticket";
import Transferir from "../nodes/transferir";
import Archivo from "../nodes/archivo";
import Flujo from "../nodes/flujo";
import Opciones from "../nodes/opciones";
import Nota from "../nodes/nota";


let id = 0;
const getId = () => `dndnode_${id++}`;

const components = {
  Mensaje: Message,
  Imagen: Image,
  Api: Api,
  Entrada: Entrada,
  Pausa: Pausa,
  Boton: Boton,
  Filtro: Filtro,
  Ticket: Ticket,
  Transferir: Transferir,
  Archivo: Archivo,
  Flujo: Flujo,
  Nota: Nota,
  Opciones: Opciones
};

const NodeCreator = ({ reactFlowInstance, setNodes, handleNodeDelete }) => {
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const type = event.dataTransfer.getData("application/reactflow");
      const position = reactFlowInstance.project({
        x: event.clientX - 80,
        y: event.clientY - 40,
      });

      const NodeComponent = components[type];
      if (NodeComponent) {
        const newNode = {
          id: getId(),
          type,
          position,
          data: { label: <NodeComponent onDelete={() => handleNodeDelete(newNode.id)} /> },
        };
        setNodes((nds) => nds.concat(newNode));
      }
    },
    [reactFlowInstance, setNodes, handleNodeDelete]
  );

  return { onDrop };
};

export default NodeCreator;