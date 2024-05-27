import React from 'react';
import * as Icons from '@mui/icons-material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import mensaje from "../../Json/mensaje.json";
import Message from '../nodes/mensaje';
import Image from '../nodes/imagen';
import Api from "../nodes/api"
import Entrada from "../nodes/entrada"
import Filtro from "../nodes/filtro"
import Pausa from '../nodes/pausa';
import Boton from '../nodes/boton';
import Archivo from '../nodes/archivo';
import Flujo from '../nodes/flujo';
import Ticket from '../nodes/ticket';
import Transferir from '../nodes/transferir';
import Opciones from '../nodes/opciones';
import Nota from '../nodes/nota';

const Nodejson = ({ type }) => {
  switch (type) {
    case 'input':
      return (
        <div className="w-[274px] h-[167px] bg-[#FBF8FD] rounded-lg">
          <div className="bg-[#85E0A3] w-auto h-12 p-2 rounded-t-lg">
            Inicio
            <Icons.OutlinedFlag className="text-24 relative left-[180px]" />
          </div>
          <div className="m-4 w-[248px] h-[52px] bg-[#EFEDF1] rounded-lg center text-xs p-2">
            {mensaje.message}
          </div>
          <div>
            <Icons.EditOutlined className="absolute bottom-3 right-4 text-[#001452]" />
            <DeleteForeverOutlinedIcon className="absolute bottom-3 right-20 text-[#001452]" />
          </div>
        </div>
      );
    case 'Mensaje':
      return <Message />;
    case 'Imagen':
      return <Image />;
    case 'Api':
      return <Api />;
    case 'Filtro':
      return <Filtro />;
    case 'Pausa':
      return <Pausa />;
    case 'Entrada':
      return <Entrada />;
      case 'Nota':
      return <Nota/>;
      case 'Opciones':
      return <Opciones />;
    case 'Boton':
      return <Boton />;
    case 'Archivo':
      return <Archivo />;
    case 'Flujo':
      return <Flujo />;
    case 'Ticket':
      return <Ticket />;
    case 'Transferir':
      return <Transferir />;
    default:
      return null;
  }
};

export default Nodejson;