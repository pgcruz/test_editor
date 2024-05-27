import * as Icons from "@mui/icons-material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import mensaje from "../../Json/mensaje.json";

export const initialNodes = [
  {
    id: "1",
    type: "input",
    data: {
      label: (
        <div>
          <div className="w-[274px] h-[167px] bg-[#FBF8FD] rounded-lg shadow-lg">
            <div className=" bg-[#85E0A3] w-auto h-12 p-2 rounded-t-lg">
              Inicio
              <Icons.OutlinedFlag className="text-24 relative left-[180px]" />
            </div>
            <div className="m-4 w-[248px] h-[52px] bg-[#EFEDF1] rounded-lg center text-xs p-2">
              {mensaje.message}
            </div>
            <div>
              <Icons.EditOutlined className="absolute bottom-3 right-4 text-[#001452] " />
              <DeleteForeverOutlinedIcon className="absolute bottom-3 right-20 text-[#001452] " />
            </div>
          </div>
        </div>
      ),
    },
    position: { x: 250, y: 5 },
  },
];

export const getId = () => `dndnode_${id++}`;

export const transformNodeData = (nodes) => {
  return nodes.map(node => ({
    ...node,
    data: {
      ...node.data,
      labelType: node.type,
      label: node.data.label,
    }
  }));
};
