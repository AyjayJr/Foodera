import Carousel from "./Carousel";
import pfp1 from "../assets/pfp1.jpg";
import pfp2 from "../assets/pfp2.jpg";
import pfp3 from "../assets/pfp3.jpg";

export default function Testimonials() {
	return (
		<div className='testimonial-bg'>
			<h2>Testimonials</h2>
				<Carousel>
					<div className='testimonial'>
						<img className='pfp' src={pfp1} alt='Author'/>
						<p className='quote'>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."</p>
						<p className='author'>John Doe - Web Designer</p>
					</div>
					<div className='testimonial'>
						<img className='pfp' src={pfp2} alt='Author'/>
						<p className='quote'>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."</p>
						<p className='author'>John Doe - Web Designer</p>
					</div>
					<div className='testimonial'>
						<img className='pfp' src={pfp3} alt='Author'/>
						<p className='quote'>"Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts."</p>
						<p className='author'>John Doe - Web Designer</p>
					</div>
				</Carousel>
		</div>
	);
}