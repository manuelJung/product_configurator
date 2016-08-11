import React from 'react'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

import Form from 'forms/Form'
import ImageBox from 'components/ImageBox'
import SuccessPage from 'components/SuccessPage'

import ExampleImage from 'assets/personalisierungsort-kochja.png'
import PriceImage from 'assets/preistabelle_neu.png'
import FontImage from 'assets/schriftart.png'
import InfoText from 'components/InfoText'
import ConnectedPriceField from 'containers/ConnectedPriceField'

import getUrlParam from 'utils/getUrlParam'

const productName = getUrlParam("name") || "no product name";
const infotext = [
  <div key="1">Bei einer Bestellung über 20 Teile erhalten Sie 10% Mengenrabatt.</div>,
  <br/>,
  <div key="2">Es handelt sich hierbei nicht um eine rechtskräftige Bestellung. Nach Absenden der Abfrage bekommen Sie von uns ein Angebot für die Einstickung und die zu bestickende Ware.</div>,
  <div key="3"><b>Sollten Sie Fragen haben oder möchten Ihre Anfrage und eine Bestellung gleich mit uns besprechen, können Sie unter 0800/6288450* jederzeit einen unserer Servicemitarbeiter erreichen.</b></div>,
  <div key="4">(*Kostenfrei aus dem dt. Fest- und Mobilfunknetz)</div>
]

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
          padding={5}
          src={FontImage}/>
        <ConnectedPriceField/>
        <InfoText text={infotext}/>
          
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
