import Card from '../UI/Card'


const Catalog = ({image, name, job, socials}) => {
  return (
    <Card className="catalog">
        <div className="catalog__img">
            <img src={image} alt={name} />
        </div>
        <h3>{name}</h3>
        <p>{job}</p>
        <div className="catalog__socials">
            {
                socials.map(({icon, link}, index) => {
                    return <a key={index} href={link} target="_blank" rel="noreffer noopener noreferrer">{icon}</a>
                })
            }
        </div>
    </Card>
  )
}

export default Catalog