import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import ProductModal from '../components/ModalWindow'
import HeaderImage from '../productImages/WhatsApp Image 2024-03-03 at 16.04.01.jpeg'
import '../pages/trainers/catalog.css'
import { items } from '../pages/trainers/data-alc.js'

const CategoryPage = () => {
	const { category } = useParams()
	const { t, i18n } = useTranslation()
	const [searchTerm, setSearchTerm] = useState('')
	const [filteredProducts, setFilteredProducts] = useState([])
	const [selectedProduct, setSelectedProduct] = useState(null)
	const [isModalOpen, setIsModalOpen] = useState(false)

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

	useEffect(() => {
		// Update search term with current category when the component mounts
		setSearchTerm(category || '')

		const categoryItems = groupedItems[category] || []
		setFilteredProducts(categoryItems)
	}, [category, groupedItems, t])

	const handleChange = event => {
		const inputValue = event.target.value.toLowerCase()
		setSearchTerm(inputValue)

		const results = (groupedItems[category] || []).filter(product =>
			t(product.name, { defaultValue: product.name }).toLowerCase().includes(inputValue)
		)

		setFilteredProducts(results)
	}

	const clearSearch = () => {
		setSearchTerm('')
		setFilteredProducts(groupedItems[category] || [])
	}

	const isHebrew = i18n.language === 'he'

	const renderFilteredProducts = () => {
		if (filteredProducts.length === 0) {
			return <p>{t('No results found.')}</p>
		}

		return (
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
						<p>{t(product.description, { defaultValue: product.description })}</p>
					</div>
				))}
			</div>
		)
	}

	return (
		<>
			<Header title={t('Category')} image={HeaderImage} />
			<section className='catalog'>
				<div className='container catalog__container'>
					<div className='search-container'>
						<input
							type='text'
							placeholder={t('Search products...')}
							value={searchTerm}
							onChange={handleChange}
						/>
						{searchTerm && (
							<button className='clear-button' onClick={clearSearch}>
								&times;
							</button>
						)}
					</div>
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

export default CategoryPage