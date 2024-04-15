import { Suspense } from "react";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Homepage />} />
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
