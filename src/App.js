
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Workpage from "./pages/workpages/workpage";
import Work from "./pages/work";
import {Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
          <Navbar/>
          <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/work" element={<Work />} />
           <Route path="/workpage/:id" element={<Workpage />} />
          </Routes>
    </>
  );
}

export default App;
