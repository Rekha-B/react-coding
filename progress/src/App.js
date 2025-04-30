import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

const ProgressBar = ({progress}) => {
  const [animateProgress, setAnimateProgress] = useState('');
  useEffect(() => {
     setTimeout(() => setAnimateProgress(progress), 500);
  }, [])
  return (
    <div className="outer">
      <div className="inner" 
          style={{ transform: `translateX(${animateProgress - 100}%)`}}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100">
           {progress}%
      </div>
    </div>
  )
}
function App() {
  const bars = [5, 10, 25, 45, 75, 100];
  return (
    <div className='App'>
      <h1>Progress Bar</h1>
      {bars.map(bar => (
 <ProgressBar progress={bar} />
      ))}
    </div>

  )
}

export default App;