import React, {useState} from 'react';
import './App.css';
import MainPage from "./Pages/MainPage";
import AboutUs from "./Pages/AboutUs";
import {Route, Routes} from "react-router-dom";
import Navbar from "./Components/UI/Navbar";
import Services from "./Pages/Services/Services";
import Performer from "./Pages/Perfomer/Performer";


function App() {
    const [currentPage, setCurrentPage] = useState('');

    const handlePageChange = (page: string) => {
        setCurrentPage(page);
    };
    return (
        <div className="App">
            <Navbar currentPage={currentPage}/>
            <div className="routes">
                <Routes>
                    <Route path="/" element={<MainPage onPageChange={handlePageChange}/>}/>

                    <Route path="/aboutUs" element={<AboutUs onPageChange={handlePageChange}/>}/>

                    <Route path="/services" element={<Services onPageChange={handlePageChange}/>}/>

                    <Route path="/performer" element={<Performer onPageChange={handlePageChange}/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
