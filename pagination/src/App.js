import './App.css';
import { useState, useEffect} from "react";

function App() {
  const [input, setInput] = useState('');

  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [cache, setCache] = useState({});
  const fetchData = async() => {
    if(cache[input]){
      console.log("Cache hit", input);
      setResults(cache[input]);
      return;
    }
    const res = await fetch(`https://dummyjson.com/recipes/search?q=${input}`);
    const data = await res.json();
    setResults(data?.recipes);
    setCache(prev => ({...prev, [input]: data?.recipes}));
  }
  useEffect(() => {
    const timerID =  setTimeout(() => fetchData(), 500);
    return () => {
      clearTimeout(timerID);
        
    }
  },[input])
  return (
    <div id="container">
        <h1>AutoComplete</h1>
        <input type="text" onChange={(e) => setInput(e.target.value)} onFocus={() => setShowResults(true)} onBlur={() => setShowResults(false)}/>
        {showResults && <div className="results-container">
        {results.map(item => (
            <span className="result" key={item.id}>{item.name}</span>
        ))}
        </div>}

    </div>
  )
}

export default App;
