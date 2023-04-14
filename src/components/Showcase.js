import image from '../assets/showcase.jpg'

export default function Showcase() {
	return(
		<div
			className='showcase'
			style={{ backgroundImage:`url(${image})`}}
		>
			<div className='container'>
				<div className='showcase-content'>
					<h1>Good food choices are good investments.</h1>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
					<button>Order Now</button>
					<button>Learn More</button>
				</div>
			</div>
		</div>
	);
}