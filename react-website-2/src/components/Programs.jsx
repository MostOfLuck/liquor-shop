import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaShoppingCart } from 'react-icons/fa'
import '../index.css'
import './programs.css'
import SectionHead from './SectionHead'

const Programs = () => {
  const { t } = useTranslation()
  const products = [
    {
      id: 1,
      title: t('Wine'),
      path: '/catalog',
    },
    {
      id: 2,
      title: t('Cognac'),
      path: '/catalog',
    },
    {
      id: 3,
      title: t('Port wine'),
      path: '/catalog',
    },
    {
      id: 4,
      title: t('Vodka'),
      path: '/catalog',
    },
  ]

  return (
    <section className='programs'>
      <div className='container programs__container'>
        <SectionHead icon={<FaShoppingCart />} title={t('Catalog')} />
        <div className='programs__icons'>
          {products.map(({ id, icon, title }) => (
            <div key={id} className='programs__icon-item'>
              <div className='programs__icon'>{icon}</div>
              <h4 className='programs__title'>{title}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
