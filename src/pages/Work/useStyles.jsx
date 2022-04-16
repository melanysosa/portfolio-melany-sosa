const useStyles = () => {
	return {
		containerWork: 'w-full md:h-screen text-gray-300',
		divContainer:
			'max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-screen',
		divP: 'pb-8',
		title: 'text-4xl font-bold inline border-b-4 text-gray-300 border-gray-300',
		pWork: 'py-6',
		divContainer2: 'grid sm:grid-cols-2 md:grid-cols-3 gap-4',
		gridItem:
			'shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ',
		divEffects: 'opacity-0 group-hover:opacity-100',
		span: 'text-2xl font-bold text-white tracking-wider',
		btnWorkGrid:
			'text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg',
	};
};

export default useStyles;
