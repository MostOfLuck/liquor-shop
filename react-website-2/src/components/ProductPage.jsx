import React from 'react'
import { useParams } from 'react-router-dom'
import { items } from './data-alc'
import Header from '../../components/Header'
import ProductModal from '../../components/ModalWindow'
import HeaderImage from '../../productImages/WhatsApp Image 2024-03-03 at 16.04.01.jpeg'
import './catalog.css'

const ProductPage = () => {
	const { productName } = useParams()
	const product = items.find(item => item.name === productName)

	if (!product) {
		return <p>Product not found.</p>
	}

	return (
		<>
			<Header title={product.name} image={HeaderImage} />
			<section className='catalog'>
				<div className='container catalog__container'>
					<h1>{product.name}</h1>
					<img src={product.image} alt={product.name} />
					<p>{product.description}</p>
					{/* Добавьте сюда другую информацию о товаре */}
				</div>
			</section>
		</>
	)
}

export default ProductPage
