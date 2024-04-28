import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import Logo from '../images/logo.png'
import { useTranslation } from 'react-i18next';
import { FaBars } from "react-icons/fa";
import {MdOutlineClose} from 'react-icons/md'
import './navbar.css'
import LanguageSwitcher from './LanguageFlags'


const Navbar = () => {
    const { t } = useTranslation();
    const [isNavShowing, setIsNavShowing] = useState(false);

    const links = [
        {
            name: t('Home'), // Переводим имя ссылки
            path: '/',
        },
        {
            name: t('Catalog'), // Переводим имя ссылки
            path: '/catalog',
        },
        {
            name: t('Contact'), // Переводим имя ссылки
            path: '/contact',
        },
    ];
  return (
    <nav>
        <div className="container nav__container">
            <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
                <img className='logo_RILL' src={Logo} alt="Nav Logo" />
            </Link>
            <LanguageSwitcher />
            <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__Nav'}`}>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''}  onClick={() => setIsNavShowing(prev => !prev)}>{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                {
                    isNavShowing ? <MdOutlineClose/> : <FaBars />
                }
            </button>
        </div>
    </nav>
  )
}

export default Navbar