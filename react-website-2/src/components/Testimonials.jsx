import { useState, useEffect } from "react";
import SectionHead from "./SectionHead";
import { ImQuotesLeft } from 'react-icons/im';
import Card from "../UI/Card";
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import { testimonials } from "../data";
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
    const [index, setIndex] = useState(0);
    const { name, quote, job, avatar } = testimonials[index];
    const { t } = useTranslation();

    const prevTestimonialHandler = () => {
        setIndex(prev => prev <= 0 ? testimonials.length - 1 : prev - 1);
    };

    const nextTestimonialHandler = () => {
        setIndex(prev => prev >= testimonials.length - 1 ? 0 : prev + 1);
    };

    useEffect(() => {
        const interval = setInterval(nextTestimonialHandler, 5000); // меняем отзыв каждые 5 секунд

        return () => clearInterval(interval); // очищаем интервал при размонтировании компонента
    }, []);

    return (
        <section className="testimonials">
            <div className="container testimonials__container">
                <SectionHead icon={<ImQuotesLeft />} title={t('Reviews')} className="testimonials__head" />
                <Card className="testimonial">
                    <p className="testimonial__quote">{`"${quote}"`}</p>
                    <h5>{name}</h5>
                    <small className="testimonial__title">{job}</small>
                </Card>
                <div className="testimonials__controls">
                    <IoIosArrowDropleftCircle onClick={prevTestimonialHandler} />
                    <IoIosArrowDroprightCircle onClick={nextTestimonialHandler} />
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
