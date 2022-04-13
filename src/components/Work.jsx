import Project1 from '../assets/project1.png';

const Work = () => {
	return (
		<div
			name='work'
			className='w-full md:h-screen text-gray-300 bg-[#0a192f]'
		>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 text-gray-300 border-gray-300'>
						Work
					</p>
					<p className='py-6'> / Check out some of my recent work</p>
				</div>
				{/**Container */}
				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
					{/**Grid Item */}
					<div
						style={{ backgroundImage: `url(${Project1})` }}
						className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '
					>
						{/**Hover effects */}
						<div className='opacity-0 group-hover:opacity-100'>
							<span className='text-2xl font-bold text-white tracking-wider'>
								Popular Movies
							</span>
							<div>
								<a
									href='https://popular-movies-m.netlify.app/'
									target='_blanck'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Demo
									</button>
								</a>
								<a
									href='https://github.com/melanysosa/popular-movies-app'
									target='_blanck'
								>
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
										Code
									</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Work;
