const useStyles = () => {
	return {
		containerWork: 'w-full md:h-screen text-gray-300 mt-[100px] ',
		divContainer: 'max-w-[1000px] mx-auto p-4 flex flex-col justify-center ',
		divP: 'pb-8',
		title: 'text-4xl font-bold inline border-b-4 text-gray-300 border-gray-300',
		pWork: 'py-6',
		divContainer2: 'grid sm:grid-cols-2 md:grid-cols-2 gap-4 ',
		gridItem:
			'shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ',
		divEffects: 'opacity-0 group-hover:opacity-100 ',
		span: 'text-2xl font-bold text-white tracking-wider',
		btnWorkGrid:
			'text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-blue-600 duration-300  hover:text-gray-300',
	};
};

export default useStyles;
