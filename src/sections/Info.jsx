import {game_1} from "../assets/images/index.js";
import {game_2} from "../assets/images/index.js";
import {game_3} from "../assets/images/index.js";

export const Info = () => (
	<section className='max-container pt-[70px]'>
		<h2 className='text-title mb-[25px] max-sm:text-title-mob'>Найт-Сити изменит тебя навсегда!</h2>
		<p className='text-def mb-[70px] max-w-[925px] max-sm:text-def-mob'><span className='text-mark max-sm:text-mark-mob'>Cyberpunk 2077</span> — приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть,
			роскошь и модификации тела ценятся выше всего. Ты играешь за V, наёмника в поисках устройства, позволяющего
			обрести бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир,
			где твои поступки влияют на ход сюжета и всё, что тебя окружает.
		</p>
		<div className='w-full grid grid-cols-[460px, 788px] grid-rows-2 gap-[32px] max-xl:grid-cols-[460px, 460px] max-xl:grid-rows-[auto] max-xl:justify-items-center'>
			<img src={game_1} alt="game_screenshot"/>
			<img src={game_2} alt="game_screenshot"/>
			<img src={game_3} alt="game_screenshot" className='row-start-1 row-end-3 col-start-2 max-xl:row-start-2 max-xl:row-end-3 max-xl:col-start-1 max-xl:col-end-3 items-center h-[100%]'/>
		</div>
	</section>
)

