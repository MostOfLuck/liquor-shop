import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './index.css';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';

// Correct way to use lazy loading
const Catalog = lazy(() => import('./pages/trainers/Catalog'));

const App = () => {
  const { t, i18n } = useTranslation();
  const [isOver18, setIsOver18] = useState(null);

  useEffect(() => {
    // Load the language preference from localStorage if it exists
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    } else {
      // Set default language if not present in localStorage
      const defaultLanguage = 'עברית';
      i18n.changeLanguage(defaultLanguage);
    }
  }, [i18n]);

  useEffect(() => {
    // Update the document body class when the language changes
    const currentLanguage = i18n.language;
    document.body.className = currentLanguage === 'עברית' ? 'rtl' : 'ltr';
    // Save the language preference to localStorage
    localStorage.setItem('language', currentLanguage);
  }, [i18n.language]);

  useEffect(() => {
    // Check if the user has already verified their age
    const ageVerified = localStorage.getItem('isOver18');
    if (ageVerified !== null) {
      setIsOver18(ageVerified === 'true');
    }
  }, []);

  const handleAgeClick = isUnder18 => {
    if (isUnder18) {
      setIsOver18(false);
      localStorage.setItem('isOver18', 'false');
    } else {
      setIsOver18(true);
      localStorage.setItem('isOver18', 'true');
    }
  };

  const welcomeText = t('Welcome!');

  const Modal = ({ onUnder18Click }) => (
    <div className='modal-overlay'>
      <div className='modal'>
        <div className='modal-content'>
          <h2>{welcomeText}</h2>
          <p className='legal_age_verification'>{t('Verify that you are legal age.')}</p>
          <button className='button1' onClick={() => onUnder18Click(false)}>
            {t("I'm above 18")}
          </button>
          <button className='button2' onClick={() => onUnder18Click(true)}>
            {t("I'm under 18")}
          </button>
        </div>
      </div>
    </div>
  );

  if (isOver18 === null) {
    return <Modal onUnder18Click={handleAgeClick} />;
  }

  if (isOver18 === false) {
    return (
      <div className='underage-message'>
        <h2>{t('Access Denied')}</h2>
        <p className='denied_acses'>{t('You must be over 18 to access this site.')}</p>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/catalog/*' element={<Catalog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default App;