import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Detail from "./components/Detail";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/login" element={< Login />} exact />
          <Route path="/detail" element={< Detail />} exact />
          <Route path="/" element={< Home />} exact />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
