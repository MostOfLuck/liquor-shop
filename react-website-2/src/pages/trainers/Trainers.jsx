import Header from '../../components/Header';
import '../../data'
import HeaderImage from '../../productImages/WhatsApp Image 2024-03-03 at 16.04.01.jpeg';
import './trainers.css';

const Catalogs = () => {
  return (
    <>
      <Header title="Our Catalog" image={HeaderImage}>
        Facilis, iusto numquam unde laboriosam expedita qui exercitationem? Dicta vero accusantium est aut molestiae fugit doloremque suscipit quod.
      </Header>
             {/* Вставляем HTML-код прямо под картинкой */}
             <div class="wrapper">
          <div id="search-container">
            <input
              type="search"
              id="search-input"
              placeholder="Search product name here.."
            />
            <button id="search">Search</button>
          </div>
          <div id="buttons">
            <button class="button-value" onclick="filterProduct('all')">All</button>
            <button class="button-value" onclick="filterProduct('Topwear')">
              Topwear
            </button>
            <button class="button-value" onclick="filterProduct('Bottomwear')">
              Bottomwear
            </button>
            <button class="button-value" onclick="filterProduct('Jacket')">
              Jacket
            </button>
            <button class="button-value" onclick="filterProduct('Watch')">
              Watch
            </button>
          </div>
          <div id="products"></div>
        </div>
        {/* Конец вставленного HTML-кода */}
      <section className="catalog">
        <div className="container catalog__container">
          {/* Ваш дальнейший JSX-код */}
        </div>
      </section>
    </>
  );
};

export default Catalogs;
