import image from '../assets/parallax.jpg';

export default function Parallax() {
	return (
		<div
			className='parallax-bg'
			style={{ backgroundImage: `url(${image})` }}
		>
			<div className='parallax-content'>
				<h2>Baked Fresh daily by bakers with passion</h2>
				<button>Learn More</button>
			</div>
		</div>
	);
}