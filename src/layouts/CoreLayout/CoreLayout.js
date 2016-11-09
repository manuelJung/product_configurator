import React from 'react'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

import ConnectedForm from 'containers/ConnectedForm'
import ImageBox from 'components/ImageBox'
import SuccessPage from 'components/SuccessPage'

import InfoText from 'components/InfoText'
import ConnectedPriceField from 'containers/ConnectedPriceField'

import config from 'utils/config'

class CoreLayout extends React.Component {

  renderForm(){
    let { onFinish } = this.props

    return <div id={classes.configurator}>
      <div id={classes.formContainer}>
        <h3 id={classes.headline}>{config.productName}</h3> 
        <hr id={classes.hr}/>
        <ConnectedForm onFinish={onFinish}/>
      </div>

      <div id={classes.rightContainer}>

        <ImageBox
          headline="Personalisierungsort"
          src={config.exampleImageUrl}/>
        <ImageBox
          headline="Preistabelle"
          padding={5}
          src={config.priceImageUrl}/>
        <ConnectedPriceField/>
        <InfoText text={config.infoText}/>
          
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
