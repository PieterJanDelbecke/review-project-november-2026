import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/homePage";
import Favourites from "./pages/favouritesPage";
import About from "./pages/aboutPage";
import NavBar from "./components/navBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
