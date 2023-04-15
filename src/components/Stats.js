import { useEffect, useState } from "react";

const easeOutQuad = t => t * ( 2 - t );
const frameDuration = 1000 / 60;

const CountUpAnimation = ( { children, duration = 2000 } ) => {
	const countTo = parseInt( children, 10 );
	const [ count, setCount ] = useState( 0 );

	useEffect( () => {
		let frame = 0;
		const totalFrames = Math.round( duration / frameDuration );
		const counter = setInterval( () => {
			frame++;
			const progress = easeOutQuad( frame / totalFrames );
			setCount( countTo * progress );

			if ( frame === totalFrames ) {
				clearInterval( counter );
			}
		}, frameDuration );
	}, [] );

	return Math.floor( count );
};

export default function Stats() {
	return (
		<div className='stats-bg'>
			<div className='container'>
				<div className='stats'>
					<div>
						<h2><CountUpAnimation>1287</CountUpAnimation>+</h2>
						<p>savings</p>
					</div>
					<div>
						<h2><CountUpAnimation>5786</CountUpAnimation>+</h2>
						<p>photos</p>
					</div>
					<div>
						<h2><CountUpAnimation>1440</CountUpAnimation>+</h2>
						<p>rockets</p>
					</div>
					<div>
						<h2><CountUpAnimation>7110</CountUpAnimation>+</h2>
						<p>globes</p>
					</div>
				</div>
			</div>
		</div>
	);
}