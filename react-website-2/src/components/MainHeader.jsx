import React, { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useNavigate } from 'react-router-dom'
import ProductModal from '../components/ModalWindow'
import Image from '../images/wine1.webp'
import '../index.css'
import { items } from '../pages/trainers/data-alc.js'

const MainHeader = () => {
	const { t, i18n } = useTranslation()
	const navigate = useNavigate()
	const [searchTerm, setSearchTerm] = useState('')
	const [searchResults, setSearchResults] = useState([])
	const [selectedProduct, setSelectedProduct] = useState(null)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const searchInputRef = useRef(null)

	useEffect(() => {
		const selectedProductId = localStorage.getItem('selectedProductId')
		if (selectedProductId) {
			const product = items.find(p => p.id.toString() === selectedProductId)
			if (product) {
				setSelectedProduct({
					...product,
					name: t(product.name, { defaultValue: product.name }),
					article: t(product.articleKey, {
						defaultValue: 'Article content missing',
					}),
					warning: t(product.warningKey, {
						defaultValue: 'Warning content missing',
					}),
				})
				setIsModalOpen(true)
			}
			localStorage.removeItem('selectedProductId')
		}

		if (searchInputRef.current) {
			searchInputRef.current.focus()
		}

		const handleClickOutside = event => {
			if (
				searchInputRef.current &&
				!searchInputRef.current.contains(event.target)
			) {
				setSearchTerm('')
			}
		}

		document.addEventListener('click', handleClickOutside)

		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [t])

	const handleChange = event => {
		const inputValue = event.target.value.toLowerCase()
		setSearchTerm(inputValue)

		const results = items.filter(product => {
			const productName = t(product.name, {
				defaultValue: product.name,
			}).toLowerCase()
			const productCategory = t(`categories.${product.category}`, {
				defaultValue: product.category,
			}).toLowerCase()
			return (
				productName.includes(inputValue) || productCategory.includes(inputValue)
			)
		})

		setSearchResults(results.slice(0, 4))
	}

	const handleSearchSubmit = product => {
		setSelectedProduct({
			...product,
			name: t(product.name, { defaultValue: product.name }),
			article: t(product.articleKey, {
				defaultValue: 'Article content missing',
			}),
			warning: t(product.warningKey, {
				defaultValue: 'Warning content missing',
			}),
		})
		setIsModalOpen(true)
		localStorage.setItem('selectedProductId', product.id.toString())
	}

	const handleCloseModal = () => {
		setIsModalOpen(false)
		setSelectedProduct(null)
	}

	return (
		<header className='main__header'>
			<div className='container main__header-container'>
				<div className='main__header-left'>
					<div className='main__search'>
						<input
							ref={searchInputRef}
							type='text'
							placeholder={t('Search')}
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
									{searchResults.map(product => (
										<li
											key={product.id}
											onClick={() => handleSearchSubmit(product)}
										>
											<img
												src={product.image}
												alt={t(product.name, { defaultValue: product.name })}
											/>
											<span>
												{t(product.name, { defaultValue: product.name })}
											</span>
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
			{isModalOpen && selectedProduct && (
				<ProductModal product={selectedProduct} onClose={handleCloseModal} />
			)}
		</header>
	)
}

export default MainHeader
