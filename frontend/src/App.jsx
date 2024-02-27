import About from './pages/about/About'
import Alcohol from './pages/alcohol/Alcohol'
import Contact from './pages/contact/Contact'
import Gallery from './pages/gallery/Gallery'
import Home from './pages/home/Home'
import NotFound from './pages/notFound/NotFound'
import Plans from './pages/plans/Plans'

const App = () => {
	return (
		<div>
			<Home />
			<About />
			<Contact />
			<Gallery />
			<Gallery />
			<Plans />
			<Alcohol />
			<NotFound />
		</div>
	)
}

export default App
