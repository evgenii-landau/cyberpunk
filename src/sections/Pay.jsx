import {pay, platforms} from "../constants/index.js";

export const Pay = () => {
	return (
		<section className='text-white max-mob:flex max-mob:flex-col max-mob:px-[15px]'>
			<h2 className='text-title max-mob:text-title-mob mb-[25px]'>Купить игру Cyberpunk 2077</h2>
			<span className='text-mark max-mob:text-mark-mob'>В комплект входит:</span>
			<ul className='flex flex-col gap-[15px] mb-[70px] mt-[15px]'>
				{pay.map((item, index) => (
					<li key={index} className='flex items-center'>
						<img className='mr-[10px]' src={item.imgURL} alt={item.alt}/>
						<span>{item.text}</span>
					</li>
				))}
			</ul>
			<div>
				<span className='text-mark max-mob:text-mark-mob'>Выберите платформу:</span>
				<ul className='max-w-[320px] flex flex-wrap gap-[50px] items-center mt-[25px]'>
					{platforms.map((item, index) => (
						<li key={index}>
							<img src={item.imgURL} alt={item.alt}/>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
