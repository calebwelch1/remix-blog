import { format } from "path";
import type { Route } from "./+types/home";
import {useState, useEffect} from 'react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function clock() {

  const [time, setTime] = useState(new Date());

  useEffect(()=> {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }
  },[])

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
  }

  function padZero(num: number) {
    return (num < 10 ? "0" : "") + num;
  }

  return (
    <>
    <div className="clock-container">
      <div className="clock">
        <span>{formatTime()}</span>
      </div>
    </div>
    </>
  );
}
