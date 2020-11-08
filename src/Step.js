import React from 'react';

function Step (props) {

    console.log(props)
    
    return (
        <div>
            <input onChange={(e) => props.changeImputValue(e)} type="number"/>   
        </div>
    );
}

export default Step;