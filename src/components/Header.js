import { useState } from "react";
import logo from '../assets/logo.png';
import menu from '../assets/bar.png';

// TODO: media query for smaller viewport / sticky / transparent > white
export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const menuHandler = () => {
		setIsMenuOpen((prevState) => { return !prevState })
	}

	return (
		<header>
			<div className='container'>
				<nav>
					<img className='logo' src={logo} alt='logo' />
					<ul>
						<li>Home</li>
						<li>About Us</li>
						<li>Explore Foods</li>
						<li>Reviews</li>
						<li>FAQ</li>
						<li><button>1-800-123-456</button></li>
					</ul>
					<img onClick={menuHandler} className='menu' src={menu} alt='menu icon' />
				</nav>
			</div>
		</header>
	);
}