const useStyles = () => {
	return {
		containerContact:
			'w-full h-screen flex justify-center items-center p-4  mt-[100px]',
		contactForm:
			'flex flex-col max-w-[500px] max-h-[500px] bg-black/60 rounded-xl p-6  ',
		divP: 'pb-8',
		p1: 'text-4xl font-bold inline border-b-4 border-gray-300 text-gray-300',
		p2: 'text-gray-300 py-4',
		inputName: 'bg-[#ccd6f6] p-2 rounded-md ',
		inputMail:
			'mt-4 p-2 bg-[#ccd6f6] rounded-md peer  focus:outline-none focus:border-sky-500 focus:ring-2  invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500  focus:valid:ring-green-500',
		pValid: 'mt-0 mb-4 invisible peer-invalid:visible text-gray-600 text-sm',
		textarea: 'bg-[#ccd6f6] p-2 rounded-md resize-none',
		btnContact: 'mx-auto',
	};
};

export default useStyles;
