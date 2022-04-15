import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Skills from './components/Skills';
import Work from './components/Work';
import {Routes,Route} from 'react-router-dom';
import './App.css';


function App() {
	return (
		
		<>
			<NavBar />
			<Routes>
				
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/skills' element={<Skills />} />
				<Route path='/work' element={<Work />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</>
	);
}

export default App;
