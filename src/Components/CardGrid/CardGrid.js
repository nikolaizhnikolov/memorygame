import { useState } from "react";
import Card from "../Card/Card";
import ScoreBoard from "../ScoreBoard/ScoreBoard";
import './cardGrid.css';
import storage from "../../assets/storage";


const durstenfeldShuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const CardGrid = () => {
    const [highScore, setHighScore] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);

    const evaluateResult = (key) => {
        console.log(key);
        if(clickedCards.includes(key)) {
            if(score > highScore) {
                setHighScore(score);
            }
            setScore(0);
            setClickedCards([]);
        } else {
            const clickedCardsCopy = clickedCards;
            clickedCardsCopy.push(key);
            setClickedCards(clickedCardsCopy);
            setScore(score + 1)
        }
    }
    
    const cardContent = durstenfeldShuffle(storage);
    const cardElements = cardContent.map((card) => 
        <Card src={card.src} 
            key={card.key}
            onclick={() => evaluateResult(card.key)}/>);    

    return <div>
            <ScoreBoard highScore={highScore} score={score}/>
            <div className="cardGrid">
                {cardElements}
            </div>            
        </div>;
}

export default CardGrid;