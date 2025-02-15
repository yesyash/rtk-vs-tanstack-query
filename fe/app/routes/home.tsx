import { Homepage } from "~/modules/home";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rtk Vs Tanstack Query + Zustand" },
    { name: "description", content: "Welcome to the test!" },
  ];
}

export default Homepage
