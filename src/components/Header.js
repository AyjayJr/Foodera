import React from "react";
import logo from '../assets/logo.png';

// TODO: media query for smaller viewport / sticky / transparent > white
export default function Header() {
	return (
		<header>
			<div className='container'>
				<nav>
					<img src={logo} />
					<ul>
						<li>Home</li>
						<li>About Us</li>
						<li>Explore Foods</li>
						<li>Reviews</li>
						<li>FAQ</li>
						<li><button>1-800-123-456</button></li>
					</ul>
				</nav>
			</div>
		</header>
	);
}