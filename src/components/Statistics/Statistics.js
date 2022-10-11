import React, { useContext } from 'react';
import { QuizContext } from '../../layouts/Main';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
const Statistics = () => {
    const topics = useContext(QuizContext);
    console.log(topics);
    const topicData = topics.map(topic => {
        const name = topic.name;
        const total = topic.total;
        const data = {
            name: name,
            total: total
        }
        return data;
    })
    console.log(topicData)
    return (
        <div className='statistics mx-auto'>
            <h2 className='text-info'>Showing the total questions of each topic in Bar Chart Representation</h2>
            <BarChart className='mx-auto my-5'
                width={600}
                height={400}
                data={topicData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Statistics;