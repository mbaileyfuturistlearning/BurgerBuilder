import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/buildControl'
import PropTypes from 'prop-types'

const controls = [
    {label:'salad', type:'salad'},
    {label:'Bacon', type:'bacon'},
    {label:'Cheese', type:'cheese'},
    {label:'Meat', type:'meat'},
]

const buildControls = (props) =>{

    //The toFixed() method rounds your number to two decimal places.
    return(
        <div className={classes.BuildControls}>
            <p>Current Price: <strong>${props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl key={ctrl.label}
                 label={ctrl.label}
                 added={() => props.ingredientAdded(ctrl.type)}
                 removed={() => props.ingredientRemoved(ctrl.type)}
                 disabled={props.disabled[ctrl.type]}/>
            ))}
            <button className={classes.OrderButton}
                    disabled={!props.purchasable}
                    onClick={() => props.purchasing()}>ORDER NOW</button>
        </div>
    )
}

buildControls.propTypes = {
    price: PropTypes.number,
    ingredientAdded: PropTypes.func,
    ingredientRemoved: PropTypes.func,
    purchasable: PropTypes.bool,
    disabled: PropTypes.object,
    purchasing: PropTypes.func
}

export default buildControls