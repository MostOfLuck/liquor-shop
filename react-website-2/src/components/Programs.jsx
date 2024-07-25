import React from 'react';
import Slider from 'react-slick';
import { FaCrown } from 'react-icons/fa';
import { SiOpenaigym } from 'react-icons/si';
import SectionHead from './SectionHead';
import Card from '../UI/Card';
import fiuzaImg from '../images/fiuzaImg.png';
import cognacImg from '../images/cognacimg.png';
import portImg from '../images/portImga.png';
import Vodkinoprev from '../images/Vodkinoprev.jpg';
import { Link } from 'react-router-dom';
import { AiFillCaretRight, AiFillCaretLeft } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css';

// Кастомные компоненты для стрелок
const NextArrow = ({ onClick }) => {
    return (
        <div className='slick-arrow slick-next' onClick={onClick}>
            <AiFillCaretRight style={{ color: 'green', fontSize: '2rem' }} />
        </div>
    );
};

const PrevArrow = ({ onClick }) => {
    return (
        <div className='slick-arrow slick-prev' onClick={onClick}>
            <AiFillCaretLeft style={{ color: 'green', fontSize: '2rem' }} />
        </div>
    );
};

const Programs = () => {
    const { t } = useTranslation();
    const products = [
        {
            id: 1,
            icon: <SiOpenaigym />,
            title: t('Wine'),
            info: 'This is the day that the lord has made. We will rejoice!',
            path: '/catalog',
            imageSrc: fiuzaImg,
            className: 'Image-stock-programs'
        },
        {
            id: 2,
            icon: <SiOpenaigym />,
            title: t('Cognac'),
            info: 'This is the day that the lord has made. We will rejoice!',
            path: '/catalog',
            imageSrc: cognacImg,
            className: 'Image-stock-programs'
        },
        {
            id: 3,
            icon: <SiOpenaigym />,
            title: t('Port wine'),
            info: 'This is the day that the lord has made. We will rejoice!',
            path: '/catalog',
            imageSrc: portImg,
            className: 'Image-stock-programs'
        },
        {
            id: 4,
            icon: <SiOpenaigym />,
            title: t('Vodkino'),
            info: 'This is the day that the lord has made. We will rejoice!',
            path: '/catalog',
            imageSrc: Vodkinoprev,
            className: 'Image-stock-programs'
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        autoplay: true,
        autoplaySpeed: 3000, // Скорость прокрутки в миллисекундах
        responsive: [
            {
                breakpoint: 1024, // Максимальная ширина экрана для планшетов
                settings: {
                    slidesToShow: 2, // Показывать 2 слайда
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600, // Максимальная ширина экрана для мобильных устройств
                settings: {
                    slidesToShow: 1, // Показывать 1 слайд
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className='programs'>
            <div className='container programs__container'>
                <SectionHead icon={<FaCrown />} title={t('Catalog')} />
                <Slider {...settings}>
                    {products.map(({ id, title, path, imageSrc }) => (
                        <Card className='programs__program' key={id}>
                            <h4>{title}</h4>
                            {imageSrc && <img src={imageSrc} alt='product__image' className='product_image' />}
                            <Link to={path} className='btn sm'>
                                {t('Learn More')} <AiFillCaretRight />
                            </Link>
                        </Card>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Programs;
