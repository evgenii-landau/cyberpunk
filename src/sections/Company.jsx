import {cd_projects, cyberpunk_footer} from "../assets/images/index.js";

export const Company = () => {
	return (
		<section className='max-container py-[13px] flex justify-between items-center max-tablet:flex-wrap max-tablet:gap-[50px] max-tablet:justify-center'>
			<div className='flex gap-[32px] max-sm:flex-col max-mob:items-center'>
				<img src={cyberpunk_footer} alt='cyberpunk logo' width={296} height={74}/>
				<img src={cd_projects} alt="cd-projects" width={172} height={74}/>
			</div>
			<div className='flex gap-[32px] max-sm:flex-col max-mob:items-center'>
				<span>Лицензия</span>
				<span>Политика конфиденциальности</span>
			</div>
		</section>
	)
}
