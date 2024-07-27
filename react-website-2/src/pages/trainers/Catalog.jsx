import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import ProductModal from '../../components/ModalWindow'
import HeaderImage from '../../productImages/WhatsApp Image 2024-03-03 at 16.04.01.jpeg'
import './catalog.css'
import { items } from './data-alc'

const Catalog = () => {
	const { t, i18n } = useTranslation()
	const navigate = useNavigate()
	const [searchTerm, setSearchTerm] = useState('')
	const [searchResults, setSearchResults] = useState([])
	const [selectedProduct, setSelectedProduct] = useState(null)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [searchCategory, setSearchCategory] = useState('')

	const groupedItems = useMemo(() => {
		const grouped = {}
		items.forEach(item => {
			const translatedCategory = t(item.category, {
				defaultValue: item.category,
			})
			if (!grouped[translatedCategory]) {
				grouped[translatedCategory] = [item]
			} else {
				grouped[translatedCategory].push(item)
			}
		})
		return grouped
	}, [t])

	const handleChange = event => {
		const inputValue = event.target.value.toLowerCase()
		setSearchTerm(inputValue)

		const isCategory = Object.keys(groupedItems).includes(inputValue)

		setSearchResults(
			items.filter(product => {
				const productNameMatch = t(product.name, { defaultValue: product.name })
					.toLowerCase()
					.includes(inputValue)
				const categoryMatch = t(product.category, {
					defaultValue: product.category,
				})
					.toLowerCase()
					.includes(inputValue)
				const categorySelected =
					searchCategory.toLowerCase() ===
					t(product.category, { defaultValue: product.category }).toLowerCase()
				return (
					(productNameMatch || categoryMatch) &&
					(!searchCategory || categorySelected)
				)
			})
		)

		if (isCategory) {
			setSearchCategory(inputValue)
		} else {
			setSearchCategory('')
		}
	}

	const isHebrew = i18n.language === 'he'

	const renderCategoryFilter = () => (
		<select
			className={`select__btn ${
				isHebrew ? 'select__btn--rtl' : ''
			} select__btn--green`}
			value={searchCategory}
			onChange={e => setSearchCategory(e.target.value)}
		>
			<option value=''>{t('All Categories')}</option>
			{Object.keys(groupedItems).map(category => (
				<option key={category} value={category}>
					{category}
				</option>
			))}
		</select>
	)

	const renderFilteredProducts = () => {
		if (searchResults.length === 0) {
			return <p>{t('No results found.')}</p>
		}

		return Object.keys(groupedItems).map(category => {
			if (
				!groupedItems[category] ||
				(searchCategory && searchCategory !== category)
			) {
				return null
			}

			const filteredProducts = searchResults.filter(
				product =>
					t(product.category, { defaultValue: product.category }) === category
			)

			if (filteredProducts.length === 0) {
				return null
			}

			return (
				<div key={category}>
					<hr />
					<h2>{category}</h2>
					<hr />
					<div className='product-grid'>
						{filteredProducts.map(product => (
							<div
								key={product.id}
								className='product-card'
								onClick={() => {
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
								}}
							>
								<img
									src={product.image}
									alt={t(product.name, { defaultValue: product.name })}
								/>
								<h3>{t(product.name, { defaultValue: product.name })}</h3>
								<p>
									{t(product.description, {
										defaultValue: product.description,
									})}
								</p>
							</div>
						))}
					</div>
				</div>
			)
		})
	}

	useEffect(() => {
		const results = items.filter(item => {
			const nameMatch = t(item.name, { defaultValue: item.name })
				.toLowerCase()
				.includes(searchTerm.toLowerCase())
			return (
				nameMatch &&
				(!searchCategory ||
					t(item.category, { defaultValue: item.category }) === searchCategory)
			)
		})
		setSearchResults(results)
	}, [searchTerm, searchCategory, t])

	return (
		<>
			<Header title={t('Catalog')} image={HeaderImage} />
			<section className='catalog'>
				<div className='container catalog__container'>
					<input
						type='text'
						placeholder={t('Search products...')}
						value={searchTerm}
						onChange={handleChange}
					/>
					{renderCategoryFilter()}
					{renderFilteredProducts()}
				</div>
			</section>
			{isModalOpen && selectedProduct && (
				<ProductModal
					product={selectedProduct}
					onClose={() => setIsModalOpen(false)}
				/>
			)}
		</>
	)
}

export default Catalog
