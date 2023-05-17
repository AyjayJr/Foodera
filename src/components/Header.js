import logo from '../assets/logo.png';
import menu from '../assets/bar.png';

// TODO: media query for smaller viewport / sticky / transparent > white
export default function Header(props) {
	return (
		<header>
			<div className='container'>
				<nav>
					<img className='logo' src={logo} alt='logo' />
					<ul>
						<li><a href='#'>Home</a></li>
						<li><a href='#'>About Us</a></li>
						<li><a href='#'>Explore Foods</a></li>
						<li><a href='#'>Reviews</a></li>
						<li><a href='#'>FAQ</a></li>
						<li><button>1-800-123-456</button></li>
					</ul>
					<img
						onClick={props.onClick}
						className='menu'
						src={menu}
						alt='menu icon'
					/>
				</nav>
			</div>
		</header>
	);
}