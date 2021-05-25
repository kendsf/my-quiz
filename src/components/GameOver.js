import React, { useEffect, useState } from 'react';

import {formatTime} from '../utils';

const GameOver =({results, data, onReset, onAnswerCheck, time}) => {
    const [correctAnswers, setCorrectAnswers] = useState(0);

    useEffect(() => {
        let correct =0;
        results.forEach((result, index) => {
            if(result.a === data[index].answer) {
                correct++;
            }
        });
        setCorrectAnswers(correct);
    }, []);
    return(
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h3>Game Over</h3>
                    <p>Voici vos résultats</p>
                    <p><strong>{correctAnswers} sur {data.length}</strong></p>
                    <p><strong>Votre temps:</strong> {formatTime(time)}</p>
                    <button className="button.is-info mr-2" onClick={onAnswerCheck}>Revoir les réponses données</button>
                    <button className="button.is-success" onClick={onReset}>Réessayer</button>
                </div>
            </div>
        </div>
    )

}

export default GameOver;