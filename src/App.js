import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList';
//import {Table, Column, Cell} from 'fixed-data-table';

const mountains = [
 {name: "Mount Everest", type: "China", type2: "disputed territory", image: "MountEverest.jpg"},
 {name: "K2", type: "China", type2: "disputed territory", image: "k2.jpg"},
 {name: "Kangchenjunga", type: "Nepal", type2: "disputed territory", image: "Kangchenjunga.jpg"},
 {name: "Lhotse", type: "Nepal", type2: "disputed territory", image: "Lhotse.jpg"},
 {name: "Makalu", type: "Nepal", type2: "disputed territory", image: "Makalu.jpg"},
 {name: "Cho Oyu", type: "Nepal", type2: "disputed territory", image: "ChoOyu.jpg"},
 {name: "Dhaulagiri", type: "Nepal", type2: "not disputed territory", image: "Dhaulagiri.jpg"},
 {name: "Manaslu", type: "Nepal", type2: "not disputed territory", image: "Manaslu.jpg"},
 {name: "Annapurna", type: "Nepal", type2: "not disputed territory", image: "Annapurna.jpg"},
 {name: "Broad Peak", type: "China", type2: "disputed territory", image: "BroadPeak.jpg"},
 {name: "Gasherbrum", type: "China", type2: "disputed territory", image: "Gasherbrum.jpg"},
 {name: "Shishapangma", type: "China", type2: "not disputed territory", image: "Shishapangma.jpg"},
];

 

class App extends Component {
  render() {

    return (
      <div className="App">
          <FilteredList items={mountains} />
      </div>
    );
  }
}

export default App;
