import React from 'react';
import './App.css';
import MainPage from "./Pages/MainPage";
import {createDate} from "./utils/helpers/date";


function App() {
    console.log('createDate', createDate())
  return (
    <div className="App">
      <MainPage />

    </div>
  );
}

export default App;
