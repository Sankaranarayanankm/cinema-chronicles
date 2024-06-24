import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Navigation/Nav";
import Results from "./Components/Results/Results";
import request from "./Http/request";

const App = () => {
  const [selectedOption, setSelectedOption] = useState(request.fetchTrending);
  console.log(selectedOption)
  return (
    <div className="app">
      <Header />
      <Nav setSelectedOption={setSelectedOption} />
      <Results selectedOption={selectedOption} />
    </div>
  );
};

export default App;
