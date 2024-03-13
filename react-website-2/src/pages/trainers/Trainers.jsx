import React from 'react'
import Categories from '../../components/Categories'
import Header from '../../components/Header'
import { Items } from '../../data'
import tequilaImage from '../../images/Tequila.png'
import wineImage from '../../images/wine1.png'
import HeaderImage from '../../productImages/WhatsApp Image 2024-03-03 at 16.04.01.jpeg'
import fiuza from '../../productImages2/774A7541.jpg'
import fuza from '../../productImages2/774A7547.jpg'
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
					name: 'Vine',
					category: 'Vine',
					image: fiuza,
					images: [fuza],
					title: <h1 className='product__title'>Fiuza</h1>,
					article: (
						<p className='product__article'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
							provident laboriosam vitae quibusdam magni libero natus suscipit
							minima accusantium deserunt harum distinctio commodi placeat
							voluptate cupiditate asperiores eveniet, iste eos!
						</p>
					),
				},

				{
					id: 2,
					name: 'Vodka',
					category: 'Vodka',
					image: wineImage,
					images: [wineImage],
					title: <h1 className='product__title'>Vine</h1>,
					article: (
						<p className='product__article'>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
							provident laboriosam vitae quibusdam magni libero natus suscipit
							minima accusantium deserunt harum distinctio commodi placeat
							voluptate cupiditate asperiores eveniet, iste eos!
						</p>
					),
				},
				{ id: 3, name: 'Tequila', image: wineImage },
				{ id: 4, name: 'Martini', image: tequilaImage },
				{ id: 5, name: 'Спортивные шорты', image: wineImage },
				{ id: 6, name: 'Спортивные шорты', image: tequilaImage },
				{ id: 7, name: 'Спортивные шорты', image: wineImage },
				{ id: 8, name: 'Спортивные шорты', image: tequilaImage },
			],
			searchTerm: '',
			searchResults: Items, // Изначально устанавливаем результаты поиска равными всем продуктам
			selectedProduct: null,
			isModalOpen: false,
		}
		this.state.currentItems = this.state.items
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
		const searchTerm = event.target.value
		this.setState({
			searchTerm: searchTerm,
			searchResults: Items.filter(product =>
				product.name.toLowerCase().includes(searchTerm.toLowerCase())
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
				<items items={this.state.currentItems} onAdd={this.addToOrder} />
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
