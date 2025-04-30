import { Children, useState} from 'react';
import { explorer } from './data/folderData';
import './App.css';
import Folder from './components/Folder';

function App() {
  const [explorerData, setExplorerData] = useState(explorer);

  const addNodeToList = (parentId) => {
    const input = prompt("Enter name of folder");
    const updateTree = (list) => {
      return list.map(node => {
        if(node.id === parentId){
          return {...node, children: [...node, {id : "123", name:input, children : [] }]}
        }
        if(node.children){
          return {...node, children: updateTree(node.children)}
        }
      })
      
    }
    setExplorerData((prev) => updateTree(prev));
  }

  const deleteNodeFromList = (parentId) => {

    const updateTree = (list) => {
      return list.filter(node => node.id !== parentId).map(node => {
        if(node.children){
                  return {...node, children : updateTree(node.children)}
                 }
                 return node;
      })
    }
    setExplorerData((prev) => updateTree(prev));
  }
  return (
    <div className="App">
      <Folder explorerData={explorerData} addNodeToList={addNodeToList} deleteNodeFromList={deleteNodeFromList}/>
    </div>
  );
}

export default App;
