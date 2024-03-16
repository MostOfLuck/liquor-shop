import React from 'react';

const ProductModal = ({ product, onClose }) => {

    // Обработчик событий для клика вне модального окна
    const handleOverlayClick = event => {
        if (event.target.className === 'modal-overlay') {
            onClose();
        }
    };

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
    );
};

export default ProductModal;
