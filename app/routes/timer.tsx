import type { Route } from "./+types/timer";
import { Timerapp } from "../timer/timerapp";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Timer" },
    { name: "description", content: "Welcome to Timer" },
  ];
}

export default function Timer() {
  return <Timerapp />;
}
