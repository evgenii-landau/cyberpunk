import {Button} from "../components/Button.jsx";
import {ps_console, xbox_console} from "../assets/images/index.js";
import {sale} from "../assets/icons/index.js";

export const Play = () => (
	<section className='bg-black pt-[15px]'>
		<div
			className='max-container grid grid-cols-2 grid-rows-2 max-mob:grid-cols-1 max-mob:grid-row-3 max-mob:gap-[40px] max-mob:grid-rows-[auto]'>
			{/*Title*/}
			<div className='col-start-1 col-end-3 max-xl:col-end-2 max-mob:self-center'>
				<div className='flex items-center mb-[25px]'>
					<div className='mr-[32px]'>
						<img src={sale} alt="sale"/>
					</div>
					<h2 className='text-title max-sm:text-title-mob text-white'>Играй и выигрывай!</h2>
				</div>
				<p className='max-w-[952px] text-def text-white max-sm:text-def-mob'>Играй в <span
					className='text-mark max-xl:text-mark-mob'>Cyberpunk 2077</span> и получи возможность выиграть консоль <span
					className='text-mark max-xl:text-mark-mob'>Xbox Series X</span> или <span
					className='text-mark max-xl:text-mark-mob'>Sony PlayStation 5!</span> Заполни
					форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля. Удачи! ;)</p>
			</div>

			{/*Form*/}
			<div className='max-w-[460px] max-mob:max-w-[100%]'>
				<form action="" className='flex flex-col gap-[35px]'>
					<div className='flex flex-col gap-[35px]'>
						<input type='text' name='name' placeholder='Как тебя зовут?'
									 className='bg-transparent text-[18px] font-light border-b-[1px] p-[6px] text-white'/>
						<input type='email' name='email' placeholder='Твой e-mail'
									 className='bg-transparent text-[18px] font-light border-b-[1px] p-[6px] text-white'/>
					</div>
					<div className='py-[40px] px-[137px] border-dashed border-[1px] text-center max-mob:px-[60px]'>
						<label htmlFor="input-file" className='text-white cursor-pointer'>Прикрепить скриншот</label>
						<p className='text-gray-500'>.png / .jpg / .pdf</p>
						<input id='input-file' type='file' name='image' accept="png/pdf/jpg" multiple className='hidden'/>
					</div>
					<div className='max-w-[192px] mb-[15px] max-mob:self-center'>
						<Button bg_color={'bg-yellow'}>Отправить</Button>
					</div>
				</form>
				<input id='checkbox' type="checkbox" className='mr-[10px]' required/>
				<label htmlFor="checkbox" className='text-white'>Согласен на обратную связь</label>
			</div>

			{/*Images*/}
			<div
				className='flex gap-[32px] max-xl:row-start-1 max-xl:row-end-3 max-xl:col-start-2 max-xl:col-end-2 max-xl:flex-col max-xl:justify-self-end max-mob:row-start-1 max-mob:row-end-2 max-mob:col-start-1 max-mob:col-end-2 max-mob:flex-row max-mob:justify-self-center'>
				<div>
					<img src={xbox_console} alt="xbox_console"/>
				</div>
				<div>
					<img src={ps_console} alt="ps_console"/>
				</div>
			</div>
		</div>
	</section>
)

