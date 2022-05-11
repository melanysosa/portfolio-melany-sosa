const useStyles = () => {
	return {
		home: 'w-full h-screen  max-w-[1000px] mx-auto px-8 flex flex-col justify-center',
		containerHome: '  mt-[50px]  ',
		p1: 'text-3xl sm:text-5xl text-stone-300  mt-[50px] mb-0.5',
		name: 'text-4xl sm:text-6xl font-bold text-stone-50 mb-0.5',
		job: 'text-4xl sm:text-5xl font-bold text-gray-400  mb-8',
		containerSocialIcons: 'flex flex-wrap  mb-8',
		linkedin:
			'w-[50px] h-[60px] flex m-1  ring-indigo-300  ring-2 rounded-md hover:scale-125 hover:bg-indigo-800',
		aLinkedin: 'flex justify-center items-center w-full text-gray-300 ',
		gitHub:
			'w-[50px] h-[60px] flex m-1  ring-indigo-300  ring-2 rounded-md hover:scale-125 hover:bg-indigo-800',
		aGitHub: 'flex justify-center items-center w-full text-gray-300 ',
		mail: 'w-[50px] h-[60px] flex m-1 ring-indigo-300  ring-2 rounded-md  hover:scale-125 hover:bg-indigo-800',
		aMail: 'flex justify-center items-center w-full text-gray-300 ',
		resume:
			'w-[50px] h-[60px] flex m-1 ring-indigo-300  ring-2 rounded-md hover:scale-125 hover:bg-indigo-800',
		aResume: 'flex justify-center items-center w-full text-gray-300 ',
		iconButton: 'ml-2',
	};
};

export default useStyles;
