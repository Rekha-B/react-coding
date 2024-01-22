import { useState } from "react";

const Folder = ({ handleInsertNode, explorerData }) => {
   const [expand, setExpand] = useState(false);
   const [showInput, setShowInput] = useState({
    visible: false,
    isFolder : null
   });

   const handleNewFolder = (e, isFolder) => {
       e.stopPropagation();
       setExpand(true);
       setShowInput({...showInput, visible: true, isFolder});
   }

   const onAddFolder = (e) => {
     if(e.keyCode === 13 && e.target.value){
        handleInsertNode(explorerData.id, e.target.value, showInput.isFolder);
        setShowInput({...showInput, visible: false});
     }
   }
    if(explorerData.isFolder){
        return (
            <div style={{ marginTop: '20px'}}>
                <div className="folder" onClick={() =>  setExpand(!expand)}>
                 📁<span>{explorerData.name}</span>
                
                    <div style={{position : 'absolute', left:'200px'}}>
                        <button onClick={(e) => handleNewFolder(e,true)}>Folder + </button>
                        <button onClick={(e) => handleNewFolder(e, false)}> File + </button>
                    
                    </div>

                </div>
                <div style={{ marginLeft: '20px', display : expand ? 'block' : 'none'}}>
                   {showInput.visible && 
                    <div className="input-container">
                            {showInput.isFolder ? '📁' : '📄'}
                            <input 
                               type="text"
                               className="input-container__input" 
                               autoFocus 
                               onBlur={() =>  setShowInput({ ...showInput, visible: false})}
                               onKeyDown={(e) => onAddFolder(e)}/>
                    </div>}
                   {explorerData.items.map(item => {
                      return <Folder handleInsertNode={handleInsertNode} explorerData={item} key={item.id}/>
                   })}
                </div>
            </div>)
    }
    else {
        return <span className="file">📄{explorerData.name}</span>
    }
}

export default Folder;