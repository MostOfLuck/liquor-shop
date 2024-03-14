import {Link} from 'react-router-dom'
import Logo from '../images/logo.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'




const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to="/" className='logo'>
                    <img src={Logo} alt="Footer Logo" />
                </Link>
                <p>
                Our Socials and contacts.
                </p>
                <div className="footer__socials">
                    <a href="https://linkedin.com/" target="_blank" rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href="https://facebook.com/" target="_blank" rel='noreferrer noopener'><FaFacebookF/></a>
                    <a href="https://twitter.com/" target="_blank" rel='noreferrer noopener'><AiOutlineTwitter/></a>
                    <a href="https://instagram.com/" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4 className='permalinks'> Permalinks</h4>
                <Link to="/catalog">Catalog</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4 className='Insights'>Insights</h4>
                <Link to="/s">Blog</Link>
                <Link to="/s">Communities</Link>
            </article>
            <article>
                <h4 className='get-in-touch'>Get In Touch</h4>
                <Link to="/contact">Contact Us</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2024 R.I.L.L Collection &copy; All Rights Reserved</small>
        </div>
    </footer>
  )
}

export default Footer