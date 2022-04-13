import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
		<div name='home' className='w-full h-screen bg-[#0a192f]'>
			{/**Container */}
			<div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
				<p className='text-stone-400'>Hi, my name is</p>
				<h1 className='text-4xlg sm:text-6xl font-bold text-stone-50'>Melany Sosa</h1>
				<h2 className='text-4xlg sm:text-6xl font-bold text-gray-400'>I'm a frontend developer </h2>
				<p className='text-[#8892b0] py-4 max-w-[700px]'>
					passionate about this career, because there is always something
					new to learn, I'm attracted to the idea of doing it and taking
					advantage of it, to work on innovative and interesting projects.
				</p>
                <div>
                    <button className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-gray-400 hover:text-black'>View Work <HiArrowNarrowRight className='ml-2'/> </button>
                </div>
			</div>
		</div>
  );
}

export default Home