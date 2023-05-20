import React, { useContext } from 'react';
import { moneyContext } from '../Grandfather/Grandfather';
const SpecialPerson = () => {
    const money = useContext(moneyContext)

    return (
        <div className='border my-2 p-2'>
            <h1>SpecialPerson:{money}</h1>
        </div>
    );
};

export default SpecialPerson;