import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {

   
    return (
        <div className="charComponent">
            <p>{props.char}</p>
        
        </div>
    );
};

export default charComponent;