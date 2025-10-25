// src/routes/blog.tsx or wherever this file is

import { useLoaderData } from "react-router";
import type { LoaderFunctionArgs, MetaFunction } from "react-router";
import { Form } from "react-router"
import Card from "../components/card";

// Meta
export const meta: MetaFunction = () => {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
};

// Loader
export async function loader({ params }: LoaderFunctionArgs) {
  const blogId = params.blogId ?? "1";
  return { blogId };
}

// Optional action
export async function action() {
  return null;
}

// how we make requests
export async function clientAction({params}: LoaderFunctionArgs){
  try {
  await fetch(`https://jsonplaceholder.typeicode.com/posts/${params.blogId}`, {
    method: "DELETE",
  });
  return {isDeleted: true}
} catch (err) {
  return {isDeleted: false}
}
}

// Component
export default function Home() {
  const { blogId } = useLoaderData() as { blogId: string };

  // const fetcher = useFetcher();
  // access isDeleted property without using action
  // const isDeleted = fetcher.data?.isDeleted;
  return (
    <main className="flex flex-col items-center justify-center pt-16 pb-4">
      <h1 className="text-3xl font-bold mb-4">Blog</h1>
      <p className="mb-4">Blog Id: {blogId}</p>
      <Form method="delete">
        <button type="submit">Delete</button>
      </Form>
      <Card />
    </main>
  );
}
