import { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/MSLogoTipo1.png';
import { Link } from 'react-router-dom';
import Resume from '../assets/Sosa Melany Noelia CV (1).pdf'


const NavBar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);
	

	

	return (
		<div className='w-full h-[80px] flex justify-between items-center px-4 bg-transparent text-gray-300'>
			<div>
				<img src={Logo} alt='Logo img' style={{ width: '50px' }} />
			</div>
			<div>
				<ul className=' hidden md:flex'>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<Link to='/about'>About</Link>
					</li>
					<li>
						<Link to='/skills'>Skills</Link>
					</li>
					<li>
						<Link to='/work'>Work</Link>
					</li>
					<li>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			</div>
			{/** Hamburguer */}

			{!nav ? (
				<div onClick={handleClick} className='md:hidden '>
					<FaBars />
				</div>
			) : (
				<div onClick={handleClick}>
					<ul className='md:hidden absolute top-0 left-0 w-full h-screen  flex flex-col  items-center navbar-mobileBg'>
						<div className='flex justify-end w-full mr-8 py-8'>
							<FaTimes />
						</div>

						<li className='py-6 text-4xl'>
							<Link to='/'>Home</Link>
						</li>
						<li className='py-6 text-4xl'>
							<Link to='/about'>About</Link>
						</li>
						<li className='py-6 text-4xl'>
							<Link to='/skills'>Skills</Link>
						</li>
						<li className='py-6 text-4xl'>
							<Link to='/work'>Work</Link>
						</li>
						<li className='py-6 text-4xl'>
							<Link to='/contact'>Contact</Link>
						</li>
					</ul>
				</div>
			)}
			{/**Social icons */}
			<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
				<ul>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800 ring-gray-300  ring-2 rounded-md'>
						<a
							className='flex justify-between items-center w-full text-gray-300 '
							href='https://www.linkedin.com/in/melanynoeliasosa/'
							target='_blank'
							rel='noopener noreferrer'
						>
							Linkedin <FaLinkedin size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800 ring-gray-300   ring-2 rounded-md '>
						<a
							className='flex justify-between items-center w-full text-gray-300 '
							href='https://github.com/melanysosa'
							target='_blank'
							rel='noopener noreferrer'
						>
							GitHub <FaGithub size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800 ring-gray-300   ring-2 rounded-md'>
						<a
							className='flex justify-between items-center w-full text-gray-300 '
							href='mailto:sosamelanynoelia@gmail.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							Email <HiOutlineMail size={30} />
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800 ring-gray-300   ring-2 rounded-md'>
						<a
							className='flex justify-between items-center w-full text-gray-300  rounded-md'
							href={Resume}
							target='_blank'
							rel='noopener noreferrer'
						>
							Resume <BsFillPersonLinesFill size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavBar;
