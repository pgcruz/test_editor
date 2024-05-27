import React, { useState, useRef, useCallback, useEffect } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  addEdge,
  Controls,
  MiniMap,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import NodeCreator from './components/config/NodeCreator';
import { initialNodes } from './components/config/nodeConfig';
import Nodejson from './components/config/nodejson';
import 'tailwindcss/tailwind.css';
import './index.css';
import Nota from './components/nodes/nota';

const createNodes = (existingNodes, newNodeData) => {
  const newNodes = newNodeData.map(node => ({
    id: node.id,
    type: node.type,
    position: node.position,
    data: {
      label: <Nodejson type={node.type} />,
    },
  }));

  return [...existingNodes, ...newNodes];
};

const DnDFlow = () => {
  const reactFlowWrapper = useRef(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  const handleNodeDelete = useCallback((nodeIdToDelete) => {
    setNodes((prevNodes) => prevNodes.filter((node) => node.id !== nodeIdToDelete));
  }, [setNodes]);

  const onConnect = useCallback(
    (params) => {
      const edgeToAdd = {
        ...params,
        type: 'step'
      };
      setEdges((eds) => addEdge(edgeToAdd, eds))
    },
    [setEdges]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const { onDrop } = NodeCreator({ reactFlowInstance, setNodes, handleNodeDelete });

  

  const saveFlow = () => {
    const data = JSON.stringify({ nodes, edges });
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'flow.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const loadFlow = (event) => {
    const file = event.target.files[0];
    if (!file) return;
  
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = JSON.parse(e.target.result);
      setNodes(existingNodes => createNodes(existingNodes, data.nodes)); 
      setEdges(data.edges);
    };
    reader.readAsText(file);
  };
  const proOptions = { hideAttribution: true };
  return (
    <div className='h-full py-8 pl-12 pr-4 bg-[#F5F3F7]'>
      <Navbar saveFlow={saveFlow} loadFlow={loadFlow} />
      <div className="dndflow flex flex-col flex-grow h-[758px] bg-[#EAE7EC] rounded-b-xl">
        <ReactFlowProvider>
          <div className="reactflow-wrapper" ref={reactFlowWrapper}>
            <ReactFlow
              nodes={nodes}
              elements={nodes} 
              edges={edges}
              onNodesChange={onNodesChange}
              onElementsRemove={handleNodeDelete}
              onConnect={onConnect}
              onInit={setReactFlowInstance}
              onDrop={onDrop}
              onDragOver={onDragOver}
              fitView
              proOptions={proOptions}
            >
            
              <MiniMap zoomable pannable />
              <Controls />
            </ReactFlow>
          </div>
          <Sidebar />
        </ReactFlowProvider>
      </div>
      {selectedNodeId && (
        <div className="fixed" style={{
          top: nodes.find(node => node.id === selectedNodeId)?.position.y,
          left: nodes.find(node => node.id === selectedNodeId)?.position.x,
        }}>  
        </div>
      )}
    </div>
  );
};

export default DnDFlow;