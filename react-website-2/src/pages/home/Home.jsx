import MainHeader from '../../components/MainHeader'
import Programs from '../../components/Programs'
import Testimonials from '../../components/Testimonials'
import SliderComponent from '../../components/Slider'

import './home.css'
const Home = () => {
	return (
		<>
			<MainHeader />
			<Programs />
			<SliderComponent />
			<Testimonials />
		</>
		
	)
}

export default Home
