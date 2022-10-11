import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import './TopicDetails.css'

const TopicDetails = ({topic}) => {
    const {id, name, logo, total} = topic
    return (
        <div>
            <Col>
                <Card className='shadow my-4 mx-sm-auto' style={{width: "400px"}}>
                    <Card.Img className='mx-auto card-image rounded' style={{width: "380px", height: "200px"}} variant="top" src={logo} />
                    <Card.Body>
                        <h4 className='text-primary'>{name}</h4>
                        <div className='d-flex justify-content-between align-items-center'>
                            <p>Total Question: {total}</p>
                            <Button>Start Practice</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default TopicDetails;