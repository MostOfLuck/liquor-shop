import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../../components/Header'
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
import ProductModal from '../../components/ModalWindow'


const Catalogs = () => {
	const { t } = useTranslation()
	// eslint-disable-next-line no-unused-vars
	const [currentItems, setCurrentItems] = useState([])
	const [items] = useState([
		{
			id: 1,
			name: 'Fiuza Chardonnay Arinto',
			category: 'Wine',
			image: fiuza,
			images: [fuza],
			title: <h1 className='product__title'>Fiuza Chardonnay Arinto</h1>,
			article: (
				<p className='product__article'>
{t('Savor the Chardonnay and Arinto blend of Fiuza 2017. Tropical fruit, vanilla hints, and citrus finish make it perfect for any occasion.')}
				</p>
			),
		},

		{
			id: 2,
			name: 'Porto Cabraco Ruby',
			category: 'Port',
			image: PortoCabracoRuby2,
			images: [PortoCabracoRuby1],
			title: <h1 className='product__title'>Porto Cabraco Ruby</h1>,
			article: (
				<p className='product__article'>
{t('Experience the vibrant allure of Porto Cabraco Ruby. Rich red fruit, subtle spices, and a velvety finish create the perfect celebration companion.')}

				</p>
			),
		},
		{
			id: 3,
			name: 'Porto Cabraco white',
			category: 'Port',
			image: PortoCabacoWhite,
			images: [PortoCabacoWhite],
			title: <h1 className='product__title'>Porto Cabraco White</h1>,
			article: (
				<p className='product__article'>
					{t('Experience the delightful fusion of Porto Cabraco White. With crisp citrus notes, hints of tropical fruit, and a refreshing finish, its perfect for any occasion.')}

				</p>
			),
		},
		{
			id: 4,
			name: 'Porto Cabraco Rose',
			category: 'Port',
			image: PortoCabacoRose,
			images: [PortoCabacoRose],
			title: <h1 className='product__title'>Porto Cabraco Rose</h1>,
			article: (
				<p className='product__article'>
					{t('Experience the enchanting charm of Porto Cabraco Rosé. Bursting with vibrant red berry flavors, delicate floral aromas, and a crisp, refreshing finish, its the ideal choice for any occasion.')}

				</p>
			),
		},
		{
			id: 5,
			name: 'Maxime Trijol Cognac',
			category: 'Cognac',
			image: MaximeTrijolCognac2,
			images: [MaximeTrijolCognac],
			title: <h1 className='product__title'>Maxime Trijol Cognac</h1>,
			article: (
				<p className='product__article'>
					{t('Savor the refined richness of Maxime Trijol Cognac. Crafted with expertise, it offers a smooth, luxurious taste of dried fruits, oak, and spices. Perfect for elevating any occasion.')}

				</p>
			),
		},
		{
			id: 6,
			name: 'Maxime Trijol Cognac Vsop',
			category: 'Cognac',
			image: MaximeTrijolCognacVsop2,
			images: [MaximeTrijolCognacVsop],
			title: <h1 className='product__title'>Maxime Trijol Cognac Vsop</h1>,
			article: (
				<p className='product__article'>
					{t('Discover sophistication in every sip. Rich fruit, subtle florals, and a velvety finish define this French classic.')}
				</p>
			),
		},
		{
			id: 7,
			name: 'Maxime Trijol Cognac ',
			category: 'Cognac',
			image: MaximeTrijolCognacSmall,
			images: [MaximeTrijolCognacSmall2],
			title: <h1 className='product__title'>Maxime Trijol Cognac</h1>,
			article: (
				<p className='product__article'>
										{t('Savor the refined richness of Maxime Trijol Cognac. Crafted with expertise, it offers a smooth, luxurious taste of dried fruits, oak, and spices. Perfect for elevating any occasion.')}
				</p>
			),
		},
		{
			id: 8,
			name: 'Fiuza Native Reserva 2018 ',
			category: 'Wine',
			image: FiuzaNativeReserva2018,
			images: [FiuzaNativeReserva2018],
			title: <h1 className='product__title'>Fiuza Native Reserva 2018</h1>,
			article: (
				<p className='product__article'>
					{t('Embrace the essence of Portugal with Fiuza Native Reserva 2018. This captivating blend unveils bold flavors of ripe berries, hints of spice, and a smooth, lingering finish. Perfect for those seeking an authentic taste of Portuguese terroir.')}
				</p>
			),
		},
		{
			id: 9,
			name: 'Oceanius Produto de Portugal 2019',
			category: 'Wine',
			image: Oceanius,
			images: [Oceanius],
			title: (
				<h1 className='product__title'>Oceanius Produto de Portugal 2019</h1>
			),
			article: (
				<p className='product__article'>
					{t('Experience Portugals essence with Oceanius 2019. Its vibrant fruit flavors and subtle herbal notes lead to a refreshing, harmonious finish, reminiscent of the Portuguese coast.')}
				</p>
			),
		},

		{
			id: 10,
			name: 'Fiuza Cabernet Sauvignon',
			category: 'Wine',
			image: FiuzaCabernetSauvignon,
			images: [FiuzaCabernetSauvignon],
			title: <h1 className='product__title'>Fiuza Cabernet Sauvignon</h1>,
			article: (
				<p className='product__article'>
					{t('Elevate your palate with Fiuza Cabernet Sauvignon. This robust wine delights with intense blackberry and cassis flavors, complemented by hints of spice and a velvety texture. Perfect for moments of indulgence and celebration.')}
				</p>
			),
		},

		{
			id: 11,
			name: 'Adega de Borba',
			category: 'Wine',
			image: AdegaDeBorba,
			images: [AdegaDeBorba],
			title: <h1 className='product__title'>Adega de Borba</h1>,
			article: (
				<p className='product__article'>
					{t('Immerse yourself in the heritage of Portugal with Adega de Borba. This esteemed winery crafts wines of exceptional quality, showcasing the rich flavors of the Alentejo region. Experience elegance and tradition in every sip.')}
				</p>
			),
		},

		{
			id: 12,
			name: 'Fiuza Merilot 2015',
			category: 'Wine',
			image: FiuzaMerilot2015,
			images: [FiuzaMerilot2015],
			title: <h1 className='product__title'>Fiuza Merilot 2015</h1>,
			article: (
				<p className='product__article'>
					{t('Indulge in the rich heritage of Fiuza Merilot 2015. This exquisite blend harmoniously combines Merlot and Cabernet Sauvignon, offering a symphony of ripe berry flavors, subtle spice notes, and a velvety texture. Perfect for moments of refined enjoyment.')}
				</p>
			),
		},

		{
			id: 13,
			name: 'Montes Carlos DOC Alentejo Tinto 2016',
			category: 'Wine',
			image: MontesCarlos,
			images: [MontesCarlos],
			title: (
				<h1 className='product__title'>
					Montes Carlos DOC Alentejo Tinto 2016
				</h1>
			),
			article: (
				<p className='product__article'>
					{t('Discover Portugal essence with Montes Carlos DOC Alentejo Tinto 2016. This captivating red wine offers rich flavors of dark fruits, hints of spice, and a smooth finish, perfect for pure enjoyment.')}
				</p>
			),
		},

		{
			id: 14,
			name: 'Bianco C Chardonnay All Seasons Collection 2020',
			category: 'Wine',
			image: BiancoCChadronay,
			images: [BiancoCChadronay],
			title: (
				<h1 className='product__title'>
					Bianco C Chardonnay All Seasons Collection 2020
				</h1>
			),
			article: (
				<p className='product__article'>
					{t('Savor Bianco C Chardonnay from the All Seasons Collection 2020. With vibrant fruit aromas and a creamy texture, its perfect for any occasion.')}
				</p>
			),
		},

		{
			id: 15,
			name: 'Spain Velas Corsarias',
			category: 'Wine',
			image: VelasCorsarias,
			images: [VelasCorsarias],
			title: <h1 className='product__title'>Spain Velas Corsarias</h1>,
			article: (
				<p className='product__article'>
					{t('An adventurous Spanish blend, Velas Corsarias offers bold flavors of dark fruits and spice with a hint of oak.')}
				</p>
			),
		},

		{
			id: 16,
			name: 'Summer Merlot All SeasonsCollection 2020',
			category: 'Wine',
			image: SummerMerlotAllSeasonsCollection,
			images: [SummerMerlotAllSeasonsCollection],
			title: (
				<h1 className='product__title'>
					Summer Merlot All SeasonsCollection 2020
				</h1>
			),
			article: (
				<p className='product__article'>
					{t('Transport yourself to a summers day with Summer Merlot from the All Seasons Collection 2020. Bursting with ripe berry flavors and a touch of warmth, this wine embodies the essence of the season.')}

				</p>
			),
		},

		{
			id: 17,
			name: 'Maxime Trijol Cognac',
			category: 'Cognac',
			image: MaximeTrijolCognac3litr2,
			images: [MaximeTrijolCognac3litr],
			title: <h1 className='product__title'>Maxime Trijol Cognac</h1>,
			article: (
				<p className='product__article'>
															{t('Savor the refined richness of Maxime Trijol Cognac. Crafted with expertise, it offers a smooth, luxurious taste of dried fruits, oak, and spices. Perfect for elevating any occasion.')}
				</p>
			),
		},

		{
			id: 18,
			name: 'Cabernet Sauvignon Touriga Nacional All Seansons Collection',
			category: 'Wine',
			image: CabernetSauvignonTourigaNacionalAllSeansonsCollection,
			images: [CabernetSauvignonTourigaNacionalAllSeansonsCollection],
			title: (
				<h1 className='product__title'>
					Cabernet Sauvignon Touriga Nacional All Seansons Collection
				</h1>
			),
			article: (
				<p className='product__article'>
					{t('Experience a symphony of flavors with this blend. Cabernet Sauvignon and Touriga Nacional unite to create a rich, balanced wine.')}
				</p>
			),
		},
	])
	const [searchTerm, setSearchTerm] = useState('')
	const [searchResults, setSearchResults] = useState([])
	const [selectedProduct, setSelectedProduct] = useState(null)
	const [isModalOpen, setIsModalOpen] = useState(false)

	useEffect(() => {
		setCurrentItems(items)
		setSearchResults(items)
	}, [items])

	const handleChange = event => {
		const searchTerm = event.target.value.toLowerCase()
		setSearchTerm(searchTerm)
		setSearchResults(
			items.filter(
				product =>
					product.name.toLowerCase().includes(searchTerm) ||
					product.category.toLowerCase().includes(searchTerm)
			)
		)
	}


	return (
		<>
			<Header title={t('Our Catalog')} image={HeaderImage}>
			{t('Explore the world of Portugal, Spain, and France with our diverse selection of wines and cognacs. Indulge in the exquisite flavors and aromas presented in our bottles, and discover the true gems of winemaking.')}
			</Header>
			<section className='catalog'>
				<div className='container catalog__container'>
					<input
						className='placeholder'
						type='text'
						placeholder='Search'
						value={searchTerm}
						onChange={handleChange}
					/>
					<div className='product-grid'>
						{searchResults.map(product => (
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
