import image from '../assets/1.jpg'

export default function Banner() {
	return (
		<div
			className='banner-bg'
			style={{ backgroundImage: `url(${image})` }}
		>
			<div className='container'>
				<div className='banner-content'>
					<h2>When a man's stomach is full it makes no difference whether he is rich or poor.</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
					<button>Learn More</button>
				</div>
			</div>
		</div>
	);
}