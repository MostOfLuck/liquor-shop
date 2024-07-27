import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, Link } from 'react-router-dom' // Добавлен Link
import Image from '../images/wine1.webp'
import { items } from '../pages/trainers/data-alc.js' // Импорт данных о товарах
import '../index.css'

const MainHeader = () => {
	const { t } = useTranslation()
	const navigate = useNavigate()
	const [searchTerm, setSearchTerm] = useState('')
	const [searchResults, setSearchResults] = useState([])

	const handleChange = (event) => {
		const inputValue = event.target.value.toLowerCase()
		setSearchTerm(inputValue)

		// Фильтрация товаров по названию
		const results = items.filter(product =>
			t(product.name, { defaultValue: product.name })
				.toLowerCase()
				.includes(inputValue)
		)
		// Ограничение результатов до 4 товаров
		setSearchResults(results.slice(0, 4))
	}

	const handleSearchSubmit = (product) => {
		// Сохранение ID выбранного товара в localStorage
		localStorage.setItem('selectedProductId', product.id)
		// Переход к каталогу
		navigate('/catalog')
	}

	return (
		<header className='main__header'>
			<div className='container main__header-container'>
			
				<div className='main__header-left'>
				<div className='main__search'>
					<input
						type='text'
						placeholder={t('Search for products (original names in latin only)')}
						value={searchTerm}
						onChange={handleChange}
					/>
					{searchTerm && (
						<button
							className='search-clear-button'
							onClick={() => setSearchTerm('')}
						>
							&times;
						</button>
					)}
					<div className='search-results'>
						{searchTerm && searchResults.length > 0 && (
							<ul>
								{searchResults.map((product) => (
									<li key={product.id} onClick={() => handleSearchSubmit(product)}>
										<img
											src={product.image}
											alt={t(product.name, { defaultValue: product.name })}
										/>
										<span>{t(product.name, { defaultValue: product.name })}</span>
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
					<h1>
						{t('Discover the Finest Alcoholic Beverages at R.I.L.L Collection')}
					</h1>
					<p>{t('Best Alcohol from all over the world')}</p>
					<Link to='/Catalog' className='btn lg'>
						{t('Open Catalog')}
					</Link>
				</div>
				<div className='main__header-right'>
					<div className='main__header-circle'></div>
					<div className='main__header-image'>
						<img src={Image} alt='Main Header' />
					</div>
				</div>
			</div>
		</header>
	)
}

export default MainHeader
