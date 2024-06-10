import React, {useState} from 'react';
import './App.css';

import {useAppDispatch, useAppSelector} from "./redux/store";
import {decrement, increment} from "./redux/slices/slice1";


const App = () => {

    const {xxx} = useAppSelector((state) => state.slice1);
    const dispatch = useAppDispatch();


    return (
        <div>

            <h2>{xxx}</h2>
            <button onClick={() => {
                dispatch(increment(100));
            }}>increment
            </button>
            <button
                onClick={() => {

                    dispatch(decrement());

                }}
            >decrement
            </button>

        </div>
    );
};

export default App;
