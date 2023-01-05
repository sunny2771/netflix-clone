import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import MovieTypes from "./components/MovieTypes";
import MovieId from "./components/MovieId";
import { useState } from "react";
import Error from "./components/Error";

function App() {
  const [childData, setchildData] = useState("");

  const getDataFromChild = (value) => {
    setchildData(value);
  };


  return (
    <div>
      <BrowserRouter>
        <Header getVal={getDataFromChild} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieId />} />
          <Route
            path="/movies/:type"
            element={<MovieTypes childData={childData} />}
          />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
