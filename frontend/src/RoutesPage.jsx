import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import RequireAuth from "@auth-kit/react-router/RequireAuth";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Main from "./pages/Main";
const RoutesPage = () => {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/home"} element={<Homepage />} />
        <Route path={"/contact"} element={<Contact />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/register"} element={<Register />} />

        <Route path={"/login"} element={<Login />} />
        <Route
          path={"/main"}
          element={
            <RequireAuth fallbackPath={"/login"}>
              <Main />
            </RequireAuth>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default RoutesPage;
