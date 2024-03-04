import {Nav} from "./components/Nav.jsx";
import {Hero} from "./sections/Hero.jsx";
import {Info} from "./sections/Info.jsx";
import {Play} from "./sections/Play.jsx";
import {HP} from "./sections/HP.jsx";
import {bg_cyberpunk} from "./assets/images/index.js";
import {Pay} from "./sections/Pay.jsx";

export const App = () => (
	<main className='relative'>
		<Nav></Nav>
		<section>
			<Hero/>
		</section>
		<section>
			<Info/>
		</section>
		<section className='pt-[70px]'>
			<Play/>
		</section>
		<section className='bg-yellow'>
			<HP/>
		</section>
		<section className='flex bg-black gap-[32px] max-mob:flex-col'>
			<div >
				<img className='object-cover h-[100%]' src={bg_cyberpunk} alt="background cyberpunk"/>
			</div>
			<div className='py-[70px]'>
				<Pay/>
			</div>
		</section>
	</main>
)


