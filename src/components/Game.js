import './Game.css';

const Game = ({ 
    verifyLetter,
    pickedCategory,
    pickedWord,
    letters,
    guessedLetters,
    wrongLetters,
    guesses,
    score
}) => {
    return (
        <div className="game">
            <p className="points">
                <span>Pontuação</span>: {score}
            </p>
            <h1>Adivinhe a palavra:</h1>
            <h3 className="tip">
                Dica sobre a palavra: <span>{pickedCategory}</span>
            </h3>
            <p>Você ainda tem {guesses} tentativa(s).</p>
            <div className="wordContainer">
                {letters.map((letter, i) => (
                    guessedLetters.includes(letter) ?
                    (
                        <span className="letter">{letter}</span>
                    ) : (
                        <span className="blankSquare"></span>
                    )
                ))}
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
                {wrongLetters.map((l, i) => (
                    <span key={i}>{l}, </span>
                ))}
            </div>
        </div>
    )
}

export default Game;