import { Link } from 'react-router-dom'
import Image from '../images/wine1.png'


const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#instadrink</h4>
          <h1>Discover the Finest Alcoholic Beverages at R.I.L.L Collection</h1>
          <p>
          Best Alcohol from all over the world
          </p>
          <Link to="/plans" className='btn lg'>View Pruduct</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader