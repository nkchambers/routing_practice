import React from 'react';
import { useParams } from 'react-router-dom';

const Color = (props) => {

    // console.log(useParams);
    // From useParams we grab the variable from thr URL
    const {word} = useParams();
    

    return (
        <fieldset>

            <legend>Color.jsx</legend>

            <div></div>
                
                <h2>The Word is: {word}</h2>

        </fieldset>
    );
};

export default Color;