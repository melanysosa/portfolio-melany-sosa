import NavBar from './components/NavBar/NavBar.jsx';
import { AnimatePresence } from 'framer-motion';
import RouterApp from './RouterApp.jsx';
import './App.css';

function App() {
	return (
		<div>
			<NavBar />
			<AnimatePresence>
				<RouterApp />
			</AnimatePresence>
		</div>
	);
}

export default App;
