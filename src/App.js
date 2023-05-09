
import Navbar from "./components/navbar";
import Home from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>

      <Navbar/>
      <Home />

    </>
  );
}

export default App;
