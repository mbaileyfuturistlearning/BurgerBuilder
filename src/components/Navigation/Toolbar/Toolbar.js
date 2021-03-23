import React from 'react'
import classes from './Toolbar.css'
import Logo from '../../Logo/Logo'
import NavigationItems from './NavigationItems/NavigationItems'
import PropTypes from 'prop-types'

const toolbar = (props) =>(
    <header className={classes.Toolbar}>
        <div onClick={props.open}><ion-icon name="menu-outline"></ion-icon></div>
        <div className={classes.Logo}>
            <Logo/>
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
)

toolbar.propTypes = {
    open: PropTypes.func,
}

export default toolbar