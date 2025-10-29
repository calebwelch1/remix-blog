import type { Route } from "./+types/counter";
import {useState} from 'react';


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Timer" },
    { name: "description", content: "Welcome to Timer" },
  ];
}

export default function Counter() {

  const [name, setName] = useState();
  const [count, setCount] = useState(0);
  const [car, setCar] = useState({year: 2000, make: "toyota", model: "corolla"});

  // updating objects
  function handleYearChange(event: any) {
    // need to spread entire object, if you just update one value it will overwrite entire object
    // setCar({...car, year: event.target.value});
    setCar(prevCar => ({...prevCar, year: event.target.value}));

  }
  function handleMakeChange(event: any) {

  }
  function handleModelChange(event: any) {

  }

  const increment = () => {
    setCount(count + 1);
  }

  const incrementWithUpdater= () => {
    // react won't update until after function, so to update several times...
    // can use  to increment twice
    // updater
    setCount(count => count + 1)
    setCount(count => count + 1)
  }

  const decrement = () => {
    setCount(count - 1);
  }

  function handleNameChange(event: any) {
    setName(event.target.value);
  }

  const [payment, setPayment] = useState("");

  function handlePaymentChange(event: any) {
    setPayment(event.target.value);
  }
  return (
    <main className="flex flex-col items-center justify-center pt-16 pb-4">
      <h1 className="text-3xl font-bold mb-4">counter</h1>
      <p>{count}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      {/* onChange primarily used with forms...calls function when input changes*/}
      <p>OnChange... {name}</p>
      <p></p>
      <input value={name} onChange={handleNameChange}/>

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an Option</option>
        <option value="Cash">Cash</option>
        <option value="Card">Card</option>
      </select>

      <label>
        <input type="radio" value="1"/>
        1
      </label>
      <label>
        <input type="radio" value="2"/>
        2
      </label>

      {/* updater function passed as an argument to setState() usually */}
      <p> favorite car: {car.year}{car.make}{car.model}</p>
      <input type="number" value={car.year} onChange={handleYearChange}></input>
      <input type="text" value={car.make} onChange={handleMakeChange}></input>
      <input type="text" value={car.model} onChange={handleModelChange}></input>
    </main>
  );
}
