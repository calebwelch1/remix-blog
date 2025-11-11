import { format } from "path";
import type { Route } from "../+types/home";
import {useState, createContext} from 'react';
import ComponentB
 from "./componentB";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export const UserContext = createContext<String>("no user");

export default function ComponentA() {

    const [user, setUser] = useState("Bob");
    // avoid prop drilling with useContext

  return (
    <>
    <div className="box">
        <h1>Component A</h1>
        <h2>{`hello ${user}`}</h2>
        {/* using props... 
        <ComponentB user={user}/>
        function ComponentB(props){...}
        <ComponentC user={props.user}/>
        function ComponentC(props){...}
        and so on
        */}
        <UserContext.Provider value={user}>
            <ComponentB />
        </UserContext.Provider>
    </div>
    </>
  );
}
