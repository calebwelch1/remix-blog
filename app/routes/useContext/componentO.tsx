import { format } from "path";
import type { Route } from "../+types/home";
import {useState, useEffect} from 'react';
import ComponentA from "./componentA";
import componentB from "./componentB";
import componentC from "./componentC";
import componentD from "./componentD";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function ComponentO() {

  return (
    <>
    <div>
      <ComponentA />
    </div>
    </>
  );
}
