import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/home/Home';
import Contact from './pages/contact/Contact';
import NotFound from './pages/notFound/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Catalog from './pages/trainers/Catalog';
import './index.css';
import favicon from '../src/images/iconlogo.png';

const App = () => {
  const { t, i18n } = useTranslation();
  const [isOver18, setIsOver18] = useState(null);
  const [modalShown, setModalShown] = useState(false);

  useEffect(() => {
    // Устанавливаем язык по умолчанию и добавляем класс к body
    const language = 'עברית'; // или другой язык по умолчанию
    i18n.changeLanguage(language);
    document.body.className = language === 'עברית' ? 'rtl' : 'ltr';
  }, [i18n]);

  useEffect(() => {
    // Сменяем класс на body при смене языка
    const currentLanguage = i18n.language;
    document.body.className = currentLanguage === 'עברית' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const handleAgeClick = (isUnder18) => {
    setIsOver18(!isUnder18);
    setModalShown(true);
    if (isUnder18) {
      window.location.href = "/NotFound";
    }
  };

  const welcomeText = t('Welcome!');

  const Modal = ({ onUnder18Click }) => (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-content">
          <h2>{welcomeText}</h2>
          <p>{t('Verify that you are legal age.')}</p>
          <button className='button1' onClick={() => onUnder18Click(false)}>{t("I'm above 18")}</button>
          <button className='button2' onClick={() => onUnder18Click(true)}>{t("I'm under 18")}</button>
        </div>
      </div>
    </div>
  );

  return (
    <BrowserRouter>
      <link rel="icon" href={favicon} />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/NotFound' element={<NotFound />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
      {isOver18 === null && !modalShown && <Modal onUnder18Click={handleAgeClick} />}
    </BrowserRouter>
  );
};

export default App;
