import { FaCrown } from 'react-icons/fa';
import { SiOpenaigym } from 'react-icons/si'
import SectionHead from './SectionHead';
import Card from '../UI/Card';
import fiuzaImg from '../images/fiuzaImg.png'
import cognacImg from '../images/cognacimg.png'
import portImg from '../images/portImga.png'
import { Link } from 'react-router-dom';
import { AiFillCaretRight } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';



const Programs = () => {
    const { t } = useTranslation();
    const products = [
        {
            id: 1,
            icon: <SiOpenaigym />,
            title: t('Wine'),
            info: 'This is the day that the lord has made. We will rejoice!',
            path: '/catalog',
            imageSrc: "../src/images/wine1.png"
        },
        {
            id: 2,
            icon: <SiOpenaigym />,
            title: t('Cognac'),
            info: 'This is the day that the lord has made. We will rejoice!',
            path: '/catalog',
            imageSrc: "../src/images/wine1.png"
        },
        {
            id: 3,
            icon: <SiOpenaigym />,
            title: t('Port wine'),
            info: 'This is the day that the lord has made. We will rejoice!',
            path: '/catalog',
            imageSrc: '/images/src/wine1.png' 
        },
    ]
    return (
        <section className='programs'>
            <div className='container programs__container'>
                <SectionHead icon={<FaCrown />} title={t('Catalog')} />
                <div className='programs__wrapper'>
                    {products.map(({ id, title, path }) => {
                        // Определение изображения в зависимости от id
                        let imageSrc;
                        if (id === 1) {
                            imageSrc = fiuzaImg;
                        } else if (id === 2) {
                            imageSrc = cognacImg;
                        } else if (id === 3) {
                            imageSrc = portImg;
                            }
                        
                        // Добавьте другие варианты для других id по мере необходимости

                        return (
                            <Card className='programs__program' key={id}>
                                <h4>{title}</h4>
                                {imageSrc && <img src={imageSrc} alt='product__image' />}
                                <Link to={path} className='btn sm'>
                                    {t('Learn More')} <AiFillCaretRight />
                                </Link>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Programs;
