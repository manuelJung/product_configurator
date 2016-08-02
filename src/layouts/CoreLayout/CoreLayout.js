import React from 'react'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

import Form from 'forms/Form'
import ImageBox from 'components/ImageBox'
import SuccessPage from 'components/SuccessPage'

import ExampleImage from 'assets/personalisierungsort-kochja.png'
import PriceImage from 'assets/preistabelle_neu.png'
import FontImage from 'assets/schriftart.png'

import getUrlParam from 'utils/getUrlParam'

const productName = getUrlParam("name") || "no product name";

class CoreLayout extends React.Component {

  renderForm(){
    let { onFinish } = this.props

    return <div id={classes.configurator}>
      <div id={classes.formContainer}>
        <h3 id={classes.headline}>{productName}</h3> 
        <hr id={classes.hr}/>
        <Form onFinish={onFinish}/>
      </div>

      <div id={classes.rightContainer}>

        <ImageBox
          headline="Personalisierungsort"
          src={ExampleImage}/>
        <ImageBox
          headline="Schriftarten"
          src={FontImage}/>
        <ImageBox
          headline="Preise pro Artikel"
          src={PriceImage}/>
          
      </div>
    </div>
  }

  renderSuccess(){
    return <div id={classes.configurator}>
      <SuccessPage/>
    </div>
  }

  render(){
    let { formularFinished } = this.props

    if(formularFinished){
      return this.renderSuccess()
    }

    return this.renderForm()
  }
}

CoreLayout.propTypes = {
  formularFinished: React.PropTypes.bool.isRequired,
  onFinish: React.PropTypes.func.isRequired
}

export default CoreLayout
