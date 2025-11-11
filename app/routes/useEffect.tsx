import type { Route } from "./+types/home";
import {useState, useEffect} from 'react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function useeffect() {

    // useEffect() = react hook that tells react to execute code when...
    //  this componenet rerenders
    //  this component mounts
    //  the state of the value changes

    // useEffect(() => {}) // runs after every re-render
    // useEffect(() => {}, []) // runs only on mount
    // useEffect(() => {}, [value]) runs on mount + when value changes

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

// useEffect(function, [dependencies]);
useEffect(()=> {
    document.title = `Count: ${count}`;

    return () => {
        // can place cleanup code here in case need to do something on dismount
    }
}, [count]);


    function addCount() {
        setCount(count => count + 1);
    }
    
    function subtraactCount() {
        setCount(count => count - 1);
    }

    function changeColor() {
        setColor(prevColor => prevColor === "green" ? "red" : "green");
    }


  return (
    <>
    <p style={{color: color}}>Count: {count}</p>
    <button onClick={addCount}>Add</button>
    <button onClick={subtraactCount}>Subtract</button><br/>
    <button onClick={changeColor}> Change Color </button>

    </>
  );
}
