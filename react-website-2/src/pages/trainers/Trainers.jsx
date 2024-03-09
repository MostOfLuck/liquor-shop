import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import HeaderImage from '../../productImages/WhatsApp Image 2024-03-03 at 16.04.01.jpeg';
import './trainers.css';

const ProductModal = ({ product, onClose }) => {
  // Обработчик событий для клика вне модального окна
  const handleOverlayClick = (event) => {
    if (event.target.className === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div className='modal-overlay' onClick={handleOverlayClick}>
      <div className='modal-card'>
        <h3>{product.name}</h3>
        <p>Price: ${product.price}</p>
        {/* Другие детали продукта */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

const Catalogs = () => {
  const products = [
    { id: 1, name: 'Vine', price: 99.99 },
    { id: 2, name: 'Vodka', price: 49.99 },
    { id: 3, name: 'Tequila', price: 49.99 },
    { id: 4, name: 'Martini', price: 49.99 },
    { id: 5, name: 'Спортивные шорты', price: 49.99 },
    { id: 6, name: 'Спортивные шорты', price: 49.99 },
    { id: 7, name: 'Спортивные шорты', price: 49.99 },
    { id: 8, name: 'Спортивные шорты', price: 49.99 },
    // Add other products here
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(products);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <>
      <Header title='Our Catalog' image={HeaderImage}>
        Facilis, iusto numquam unde laboriosam expedita qui exercitationem?
        Dicta vero accusantium est aut molestiae fugit doloremque suscipit quod.
      </Header>
      <section className='catalog'>
        <div className='container catalog__container'>
          <input
            className='placeholder'
            type='text'
            placeholder='Search for your product'
            value={searchTerm}
            onChange={handleChange}
          />
          <div className='product-grid'>
            {searchResults.map((product) => (
              <div
                key={product.id}
                className='product-card'
                onClick={() => {
                  setSelectedProduct(product);
                  setIsModalOpen(true);
                }}
              >
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
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
  );
};

export default Catalogs;
