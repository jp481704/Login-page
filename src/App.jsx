import React from "react";
import "./App.css";
import Login from "./pages/login/Login";
import Country from "./pages/Country/Country";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./Context/AuthContext";
import PrivateRoute from "./components/Private/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/country"
            element={
              // <PrivateRoute>
              //   <Country />
              // </PrivateRoute>
              <Country/>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
