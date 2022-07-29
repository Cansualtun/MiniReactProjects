import "./App.css";
import { Routes, Route } from "react-router-dom";
//İmport Pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import SingleProductCocktails from "./Pages/SingleProductCocktails";
import Error from "./Pages/Error";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route
          path="/SingleProductCocktails"
          element={<SingleProductCocktails />}
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
