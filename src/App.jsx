import {Nav} from "./components/Nav.jsx";
import {Hero} from "./sections/Hero.jsx";
import {Info} from "./sections/Info.jsx";
import {Play} from "./sections/Play.jsx";

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
	</main>
)


