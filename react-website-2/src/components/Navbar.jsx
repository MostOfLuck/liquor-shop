import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import Logo from '../images/logo.png';
import { useTranslation } from 'react-i18next';
import { FaBars, FaPhone } from 'react-icons/fa'; // Import FaPhone icon
import { MdOutlineClose } from 'react-icons/md';
import './navbar.css';
import '../index.css';
import LanguageSwitcher from './LanguageFlags';
import { items } from '../pages/trainers/data-alc.js'; // Import product data

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const [isNavShowing, setIsNavShowing] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);
    const [isNotificationVisible, setIsNotificationVisible] = useState(false); // Add state for notification
    const navigate = useNavigate();

    // Determine if the language is RTL
    const isRTL = i18n.language === 'he';
    const sidebarRef = useRef(null);
    const buttonRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('nav');

            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
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

    const handleCopyPhoneNumber = () => {
        const phoneNumber = '+03-6542200'; // Replace with your phone number
        navigator.clipboard.writeText(phoneNumber).then(() => {
            setIsNotificationVisible(true);
            setTimeout(() => {
                setIsNotificationVisible(false);
            }, 2000); // Hide notification after 2 seconds
        });
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
                <LanguageSwitcher />
                <div className="nav__phone-container">
                    <button className="nav__phone-btn" onClick={handleCopyPhoneNumber}>
                        <FaPhone />
                        <span className="tooltip">{t('Copy phone number')}</span>
                    </button>
                    <button className="phone-number" onClick={handleCopyPhoneNumber}>
                        03-6542200
                        <span className="tooltip">{t('Copy phone number')}</span>
                    </button>
                </div>
                <button className="nav__toggle-btn" onClick={() => setIsNavShowing(!isNavShowing)}>
                    {isNavShowing ? <MdOutlineClose /> : <FaBars />}
                </button>
                <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                    {links.map(({ name, path }, index) => (
                        <li key={index}>
                            <NavLink to={path} className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(false)}>
                                {name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                {isNotificationVisible && <div className="notification">{t('Phone number copied!')}</div>}
            </div>
        </nav>
    );
};

export default Navbar;