import { FaCrown } from 'react-icons/fa';
import SectionHead from './SectionHead';
import { products } from '../data';
import Card from '../UI/Card';
import wineImage from '../images/wine1.png';
import tequilaImage from '../images/Tequila.png'
import { Link } from 'react-router-dom';
import { AiFillCaretRight } from 'react-icons/ai';

const Programs = () => {
    return (
        <section className='programs'>
            <div className='container programs__container'>
                <SectionHead icon={<FaCrown />} title='Catalog' />
                <div className='programs__wrapper'>
                    {products.map(({ id, title, path }) => {
                        // Определение изображения в зависимости от id
                        let imageSrc;
                        if (id === 1) {
                            imageSrc = wineImage;
                        } else if (id === 2) {
                            imageSrc = tequilaImage;
                        } else if (id === 3) {
                            imageSrc = wineImage;
                        } else if (id === 4) {
                            imageSrc = tequilaImage;
                        } else if (id === 5) {
                            imageSrc = wineImage;
                        } else if (id === 6) {
                            imageSrc = tequilaImage;
                        } else if (id === 7) {
                            imageSrc = wineImage;
                        } else if (id === 8) {
                            imageSrc = tequilaImage;
                        }
                        
                        // Добавьте другие варианты для других id по мере необходимости

                        return (
                            <Card className='programs__program' key={id}>
                                <h4>{title}</h4>
                                {imageSrc && <img src={imageSrc} alt='product__image' />}
                                <Link to={path} className='btn sm'>
                                    Learn More <AiFillCaretRight />
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
