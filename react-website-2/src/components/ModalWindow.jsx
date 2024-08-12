import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import '../index.css'; // Подключение общего CSS файла

const ProductModal = ({ product, onClose }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();

    // Блокировка прокрутки при открытии модального окна
    useEffect(() => {
        document.body.style.overflow = 'hidden'; // Отключаем прокрутку
        return () => {
            document.body.style.overflow = ''; // Восстанавливаем прокрутку при закрытии модального окна
        };
    }, []);

    // Обработчик событий для клика вне модального окна
    const handleOverlayClick = (event) => {
        if (event.target.className === 'modal-overlay') {
            handleClose();
        }
    };

    // Закрытие модального окна с изменением URL
    const handleClose = () => {
        // Удаление параметра продукта из URL
        const newUrl = location.pathname;
        navigate(newUrl);
        onClose();
    };

    return (
        <div className='modal-overlay' onClick={handleOverlayClick}>
            <div className='modal-card'>
                <button className='modal-close-btn' onClick={handleClose}>
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
                        {t('warning')}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
