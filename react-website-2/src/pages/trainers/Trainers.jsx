import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import HeaderImage from '../../productImages/WhatsApp Image 2024-03-03 at 16.04.01.jpeg'
import wineImage from '../../images/wine1.png';
import tequilaImage from '../../images/Tequila.png'
import './trainers.css'

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
        <button onClick={onClose} className='close-btn'>×</button> {/* Кнопка "крестик" */}
        <h3>{product.name}</h3>
        <img className='product-wineimage' src={product.image} alt={product.name} />
        <p className='product-description'>{product.description}</p>
        {/* Другие детали продукта */}
      </div>
    </div>
  );
};


const Catalogs = () => {

  const products = [
    { id: 1, name: 'Vine', description: 'Best wine in the world ever seen',image: wineImage },
    { id: 2, name: 'Vodka', image: tequilaImage },
    { id: 3, name: 'Tequila', image: wineImage },
    { id: 4, name: 'Martini', image: tequilaImage },
    { id: 5, name: 'Спортивные шорты', image: wineImage },
    { id: 6, name: 'Спортивные шорты', image: tequilaImage },
    { id: 7, name: 'Спортивные шорты', image: wineImage },
    { id: 8, name: 'Спортивные шорты', image: tequilaImage },
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
            placeholder='Search'
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
  );
};

export default Catalogs;
