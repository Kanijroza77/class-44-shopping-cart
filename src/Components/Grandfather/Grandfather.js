import React, { createContext } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';


export const moneyContext = createContext(5005)


const Grandfather = () => {

    const money = 50000;
    return (
        <moneyContext.Provider value={money}>
            <div className='border my-5 p-5 container'>
                <h2>Grandfather</h2>
                <h3>Grandfather have money:</h3>
                <section className='d-flex justify-content-between'>
                    <Father></Father>
                    <Uncle></Uncle>
                    <Aunty></Aunty>
                </section>
            </div>


        </moneyContext.Provider>
    );
};

export default Grandfather;