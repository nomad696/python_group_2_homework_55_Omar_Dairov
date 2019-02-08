import React from 'react';


function IngredientControl(props) {
    return <div className="IngredientControl">
        <p className="IngredientName">{props.name}</p>
        <button className="IngredientButton" onClick = {() => props.sub(props.name)}>Less</button>
        <button className="IngredientButton" onClick = {() => props.add(props.name)}>More</button>
    </div>
}


export default IngredientControl;
