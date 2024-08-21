import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaFacebookF, FaTiktok } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'

const Footer = () => {
    const { t } = useTranslation()
    return (
        <footer>
            <div className="container footer__container">
                <article>
                    <Link to="/" className='logo'>
                        <img src={Logo} alt="Footer Logo" />
                    </Link>
                    <p>{t('Our Socials and contacts.')}</p>
                    <div className="footer__socials green-icons">
                        <a href="https://www.facebook.com/profile.php?id=61550841014733&mibextid=LQQJ4d" target="_blank" rel='noreferrer noopener'><FaFacebookF /></a>
                        <a href="https://www.tiktok.com/@r.i.l.l.collectio?_t=8p1i50r7Gd7&_r=1https://www.tiktok.com/@r.i.l.l.collectio?_t=8p1i50r7Gd7&_r=1" target="_blank" rel='noreferrer noopener'><FaTiktok /></a>
                        <a href="https://www.instagram.com/rill_collection?igsh=MTh1bm90MTU4eXphbA%3D%3D" target="_blank" rel='noreferrer noopener'><AiFillInstagram /></a>
                    </div>
                </article>
                <article>
                    <h4 className='permalinks'>{t('Permalinks')}</h4>
                    <Link to="/catalog">{t('Catalog')}</Link>
                    <Link to="/contact">{t('Contact')}</Link>
                </article>
                <article>
                    <h4 className='Insights'>{t('Insights')}</h4>
                    <Link to="https://www.instagram.com/rill_collection?igsh=MTh1bm90MTU4eXphbA%3D%3D">{t('Blog')}</Link>
                    <Link to="https://www.facebook.com/profile.php?id=61550841014733&mibextid=LQQJ4d">{t('Communities')}</Link>
                </article>
                <h4 className='address'>
                    {t('Contact')} :<br />
                    {t('R.I.L.L Collection Ltd')}<br />
                    {t('Import and marketing of quality products.')}<br />
                    {t('Street 8 Azur')}<br />
                    {t('Postal code 5802920, Israel')}<br />
                    {t('Phone ☎: 03-6542200 Mobile 📱: 052-4448940')}<br />
                    {t('Email: rillcollection2023@gmail.com')}
                </h4>
            </div>
            <div className="footer__copyright">
                <small>2024 R.I.L.L Collection LTD &copy; All Rights Reserved</small>
            </div>
        </footer>
    )
}

export default Footer
