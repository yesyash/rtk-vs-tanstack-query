import { Provider } from "react-redux";
import { Outlet } from "react-router";
import { store } from "~/store";

export default function RootLayout () {
  return (
    <Provider store={store}>
      <Outlet />
    </Provider>
  );
};
