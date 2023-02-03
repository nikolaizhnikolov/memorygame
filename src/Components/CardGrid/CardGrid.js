import { useState } from "react";
import Card from "../Card/Card";
import './cardGrid.css';


const durstenfeldShuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const CardGrid = () => {
    const [result, setResult] = useState(0);
    const [clickedCards, setClickedCards] = useState([]);

    const evaluateResult = (event) => {
        const key = event.target.key;
        console.log(key);
        if(clickedCards.includes(key)) {
            // setMaxResult
            setClickedCards([]);
        } else {
            const clickedCardsCopy = clickedCards;
            clickedCardsCopy.push(key);
            setClickedCards(clickedCardsCopy);
        }
    }
    
    const cardContent = durstenfeldShuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    const cardElements = cardContent.map((card) => <Card content={card} key={card} onclick={evaluateResult}/>);


    // cardElements.forEach((card) => {
    //     card.addEventListener("click", () => evaluateResult(card.key));
    // })
    

    return <div className="cardGrid">
            {cardElements}
        </div>;
}

export default CardGrid;