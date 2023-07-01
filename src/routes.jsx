import Inicio from "pages/Inicio";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
