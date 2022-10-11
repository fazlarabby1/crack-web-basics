import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const quiz = useLoaderData().data;
    const { id, name, total, questions } = quiz;
    console.log(quiz);
    return (
        <div className='quiz-page text-info' style={{ marginTop: '130px' }}>
            <div>
                <h2>Quiz of {name}</h2>
                <p>Total questions: {total}</p>
                {
                    questions.map(topicQuestion =>
                        <Question key={topicQuestion.id} topicQuestion={topicQuestion} index={questions.indexOf(topicQuestion)}>
                        </Question>)
                }
            </div>
        </div>
    );
};

export default Quiz;