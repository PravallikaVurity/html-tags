import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Router } from "react-router-dom";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/style.css";
import LandingPage from "./pages/LandingPage";


const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path="" element={<LandingPage/>} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;