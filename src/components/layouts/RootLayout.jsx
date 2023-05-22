import { Provider } from "react-redux";
import { store } from "../../state/app/store";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Root layout</h1>
        <Outlet />
      </div>
    </Provider>
  );
};

export default RootLayout;
