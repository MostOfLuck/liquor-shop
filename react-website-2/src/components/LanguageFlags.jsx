import i18n from 'i18next'
import React, { useEffect, useState } from 'react'
import { AiFillCaretDown } from 'react-icons/ai' // Импорт иконки
import '../index.css'

const LanguageSwitcher = () => {
	const [language, setLanguage] = useState('HE')
	const [isOpen, setIsOpen] = useState(false)
	const languages = {
		HE: 'עברית',
		EN: 'English',
		RU: 'Русский',
	}

	useEffect(() => {
		i18n.changeLanguage(languages[language])
	}, [language])

	const toggleDropdown = () => {
		setIsOpen(!isOpen)
	}

	const selectLanguage = lang => {
		i18n.changeLanguage(languages[lang])
		setLanguage(lang)
		setIsOpen(false)
	}

	// Закрытие списка при клике вне его
	useEffect(() => {
		const handleClickOutside = event => {
			if (event.target.closest('.language-dropdown') === null) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

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
				style={{ width: '5.4rem', height: '2rem', borderRadius: '5px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 0.5rem' }}
				onClick={toggleDropdown}
				onMouseOver={handleMouseOver} // Открытие меню при наведении
				onMouseOut={handleMouseOut}  // Закрытие меню при уходе мыши
			>
				{language}
				<AiFillCaretDown /> {/* Иконка раскрытия */}
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
	)
}

export default LanguageSwitcher
