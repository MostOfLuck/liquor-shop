import React, { useState, useEffect } from 'react';
import i18n from 'i18next';

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

    const selectLanguage = lang => {
        i18n.changeLanguage(lang);
        setLanguage(lang);
        setIsOpen(false);
    };

    return (
        <div style={{ position: 'relative' }}>
            <button
                style={{ width: '5rem', borderRadius: '8px', height: '2rem' }}
                onClick={toggleDropdown}
            >
                {language} 🌐
            </button>
            {isOpen && (
                <ul
                    style={{
                        position: 'absolute',
                        backgroundColor: 'white',
                        color: 'black',
                        listStyle: 'none',
                        padding: 0,
                    }}
                >
                    {Object.keys(languages).map(lang => (
                        <li key={lang} onClick={() => selectLanguage(lang)}>
                            {lang}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LanguageSwitcher;
