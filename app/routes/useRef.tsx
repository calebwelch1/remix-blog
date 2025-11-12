import { format } from "path";
import type { Route } from "./+types/home";
import {useState, useEffect} from 'react';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

/*
useState() = rerenders the component when the state value changes.

useRef() = "use reference" does not cause rerenders when value changes
when you want a component to remember some information
but you don't want the information to trigger new renders

1. accessing/interactinv with dom elements
2. Handling focus, animations and transitions
3. managing timers and intervals
*/
export default function useRef() {

  return (
    <>
    <div>
      
    </div>
    </>
  );
}
