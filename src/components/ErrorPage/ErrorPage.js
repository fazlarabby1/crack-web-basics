import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div style={{marginTop: '200px'}}>
            <h1>Opps!!!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            {
                <p><span className='fw-bold text-danger fs-3'>{error.status}</span> {error.statusText}</p>
            }
            <Button variant='warning'><Link className='fw-semibold text-decoration-none text-dark' to="/">Back To Home</Link></Button>
        </div>
    );
};

export default ErrorPage;