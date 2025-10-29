import { useLoaderData } from "react-router";
import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import {useState} from 'react'

// Meta
export const meta: MetaFunction = () => {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
};

// Loader
// export async function loader({ params }: LoaderFunctionArgs) {
//   const blogId = params.blogId ?? "1";
//   return { blogId };
// }

// Optional action
export async function action() {
  return null;
}

// Component
export default function ColorPicker() {

  return (
    <main className="flex flex-col items-center justify-center pt-16 pb-4">
      <h1 className="text-3xl font-bold mb-4">color picker</h1>
  
    </main>
  );
}
