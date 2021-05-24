import React from 'react';

const Start = ({ onQuizStart }) => {
    return(
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1>Démarrez le Quiz</h1>
                    <p>Good luck!</p>
                    <button className="button is-info is-medium" onClick={onQuizStart}>Démarrez</button>
                </div>
            </div>
        </div>
    );
}

export default Start;
 