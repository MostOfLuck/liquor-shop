import { Link } from 'react-router-dom'
import Image from '../images/wine1.png'
import { useTranslation } from 'react-i18next';


const MainHeader = () => {
  const { t } = useTranslation();
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#instadrink</h4>
          <h1>{t('Discover the Finest Alcoholic Beverages at R.I.L.L Collection')}</h1>
          <p>
          {t('Best Alcohol from all over the world')}
          </p>
          <Link to="/Catalog" className='btn lg'>{t('Open Catalog')}</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header" />
          </div>
        </div>
      </div>
    </header>
    
  )
}

export default MainHeader