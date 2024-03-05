import {FaCrown} from 'react-icons/fa'
import SectionHead from './SectionHead'
import Image from '../images/wine&flowers.png'
import {programs} from '../data'
import Card from '../UI/Card'
import {Link} from 'react-router-dom'
import {AiFillCaretRight} from 'react-icons/ai'



const Programs = () => {
  return (
    <section className="programs">
        <div className="container programs__container">
            <SectionHead icon={<FaCrown/>} title="Catalog"/>
        <div className="programs__wrapper">
            {
                programs.map(({id, title, path}) => {
                    return (
                        <Card className="programs__program" key={id}>
                            <h4>{title}</h4>
                            <img src={Image} alt="product__image" />
                            <Link to={path} className="btn sm">Learn More <AiFillCaretRight/></Link>
                        </Card>
                    )
                })
            }
        </div>
        </div>
    </section>
  )
}

export default Programs