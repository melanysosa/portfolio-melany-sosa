const useStyles = () => {
	return {
		containerAbout:
			'w-full h-full text-gray-300 flex flex-col justify-center items-center  mt-[100px]',
		divP1: 'max-w-[1000px] w-full grid grid-cols-2 gap-8  pb-8 pl-4 text-center items-center',
		title: 'text-4xl font-bold inline border-b-4 border-gray-300',
		divP2: 'max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ',
		divP3: 'sm:text-right text-4xl font-bold',
		imgAbout: 'rounded-full  w-[15em] ',
		boxOpacity: 'ring-white ring-2 m-5 p-5 rounded-md bg-black/50',
	};
};

export default useStyles;
