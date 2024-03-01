export const Button = ({children, size, smallSize}) => (
	<button type='button' className={`text-btn text-[${size}] py-[20px] px-[50px] bg-black text-yellow max-sm:text-[${smallSize}]`}>{children}</button>
)
