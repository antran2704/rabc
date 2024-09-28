import {
  BrowserRouter,
  Route,
  Routes,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import PublicLayout from "./layout/PublicLayout";
import LoginPage from "./pages/Login";

import "./App.css";
import PrivateLayout from "./layout/PrivateLayout";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import { AbilityContext } from "./context/can";
import ability from "./context/ability";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<PublicLayout />}>
        <Route element={<LoginPage />} path="/login" />
      </Route>
      <Route element={<PrivateLayout />}>
        <Route element={<HomePage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <AbilityContext.Provider value={ability}>
      <RouterProvider router={router} />
      {/* <BrowserRouter> */}

      {/* </BrowserRouter> */}
    </AbilityContext.Provider>
  );
}

export default App;
