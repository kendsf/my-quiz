import React, { useState, useEffect, useRef } from 'react';

const Questions = ({ data, onAnswerUpdate, numberOfQuestions, activeQuestion, onSetActiveQuestion, onSetStep}) => {
    const[selected, setSelected] = useState('');
    const [error, setError] = useState('');
    const radiosWrapper = useRef();

    useEffect(()=> {
        const findCheckedInput = radiosWrapper.current.querySelector('input:checked');
        if(findCheckedInput) {
            findCheckedInput.checked = false;
        }
    }, [data]);
    
    const changeHandler = (e) => {
        setSelected(e.target.value);
    }
    const nextClickHandler = (e) => {
        if(selected ==='') {
            return setError('Veuillez choisir une réponse!');
        }
        onAnswerUpdate(prevState =>[...prevState, { q: data.question, a: selected }]);
        setSelected('');
        if(activeQuestion < numberOfQuestions - 1) {
            onSetActiveQuestion(activeQuestion + 1);
        }else { 
            onSetStep(3);
        }

    }
    return(
        <div className="card">
            <div className="card-content">
                <div className="content">
                    <h2 className="mb-5">{data.question}</h2>
                    <div className="control" ref={radiosWrapper}>
                        {data.choices.map((choices, i) => (
                            <label className="radio has-background-light" key={i}>
                                <input type="radio" name ="answer" value={choices} onChange ={changeHandler}/>
                                {choices}
                            </label>
                        ))}
                    </div>
                </div>
                {error && <div className="has-test-danger">{error}</div>}
                <button className="button.button.is-link.is-medium.is-fullwidth mt-4" onClick={nextClickHandler}>Suivant</button>
            </div>
        </div>
    )
}

export default Questions;