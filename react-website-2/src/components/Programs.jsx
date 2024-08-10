import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import cognacImage from '../images/cognacImage.jpg';
import portImage from '../images/portImage.jpg';
import WineImage from '../images/winesmall.png';
import BeerImage from '../images/zf7uma2h01h8yvk0f5mq7tdezswo17q5.jpg';
import '../index.css';
import './programs.css';
import SectionHead from './SectionHead';

const Programs = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      imageSrc: WineImage,
      title: t('Wine'),
      path: '/catalog',
    },
    {
      id: 2,
      imageSrc: cognacImage,
      title: t('Cognac'),
      path: '/catalog',
    },
    {
      id: 3,
      imageSrc: portImage,
      title: t('Port'),
      path: '/catalog',
    },
    {
      id: 4,
      imageSrc: BeerImage,
      title: t('Beer'),
      path: '/catalog',
    },
  ];

  const handleProductClick = (title) => {
    navigate(`/catalog?category=${encodeURIComponent(title)}`);
  };

  return (
    <section className='programs'>
      <div className='container programs__container'>
        <SectionHead
          icon={<FaShoppingCart />}
          title={t('Popular product categories')}
          className={'programs_head_title'}
        />
        <div className='programs__icons'>
          {products.map(({ id, title, imageSrc }) => (
            <div
              key={id}
              className='programs__icon-item'
              onClick={() => handleProductClick(title)}
            >
{imageSrc && (
  <div className="programs__image-container">
    <img src={imageSrc} alt={title} className='programs__image' />
    <h4 className='programs__title'>{title}</h4>
  </div>
)}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
