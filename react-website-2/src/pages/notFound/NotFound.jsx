import {Link} from 'react-router-dom'
import './notFound.css'
import { useTranslation } from 'react-i18next'

const NotFound = () => {
  const { t } = useTranslation()
  return (
    <section>
      <div className="container notfound__container">
        <h2>{t('Page Not Found')}</h2>
        <Link to="/" className='btn'>{t('Go Back Home')}</Link>
      </div>
    </section>
  )
}

export default NotFound