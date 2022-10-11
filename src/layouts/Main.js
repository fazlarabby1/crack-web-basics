import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Header from '../components/Header/Header';
import './Main.css'

export const QuizContext = createContext([]);
const Main = () => {
    const quiz = useLoaderData().data;
    return (
        <div>
            <QuizContext.Provider value={quiz}>
                <Header></Header>
                <div className='changing-body'>
                <Outlet></Outlet>
                </div>
            </QuizContext.Provider>
        </div>
    );
};

export default Main;