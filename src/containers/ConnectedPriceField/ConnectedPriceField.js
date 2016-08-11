import { connect } from 'react-redux'
// import {  } from 'store/actions'
import PriceField from 'components/PriceField'

const hasValue = (field) => {
  if(field && field.value) return true

  return false
}
const getPrice = ({textfirst, textsecound, position, fontsize}) => {
  fontsize = fontsize || {value: "1,5 cm"}
  var price = 0
  var priceFirstLine = !hasValue(textfirst) ? 0
                      :fontsize.value === "1,5 cm" ? 3.99
                      :fontsize.value === "2,5 cm" ? 4.49
                      :fontsize.value === "3,5 cm" ? 4.99
                      : 4.99 
  var priceSecoundLine = !hasValue(textsecound) ? 0
                        :fontsize.value === "1,5 cm" ? 2.99
                        :fontsize.value === "2,5 cm" ? 3.49
                        :fontsize.value === "3,5 cm" ? 3.99
                        : 4.99

  price += priceFirstLine + priceSecoundLine

  // make price as string
  price = price.toString().replace(",", ".")

  return price
}

const mapStateToProps = (state, ownProps) => {
  return {
    price: getPrice(state.form.Form || {})
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
  }
}

const ConnectedPriceField = connect(
  mapStateToProps,
  mapDispatchToProps
)(PriceField)


export default ConnectedPriceField
