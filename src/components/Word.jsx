import React from 'react';
import { useParams } from 'react-router-dom';

const Word = (props) => {

    // console.log(useParams);
    // From useParams we grab the variable from thr URL
    const {word} = useParams();
    

    return (
        <fieldset>

            <legend>Word.jsx</legend>
                
                <h2>The Word is: {word}</h2>

        </fieldset>
    );
};

export default Word;
