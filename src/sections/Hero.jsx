import {hero} from "../assets/images/index.js";


export const Hero = () => {
	return (
		<section>
			<img src={hero} alt="Hero"
					 className='w-full relative -z-10 object-cover h-[1000px] max-sm:h-[765px]'/>
		</section>
	)
}
