import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, Link } from 'react-router-dom';
import ProductModal from '../components/ModalWindow';
import Image from '../images/wine1.webp';
import '../index.css';
import { items } from '../pages/trainers/data-alc.js';

const MainHeader = () => {
  const { t, i18n } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const selectedProductId = localStorage.getItem('selectedProductId');
    if (selectedProductId) {
      const product = items.find((p) => p.id.toString() === selectedProductId);
      if (product) {
        setSelectedProduct({
          ...product,
          name: t(product.name, { defaultValue: product.name }),
          article: t(product.articleKey, {
            defaultValue: 'Article content missing',
          }),
          warning: t(product.warningKey, {
            defaultValue: 'Warning content missing',
          }),
        });
        setIsModalOpen(true);
      }
      localStorage.removeItem('selectedProductId');
    }

    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }

    const handleClickOutside = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        setSearchTerm('');
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [t]);

  const handleChange = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setSearchTerm(inputValue);

    const results = items.filter((product) => {
      const productName = t(product.name, {
        defaultValue: product.name,
      }).toLowerCase();
      const productCategory = t(`categories.${product.category}`, {
        defaultValue: product.category,
      }).toLowerCase();
      return (
        productName.includes(inputValue) || productCategory.includes(inputValue)
      );
    });

    setSearchResults(results.slice(0, 4));
  };

  const handleSearchSubmit = (product) => {
    setSelectedProduct({
      ...product,
      name: t(product.name, { defaultValue: product.name }),
      article: t(product.articleKey, {
        defaultValue: 'Article content missing',
      }),
      warning: t(product.warningKey, {
        defaultValue: 'Warning content missing',
      }),
    });
    setIsModalOpen(true);
    localStorage.setItem('selectedProductId', product.id.toString());
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <header className={`main__header ${i18n.dir()}`}>
      <div className='container main__header-container'>
        <div className='main__header-left'>
          <div className='main__search'>
            <input style={{ marginBottom: '30px' }}
              ref={searchInputRef}
              className='main_input'
              type='text'
              placeholder={t('Search')}
              value={searchTerm}
              onChange={handleChange}
            />
            <div className='search-results'>
              {searchTerm && searchResults.length > 0 && (
                <>
                  <ul style={{ maxHeight: '200px', overflowY: 'auto' }}>
                    {searchResults.map((product) => (
                      <li
                        key={product.id}
                        onClick={() => handleSearchSubmit(product)}
                      >
                        <img
                          src={product.image}
                          alt={t(product.name, { defaultValue: product.name })}
                        />
                        <span>
                          {t(product.name, { defaultValue: product.name })}
                        </span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
            <h1 className='main_header_header'>
              {t('Discover the Finest Alcoholic Beverages at R.I.L.L Collection')}
            </h1>
            <p className='paragraph_header'>{t('Best Alcohol from all over the world')}</p>
            <Link to='/Catalog' className='btn lg'>
              {t('Open Catalog')}
              <lord-icon
                src='https://cdn.lordicon.com/odavpkmb.json'
                trigger='hover'
                className='lordicon'
                colors='primary:#ffffff,secondary:#ffffff'
                style={{
                  width: '35px',
                  height: '35px',
                  marginLeft: '10px',
                  top: '10px',
                  marginRight: '10px',
                  transition: 'colors 0.3s ease',
                }}
              ></lord-icon>
            </Link>
          </div>
        </div>
        <div className='main__header-right'>
          <div className='main__header-circle'></div>
          <div className='main__header-image'>
            <img src={Image} alt='Main Header' />
          </div>
        </div>
      </div>
      {isModalOpen && selectedProduct && (
        <ProductModal product={selectedProduct} onClose={handleCloseModal} />
      )}
    </header>
  );
};

export default MainHeader;
