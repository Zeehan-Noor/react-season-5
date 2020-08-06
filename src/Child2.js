import React, { useState, useReducer } from 'react';
import CounterReducer from './CounterReducer';

const Child2 =() =>
{
    let [state ,dispatch] = useReducer(CounterReducer,0);
    return(
    <div>
    <h1>The Value of Counter Reducability :</h1>
    <h3>This is Second Child {state} </h3>
    <button onClick={()=>{dispatch('INCREMENT')}} >Increment Counter Reducer</button>

</div>
);
}
export default Child2