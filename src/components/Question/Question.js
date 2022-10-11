import React from 'react';
import { toast } from 'react-toastify';
import Option from '../Option/Option';

const Question = ({ topicQuestion, index }) => {
    console.log(topicQuestion)
    const { id, question, correctAnswer, options } = topicQuestion;
    const handleAnswerValidation = (answer) =>{
        if(answer === correctAnswer){
            toast.success('Your answer is correct', {autoClose: 500})
        }
        else
        toast.warning('Your answer is incorrect', {autoClose: 500})
        
    }
    return (
        <div className='container'>
            <div className="card my-4 shadow">
                <div className="card-body">
                    <h5 className="card-title">Quiz {index + 1}:
                        {question}
                    </h5>
                    <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 mt-2">
                    {
                        options.map(option => <Option key={options.indexOf(option)} number={options.indexOf(option)} handleAnswerValidation={handleAnswerValidation} option={option}></Option>)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Question;