import {Nav} from "./components/Nav.jsx";
import {Hero} from "./sections/Hero.jsx";
import {Info} from "./sections/Info.jsx";

export const App = () => (
	<main className='relative'>
		<Nav></Nav>
		<section>
			<Hero/>
		</section>
		<section>
			<Info/>
		</section>
		{/*<section>*/}
		{/*	<div className='text-def'>*/}
		{/*		Events asd ad asd asdsad a*/}
		{/*	</div>*/}
		{/*</section>*/}
	</main>
)


