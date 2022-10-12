import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';
import Option from '../Option/Option';
import { CorrectContext, IncorrectContext } from '../Quiz/Quiz';

const Question = ({ topicQuestion, index }) => {
    const [correct, setCorrect] = useContext(CorrectContext);
    const [incorrect, setIncorrect] = useContext(IncorrectContext);
    const { id, question, correctAnswer, options } = topicQuestion;

    const handleAnswerValidation = (answer) =>{
        if(answer === correctAnswer){
            setCorrect(previous=> previous + 1);
            console.log(correct);
            toast.success('Your answer is correct', {autoClose: 500});
        }
        else{
            setIncorrect(previous => previous + 1);
            toast.warning('Your answer is incorrect', {autoClose: 500})
        }
        
    }
    const showCorrectAnswer = () =>{
        toast.info(`Correct answer: <b>${correctAnswer}</b>`, {autoClose: 2000})
    }
    return (
        <div className='container'>
            <div className="card my-4 shadow">
                <div className="card-body">
                    <div className='d-flex align-items-center'>
                    <h5 className="card-title mx-auto">Quiz {index + 1}:
                        {question}
                    </h5>
                    <FontAwesomeIcon onClick={showCorrectAnswer} className='text-end' title='Show The Correct Answer' icon={faEye} ></FontAwesomeIcon>
                    </div>
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