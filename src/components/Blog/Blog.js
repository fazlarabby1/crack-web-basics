import React from 'react';
import { Card } from 'react-bootstrap';

const Blog = () => {
    return (
        <div className='mt-5'>
            <h1 className='text-success fw-normal fst-italic'>Common Questions of React</h1>

            <div className='w-75 mx-auto mt-5'>
            <Card className='shadow'>
                <Card.Header className='fw-bold text-warning'>What is the purpose of React Route?</Card.Header>
                <Card.Body>
                    <Card.Text className='text-start'>
                    The main purpose of react route is to <strong>create a single page web application</strong>. Without the react-route, if we navigate in different pages then the page reloads. But the react routers enable changing the <strong>URL of the site and the UI without any refresh</strong>. It is a simple but very powerful library. The use of react-router <strong>reduces the time of loading webpage for different components</strong>. In a react route website, there are some common parts that do not get changed no matter which page we visit. Such as the navigation bar or the side menu.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='shadow mt-5'>
                <Card.Header className='fw-bold text-warning'>How does context API work?</Card.Header>
                <Card.Body>
                    <Card.Text className='text-start'>
                    To pass data from parent components to the child components, typically we have to use <strong>props drilling method</strong>. But if there are lots of children then using this method becomes cumbersome. With the help of context API, one can pass props from parent to children <strong>without using the drilling method</strong>. Context API gives us a way to pass the value <strong>without passing through each of the components</strong>. This reduces the redundancy and the chances of error. We need to use only two things. One is the <strong>createContext</strong> and the other one is the <strong>Provider</strong>.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='shadow mt-5 mb-5'>
                <Card.Header className='fw-bold text-warning'>What is the useRef hook?</Card.Header>
                <Card.Body>
                    <Card.Text className='text-start'>
                    The useRef hook can hold a <strong>mutable value as its current property</strong>. It <strong>persists</strong> values between <b>renders</b>. We can store values that do not cause re-render when it is updated. For example, if we count the renders of an application using the <b>useState hook</b>, then we will be caught inside an <b>infinity loop</b>. Because, we know that the useState hook <b>creates a re-render</b>. But if we use the useRef hook, then we <b>would not get caught inside an infinity loop</b> as <b>it does not cause any re-renders like useState</b>.
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
        </div>
    );
};

export default Blog;