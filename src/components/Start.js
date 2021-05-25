import React from 'react';

const Start = ({ onQuizStart }) => {
    return(
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h1>Bonjour et bienvenue</h1>
                    <p>Vous allez être amené à répondre à une série de question en "oui" ou "non" en un temps imparti ! Good luck!</p>
                    <button className="button is-info is-medium" onClick={onQuizStart}>Démarrez</button>
                </div>
            </div>
        </div>
    );
}

export default Start;
 