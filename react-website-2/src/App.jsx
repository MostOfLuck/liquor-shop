import React, { lazy, Suspense, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './index.css';
import Contact from './pages/contact/Contact';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import ChatBot from './components/ChatBot'

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

  const handleAgeClick = isUnder18 => {
    setIsOver18(!isUnder18);
    if (isUnder18) {
      window.location.href = '/NotFound';
    }
  };

  const welcomeText = t('Welcome!');

  const Modal = ({ onUnder18Click }) => (
    <div className='modal-overlay'>
      <div className='modal'>
        <div className='modal-content'>
          <h2>{welcomeText}</h2>
          <p>{t('Verify that you are legal age.')}</p>
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
