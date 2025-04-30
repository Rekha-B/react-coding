import { useState} from "react";
const Folder = ({ explorerData, addNodeToList, deleteNodeFromList }) => {
    const [explandFolders, setExpandFolders] = useState({});

    const toggleExpand = (node) => {
        console.log('cliccked', node);
        setExpandFolders((prev) => ({
            ...prev,
            [node.id]: !prev[node.id]
    }))
    }
    console.log("expand folders", explandFolders);
   return (
    <div className="container">
        {explorerData.map(node => (
            <div id={node.id}>
                {node.isFolder && <span onClick={() => toggleExpand(node)}>
                {explandFolders[node.id] ? "[-]" : "[+]"}
                    </span>}
                <span>{node.name}</span>
                <img onClick={() => addNodeToList(node.id)} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfMt43f5llkF5OgPwtIozkZk38jQu2r-3XCg&s" />
                <img onClick={() => deleteNodeFromList(node.id)} src="https://img.freepik.com/premium-vector/delete-icon-vector_942802-580.jpg" alt="delete-icon" />
                {explandFolders[node.id] && node.children && <Folder explorerData={node.children} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList} />}
             </div>
        ))}
    </div>
   )
}

export default Folder;