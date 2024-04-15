import { Suspense } from "react";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
