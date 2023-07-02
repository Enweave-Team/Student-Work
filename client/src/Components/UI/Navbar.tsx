import React, {useState} from 'react';
import './Navbar.scss';
import Button from "../Button/Button";
import {ReactComponent as Logo} from '../../assets/logo.svg';
import RegistrationForm from "./RegistrationForm";
import Sidebar from "../Sidebar/Sidebar";

interface NavbarProps {
    currentPage: string;
}

const Navbar = ({currentPage}: NavbarProps) => {

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
                    <Sidebar/>
                    <span>{currentPage}</span>
                </div>
                <Logo className='logo-navbar'/>
                <Button onClick={handlerModal} text="Зареєструватися"/>
            </div>
        </>
    );
};

export default Navbar;