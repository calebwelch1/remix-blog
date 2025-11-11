import { format } from "path";
import type { Route } from "../+types/home";
import {useState, useEffect} from 'react';
import ComponentC from "./componentC";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function ComponentB() {

  return (
    <>

   <div className="box">
        <h1>Component B</h1>
        <ComponentC />
    </div>
    </>
  );
}
