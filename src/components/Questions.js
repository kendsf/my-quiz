import React, { useState, useEffect, useRef } from 'react';

const Questions = ({}) => {
    const nextClickHandler = (e) => {

    }
    return(
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h2 className="mb-5">Question</h2>
                    <div className="control">
                        <label className="radio has-background-light">
                            <input type="radio" name ="answer" value="" onChange={() => {}} />
                            Les choix à sélectionner
                        </label>
                    </div>
                </div>
                <div className="has-test-danger">Erreur</div>
                <button className="button.button.is-link.is-medium.is-fullwidth mt-4" onClick={nextClickHandler}>Suivant</button>
            </div>
        </div>
    )
}

export default Questions;