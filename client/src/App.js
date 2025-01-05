import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginRegister from "./LoginRegister";
import Home from "./Home";
// import About from "./About"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginRegister/>} />
                <Route path="/register" element={<LoginRegister/>} />
                <Route path="/home" element={<Home/>} />
                {/* <Route path= "/about" element={<About/>} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;