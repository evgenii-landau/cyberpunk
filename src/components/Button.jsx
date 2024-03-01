export const Button = ({children, size, smallSize, text_color, bg_color}) => (
	<button type='button' className={`text-btn text-[${size}] py-[20px] px-[50px] ${bg_color ? bg_color : 'bg-black'} ${text_color ? text_color : ''} max-sm:text-[${smallSize}]`}>{children}</button>
)
