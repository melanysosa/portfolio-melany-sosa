import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Home from './pages/Home/Home.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import Skills from './pages/Skills/Skills.jsx';
import Work from './pages/Work/Work.jsx';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Footer from './components/Footer/Footer.jsx';


function App() {
	return (
		<div>
			<NavBar />
			<AnimatePresence>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/about' element={<About />} />
					<Route path='/skills' element={<Skills />} />
					<Route path='/work' element={<Work />} />
					<Route path='/contact' element={<Contact />} />
				</Routes>
			</AnimatePresence>
			<Footer />
		</div>
	);
}

export default App;
