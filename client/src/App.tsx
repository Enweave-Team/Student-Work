import React, {useState} from 'react';
import './App.css';
import MainPage from "./Pages/MainPage";
import AboutUs from "./Pages/AboutUs";
import {Route, Routes} from "react-router-dom";
import Navbar from "./Components/UI/Navbar";


function App() {
    const [currentPage, setCurrentPage] = useState('');

    const handlePageChange = (page: string) => {
        setCurrentPage(page);
    };
    return (
        <div className="App">
            <div className='navbar'>
                <Navbar currentPage={currentPage}/>
            </div>
            <div className="routes">
                <Routes>
                    <Route path="/" element={<MainPage onPageChange={handlePageChange}/>}/>

                    <Route path="/aboutUs" element={<AboutUs onPageChange={handlePageChange}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
