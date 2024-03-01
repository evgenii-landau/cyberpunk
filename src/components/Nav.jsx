import {logo} from "../assets/images/index.js";
import {facebook, instagram, twitch, twitter, vk, you_tube} from "../assets/icons/index.js";

export const Nav = () => (
	<nav className='max-container py-[20px] flex justify-between items-center max-sm:flex-col'>
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
)

