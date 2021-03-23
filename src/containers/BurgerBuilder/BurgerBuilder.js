import React, {Component} from 'react'
import Aux from '../../HOC/AUX/aux'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildContorls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}


class BurgerBuilder extends Component{

    state = {
        ingredients: {
            meat: 0,
            salad: 0,
            cheese: 0,
            bacon: 0
        },
        totalPrice:4,
        purchasable:false,
        purchasing:false
    }

    updatePurchaseState(ingredients){

        const sum = Object.keys(ingredients).map(key => {
            return ingredients[key]
        }).reduce((sum, element) => {
            return sum + element //element = ingredients[key]
        },0)
        this.setState({purchasable: sum > 0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1

        const updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount
        
        const priceAddition = INGREDIENT_PRICES[type]
        const startingPrice = this.state.totalPrice
        const newTotal = startingPrice + priceAddition
        this.setState({totalPrice:newTotal, ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients)
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type]
        if(oldCount <= 0){
            return
        }
        const updatedCount = oldCount - 1

        const updatedIngredients = {
            ...this.state.ingredients
        }

        updatedIngredients[type] = updatedCount

        const priceDeduction = INGREDIENT_PRICES[type]
        const startingPrice = this.state.totalPrice
        const newTotal = startingPrice - priceDeduction
        this.setState({totalPrice:newTotal, ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients)
    }

    purchaseHandler = () =>{
        this.setState({purchasing: true})
    }

    purchasedCancelHandler = () =>{
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = () =>{
        alert('You continue')
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = (disabledInfo[key] <= 0);
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing} modalClosed = {this.purchasedCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        purchaseCancelled={this.purchasedCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        price={this.state.totalPrice}
                        />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientHandler}
                    disabled = {disabledInfo}
                    purchasable={this.state.purchasable}
                    price = {this.state.totalPrice}
                    purchasing={this.purchaseHandler}/>
            </Aux>
        )
    }

}

export default BurgerBuilder