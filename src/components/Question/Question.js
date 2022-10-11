import React from 'react';
import Option from '../Option/Option';

const Question = ({ topicQuestion, index }) => {
    console.log(topicQuestion)
    const { id, question, correctAnswer, options } = topicQuestion;
    return (
        <div className='container'>
            <div className="card my-4 shadow">
                <div className="card-body">
                    <h5 className="card-title">Quiz {index + 1}:
                        {question}
                    </h5>
                    <div className="row row-cols-2 mt-2">
                    {
                        options.map(option => <Option key={options.indexOf(option)} number={options.indexOf(option)} option={option}></Option>)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;