import {logo} from "../assets/images/index.js";
import {facebook, instagram, twitch, twitter, vk, you_tube} from "../assets/icons/index.js";
import {Button} from "./Button.jsx";

export const Nav = () => (
	<header className='absolute pt-[20px] w-full h-[1000px]'>
		<nav className='max-container w-full flex justify-between items-center max-sm:flex-col'>
			<img src={logo} alt="Logo" className='max-sm:mb-[10px]'/>
			<ul className='flex gap-[40px]'>
				<li>
					<a href="#!">
						<img src={you_tube} alt="YouTube"/>
					</a>
				</li>
				<li>
					<a href="#!">
						<img src={vk} alt="VK"/>
					</a>
				</li>
				<li>
					<a href="#!"><img src={facebook} alt="Facebook"/></a>
				</li>
				<li>
					<a href="#!">
						<img src={twitter} alt="Twitter"/></a>
				</li>
				<li>
					<a href="#!">
						<img src={twitch} alt="Twitch"/></a>
				</li>
				<li>
					<a href="#!">
						<img src={instagram} alt={instagram}/></a>
				</li>
			</ul>
		</nav>

		<div className='max-container h-[906px] flex justify-end items-end max-sm:h-[631px]'>
			<div
				className='max-w-[625px] bg-yellow p-[70px] max-sm:max-w-[320px] max-sm:top-[404px] max-sm:h-[207px] max-sm:py-[30px] max-sm:px-[12px]'
				style={{clipPath: 'polygon(9% 0px, 0px 15%, 0px 100%, 6% 101%, 17% 100%, 38% 101%, 56% 100%, 88% 104%, 103% 80%, 100% 0%)'}}>
				<h1 className='text-title max-w-[484px] mb-[25px] max-sm:text-title-mob'>Доступно на всех платформах</h1>
				<Button size={'24px'} smallSize={'20px'}>Узнать больше</Button>
			</div>
		</div>
	</header>

)

