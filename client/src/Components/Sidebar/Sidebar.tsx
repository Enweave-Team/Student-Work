import React, {useState} from 'react';
import ReactDOM from "react-dom";
import {ReactComponent as SidebarBtn} from "../../assets/Vector.svg";
import './Sidebar.scss'
import {ReactComponent as CloseMark} from "../../assets/CloseMark.svg";
import {ReactComponent as FindLoop} from "../../assets/LoopMark.svg";
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {ReactComponent as TelegramLogo} from "../../assets/telegram.svg";
import {ReactComponent as InstagramLogo} from "../../assets/instagram.svg";
import Button from "../Button/Button";
import {SidebarData} from "./SidebarData";
import {Link} from "react-router-dom";


const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => {
        setSidebar(!sidebar)
    }

    const SidebarItem = () => {

        return (
            <aside className={sidebar ? 'nav-menu active' : 'nav-menu closed'}>
                <div className='nav-menu-item'>
                    <div className='nav-menu-header-item'>
                        <div className='close-mark' onClick={showSidebar}>
                            <CloseMark/>
                            <span>Закрити</span>
                        </div>
                        {/*<Logo className='sidebar-logo'/>*/}
                        {/*<Button text='Зареєструватися'/>*/}
                    </div>
                    <div className='input-item'>
                        <input type="text"
                               placeholder='Пошук'
                               className='find-input'
                        />
                        <FindLoop className='find-loop-mark'/>
                    </div>
                    <nav className='nav-sidebar'>
                        {SidebarData.map((item, index) => {
                            return (
                                <ul className='sidebar-list'>
                                    <li onClick={showSidebar} key={index}>
                                        <Link className='sidebar-list-item' to={item.path}>
                                            {item.title}
                                        </Link>
                                    </li>
                                </ul>
                            )
                        })}
                    </nav>
                    <div className='sidebar-contact-information'>
                        <div className='sidebar-contact-information-item'>
                            <span>+(380)-97-434-2112</span>
                            <span>example@gmail.com</span>
                        </div>

                        <div className='sidebar-social-information-item'>
                            <div className='social-sidebar-circle'><TelegramLogo className='social-sidebar'/></div>
                            <div className='social-sidebar-circle'><InstagramLogo className='social-sidebar'/></div>
                        </div>
                    </div>
                </div>
            </aside>
        )
    }

    const sidebarRoot = document.getElementById('sidebar-root')!;

    return (
        <>
            <div onClick={showSidebar}><SidebarBtn className='sidebar-button-item'/></div>
            {ReactDOM.createPortal(<SidebarItem/>, sidebarRoot)}
        </>
    );
};

export default Sidebar;