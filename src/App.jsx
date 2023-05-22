import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// layouts components
import RootLayout from "./components/layouts/RootLayout";

// components
import Home from "./components/Home";
import Favorites from "./components/Favorites";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="favorites" element={<Favorites />} />
    </Route>
  )
);

const App = () => {
  return (
    <div id="dark">
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
