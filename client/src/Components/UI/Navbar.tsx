import React, {useState} from 'react';
import './Navbar.scss';
import Button from "../Button/Button";
import {ReactComponent as SidebarBtn} from "../../assets/Vector.svg";
import {ReactComponent as Logo} from '../../assets/Frame 280.svg';
import RegistrationForm from "./RegistrationForm";

const Navbar = () => {

    const [modalActive, setModalActive] = useState(false)

    const handlerModal = () => {
        setModalActive(true)
    }

    return (
        <>
            {modalActive && <RegistrationForm  />}
        <div className='wrapper-navbar'>
            <div className='sidebar-button'>
                <SidebarBtn/>
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