import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import Javascript from '../assets/javascript.png';
import ReactJS from '../assets/react.png';
import Redux from '../assets/redux.png';
import Git from '../assets/git.png';
import Github from '../assets/github.png';
import Sass from '../assets/sass.png';

const Skills = () => {
	return (
		<div name='skilss' className='bg-[#0a192f] text-gray-300'>
			{/**Container */}
			<div className='max-w-[1000] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div>
					<p className='text-4xl  border-b-4 border-gray-300'>
						Skills
					</p>
					<p className='py-4 '>
						// These are the technologies i´ve worked with
					</p>
				</div>

				<div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
					<div className='shadow-md shadow-[#040c16]'>
						<img className='w-20 mx-auto' src={HTML} alt='HTML logo' />
						<p className='my-4'>HTML</p>
					</div>
					<div className='shadow-md shadow-[#040c16]'>
						<img className='w-20 mx-auto' src={CSS} alt='Css logo' />
						<p className='my-4'>CSS</p>
					</div>
					<div className='shadow-md shadow-[#040c16]'>
						<img
							className='w-20 mx-auto'
							src={Javascript}
							alt='javascript Logo'
						/>
						<p className='my-4'>Javascript</p>
					</div>
					<div className='shadow-md shadow-[#040c16]'>
						<img
							className='w-20 mx-auto'
							src={ReactJS}
							alt='Reactjs Logo'
						/>
						<p className='my-4'>ReactJS</p>
					</div>
					<div className='shadow-md shadow-[#040c16]'>
						<img className='w-20 mx-auto' src={Redux} alt='Redux Logo' />
						<p className='my-4'>Redux</p>
					</div>
					<div className='shadow-md shadow-[#040c16]'>
						<img className='w-20 mx-auto' src={Git} alt='Git Logo' />
						<p className='my-4'>Git</p>
					</div>
					<div className='shadow-md shadow-[#040c16]'>
						<img className='w-20 mx-auto' src={Github} alt='Github Logo' />
						<p className='my-4'>Github</p>
					</div>
					<div className='shadow-md shadow-[#040c16]'>
						<img className='w-20 mx-auto' src={Sass} alt='Sass Logo' />
						<p className='my-4'>Sass</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
