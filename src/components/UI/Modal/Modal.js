import React, {Component} from 'react'
import classes from './Modal.css'
import Aux from '../../../HOC/AUX/aux'
import Backdrop from '../Bcakdrop/Backdrop'

class Modal extends Component{

    //We have placed the shouldCompoonentUpdate() method inside of the Modal
    //class, because the modal's price rerenders each time an ingredient is added or subtracted.
    //However the modal doesnt show until the ORDER NOW button is clicked. So the price doesnt 
    //need to rerender until the modal is showing. This makes our app more efficient by preventing it
    //from doing unnecessary work. If this method returns false then componentWillUpdate will not be
    //invoked.
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show
    }

    componentWillUpdate(){
        console.log('[Modal] WillUpdate')
    }

    render(){
        return(
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div className={classes.Modal} style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: this.props.show ? '1' : '0'}}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

  


export default Modal