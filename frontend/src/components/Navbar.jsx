import { Link, NavLink } from 'react-router-dom'
import './navbar.css'
import Logo from '../images/logo.png'
import { links } from '../data.js'
import { AiOutlineBars } from "react-icons/ai";

const Navbar = () => {
	return (
		<nav>
			<div className='.container nav__container'>
				<Link to={'/'} className='logo'>
					<img src={Logo} alt='Nav logo' />
				</Link>
				<ul className='nav__links'>
					{links.map(({ name, path }, index) => {
						return (
							<li>
								<NavLink to={path}>{name}</NavLink>
							</li>
						)
					})}
				</ul>
				<button className="nav__toggle-btn">
				<AiOutlineBars />
				</button>
			</div>
		</nav>
	)
}

export default Navbar
