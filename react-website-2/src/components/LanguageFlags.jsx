import React, { useState, useEffect } from 'react';
import i18n from 'i18next';
import '../index.css'

const LanguageSwitcher = () => {
    const [language, setLanguage] = useState('עברית');
    const [isOpen, setIsOpen] = useState(false);
    const languages = {
        עברית: 'Hebrew',
        English: 'English',
        Русский: 'Russian',
    };

    useEffect(() => {
        i18n.changeLanguage('עברית');
    }, []);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const selectLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setLanguage(lang);
        setIsOpen(false);
    };

    return (
        <div style={{ position: 'relative' }}>
            <button
                style={{ width: '5.4rem', height: '2rem' }}
                onClick={toggleDropdown}
            >
                {language} 🌐
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
                }}
            >
                {Object.keys(languages).map((lang) => (
                    <li 
                        key={lang} 
                        style={{ 
                            padding: '0.5rem', 
                            cursor: 'pointer' 
                        }} 
                        onClick={() => selectLanguage(lang)}
                    >
                        {lang}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LanguageSwitcher;