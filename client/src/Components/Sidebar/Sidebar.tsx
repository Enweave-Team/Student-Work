import React, {useState} from 'react';
import ReactDOM from "react-dom";
import {ReactComponent as SidebarBtn} from "../../assets/Vector.svg";
import './Sidebar.scss'
const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => {
        setSidebar(!sidebar)
    }
    const SidebarItem = () => {
        return (
            <aside className={sidebar ? 'nav-menu active' : 'nav-menu no-active'}>
                <a href="/aboutUs"></a>
                <p>sadsdsaDSA</p>
                <p>sadsdsaDSA</p>
                <p>sadsdsaDSA</p>
                <p>sadsdsaDSA</p>
                <p>sadsdsaDSA</p>
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