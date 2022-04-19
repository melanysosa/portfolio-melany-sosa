import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../../assets/MSLogoTipo1.png';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';

const NavBar = () => {
	const styles = useStyles();

	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<div className={styles.containerNav}>
			<img src={Logo} alt='Logo img' className='w-[50px]' />

			<div>
				<ul className={styles.nav}>
					<li className={styles.navLi}>
						<Link to='/'>Home</Link>
					</li>
					<li className={styles.navLi}>
						<Link to='/about'>About</Link>
					</li>
					<li className={styles.navLi}>
						<Link to='/skills'>Skills</Link>
					</li>
					<li className={styles.navLi}>
						<Link to='/work'>Work</Link>
					</li>
					<li className={styles.navLi}>
						<Link to='/contact'>Contact</Link>
					</li>
				</ul>
			</div>
			{/** Hamburguer */}

			{!nav ? (
				<div onClick={handleClick} className={styles.faBars}>
					<FaBars />
				</div>
			) : (
				<div onClick={handleClick}>
					<ul className={styles.navMobile}>
						<div className={styles.faTimes}>
							<FaTimes />
						</div>

						<li className={styles.liMobile}>
							<Link to='/'>Home</Link>
						</li>
						<li className={styles.liMobile}>
							<Link to='/about'>About</Link>
						</li>
						<li className={styles.liMobile}>
							<Link to='/skills'>Skills</Link>
						</li>
						<li className={styles.liMobile}>
							<Link to='/work'>Work</Link>
						</li>
						<li className={styles.liMobile}>
							<Link to='/contact'>Contact</Link>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default NavBar;
