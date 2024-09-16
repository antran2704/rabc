import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicLayout from "./layout/PublicLayout";
import LoginPage from "./pages/Login";

import "./App.css";
import PrivateLayout from "./layout/PrivateLayout";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import { AbilityContext } from "./context/can";
import ability from "./context/ability";

function App() {
  console.log(ability.can("read", "Post")); // true
  console.log(ability.can("delete", "Post")); // false
  return (
    <AbilityContext.Provider value={ability}>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route element={<LoginPage />} path="/login" />
          </Route>
          <Route element={<PrivateLayout />}>
            <Route element={<HomePage />} path="/" />
            <Route element={<AboutPage />} path="/about" />
          </Route>
        </Routes>
      </BrowserRouter>
    </AbilityContext.Provider>
  );
}

export default App;
