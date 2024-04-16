import { Suspense } from "react";
import Homepage from "./components/pages/Homepage";
import { Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import { useTranslation } from "react-i18next";
import "./i18n";

function App() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Homepage t={t} i18n={i18n} />} />
          <Route path="/home" element={<Homepage t={t} i18n={i18n} />} />
          <Route path="/about" element={<About t={t} i18n={i18n} />} />
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
