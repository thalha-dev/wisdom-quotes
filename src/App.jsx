import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import RootLayout from "./components/layouts/RootLayout";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import QuotesError from "./components/QuotesError";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} errorElement={<QuotesError />} />
      <Route path="favorites" element={<Favorites />} />
    </Route>
  )
);

const App = () => {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
