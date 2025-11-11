import { format } from "path";
import type { Route } from "../+types/home";
import {useState, useEffect} from 'react';
import ComponentD from "./componentD";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function ComponentC() {

  return (
    <>
    <div className="box">
        <h1>Component C</h1>
        <ComponentD />
    </div>
    </>
  );
}
