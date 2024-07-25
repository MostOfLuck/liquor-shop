import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../images/logo.png';
import { useTranslation } from 'react-i18next';
import { FaBars } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';
import './navbar.css';
import '../index.css'
import LanguageSwitcher from './LanguageFlags';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isNavShowing, setIsNavShowing] = useState(false);

    const links = [
        { name: t('Home'), path: '/' },
        { name: t('Catalog'), path: '/catalog' },
        { name: t('Contact'), path: '/contact' },
    ];

    const isRTL = i18n.language === 'he'; // Определяем язык как RTL

    return (
        
        <nav className={isRTL ? 'rtl' : 'ltr'}>
            <div className={`container nav__container ${isRTL ? 'rtl' : ''}`}>
                <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
                    <img className='logo_RILL' src={Logo} alt="Nav Logo" />
                </Link>
                <LanguageSwitcher />
                <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                    {
                        links.map(({ name, path }, index) => (
                            <li key={index}>
                                <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(prev => !prev)}>
                                    {name}
                                </NavLink>
                            </li>
                        ))
                    }
                </ul>
                <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                    {isNavShowing ? <MdOutlineClose /> : <FaBars />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
