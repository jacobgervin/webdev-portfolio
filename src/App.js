
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Workpage from "./pages/workpages/workpage";
import Work from "./pages/work";
import {Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {

  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
          <Navbar isChecked={isChecked} setIsChecked={setIsChecked} />
          <Routes>
           <Route path="/" element={<Home isChecked={isChecked} />} />
           <Route path="/work" element={<Work isChecked={isChecked}  />} />
           <Route path="/workpage/:id" element={<Workpage isChecked={isChecked}  />} />
          </Routes>
    </>
  );
}

export default App;
