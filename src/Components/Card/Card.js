import './card.css'

const Card = ({ src, onclick }) => {

    return <div className='card' onClick={onclick}>
            <img className='cardImg' src={src} alt=""/>
        </div>
}

export default Card;