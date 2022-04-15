import React from 'react';

const Contact = () => {
	return (
		<div
			name='contact'
			className='w-full h-screen flex justify-center items-center p-4 '
		>
			<form
				method='POST'
				action='https://getform.io/f/ddc40c19-8810-4c98-bc15-e8c50b0dc622'
				className='flex flex-col max-w-[600px] w-full'
			>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 border-gray-300 text-gray-300'>
						Contact
					</p>
					<p className='text-gray-300 py-4'>
						Submit the form below or shoot me an email-
						sosamelanynoelia@gmail.com
					</p>
				</div>
				<input
					className='bg-[#ccd6f6] p-2 rounded-md'
					type='text'
					placeholder='Name'
					name='name'
				/>
				<input
					className='my-4 p-2 bg-[#ccd6f6] rounded-md'
					type='email'
					placeholder='Email'
					name='email'
				/>
				<textarea
					className='bg-[#ccd6f6] p-2 rounded-md resize-none'
					name='message'
					rows='10'
					placeholder='Message'
				></textarea>
				<button className='text-white border-2 hover:bg-gray-300 hover:border-gray-300 px-4 py-3 my-8 mx-auto flex items-center rounded-full'>
					Let's Collaborate
				</button>
			</form>
		</div>
	);
};

export default Contact;
