import React, { useContext } from 'react';
import ConterContext from './CounterContext';

const Child = () => {
    let CounterValue = useContext(ConterContext);
    return (
        <div>
            <h1>The Value of Counter Context :</h1>
            <h3>This is First Child {CounterValue[0]} </h3>

            <button onClick={() => { CounterValue[1](++CounterValue[0]) }} >Increment Counter Context</button>

        </div>
    );
}
export default Child;