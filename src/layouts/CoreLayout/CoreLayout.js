import React from 'react'
import Header from '../../components/Header'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

import Form from 'forms/Form'
import ImageBox from 'components/ImageBox'

import ExampleImage from 'assets/personalisierungsort-kochja.png'
import ColorImage from 'assets/schriftfarben.png'
import FontImage from 'assets/schriftart.png'

import getUrlParam from 'utils/getUrlParam'

const productName = getUrlParam("name") || "no product name";

export const CoreLayout = () => (
  <div id={classes.configurator}>
    
    <div id={classes.formContainer}>
      <h3 id={classes.headline}>{productName}</h3> 
      <hr id={classes.hr}/>
      <Form/>
    </div>

    <div id={classes.rightContainer}>

      <ImageBox
        headline="Personalisierungsort"
        src={ExampleImage}/>
      <ImageBox
        headline="Schriftarten"
        src={FontImage}/>
      <ImageBox
        headline="Schriftfarben"
        src={ColorImage}/>
        
    </div>

  </div>
)

CoreLayout.propTypes = {
}

export default CoreLayout
