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
import { AiFillCaretRight } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../index.css';

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
            className: 'vodkino-image'
        },
        {
            id: 2,
            icon: <SiOpenaigym />,
            title: t('Cognac'),
            info: 'This is the day that the lord has made. We will rejoice!',
            path: '/catalog',
            imageSrc: cognacImg,
            className: 'vodkino-image'
        },
        {
            id: 3,
            icon: <SiOpenaigym />,
            title: t('Port wine'),
            info: 'This is the day that the lord has made. We will rejoice!',
            path: '/catalog',
            imageSrc: portImg,
            className: 'vodkino-image'
        },
        {
            id: 4,
            icon: <SiOpenaigym />,
            title: t('Vodkino'),
            info: 'This is the day that the lord has made. We will rejoice!',
            path: '/catalog',
            imageSrc: Vodkinoprev,
            className: 'vodkino-image',
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200, // Adjust this breakpoint as needed
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, // Tablet breakpoint
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480, // Mobile breakpoint
                settings: {
                    slidesToShow: 1,
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
                    {products.map(({ id, title, path, className, imageSrc }) => (
                        <Card className='programs__program' key={id}>
                            <h4>{title}</h4>
                            {imageSrc && <img src={imageSrc} alt='product__image' className={className} />}
                            <Link to={path} className='btn sm'>
                                {t('Learn More')} <AiFillCaretRight />
                            </Link>
                        </Card>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Programs;
