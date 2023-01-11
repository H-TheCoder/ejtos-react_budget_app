import React, {useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget=()=>{
    const { budget }=useContext(AppContext);

    return(
        <div className='alert alert-secondary'>
            <span>Budget:$<input required='required' type='number' id="budget" style={{ marginLeft: '2rem' , size: 5}} step='10' on onChange={(Event)}></input></span>
        </div>
    );
};
export default Budget;
