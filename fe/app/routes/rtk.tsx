import { RtkQuery } from "~/modules/rtk";
import type { Route } from "./+types/rtk";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rtk Query" },
    { name: "description", content: "Testing rtk query" },
  ];
}

export default RtkQuery
