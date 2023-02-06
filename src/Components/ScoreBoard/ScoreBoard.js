import './scoreBoard.css';

const ScoreBoard = ({score, highScore}) => {
    return <div className="scoreboard">
        <div className="highScore">High Score: {highScore}</div>
        <div className="score">Current Score: {score}</div>
    </div>
}

export default ScoreBoard;