import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import About from './pages/About';
import Home from './pages/Home';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/about' exact element={<About />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
