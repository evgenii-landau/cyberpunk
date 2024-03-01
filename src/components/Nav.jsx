import {logo} from "../assets/images/index.js";
import {Button} from "./Button.jsx";
import {navData} from "../constants/nav-data.jsx";

export const Nav = () => (

	<header className='absolute pt-[20px] w-full h-[1000px]'>
		<nav className='max-container w-full flex justify-between items-center max-mob:flex-col'>
			<a href="/">
				<img src={logo} alt="Logo" className='max-sm:mb-[10px]'/>
			</a>
			<ul className='flex gap-[40px]'>
				{navData.map((item, index) => (
					<li key={index}>
						<a href="#!">
							<img src={item.igmUrl} alt={item.alt}/>
						</a>
					</li>
				))}
			</ul>
		</nav>

		<div className='max-container h-[876px] flex justify-end items-end max-sm:h-[631px]'>
			<div
				className='max-w-[625px] bg-yellow p-[70px] max-sm:max-w-[320px] max-sm:top-[404px] max-sm:h-[207px] max-sm:py-[30px] max-sm:px-[12px]'
				style={{clipPath: 'polygon(9% 0px, 0px 15%, 0px 100%, 6% 101%, 17% 100%, 38% 101%, 56% 100%, 88% 104%, 103% 80%, 100% 0%)'}}>
				<h1 className='text-title max-w-[484px] mb-[25px] max-sm:text-title-mob'>Доступно на всех платформах</h1>
				<Button size={'24px'} smallSize={'20px'} text_color={'text-yellow'}>Узнать больше</Button>
			</div>
		</div>
	</header>

)

