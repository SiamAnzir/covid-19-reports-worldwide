import React, {useEffect, useState} from "react";
import './App.css';
import {fetchGlobalData} from "./api";
import {Cards} from "./components/Cards";
import {LineChart} from "./components/LineChart";
import {SelectCountry} from "./components/SelectCountry";

const App = () => {
  const [data,setData] = useState({});

  useEffect(
      () => {
          const fetchResult = async () => {
              const result = await fetchGlobalData();
              setData(result);
          };
          fetchResult().then(response => response);
      },[]
  );
  console.log(data);
  return (
    <div className="app-container">
        <h2> Corona Reports Worldwide </h2>
        <SelectCountry/>
        <Cards data={data}/>
        <LineChart/>
    </div>
  );
}

export default App;
