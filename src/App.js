import NavBar from './components/NavBar/NavBar.jsx';
import { AnimatePresence } from 'framer-motion';
import RouterApp from './RouterApp.jsx';
import './App.css';

function App() {
	return (
		<div>
			<AnimatePresence>
				<NavBar />
				<RouterApp />
			</AnimatePresence>
		</div>
	);
}

export default App;
