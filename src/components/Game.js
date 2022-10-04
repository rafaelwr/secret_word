import './Game.css';

const Game = ({ verifyLetter }) => {
    return (
        <div className="game">
            <p className="points">
                <span>Pontuação</span>: 000
            </p>
            <h1>Adivinhe a palavra:</h1>
            <h3 className="tip">
                Dica sobre a palavra: <span>Dica...</span>
            </h3>
            <p>Você ainda tem 1 tentativa(s).</p>
            <div className="wordContainer">
                <span className="letter">A</span>
                <span className="blankSquare"></span>
            </div>
            <div className="letterContainer">
                <p>Tente adivinhar uma letra da palavra:</p>
                <form>
                    <input
                        type="text"
                        name="letter"
                        maxLength="1"
                        required
                    />
                    <button>Jogar!</button>
                </form>
            </div>
            <div className="wrongLettersContainer">
                <p>Letras já utilizadas:</p>
                <span>a, </span>
            </div>
        </div>
    )
}

export default Game;