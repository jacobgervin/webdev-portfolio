
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Work from "./pages/work";
import About from "./pages/about";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

      <Navbar/>
      <Home />
      <Work />
      <About />

    </>
  );
}

export default App;
