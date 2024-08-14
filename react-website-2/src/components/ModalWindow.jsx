import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';
import '../index.css'; // Подключение общего CSS файла

const ProductModal = ({ product, onClose }) => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const [showDetails, setShowDetails] = useState(false); // State to toggle between descriptions

    // Блокировка прокрутки при открытии модального окна
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
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
                {/* Отображение только основной фотографии */}
                {product.image && (
                    <img
                        className='product__image'
                        src={product.image}
                        alt={product.name}
                    />
                )}
                <h2 className='product__title'>{product.name}</h2>

                <div className='button-group'>
                    <button
                        className={`toggle-btn ${!showDetails ? 'active' : ''}`}
                        onClick={() => setShowDetails(false)}
                    >
                        {t('Description')}
                    </button>
                    <button
                        className={`toggle-btn ${showDetails ? 'active' : ''}`}
                        onClick={() => setShowDetails(true)}
                    >
                        {t('More Details')}
                    </button>
                </div>

                {!showDetails ? (
                    <div>
                        <p className='product__description'>{t(product.articleKey)}</p>
                        {/* Возвращено предупреждение о вреде алкоголя */}
                        <p className='product__warning'>{t('Warning about alcohol')}</p>
                    </div>
                ) : (
                    <div>
                        <div className='details-table'>
                            <div className='table-row'>
                                <div className='table-cell'>{t('Alcohol Strength')}</div>
                                <div className='table-cell'>{product.alcoholStrength}</div>
                            </div>
                            <div className='table-row'>
                                <div className='table-cell'>{t('Origin')}</div>
                                <div className='table-cell'>{product.origin}</div>
                            </div>
                            <div className='table-row'>
                                <div className='table-cell'>{t('Bottle Volume')}</div>
                                <div className='table-cell'>{product.bottleVolume}</div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductModal;
