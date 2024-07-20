import React, { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../../components/Header'
import ProductModal from '../../components/ModalWindow'
import HeaderImage from '../../productImages/WhatsApp Image 2024-03-03 at 16.04.01.jpeg'
import fiuza from '../../productImages2/774A7541.jpg'
import fuza from '../../productImages2/774A7547.jpg'
import PortoCabracoRuby1 from '../../productImages2/774A7575.jpg'
import PortoCabracoRuby2 from '../../productImages2/774A7583.jpg'
import PortoCabacoWhite from '../../productImages2/774A7617.jpg'
import PortoCabacoRose from '../../productImages2/774A7663.jpg'
import MaximeTrijolCognac from '../../productImages2/774A7698.jpg'
import MaximeTrijolCognac2 from '../../productImages2/774A7765.jpg'
import MaximeTrijolCognacVsop2 from '../../productImages2/774A7823.jpg'
import MaximeTrijolCognacVsop from '../../productImages2/774A7851.jpg'
import MaximeTrijolCognacSmall2 from '../../productImages2/774A7896.jpg'
import MaximeTrijolCognacSmall from '../../productImages2/774A7969.jpg'
import FiuzaNativeReserva2018 from '../../productImages2/774A7991.jpg'
import Oceanius from '../../productImages2/774A8055.jpg'
import FiuzaCabernetSauvignon from '../../productImages2/774A8093.jpg'
import AdegaDeBorba from '../../productImages2/774A8127.jpg'
import FiuzaMerilot2015 from '../../productImages2/774A8163.jpg'
import MontesCarlos from '../../productImages2/774A8202.jpg'
import BiancoCChadronay from '../../productImages2/774A8344.jpg'
import VelasCorsarias from '../../productImages2/774A8374.jpg'
import SummerMerlotAllSeasonsCollection from '../../productImages2/774A8402.jpg'
import CabernetSauvignonTourigaNacionalAllSeansonsCollection from '../../productImages2/774A8422.jpg'
import MaximeTrijolCognac3litr from '../../productImages2/774A8480.jpg'
import MaximeTrijolCognac3litr2 from '../../productImages2/774A8501.jpg'
import './trainers.css'
import './rtl.css'


const Catalogs = () => {
	const { t } = useTranslation()
	const [searchTerm, setSearchTerm] = useState('')
	const [searchResults, setSearchResults] = useState([])
	const [selectedProduct, setSelectedProduct] = useState(null)
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [searchCategory, setSearchCategory] = useState('')

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const items = useMemo(() => [
		{
			id: 1,
			name: 'Fiuza Chardonnay Arinto',
			category: t(t('Wine')),
			image: fiuza,
			images: [fuza],
			title: <h1 className='product__title'>Fiuza Chardonnay Arinto</h1>,
			article: (
				<div>
					<p className='product__article'>
						{t(
							'Savor the Chardonnay and Arinto blend of Fiuza 2017. Tropical fruit, vanilla hints, and citrus finish make it perfect for any occasion.'
						)}
					</p>
					<div className='warning'>
						<div className='warning_text'>
							{t(
								'Warning: contains alcohol, it is recommended to avoid excessive drinking'
							)}
						</div>
					</div>
				</div>
			),
		},

		{
			id: 2,
			name: 'Porto Cabraco Ruby',
			category: t('Port wine'),
			image: PortoCabracoRuby2,
			images: [PortoCabracoRuby1],
			title: <h1 className='product__title'>Porto Cabraco Ruby</h1>,
			article: (
				<div>
					<p className='product__article'>
						{t(
							'Experience the vibrant allure of Porto Cabraco Ruby. Rich red fruit, subtle spices, and a velvety finish create the perfect celebration companion.'
						)}
					</p>
					<div className='warning'>
						<div className='warning_text'>
							{t(
								'Warning: contains alcohol, it is recommended to avoid excessive drinking'
							)}
						</div>
					</div>
				</div>
			),
		},

		{
			id: 3,
			name: 'Porto Cabraco white',
			category: t('Port wine'),
			image: PortoCabacoWhite,
			images: [PortoCabacoWhite],
			title: <h1 className='product__title'>Porto Cabraco White</h1>,
			article: (
				<div>
					<p className='product__article'>
						{t(
							'Experience the delightful fusion of Porto Cabraco White. With crisp citrus notes, hints of tropical fruit, and a refreshing finish, its perfect for any occasion.'
						)}
					</p>
					<div className='warning'>
						<div className='warning_text'>
							{t(
								'Warning: contains alcohol, it is recommended to avoid excessive drinking'
							)}
						</div>
					</div>
				</div>
			),
		},

		{
			id: 4,
			name: 'Porto Cabraco Rose',
			category: t('Port wine'),
			image: PortoCabacoRose,
			images: [PortoCabacoRose],
			title: <h1 className='product__title'>Porto Cabraco Rose</h1>,
			article: (
				<div>
					<p className='product__article'>
						{t(
							'Experience the enchanting charm of Porto Cabraco Rosé. Bursting with vibrant red berry flavors, delicate floral aromas, and a crisp, refreshing finish, its the ideal choice for any occasion.'
						)}
					</p>
					<div className='warning'>
						<div className='warning_text'>
							{t(
								'Warning: contains alcohol, it is recommended to avoid excessive drinking'
							)}
						</div>
					</div>
				</div>
			),
		},

		{
			id: 5,
			name: 'Maxime Trijol Cognac',
			category: t('Cognac'),
			image: MaximeTrijolCognac2,
			images: [MaximeTrijolCognac],
			title: <h1 className='product__title'>Maxime Trijol Cognac</h1>,
			article: (
				<div>
					<p className='product__article'>
						{t(
							'Savor the refined richness of Maxime Trijol Cognac. Crafted with expertise, it offers a smooth, luxurious taste of dried fruits, oak, and spices. Perfect for elevating any occasion.'
						)}
					</p>
					<div className='warning'>
						<div className='warning_text'>
							{t(
								'Warning! Excessive consumption of alcohol is life-threatening and harmful to health'
							)}
						</div>
					</div>
				</div>
			),
		},

		{
			id: 6,
			name: 'Maxime Trijol Cognac Vsop',
			category: t('Cognac'),
			image: MaximeTrijolCognacVsop2,
			images: [MaximeTrijolCognacVsop],
			title: <h1 className='product__title'>Maxime Trijol Cognac Vsop</h1>,
			article: (
				<div>
					<p className='product__article'>
						{t(
							'Discover sophistication in every sip. Rich fruit, subtle florals, and a velvety finish define this French classic.'
						)}
					</p>
					<div className='warning'>
						<div className='warning_text'>
							{t(
								'Warning! Excessive consumption of alcohol is life-threatening and harmful to health'
							)}
						</div>
					</div>
				</div>
			),
		},

		{
			id: 7,
			name: 'Maxime Trijol Cognac',
			category: t('Cognac'),
			image: MaximeTrijolCognacSmall,
			images: [MaximeTrijolCognacSmall2],
			title: <h1 className='product__title'>Maxime Trijol Cognac</h1>,
			article: (
				<div>
					<p className='product__article'>
						{t(
							'Savor the refined richness of Maxime Trijol Cognac. Crafted with expertise, it offers a smooth, luxurious taste of dried fruits, oak, and spices. Perfect for elevating any occasion.'
						)}
					</p>
					<div className='warning'>
						<div className='warning_text'>
							{t(
								'Warning! Excessive consumption of alcohol is life-threatening and harmful to health'
							)}
						</div>
					</div>
				</div>
			),
		},

		{
			id: 8,
			name: 'Fiuza Native Reserva 2018',
			category: t('Wine'),
			image: FiuzaNativeReserva2018,
			images: [FiuzaNativeReserva2018],
			title: <h1 className='product__title'>Fiuza Native Reserva 2018</h1>,
			article: (
				<div>
					<p className='product__article'>
						{t(
							'Embrace the essence of Portugal with Fiuza Native Reserva 2018. This captivating blend unveils bold flavors of ripe berries, hints of spice, and a smooth, lingering finish. Perfect for those seeking an authentic taste of Portuguese terroir.'
						)}
					</p>
					<div className='warning'>
						<div className='warning_text'>
							{t(
								'Warning: contains alcohol, it is recommended to avoid excessive drinking'
							)}
						</div>
					</div>
				</div>
			),
		},

		{
			id: 9,
			name: 'Oceanius Produto de Portugal 2019',
			category: t('Wine'),
			image: Oceanius,
			images: [Oceanius],
			title: (
				<h1 className='product__title'>Oceanius Produto de Portugal 2019</h1>
			),
			article: (
				<div>
					<p className='product__article'>
						{t(
							'Experience Portugals essence with Oceanius 2019. Its vibrant fruit flavors and subtle herbal notes lead to a refreshing, harmonious finish, reminiscent of the Portuguese coast.'
						)}
					</p>
					<div className='warning'>
						<div className='warning_text'>
							{t(
								'Warning: contains alcohol, it is recommended to avoid excessive drinking'
							)}
						</div>
					</div>
				</div>
			),
		},

		{
			id: 10,
			name: 'Fiuza Cabernet Sauvignon',
			category: t('Wine'),
			image: FiuzaCabernetSauvignon,
			images: [FiuzaCabernetSauvignon],
			title: <h1 className='product__title'>Fiuza Cabernet Sauvignon</h1>,
			article: (
				<div>
					<p className='product__article'>
						{t(
							'Elevate your palate with Fiuza Cabernet Sauvignon. This robust wine delights with intense blackberry and cassis flavors, complemented by hints of spice and a velvety texture. Perfect for moments of indulgence and celebration.'
						)}
					</p>
					<div className='warning'>
						<div className='warning_text'>
							{t(
								'Warning: contains alcohol, it is recommended to avoid excessive drinking'
							)}
						</div>
					</div>
				</div>
			),
		},

		{
			id: 11,
			name: 'Adega de Borba',
			category: t('Wine'),
			image: AdegaDeBorba,
			images: [AdegaDeBorba],
			title: <h1 className='product__title'>Adega de Borba</h1>,
			article: (
				<div>
					<p className='product__article'>
						{t(
							'Immerse yourself in the heritage of Portugal with Adega de Borba. This esteemed winery crafts wines of exceptional quality, showcasing the rich flavors of the Alentejo region. Experience elegance and tradition in every sip.'
						)}
					</p>
					<div className='warning'>
						<div className='warning_text'>
							{t(
								'Warning: contains alcohol, it is recommended to avoid excessive drinking'
							)}
						</div>
					</div>
				</div>
			),
		},

		{
			id: 12,
			name: 'Fiuza Merilot 2015',
			category: t('Wine'),
			image: FiuzaMerilot2015,
			images: [FiuzaMerilot2015],
			title: <h1 className='product__title'>Fiuza Merilot 2015</h1>,
			article: (
				<div>
					<p className='product__article'>
						{t(
							'Indulge in the rich heritage of Fiuza Merilot 2015. This exquisite blend harmoniously combines Merlot and Cabernet Sauvignon, offering a symphony of ripe berry flavors, subtle spice notes, and a velvety texture. Perfect for moments of refined enjoyment.'
						)}
					</p>
					<div className='warning'>
						<div className='warning_text'>
							{t(
								'Warning: contains alcohol, it is recommended to avoid excessive drinking'
							)}
						</div>
					</div>
				</div>
			),
		},

		{
			id: 13,
			name: 'Montes Carlos DOC Alentejo Tinto 2016',
			category: t('Wine'),
			image: MontesCarlos,
			images: [MontesCarlos],
			title: (
				<h1 className='product__title'>
					Montes Carlos DOC Alentejo Tinto 2016
				</h1>
			),
			article: (
				<div>
					<p className='product__article'>
						{t(
							'Discover Portugal essence with Montes Carlos DOC Alentejo Tinto 2016. This captivating red wine offers rich flavors of dark fruits, hints of spice, and a smooth finish, perfect for pure enjoyment.'
						)}
					</p>
					<div className='warning'>
						<div className='warning_text'>
							{t(
								'Warning: contains alcohol, it is recommended to avoid excessive drinking'
							)}
						</div>
					</div>
				</div>
			),
		},

		{
			id: 14,
			name: 'Bianco C Chardonnay All Seasons Collection 2020',
			category: t('Wine'),
			image: BiancoCChadronay,
			images: [BiancoCChadronay],
			title: (
				<h1 className='product__title'>
					Bianco C Chardonnay All Seasons Collection 2020
				</h1>
			),
			article: (
				<div>
					<p className='product__article'>
						{t(
							'Savor Bianco C Chardonnay from the All Seasons Collection 2020. With vibrant fruit aromas and a creamy texture, its perfect for any occasion.'
						)}
					</p>
					<div className='warning'>
						<div className='warning_text'>
							{t(
								'Warning: contains alcohol, it is recommended to avoid excessive drinking'
							)}
						</div>
					</div>
				</div>
			),
		},

		{
			id: 15,
			name: 'Spain Velas Corsarias',
			category: t('Wine'),
			image: VelasCorsarias,
			images: [VelasCorsarias],
			title: <h1 className='product__title'>Spain Velas Corsarias</h1>,
			article: (
				<div>
					<p className='product__article'>
						{t(
							'An adventurous Spanish blend, Velas Corsarias offers bold flavors of dark fruits and spice with a hint of oak.'
						)}
					</p>
					<div className='warning'>
						<div className='warning_text'>
							{t(
								'Warning: contains alcohol, it is recommended to avoid excessive drinking'
							)}
						</div>
					</div>
				</div>
			),
		},

		{
			id: 16,
			name: 'Summer Merlot All Seasons Collection 2020',
			category: t('Wine'),
			image: SummerMerlotAllSeasonsCollection,
			images: [SummerMerlotAllSeasonsCollection],
			title: (
				<h1 className='product__title'>
					Summer Merlot All Seasons Collection 2020
				</h1>
			),
			article: (
				<div>
					<p className='product__article'>
						{t(
							'Transport yourself to a summers day with Summer Merlot from the All Seasons Collection 2020. Bursting with ripe berry flavors and a touch of warmth, this wine embodies the essence of the season.'
						)}
					</p>
					<div className='warning'>
						<div className='warning_text'>
							{t(
								'Warning: contains alcohol, it is recommended to avoid excessive drinking'
							)}
						</div>
					</div>
				</div>
			),
		},

		{
			id: 17,
			name: 'Maxime Trijol Cognac',
			category: t(t('Cognac')),
			image: MaximeTrijolCognac3litr2,
			images: [MaximeTrijolCognac3litr],
			title: <h1 className='product__title'>Maxime Trijol Cognac</h1>,
			article: (
				<div>
					<p className='product__article'>
						{t(
							'Savor the refined richness of Maxime Trijol Cognac. Crafted with expertise, it offers a smooth, luxurious taste of dried fruits, oak, and spices. Perfect for elevating any occasion.'
						)}
					</p>
					<div className='warning'>
						<div className='warning_text'>
							{t(
								'Warning! Excessive consumption of alcohol is life-threatening and harmful to health'
							)}
						</div>
					</div>
				</div>
			),
		},

		{
			id: 18,
			name: 'Cabernet Sauvignon Touriga Nacional All Seansons Collection',
			category: t('Wine'),
			image: CabernetSauvignonTourigaNacionalAllSeansonsCollection,
			images: [CabernetSauvignonTourigaNacionalAllSeansonsCollection],
			title: (
				<h1 className='product__title'>
					Cabernet Sauvignon Touriga Nacional All Seansons Collection
				</h1>
			),
			article: (
				<div>
					<p className='product__article'>
						{t(
							'Experience a symphony of flavors with this blend. Cabernet Sauvignon and Touriga Nacional unite to create a rich, balanced wine.'
						)}
					</p>
					<div className='warning'>
						<div className='warning_text'>
							{t(
								'Warning: contains alcohol, it is recommended to avoid excessive drinking'
							)}
						</div>
					</div>
				</div>
			),
		},
	])
	const groupedItems = useMemo(() => {
		const grouped = {}
		items.forEach(item => {
			if (!grouped[item.category]) {
				grouped[item.category] = [item]
			} else {
				grouped[item.category].push(item)
			}
		})
		return grouped
	}, [items])

	const handleChange = event => {
		const inputValue = event.target.value.toLowerCase()
		setSearchTerm(inputValue)

		// Проверяем, является ли введенный текст категорией
		const isCategory = Object.keys(groupedItems).includes(inputValue)

		setSearchResults(
			items.filter(product => {
				const productNameMatch = product.name.toLowerCase().includes(inputValue)
				const categoryMatch = product.category
					.toLowerCase()
					.includes(inputValue)
				const categorySelected =
					searchCategory.toLowerCase() === product.category.toLowerCase()
				return (
					(productNameMatch || categoryMatch) &&
					(!searchCategory || categorySelected)
				)
			})
		)

		// Если введенный текст соответствует категории, устанавливаем эту категорию для фильтрации
		if (isCategory) {
			setSearchCategory(inputValue)
		} else {
			setSearchCategory('')
		}
	}
	const { i18n } = useTranslation()

	const categoriesText = t('All Categories')

	const isHebrew = i18n.language === 'he'

	const renderCategoryFilter = () => (
		<select
			className={`select__btn ${isHebrew ? 'select__btn--rtl' : ''}`}
			value={searchCategory}
			onChange={e => setSearchCategory(e.target.value)}
		>
			<option value=''>{categoriesText}</option>
			{Object.keys(groupedItems).map(category => (
				<option key={category} value={category}>
					{category}
				</option>
			))}
		</select>
	)

	const renderFilteredProducts = () => {
		if (searchResults.length === 0) {
			return <p>No results found.</p>
		}

		const renderedCategories = Object.keys(groupedItems).map(category => {
			if (
				!groupedItems[category] ||
				(searchCategory && searchCategory !== category)
			) {
				return null
			}

			const filteredProducts = searchResults.filter(
				product => product.category === category
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
									setSelectedProduct(product)
									setIsModalOpen(true)
								}}
							>
								<img src={product.image} alt={product.name} />
								<h3>{product.name}</h3>
							</div>
						))}
					</div>
				</div>
			)
		})

		return renderedCategories
	}

	useEffect(() => {
		const results = items.filter(item => {
			const nameMatch = item.name
				.toLowerCase()
				.includes(searchTerm.toLowerCase())
			return nameMatch && (!searchCategory || item.category === searchCategory)
		})
		setSearchResults(results)
	}, [searchTerm, items, searchCategory])

	return (
		<>
			<Header title={t('Our Catalog')} image={HeaderImage}>
				{t(
					'Explore the world of Portugal, Spain, and France with our diverse selection of wines and cognacs. Indulge in the exquisite flavors and aromas presented in our bottles, and discover the true gems of winemaking.'
				)}
			</Header>
			<section className='catalog'>
				<div className='container catalog__container'>
					<input
						className='placeholder'
						type='text'
						placeholder={t('Search')}
						value={searchTerm}
						onChange={handleChange}
					/>
					{renderCategoryFilter()}
					<div className='product-grid'>{renderFilteredProducts()}</div>
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

export default Catalogs
