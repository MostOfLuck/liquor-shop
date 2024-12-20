import i18n from 'i18next';
import React, { useEffect, useState } from 'react';
import { AiFillCaretDown } from 'react-icons/ai'; // Импорт иконки стрелки
import { FaGlobe } from 'react-icons/fa'; // Импорт иконки глобуса
import '../index.css';

const LanguageSwitcher = () => {
    const savedLanguage = localStorage.getItem('language') || 'HE';
    const [language, setLanguage] = useState(savedLanguage);
    const [isOpen, setIsOpen] = useState(false);
    const languages = {
        HE: 'עברית',
        EN: 'English',
        RU: 'Русский',
    };
    
    useEffect(() => {
        i18n.changeLanguage(languages[language]);
        localStorage.setItem('language', language);
    }, [language]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };
    
    const selectLanguage = lang => {
        i18n.changeLanguage(languages[lang]);
        setLanguage(lang);
        setIsOpen(false);
        window.location.reload(); // Reload the page after language switch
    };

    // Закрытие списка при клике вне его
    useEffect(() => {
        const handleClickOutside = event => {
            if (event.target.closest('.language-dropdown') === null) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Проверка устройства
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;

    const handleMouseOver = () => {
        if (!isTouchDevice) {
            setIsOpen(true);
        }
    };

    const handleMouseOut = () => {
        if (!isTouchDevice) {
            setIsOpen(false);
        }
    };

    return (
        <div
            className='language_switcher'
            style={{ position: 'relative', left: '20px', top: '-8px', borderRadius: '10px' }}
        >
            <button
                style={{ width: '6.5rem', height: '2rem', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 0.5rem' }}
                onClick={toggleDropdown}
                onMouseOver={handleMouseOver} // Открытие меню при наведении
                onMouseOut={handleMouseOut}  // Закрытие меню при уходе мыши
            >
                <FaGlobe style={{ marginRight: '0.5rem' }} /> {/* Иконка глобуса */}
                {language}
                <AiFillCaretDown /> {/* Иконка стрелки */}
            </button>
            <ul
                className={`language-dropdown ${isOpen ? 'open' : ''}`}
                style={{
                    position: 'absolute',
                    backgroundColor: 'white',
                    color: 'black',
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                    zIndex: 1,
                    display: isOpen ? 'block' : 'none',
                }}
                onMouseOver={handleMouseOver} // Оставляем меню открытым при наведении на него
                onMouseOut={handleMouseOut}  // Закрываем меню при уходе мыши
            >
                {Object.keys(languages).map(lang => (
                    <li
                        key={lang}
                        style={{
                            padding: '0.5rem',
                            cursor: 'pointer',
                        }}
                        onClick={() => selectLanguage(lang)}
                    >
                        {languages[lang]}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LanguageSwitcher;