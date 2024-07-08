import Header from '../../components/Header'
import HeaderImage from '../../productImages/WhatsApp Image 2024-03-03 at 16.04.03 (1).jpeg'
import { MdEmail } from 'react-icons/md'
import { FaTiktok } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'
import './contact.css'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()
  return (
    <>
      <Header title={t('Get In Touch')} image={HeaderImage}>
        {t('We are on Facebook, Tiktok, & Instagram. You can also contact us via Email.')}
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="mailto:rillcollection2023@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail color="#D44638" /></a>
            <a href="https://www.instagram.com/rillcollection2023" target="_blank" rel="noreferrer noopener"><FaInstagramSquare color="#E4405F" /></a>
            <a href="https://www.facebook.com/rillcollection2023" target="_blank" rel="noreferrer noopener"><FaFacebookSquare color="#1877F2" /></a>
            <a href="https://www.tiktok.com/@r.i.l.l_collection?_t=8kg2tmwazac&_r=1" target="_blank" rel="noreferrer noopener"><FaTiktok color="#000000" /></a>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
