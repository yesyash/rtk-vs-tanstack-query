import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layout/root-layout.tsx", [
    index("routes/home.tsx"),
    route("/rtk", "routes/rtk.tsx"),
  ]),
] satisfies RouteConfig;
