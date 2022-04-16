const useStyles = () => {
	return {
		containerContact: 'w-full h-screen flex justify-center items-center p-4 ',
		contactForm: 'flex flex-col max-w-[600px] w-full',
		divP: 'pb-8',
		p1: 'text-4xl font-bold inline border-b-4 border-gray-300 text-gray-300',
		p2: 'text-gray-300 py-4',
		inputName: 'bg-[#ccd6f6] p-2 rounded-md ',
		inputMail: 'mt-4 p-2 bg-[#ccd6f6] rounded-md peer ',
		pValid: 'mt-0 mb-2 invisible peer-invalid:visible text-pink-600 text-sm',
		textarea: 'bg-[#ccd6f6] p-2 rounded-md resize-none',
		btnContact: 'mx-auto',
	};
};

export default useStyles;
