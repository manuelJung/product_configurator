import React from 'react'
import classes from './HomeView.scss'
import Form from 'forms/Form'

export const HomeView = () => (
  <div id={classes.configurator}>

    <div id={classes.formContainer}>
      <h3>Tester</h3> 
      <hr/>
      <Form/>
    </div>

    <div id={classes.rightContainer}>
      <div>right container</div>
    </div>
    
  </div>
)

export default HomeView
