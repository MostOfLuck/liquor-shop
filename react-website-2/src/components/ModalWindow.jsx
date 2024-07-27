import React from 'react';
import { useTranslation } from 'react-i18next'
import '../index.css'; // Подключение общего CSS файла

const ProductModal = ({ product, onClose }) => {
    const { t } = useTranslation()
    // Обработчик событий для клика вне модального окна
    const handleOverlayClick = event => {
        if (event.target.className === 'modal-overlay') {
            onClose();
        }
    };

    return (
        <div className='modal-overlay' onClick={handleOverlayClick}>
            <div className='modal-card'>
                <button className='modal-close-btn' onClick={onClose}>
                    &times;
                </button>
                {product.images &&
                    product.images.map((image, index) => (
                        <img
                            className='product__image'
                            key={index}
                            src={image}
                            alt={`Product ${index}`}
                        />
                    ))}
                <h2 className='product__title'>{product.name}</h2>
                <p className='product__article'>{product.article}</p>
                {product.warning && <p className='product__warning'>{product.warning}</p>}
                <div className='warning'>
                    <p className='warning_text'>
                        Внимание: Чрезмерное употребление алкоголя вредит вашему здоровью. 
                        Пожалуйста, употребляйте ответственно.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
