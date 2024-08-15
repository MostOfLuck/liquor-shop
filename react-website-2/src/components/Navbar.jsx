import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../images/logo.png';
import { useTranslation } from 'react-i18next';
import { FaBars } from 'react-icons/fa';
import { MdOutlineClose } from 'react-icons/md';
import './navbar.css';
import '../index.css';
import LanguageSwitcher from './LanguageFlags';
import { items } from '../pages/trainers/data-alc.js'; // Import product data

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isNavShowing, setIsNavShowing] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const navigate = useNavigate();

    // Determine if the language is RTL
    const isRTL = i18n.language === 'he';
    const sidebarRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('nav');
            const allProductsButton = document.querySelector('.all-products-button');
            const iconMenuSquare = document.querySelector('.icon_menu_square');

            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
                allProductsButton.classList.add('scrolled-button');
                iconMenuSquare.classList.add('scrolled-icon');
            } else {
                nav.classList.remove('scrolled');
                allProductsButton.classList.remove('scrolled-button');
                iconMenuSquare.classList.remove('scrolled-icon');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsNavShowing(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleValueClick = (filterType, value) => {
        navigate(`/catalog?${filterType}=${encodeURIComponent(value)}`);
        setIsNavShowing(false); // Close nav after click
    };

    const links = [
        { name: t('HOME'), path: '/' },
        { name: t('CATALOG'), path: '/catalog' },
        { name: t('CONTACT'), path: '/contact' },
    ];

    const categories = [...new Set(items.map(item => t(item.category, { defaultValue: item.category })))];

    const handleCategoryClick = (category) => {
        setActiveCategory(prevCategory => (prevCategory === category ? null : category));
    };

    return (
        <nav className={isRTL ? 'rtl' : 'ltr'}>
            <div className={`container nav__container ${isRTL ? 'rtl' : ''}`}>
                <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
                    <img className='logo_RILL' src={Logo} alt="Nav Logo" />
                </Link>
                <li>
                    <Link to="/catalog" className='all-products-button'>
                        <div className='icon_menu_square' style={{ marginRight: '8px' }}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        {t('ALL PRODUCTS')}
                    </Link>
                </li>
                <LanguageSwitcher />
                <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                    {links.map(({ name, path }, index) => (
                        <li key={index}>
                            <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(false)}>
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                    {isNavShowing ? <MdOutlineClose /> : <FaBars />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
