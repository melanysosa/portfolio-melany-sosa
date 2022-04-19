const useStyles = () => {
	return {
		containerNav:
			' w-full h-[60px] flex justify-between items-center px-4 bg-black/30 text-gray-300 top-0 fixed',
		nav: ' hidden md:flex  text-gray-50 text-lg',
		navLi: 'hover:decoration-solid hover:text-cyan-500',
		faBars: 'md:hidden ',
		navMobile:
			'md:hidden absolute top-0 left-0 w-full h-screen  flex flex-col  items-center navbar-mobileBg',
		faTimes: 'flex justify-end w-full mr-8 py-8',
		liMobile: 'py-6 text-4xl',
	};
};

export default useStyles;
