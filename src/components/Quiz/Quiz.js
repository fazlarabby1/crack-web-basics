import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Quiz.css'

export const CorrectContext = createContext([]);
export const IncorrectContext = createContext([]);
const Quiz = () => {
    const [correct, setCorrect] = useState(0);
    const [incorrect, setIncorrect] = useState(0);
    const quiz = useLoaderData().data;
    const { id, name, total, questions } = quiz;


    return (
        <CorrectContext.Provider value={[correct, setCorrect]}>
            <IncorrectContext.Provider value={[incorrect, setIncorrect]}>
                <div className='container'>
                    <div className='quiz-page text-info d-md-flex d-sm-block' style={{ marginTop: '130px' }}>
                        <div className='col-8 order-sm-1 order-md-0'>
                            <h2>Quiz of {name}</h2>
                            <p>Total questions: {total}</p>
                            {
                                questions.map(topicQuestion =>
                                    <Question key={topicQuestion.id} topicQuestion={topicQuestion} index={questions.indexOf(topicQuestion)}>
                                    </Question>)
                            }
                        </div>
                        <div className='rounded shadow quiz-result p-4 order-0 order-md-1 mb-4'>
                            <h1>Quiz Result</h1>
                            <p>Total Correct: {correct}</p>
                            <p>Total Incorrect: {incorrect}</p>
                        </div>
                    </div>
                </div>
            </IncorrectContext.Provider>
        </CorrectContext.Provider>
    );
};

export default Quiz;