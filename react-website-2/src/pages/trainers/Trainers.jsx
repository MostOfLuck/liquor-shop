import React from 'react';
import Header from '../../components/Header';
import HeaderImage from '../../productImages/WhatsApp Image 2024-03-03 at 16.04.01.jpeg';
import '../../data'; // Я не уверен, зачем импортирован этот файл. Если он не нужен, можно удалить эту строку.
import './trainers.css';

const Catalogs = () => {
  return (
    <>
      <Header title="Our Catalog" image={HeaderImage}>
        Facilis, iusto numquam unde laboriosam expedita qui exercitationem? Dicta vero accusantium est aut molestiae fugit doloremque suscipit quod.
      </Header>
      <section className="catalog">
        <div className="container catalog__container">
          {/* Ваш дальнейший JSX-код */}
        </div>
      </section>
    </>
  );
};

export default Catalogs;
