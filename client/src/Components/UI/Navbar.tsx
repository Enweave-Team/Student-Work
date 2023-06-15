import React, {useState} from 'react';
import './Navbar.scss';
import Button from "../Button/Button";

import {ReactComponent as Logo} from '../../assets/Frame 280.svg';
import RegistrationForm from "./RegistrationForm";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {

    const [modalActive, setModalActive] = useState(false)

    const handlerModal = () => {
        setModalActive(true)
    }
    const changeHandler = () => {
        setModalActive(false)
    }

    return (
        <>
            {modalActive && <RegistrationForm onConfirm={changeHandler}/>}
            <div className='wrapper-navbar'>
                <div className='sidebar-button'>
                    <Sidebar />
                    <h1>Головна сторінка</h1>
                </div>
                <div className='logo'>
                    <Logo/>
                    <h1>Student Help <br/>
                        <span><p>Допомога студентам</p></span>
                    </h1>
                </div>
                <Button onClick={handlerModal} text="Зареєструватися"/>
            </div>
        </>
    );
};

export default Navbar;