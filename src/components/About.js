import food from '../assets/1.png';
import collage from '../assets/2.png';

export default function About() {
	return (
		<div className='container'>
			<div className='about'>
				<div className='about-item'>
					<img src={food} />
					<div>
						<h2>We pride ourselves on making real food from the best ingredients.</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
						<button>Learn More</button>
					</div>
				</div>
				<div className='about-item'>
					<div>
						<h2>We make everything by hand with the best possible ingredients.</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
						<button>Learn More</button>
					</div>
					<img src={collage} />
				</div>
			</div>
		</div>
	);
}