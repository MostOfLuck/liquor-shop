import React, { lazy, Suspense, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import favicon from '../src/images/iconlogo.png'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './index.css'
import Contact from './pages/contact/Contact'
import Home from './pages/home/Home'
import NotFound from './pages/notFound/NotFound'

// Correct way to use lazy loading
const Catalog = lazy(() => import('./pages/trainers/Catalog'))

const App = () => {
	const { t, i18n } = useTranslation()
	const [isOver18, setIsOver18] = useState(null)
	const [modalShown, setModalShown] = useState(false)

	useEffect(() => {
		// Set default language and add class to body
		const language = 'עברית' // or any other default language
		i18n.changeLanguage(language)
		document.body.className = language === 'עברית' ? 'rtl' : 'ltr'
	}, [i18n])

	useEffect(() => {
		// Change body class on language change
		const currentLanguage = i18n.language
		document.body.className = currentLanguage === 'עברית' ? 'rtl' : 'ltr'
	}, [i18n.language])

	const handleAgeClick = isUnder18 => {
		setIsOver18(!isUnder18)
		setModalShown(true)
		if (isUnder18) {
			window.location.href = '/NotFound'
		}
	}

	const welcomeText = t('Welcome!')

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
	)

	return (
		<BrowserRouter>
			<link rel='icon' href={favicon} />
			<Navbar />
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/catalog' element={<Catalog />} />
					<Route path='/NotFound' element={<NotFound />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Suspense>
			<Footer />
			{isOver18 === null && !modalShown && (
				<Modal onUnder18Click={handleAgeClick} />
			)}
		</BrowserRouter>
	)
}

export default App
