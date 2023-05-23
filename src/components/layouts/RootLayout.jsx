import { Provider } from "react-redux";
import { store } from "../../state/app/store";
import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <Provider store={store}>
      <header className="site-header">
        <h1 className="site-title">Wisdom Quotes</h1>
        <nav className="site-nav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="favorites">Favourites</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </Provider>
  );
};

export default RootLayout;
