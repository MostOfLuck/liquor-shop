import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'; // Импорт иконки
import Header from '../../components/Header';
import ProductModal from '../../components/ModalWindow';
import HeaderImage from '../../images/alkogol-1.webp';
import './catalog.css';
import { items } from './data-alc';

const Catalog = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchCategory, setSearchCategory] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryFromURL = searchParams.get('category');
    const productFromURL = searchParams.get('product');

    if (categoryFromURL) {
      setSearchCategory(decodeURIComponent(categoryFromURL));
    }

    if (productFromURL) {
      const product = items.find(item => item.id === parseInt(productFromURL, 10));
      if (product) {
        handleCardClick(product, false);
      }
    }
  }, [location.search]);

  const groupedItems = useMemo(() => {
    const grouped = {};
    items.forEach(item => {
      const translatedCategory = t(item.category, {
        defaultValue: item.category,
      });
      if (!grouped[translatedCategory]) {
        grouped[translatedCategory] = [item];
      } else {
        grouped[translatedCategory].push(item);
      }
    });
    return grouped;
  }, [t]);

  const handleChange = event => {
    const inputValue = event.target.value.toLowerCase();
    setSearchTerm(inputValue);

    const isCategory = Object.keys(groupedItems).includes(inputValue);

    setSearchResults(
      items.filter(product => {
        const productNameMatch = t(product.name, { defaultValue: product.name })
          .toLowerCase()
          .includes(inputValue);
        const categoryMatch = t(product.category, {
          defaultValue: product.category,
        })
          .toLowerCase()
          .includes(inputValue);
        const idMatch = product.id.toString() === inputValue;
        const categorySelected =
          searchCategory.toLowerCase() ===
          t(product.category, { defaultValue: product.category }).toLowerCase();
        return (
          (productNameMatch || categoryMatch || idMatch) &&
          (!searchCategory || categorySelected)
        );
      })
    );

    if (isCategory) {
      setSearchCategory(inputValue);
    } else {
      setSearchCategory('');
    }
  };

  const handleCardClick = (product, updateUrl = true) => {
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

    if (updateUrl) {
      navigate(`?product=${product.id}`, { replace: true });
    }
  };

  useEffect(() => {
    const results = items.filter(item => {
      const nameMatch = t(item.name, { defaultValue: item.name })
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const idMatch = item.id.toString() === searchTerm;
      return (
        (nameMatch || idMatch) &&
        (!searchCategory ||
          t(item.category, { defaultValue: item.category }) === searchCategory)
      );
    });
    setSearchResults(results);

    if (results.length === 1) {
      handleCardClick(results[0]);
    }
  }, [searchTerm, searchCategory, t]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    navigate('', { replace: true });
  };

  const renderCategoryFilter = () => (
    <>
      <div className='category-list-container'>
        <div className={`category-filter ${i18n.language === 'he' ? 'category-filter--rtl' : ''}`}>
          <div className='search-bar-container'>
            <FaSearch className='search-icon' /> {/* Иконка лупы */}
            <input
              type='text'
              placeholder={t('Search')}
              value={searchTerm}
              onChange={handleChange}
              className='search-bar'
            />
          </div>
        </div>
        
        <div className='category-wheel'>
          <div
            className={`category-item ${!searchCategory ? 'active' : ''}`}
            onClick={() => setSearchCategory('')}
          >
            {t('All Categories')}
          </div>
          {Object.keys(groupedItems).map(category => (
            <div
              key={category}
              className={`category-item ${searchCategory === category ? 'active' : ''}`}
              onClick={() => setSearchCategory(category)}
            >
              {category}
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const renderFilteredProducts = () => {
    if (searchResults.length === 0) {
      return <p>{t('No results found.')}</p>;
    }

    return Object.keys(groupedItems).map(category => {
      if (
        !groupedItems[category] ||
        (searchCategory && searchCategory !== category)
      ) {
        return null;
      }

      const filteredProducts = searchResults.filter(
        product =>
          t(product.category, { defaultValue: product.category }) === category
      );

      if (filteredProducts.length === 0) {
        return null;
      }

      return (
        <div key={category} className='category-section'>
          <h2 className='category_name'>{category}</h2>
          <div className='product-grid'>
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className='product-card'
                onClick={() => handleCardClick(product)}
              >
                <img
                  src={product.image}
                  alt={t(product.name, { defaultValue: product.name })}
                />
                <h3>{t(product.name, { defaultValue: product.name })}</h3>
                <p>
                  {t(product.description, {
                    defaultValue: product.description,
                  })}
                </p>
              </div>
            ))}
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <Header title={t('Alcohol 🍾')} image={HeaderImage} />
      <section className='catalog'>
        <div className='container catalog__container'>
          {renderCategoryFilter()}
          <div className='main-content'>
            {renderFilteredProducts()}
          </div>
        </div>
      </section>
      {isModalOpen && selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default Catalog;
