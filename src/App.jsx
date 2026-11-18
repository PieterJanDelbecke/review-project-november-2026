import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import AppContext from "./context/AppContext";

import Home from "./pages/homePage";
import Favourites from "./pages/favouritesPage";
import About from "./pages/aboutPage";
import NavBar from "./components/navBar";
import SelectedMoviePage from "./pages/selectedMoviePage";

function App() {
  const [appContext, setAppContext] = useState([]);

  return (
    <>
      <AppContext.Provider value={{ appContext, setAppContext }}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/about" element={<About />} />
            <Route path="selected" element={<SelectedMoviePage />} />
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </>
  );
}

export default App;
