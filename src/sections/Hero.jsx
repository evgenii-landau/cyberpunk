import {hero} from "../assets/images/index.js";
import {Button} from "../components/Button.jsx";


export const Hero = () => {
	return (
		<>
			<section>
				<img src={hero} alt="Hero"
						 className='w-full absolute top-0 left-0 -z-10 object-cover h-[1000px] max-sm:h-[765px]'/>
				<div className='max-container relative'>
					<div className='max-w-[625px] mb-[25px] bg-yellow p-[70px] absolute right-0 top-[517px] max-sm:max-w-[320px] max-sm:top-[404px] max-sm:h-[207px] max-sm:py-[30px] max-sm:px-[12px]'
							 style={{clipPath: 'polygon(9% 0px, 0px 15%, 0px 100%, 6% 101%, 17% 100%, 38% 101%, 56% 100%, 88% 104%, 103% 80%, 100% 0%)'}}>
						<h1 className='text-title max-w-[484px] mb-[25px] max-sm:text-title-mob'>Доступно на всех платформах</h1>
						<Button size={'24px'} smallSize={'20px'}>Узнать больше</Button>
					</div>
				</div>
			</section>
		</>
	)
}
