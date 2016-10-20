import React from 'react'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

import Form from 'forms/Form'
import ImageBox from 'components/ImageBox'
import SuccessPage from 'components/SuccessPage'

// import ExampleImage from 'assets/demo-kochjacke.png'
// import PriceImage from 'assets/preistabelle.png'
import InfoText from 'components/InfoText'
import ConnectedPriceField from 'containers/ConnectedPriceField'

import config from 'utils/config'

// const productName = getUrlParam("name") || "no product name";
// const infotext = [
//   <div key="3">Es handelt sich hierbei nicht um eine rechtskräftige Bestellung. Nach Absenden der Abfrage bekommen Sie von uns ein Angebot für die Einstickung und die zu bestickende Ware.</div>,
//   <div key="4"><b>Sollten Sie Fragen haben oder möchten Ihre Anfrage und eine Bestellung gleich mit uns besprechen, können Sie unter 0800/6288450* jederzeit einen unserer Servicemitarbeiter erreichen.</b></div>,
//   <div key="5">(*Kostenfrei aus dem dt. Fest- und Mobilfunknetz)</div>
// ]

class CoreLayout extends React.Component {

  renderForm(){
    let { onFinish } = this.props

    return <div id={classes.configurator}>
      <div id={classes.formContainer}>
        <h3 id={classes.headline}>{config.productName}</h3> 
        <hr id={classes.hr}/>
        <Form onFinish={onFinish}/>
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
