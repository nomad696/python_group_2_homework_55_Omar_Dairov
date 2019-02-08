import React from 'react';
import IngredientControl from "./IngredientControl/IngredientControl";

function BurgerForm(props) {


    return <div className="BurgerForm">
        <IngredientControl name = {"salad"} add = {props.add} sub = {props.sub} />
        <IngredientControl name = {"cheese"} add = {props.add} sub = {props.sub} />
        <IngredientControl name = {"meat"} add = {props.add} sub = {props.sub} />
        <IngredientControl name = {"bacon"} add = {props.add} sub = {props.sub} />
    </div>
}


export default BurgerForm