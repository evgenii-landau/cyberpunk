import {cyberpunk, hp, img, screen} from "../assets/images/index.js";
import {Hp} from "../constants/index.js";
import {Button} from "../components/Button.jsx";


export const HP = () => {
	return (
		<section className='max-container flex gap-[32px] py-[70px] max-tablet:flex-col max-tablet:items-center'>
			{/* left row */}
			<div className='l-hp flex flex-col items-center flex-shrink-0 max-xl:max-w-[460px]'>
				<img className='mb-[25px]' src={screen} alt="Screen" width={624} height={430}/>
				<div className='flex max-xl:flex-col max-xl:gap-[25px] max-xl:items-center'>
					<img src={hp} alt="HP logo" width={80} height={80}/>
					<img src={img} alt="logo" width={90} height={20}/>
					<img src={cyberpunk} alt="Cyberpunk logo" width={320} height={80}/>
				</div>
			</div>

			{/* right row */}
			<div className='r-hp'>
				<div className='flex flex-col gap-[25px] mb-[40px]'>
					<h2 className='text-title max-mob:text-title-mob'>Полное погружение вместе с HP</h2>
					<p className='text-def max-mob:text-def-mob'>
						Погрузись в современные экшен-игры с реалистичным изображением с помощью монитора с диагональю 23,8 дюйма,
						созданном для отображения максимально насыщенных цветов. Успевай реагировать на любые события с временем
						отклика 1 мс и частотой в 144 Гц!
					</p>
					<ul className='flex flex-col gap-[15px] max-tablet:flex-row max-sm:flex-col '>
						{Hp.map((item, index) => (
							<li key={index} className='flex items-center'>
								<img src={item.imgURL} alt={item.alt} width={32} height={32} className='mr-[10px]'/>
								<p>{item.text}</p>
							</li>
						))}
					</ul>
				</div>

				<Button text_color={'text-yellow'}>Подробнее</Button>
			</div>
		</section>
	)
}
