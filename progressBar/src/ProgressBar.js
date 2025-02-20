const MIN = 0;
const MAX = 100;

export default function ProgressBar({ value }) {
    const clampedValue = Math.min((Math.max(value, MIN)),MAX);
   return (
    <div className="progress" >
        <div
        className="progress-bar" style={{width : `${clampedValue}%`}}
        role="progressbar"
        aria-valuemin={MIN}
        aria-valuemax={MAX}>
           {clampedValue}%
        </div>
    </div>
   )
}