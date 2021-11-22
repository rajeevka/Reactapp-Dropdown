import React, { useState, useReducer } from "react";
import "./App.css";


const country = [{
  name: "India",
  state: [{
    name: "Madhyapradesh",
    city: [{
      name: "Indore",
    }, {
      name: "Bhopal",
    }, {
      name: "Harda"
    }]
  }, {
    name: "West Bengal",
    city: [{
      name: "Kolkata",
    }, {
      name: "Alipurduar",
    }, {
      name: "Bankura",
    }]
  }, {
    name: "Karnataka",
    city: [{
      name: "Shivamogga",
    }, {
      name: "Udupi"

    }, {
      name: "Vijayapura"

    }, {
      name: "Bengalore"
    }]
  }]
}, {
}, {
},
{
}];


function App() {
  // Do not alter/remove main div
  const [st, setState] = useState(0);
  const [ct, setCity] = useState(0);
  const [lm, setLandmark] = useState(0);

  const [searchVal, setSearchVal] = useState('');

  return (
    <div id="main">
      <input type="text" placeholder="Search" className="prop" onChange={(e)=>{
        setSearchVal(e.target.value)

      }}></input><br/>
      <select
        id="state"
        onChange={(ev) => {
          setState(ev.target.value);
          setCity(0);
          setLandmark(0);
        }}
        value={st}
      >
        {country.map((el, index) => {
          return <option value={index}>{el.name}</option>;
        })}
      </select>
      <select
        id="city"
        onChange={(ev) => {
          setCity(ev.target.value);
          setLandmark(0);
        }}
        value={ct}
      >
        {country[st].state.map((el, index) => {
          return <option value={index}>{el.name}</option>;
        })}
      </select>
      <select
        id="landmark"
        value={lm}
        onChange={(ev) => setLandmark(ev.target.value)}
      >
        {country[st].state[ct].city.map((el, index) => {
          return <option value={index}>{el.name}</option>;
        })}
      </select>

      <div id="Countryname">
        <div id="countrytitle">{country[st].name}</div>
      </div>
      <div id="statename">
        <div id="statetitle">{country[st].state[ct].name}</div>
      </div>
      <div id="cityname">
        <div id="citytitle">{country[st].state[ct].city[lm].name}</div>
      </div>
    </div>
  );
}

export default App;



