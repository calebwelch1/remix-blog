import { format } from "path";
import type { Route } from "../+types/home";
import {useState, useContext} from 'react';
import {UserContext} from './componentA';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function ComponentD() {

  const user = useContext(UserContext);

  return (
    <>
   <div className="box">
        <h1>Component D</h1>
        <h2>{user}</h2>
    </div>

    </>
  );
}
