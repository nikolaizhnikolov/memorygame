import './card.css'

const Card = ({ content, onclick }) => {

    return <div className='card' onClick={onclick}>
            {content}
        </div>
}

export default Card;