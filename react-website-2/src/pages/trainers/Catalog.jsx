import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaSearch, FaTimes } from 'react-icons/fa';
import LazyLoad from 'react-lazyload';
import { useLocation, useNavigate } from 'react-router-dom';
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
    const [hoveredProductId, setHoveredProductId] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    const handleCardClick = useCallback(
        (product, updateUrl = true) => {
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
        },
        [navigate, t]
    );

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const categoryFromURL = searchParams.get('category');
        const productFromURL = searchParams.get('product');

        if (categoryFromURL) {
            setSearchCategory(decodeURIComponent(categoryFromURL));
        }

        if (productFromURL) {
            const product = items.find(
                item => item.id === parseInt(productFromURL, 10)
            );
            if (product) {
                handleCardClick(product, false);
            }
        }
    }, [location.search, handleCardClick]);

    const groupedItems = useMemo(() => {
        const grouped = {};
        items.forEach(item => {
            const translatedCategory = t(item.category, {
                defaultValue: item.category,
            });
            if (!grouped[translatedCategory]) {
                grouped[translatedCategory] = {
                    items: [item],
                    className: `category-${translatedCategory.toLowerCase().replace(/\s+/g, '-')}`
                };
            } else {
                grouped[translatedCategory].items.push(item);
            }
        });
        return grouped;
    }, [t]);

    const handleChange = useCallback(
        event => {
            const inputValue = event.target.value.toLowerCase();
            setSearchTerm(inputValue);

            const isCategory = Object.keys(groupedItems).includes(inputValue);

            setSearchResults(
                items.filter(product => {
                    const productNameMatch = t(product.name, {
                        defaultValue: product.name,
                    })
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
                        t(product.category, {
                            defaultValue: product.category,
                        }).toLowerCase();
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
        },
        [groupedItems, searchCategory, t]
    );

    const handleClearSearch = useCallback(() => {
        setSearchTerm('');
        setSearchResults([]);
        setSearchCategory('');
    }, []);

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
    }, [searchTerm, searchCategory, t, handleCardClick]);

    const handleMouseEnter = useCallback(productId => {
        setHoveredProductId(productId);
    }, []);

    const handleMouseLeave = useCallback(() => {
        setHoveredProductId(null);
    }, []);

    const handleCloseModal = useCallback(() => {
        setIsModalOpen(false);
        setSelectedProduct(null);
        navigate('', { replace: true });
    }, [navigate]);

    const paginatedCategories = useMemo(() => {
        const categoriesPerPage = 3;
        const categoryKeys = Object.keys(groupedItems);
        const filteredCategoryKeys = searchCategory
            ? categoryKeys.filter(category => category === searchCategory)
            : categoryKeys;
        const startIndex = (currentPage - 1) * categoriesPerPage;
        const endIndex = startIndex + categoriesPerPage;
        return filteredCategoryKeys.slice(startIndex, endIndex);
    }, [groupedItems, currentPage, searchCategory]);

    const renderCategoryFilter = useCallback(() => (
        <>
            <div className='category-list-container'>
                <div
                    className={`category-filter ${
                        i18n.language === 'he' ? 'category-filter--rtl' : ''
                    }`}
                >
                    <div className='search-bar-container'>
                        <FaSearch className='search-icon' />
                        <input
                            type='text'
                            placeholder={t('Search')}
                            value={searchTerm}
                            onChange={handleChange}
                            className='search-bar'
                        />
                        {searchTerm && (
                            <button className='clear-search-button green-button' onClick={handleClearSearch}>
                                <FaTimes />
                            </button>
                        )}
                    </div>
                </div>

                <div className='category-wheel'>
                    <div
                        className={`category-item ${!searchCategory ? 'active' : ''}`}
                        onClick={() => {
                            setSearchCategory('');
                            setCurrentPage(1);
                        }}
                    >
                        {t('All Categories')}
                    </div>
                    {Object.keys(groupedItems).map(category => (
                        <CategoryItem
                            key={category}
                            category={category}
                            className={groupedItems[category].className}
                            isActive={searchCategory === category}
                            onClick={() => {
                                setSearchCategory(category);
                                setCurrentPage(1);
                            }}
                        />
                    ))}
                </div>
            </div>
        </>
    ), [groupedItems, searchCategory, searchTerm, handleChange, handleClearSearch, i18n.language, t]);

    const renderFilteredProducts = useCallback(() => {
        if (searchResults.length === 0) {
            return <p>{t('No results found.')}</p>;
        }

        const groupedResults = searchResults.reduce((acc, product) => {
            const category = t(product.category, { defaultValue: product.category });
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(product);
            return acc;
        }, {});

        return Object.keys(groupedResults).map(category => (
            <div key={category} className='category-section'>
                <h2 className={groupedItems[category].className}>{category}</h2>
                <div className='product-grid'>
                    {groupedResults[category].map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isHovered={hoveredProductId === product.id}
                            onMouseEnter={() => handleMouseEnter(product.id)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleCardClick(product)}
                        />
                    ))}
                </div>
            </div>
        ));
    }, [searchResults, hoveredProductId, handleMouseEnter, handleMouseLeave, handleCardClick, t, groupedItems]);

    const renderCategoriesWithProducts = useCallback(() => {
        return paginatedCategories.map(category => (
            <div key={category} className='category-section'>
                <h2 className={groupedItems[category].className}>{t(category)}</h2>
                <div className='product-grid'>
                    {groupedItems[category].items.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            isHovered={hoveredProductId === product.id}
                            onMouseEnter={() => handleMouseEnter(product.id)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => handleCardClick(product)}
                        />
                    ))}
                </div>
            </div>
        ));
    }, [paginatedCategories, groupedItems, hoveredProductId, handleMouseEnter, handleMouseLeave, handleCardClick, t]);

    return (
        <>
            <Header children={t('R.I.L.L Collection online storefront')} title={t('Alcohol 🍾')} image={HeaderImage} />
            <section className='catalog'>
                <div className='container catalog__container'>
                    {renderCategoryFilter()}
                    <div className='main-content'>
                        {searchTerm || searchCategory ? renderFilteredProducts() : renderCategoriesWithProducts()}
                    </div>
                    <div className='pagination'>
                        <button
                            className='pagination-button'
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage((prev) => prev - 1)}
                        >
                            {t('PREVIOUS')}
                        </button>
                        <button
                            className='pagination-button'
                            disabled={searchResults.length <= currentPage * 9}
                            onClick={() => setCurrentPage((prev) => prev + 1)}
                        >
                            {t('NEXT')}
                        </button>
                    </div>
                </div>
            </section>
            {isModalOpen && selectedProduct && (
                <ProductModal product={selectedProduct} onClose={handleCloseModal} />
            )}
        </>
    );
};

const CategoryItem = React.memo(({ category, className, isActive, onClick }) => {
    const { t } = useTranslation();
    return (
        <div
            className={`category-item ${isActive ? 'active' : ''} ${className}`}
            onClick={onClick}
        >
            {t(category)}
        </div>
    );
});

const ProductCard = React.memo(({ product, isHovered, onMouseEnter, onMouseLeave, onClick }) => {
    const { t } = useTranslation();
    return (
        <div
            className='product-card'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        >
            <LazyLoad height={200} offset={100}>
                <img
                    src={isHovered && product.hoverImage ? product.hoverImage : product.image}
                    alt={t(product.name, { defaultValue: product.name })}
                    loading='lazy'
                />
            </LazyLoad>
            <h3>{t(product.name, { defaultValue: product.name })}</h3>
            <p>{t(product.description, { defaultValue: product.description })}</p>
        </div>
    );
});

export default React.memo(Catalog);