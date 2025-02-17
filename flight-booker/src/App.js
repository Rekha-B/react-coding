import { useState }  from "react";
export default function App() {
    const TODAY = formatDate(new Date());
    const [flightOption, setFlightOption] = useState('one-way');
    const [departureDate, setDepartureDate] = useState('');
    const [arrivalDate, setArrivalDate] = useState('');

    function formatDate(date){
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2,'0');
      const day = date.getDate().toString().padStart(2,'0');
      return [year, month, day].join('-');
    }

    function submitForm(event) {
       event.preventDefault();
       if(flightOption === "one-way"){
        alert(`You have booked a one-way flight on ${departureDate}`);
       }
       else {
        alert(`You have booked a return flight, departing on ${departureDate} and returning on ${arrivalDate}`);
       }
    }
    return (
      <form className="flight-booker" onSubmit={submitForm}>
        <select
          value={flightOption}
          onChange={(event) => {
            setFlightOption(event.target.value);
          }}>
          <option value="one-way">One-way flight</option>
          <option value="return">Return flight</option>
        </select>
        <input type="date" aria-label="Departure date" 
        value={departureDate}
        onChange={(e) => setDepartureDate(e.target.value)} min={TODAY}/>
        {
          flightOption === "return" && 
          <input type="date" 
          aria-label="Return  date" 
          value={arrivalDate}
          onChange={(e) => setArrivalDate(e.target.value)}
          min={departureDate}/>
        }
        <button>Book</button>
      </form>
    );
}
  