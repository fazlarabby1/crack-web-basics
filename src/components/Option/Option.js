import React from 'react';
import './Option.css';

const Option = ({ option , number }) => {
    console.log(number);
    return (
        <div>
            <div className="container m-2 text-start border border-info rounded" style={{width: '100%'}}>
                <label className='p-3' style={{fontSize: '100%'}}>
                    <input className='me-md-3' type="radio" value={number} name="option"/>
                    {option}
                </label>
            </div>
        </div>
    );
};

export default Option;
