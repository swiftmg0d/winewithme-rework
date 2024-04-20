import { Suspense } from "react";
import Homepage from "./pages/Homepage";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import "./i18n";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
