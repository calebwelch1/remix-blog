import { l } from "node_modules/@react-router/dev/dist/routes-CZR-bKRt";
import type { Route } from "./+types/timer";
import {useState, useRef, useEffect} from 'react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Timer" },
    { name: "description", content: "Welcome to Timer" },
  ];
}

export default function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(()=> {

    if(isRunning) {
      intervalRef.current = setInterval(()=>{
        setElapsedTime(Date.now() - startTimeRef.current)
      }, 10)
    }

    return () => {
      clearInterval(intervalRef.current);
    }
  }, [isRunning])

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }

  function stop() {
    setIsRunning(false);
  }

  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }

  function formatTime(){

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTime / (1000) % 60);
    return `${hours}:${minutes}:${seconds}`;
  }
   return (
    <main className="flex items-center justify-center pt-16 pb-4">
    Timer
    <div className="display">{formatTime()}</div>
    <div className="controls">
      <button onClick={start} className="start-button">start</button>
      <button onClick={stop} className="stop-button">stop</button>
      <button onClick={reset} className="reset-button">reset</button>
    </div>
    </main>
  );
}
