import React, { useContext } from 'react';
import basic from '../../Assets/basic.png';
import { QuizContext } from '../../layouts/Main';
import TopicDetails from '../TopicDetails/TopicDetails';
import Row from 'react-bootstrap/Row';
import './Topics.css';

const Topics = () => {
    const topics = useContext(QuizContext);
    // console.log(quiz);
    return (
        <div style={{marginTop: '120px'}}>
            <div className='container mt-5 d-flex flex-column flex-md-column flex-xl-row align-items-center'>
                <div className='border-0 w-75 image'>
                    <img className='rounded mx-md-auto mx-sm-0 ms-0' src={basic} alt="" />
                </div>
                <div className='header-text mx-auto mx-md-auto mx-sm-auto mt-md-2 mt-sm-2 mt-2'>
                    <h3 className='text-primary heading'>Clear You Basic With Some Quiz</h3>
                    <p className='mx-auto w-75'>With the below quiz, you can clear you basics of web development. You can even check your knowledge on web development basics.</p>
                </div>
            </div>
            {
                <Row xs={1} md={2} lg={2} xl={3} className="mt-5 mx-md-4 mx-lg-5 mx-xl-5">
                    {
                        topics.map(topic => <TopicDetails key={topic.id} topic={topic}></TopicDetails>)
                    }
                </Row>
            }
        </div>
    );
};

export default Topics;