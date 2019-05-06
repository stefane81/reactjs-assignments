import React from 'react';
import './ValidationComponent.css';

const validationComponent = (props) => {

    let textLength = "Text too short";

    if (props.length > 4){
        textLength = "Text long enough";
    }
    return (
        <div className="validationComponent">
    
            <p>{textLength}</p>
        
        </div>
    );
};

export default validationComponent;