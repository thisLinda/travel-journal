export default function Card(props) {
    return (
        <div className='card'>
            <img src={`./assets/${props.imageUrl}`} alt='glass of beer' />
            <div className='card--info'>
                <div className='card--content'>
                    <i class="fas fa-map-marker-alt"></i>
                    <h2 className='card--pin-location'>{props.location}</h2>
                    <a href={props.googleMapsUrl}
                        className='card--pin-link'
                        target='_blank'
                        rel='noreferrer'>
                        View on Google maps</a>
                </div>
                <h1 className='card--info-location'>{props.title}</h1>
                <h3 className='card--info-date'>{props.moyy}</h3>
                <p className='card--info-text'>{props.description}
                </p>
                <p className='card--info-beer'>The beer: {props.beer}</p>
            </div>
        </div>
    )
}