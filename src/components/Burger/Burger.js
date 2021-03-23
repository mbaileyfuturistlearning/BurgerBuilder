import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient'

const burger = (props) =>{

    //Keys textracts the keys of a given object and turns them into an arrayu.
    let transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey => {
        return [...Array(props.ingredients[ingredientKey])].map((_, index) => {
            return <BurgerIngredient key={ingredientKey + index} type={ingredientKey}/>
        })
    }).reduce((arr, el) =>{
        //The reduce() method executes a provided function for each value of the array
        //(from left to right) 
        return arr.concat(el)
    }, []);

    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Plaese start adding ingredients.</p>
    }

    //console.log(transformedIngredients)

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}

export default burger