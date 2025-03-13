import { useState}  from "react";
function ProgressBar({ key }) {
  return (
    <div className="bar">
       <div className="bar-contents">
        
       </div>
    </div>
  )
  
}
export default function App() {
  const [bars, setBars] = useState(0);
    return (
      <div className="wrapper">
      <div>
        <button
          onClick={() => {
            setBars(bars + 1);
          }}>
          Add
        </button>
      </div>
      <div className="bars">
        {Array(bars)
          .fill(null)
          .map((_, index) => (
            <ProgressBar key={index} />
          ))}
      </div>
    </div>
    );
  }
  