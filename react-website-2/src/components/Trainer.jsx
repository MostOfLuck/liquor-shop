import Card from '../UI/Card'


const Catalog = ({image, name, job, path }) => {
  return (
    <Card className="catalog">
        <div className="catalog__img">
            <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        <div className="catalog__socials">
        </div>
    </Card>
  )
}

export default Catalog