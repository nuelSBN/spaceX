import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SpaceMisson from "./graphql";
import ShipDetails from "./pages/ShipDetails";
import Error from "./pages/Error";

function App() {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);

  const loadSpaceMission = async () => {
    const spaceMission = await SpaceMisson.getSpaceMission(50);
    setIsPending(false);
    setData(spaceMission);
  };

  useEffect(() => {
    loadSpaceMission();
  }, []);

  console.log(data);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home data={data} isPending={isPending} />}
          />
          <Route path="/ships/:id" element={<ShipDetails data={data} />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
