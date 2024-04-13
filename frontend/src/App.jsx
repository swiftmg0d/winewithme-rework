import { Suspense, useEffect, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import getWineries from "./api";

function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/custom">custom</Link>
        </li>
        <li>
          <Link to="/">main</Link>{" "}
        </li>
      </ul>
    </div>
  );
}

function App() {
  const [wineries, setWineries] = useState([]);

  useEffect(() => {
    getWineries().then((data) => setWineries(data));
  }, []);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/custom" element={<Custom name={0} />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Suspense>
    </>
  );
}
function Main() {
  return (
    <>
      <Header />
      <div>
        <h1>Hello to main page</h1>
      </div>
    </>
  );
}

function Custom(props) {
  return (
    <>
      <div>
        <Header />
        <h1>Hello to custom page</h1>
        <h2>{props.name}</h2>
      </div>
    </>
  );
}

export default App;
