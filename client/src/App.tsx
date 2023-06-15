import React from 'react';
import './App.css';
import MainPage from "./Pages/MainPage";
import {createDate} from "./utils/helpers/date";
import AboutUs from "./Pages/AboutUs";
import {Route, Routes} from "react-router-dom";
import Navbar from "./Components/UI/Navbar";


function App() {
    console.log('createDate', createDate())
    return (
        <div className="App">
            <div className='navbar'>
                <Navbar/>
            </div>
            <div className="routes">
                <Routes>
                    <Route path="/" element={<MainPage/>}/>

                    <Route path="/aboutUs" element={<AboutUs/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
