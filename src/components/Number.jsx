import React from 'react';
import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

const Number = (props) => {

    // console.log(useParams);
    // From useParams we grab the variable from thr URL
    const {int} = useParams();

    return (
        <fieldset>

            <legend>Number.jsx</legend>

                <h2>The Number is: {int}</h2>

        </fieldset>
    );
};

export default Number;