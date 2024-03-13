import React from 'react'
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
import FiuzaNativeReserva2018 from '../../productImages2/774A7991.jpg'
import MaximeTrijolCognacVsop2 from '../../productImages2/774A7823.jpg'
import MaximeTrijolCognacVsop from '../../productImages2/774A7851.jpg'
import MaximeTrijolCognacSmall2 from '../../productImages2/774A7896.jpg'
import MaximeTrijolCognacSmall from '../../productImages2/774A7969.jpg'
import './trainers.css'

const ProductModal = ({ product, onClose }) => {
	// Обработчик событий для клика вне модального окна
	const handleOverlayClick = event => {
		if (event.target.className === 'modal-overlay') {
			onClose()
		}
	}

	return (
		<div className='modal-overlay' onClick={handleOverlayClick}>
			<div className='modal-card'>
				{product.images &&
					product.images.map((image, index) => (
						<img
							className='product__image'
							key={index}
							src={image}
							alt={`product ${index}`}
						/>
					))}
				{/* Другие детали продукта */}
				{product.title}
				{product.article}
			</div>
		</div>
	)
}

class Catalogs extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			orders: [],
			currentItems: [],
			items: [
				{
					id: 1,
					name: 'Fiuza Chardonnay',
					category: 'Wine',
					image: fiuza,
					images: [fuza],
					title: <h1 className='product__title'>Fiuza Chardonnay Arinto</h1>,
					article: (
						<p className='product__article'>
							Experience the harmonious blend of Chardonnay and Arinto in Fiuza
							2017. With tropical fruit aromas, hints of vanilla, and a
							refreshing citrus finish, this Portuguese wine offers elegance and
							versatility in every sip. Perfect for any occasion.
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
							Experience the vibrant allure of Porto Cabraco Ruby. Rich red
							fruit, subtle spices, and a velvety finish create the perfect
							celebration companion.
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
							Experience the delightful fusion of Porto Cabaco White. With crisp
							citrus notes, hints of tropical fruit, and a refreshing finish,
							it's perfect for any occasion.
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
							Experience the enchanting charm of Porto Cabraco Rosé. Bursting
							with vibrant red berry flavors, delicate floral aromas, and a
							crisp, refreshing finish, it's the ideal choice for any occasion.
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
							Indulge in the timeless sophistication of Maxime Trijol Cognac.
							Crafted with expertise and finesse, it boasts rich, complex
							flavors of dried fruits, oak, and subtle spices, culminating in a
							smooth, luxurious finish. Elevate your moments of leisure with
							this exceptional French spirit.
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
							Discover sophistication in every sip. Rich fruit, subtle florals,
							and a velvety finish define this French classic.
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
							Indulge in the timeless sophistication of Maxime Trijol Cognac.
							Crafted with expertise and finesse, it boasts rich, complex
							flavors of dried fruits, oak, and subtle spices, culminating in a
							smooth, luxurious finish. Elevate your moments of leisure with
							this exceptional French spirit.
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
							Embrace the essence of Portugal with Fiuza Native Reserva 2018. This captivating blend unveils bold flavors of ripe berries, hints of spice, and a smooth, lingering finish. Perfect for those seeking an authentic taste of Portuguese terroir.
						</p>
					),
				},
			],
			searchTerm: '',
			searchResults: [],
			selectedProduct: null,
			isModalOpen: false,
		}
		this.state.currentItems = this.state.items
		this.state.searchResults = this.state.items
		this.addToOrder = this.addToOrder.bind(this)
		this.deleteOrder = this.deleteOrder.bind(this)
		this.chooseCategory = this.chooseCategory.bind(this)
		this.handleChange = this.handleChange.bind(this)
		this.setSelectedProduct = this.setSelectedProduct.bind(this)
		this.setIsModalOpen = this.setIsModalOpen.bind(this)
	}

	addToOrder(item) {
		let isInArray = false
		this.state.orders.forEach(el => {
			if (el.id === item.id) isInArray = true
		})
		if (!isInArray) {
			this.setState({ orders: [...this.state.orders, item] })
		}
	}

	deleteOrder(id) {
		this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
	}

	chooseCategory(category) {
		if (category === 'all') {
			this.setState({ currentItems: this.state.items })
			return
		}
		this.setState({
			currentItems: this.state.currentItems.filter(
				el => el.category === category
			),
		})
	}

	handleChange(event) {
		const searchTerm = event.target.value.toLowerCase()
		this.setState({
			searchTerm: searchTerm,
			searchResults: this.state.items.filter(
				product =>
					product.name.toLowerCase().includes(searchTerm) ||
					product.category.toLowerCase().includes(searchTerm)
			),
		})
	}

	setSelectedProduct(product) {
		this.setState({ selectedProduct: product })
	}

	setIsModalOpen(isOpen) {
		this.setState({ isModalOpen: isOpen })
	}

	render() {
		const { searchTerm, searchResults, selectedProduct, isModalOpen } =
			this.state

		return (
			<>
				<Header title='Our Catalog' image={HeaderImage}>
					Facilis, iusto numquam unde laboriosam expedita qui exercitationem?
					Dicta vero accusantium est aut molestiae fugit doloremque suscipit
					quod.
				</Header>
				{/* Удалите строку ниже, так как неизвестно что такое items */}
				{/* <items items={this.state.currentItems} onAdd={this.addToOrder} /> */}
				<section className='catalog'>
					<div className='container catalog__container'>
						<input
							className='placeholder'
							type='text'
							placeholder='Search'
							value={searchTerm}
							onChange={this.handleChange}
						/>
						<div className='product-grid'>
							{searchResults.map(product => (
								<div
									key={product.id}
									className='product-card'
									onClick={() => {
										this.setSelectedProduct(product)
										this.setIsModalOpen(true)
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
						onClose={() => this.setIsModalOpen(false)}
					/>
				)}
			</>
		)
	}
}

export default Catalogs
