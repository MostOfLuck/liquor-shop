import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './pages/about/About'
import Alcohol from './pages/alcohol/Alcohol'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Home from './pages/home/Home'
import NotFound from './pages/notFound/NotFound'
import Plans from './pages/plans/Plans'
import Navbar from './components/Navbar'

const App = () => {
	return (
		<BrowserRouter>
		  <Navbar/>
			<Home />
			<About />
			<Contact />
			<Gallery />
			<Gallery />
			<Plans />
			<Alcohol />
			<NotFound />
		</BrowserRouter>
	)
}

export default App
