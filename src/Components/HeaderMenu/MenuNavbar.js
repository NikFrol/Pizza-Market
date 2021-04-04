import Menu from './Menu/Menu.js';
import Navbar from './Navbar/Navbar.js';

import { useState } from 'react';


const MenuNavbar = ({ bgActive }) => {
    const [isActive, setActive] = useState(null);
    const [isOpenModal, setOpenModal] = useState(false);

    const handleClick = () => {
        setActive(prevState => !prevState);
    };

    const handleClickLogin = () => {
        setOpenModal(prevState => !prevState);

    };

    return (
        <>
            <Menu stateActive={isActive}
                onChangeActive={handleClick} />

            <Navbar onChangeActive={handleClick}
                stateActive={isActive}
                bgActive={bgActive}
                onClickLogin={handleClickLogin} />

        </>
    );
}

export default MenuNavbar;