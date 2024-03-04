import {Nav} from "./components/Nav.jsx";
import {Hero} from "./sections/Hero.jsx";
import {Info} from "./sections/Info.jsx";
import {Play} from "./sections/Play.jsx";
import {HP} from "./sections/HP.jsx";

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
		<section>
			
		</section>
	</main>
)


