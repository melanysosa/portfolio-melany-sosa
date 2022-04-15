import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Resume from '../assets/Sosa Melany Noelia CV (1).pdf';

const Home = () => {
	return (
		<div name='home' className='w-full h-screen '>
			{/**Container */}
			<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full  '>
				<p className='text-3xlg sm:text-5xl text-stone-300 '>
					Hi, my name is
				</p>
				<h1 className='text-4xlg sm:text-6xl font-bold text-stone-50'>
					Melany Sosa
				</h1>
				<h2 className='text-4xlg sm:text-5xl font-bold text-gray-400  mb-8'>
					I'm a frontend developer
				</h2>

				<div className=' lg:hidden flex flex-wrap  mb-8'>
					<div className='w-[50px] h-[60px] flex m-1  ring-indigo-300  ring-2 rounded-md'>
						<a
							className='flex justify-center items-center w-full text-gray-300 '
							href='https://www.linkedin.com/in/melanynoeliasosa/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaLinkedin size={30} />
						</a>
					</div>
					<div className='w-[50px] h-[60px] flex m-1  ring-indigo-300  ring-2 rounded-md '>
						<a
							className='flex justify-center items-center w-full text-gray-300 '
							href='https://github.com/melanysosa'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaGithub size={30} />
						</a>
					</div>
					<div className='w-[50px] h-[60px] flex m-1 ring-indigo-300  ring-2 rounded-md '>
						<a
							className='flex justify-center items-center w-full text-gray-300 '
							href='mailto:sosamelanynoelia@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<HiOutlineMail size={30} />
						</a>
					</div>
					<div className='w-[50px] h-[60px] flex m-1 ring-indigo-300  ring-2 rounded-md '>
						<a
							className='flex justify-center items-center w-full text-gray-300 '
							href={Resume}
							target='_blank'
							rel='noopener noreferrer'
						>
							<BsFillPersonLinesFill size={30} />
						</a>
					</div>
				</div>
				<div>
					<Link to='/work'>
						<button className='text-violet-50 border-2 px-6 py-3 my-2 flex items-center ring-indigo-300  ring-2 rounded-md transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-blue-800 duration-300 '>
							View Work
							<HiArrowNarrowRight className='ml-2' />
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Home;
