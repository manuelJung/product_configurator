import { connect } from 'react-redux'
import { setFormularFinished, isFormularFinished } from 'store/FormularFinished/FormularFinished'
import CoreLayout from 'layouts/CoreLayout'

const mapStateToProps = (state, ownProps) => {
  return {
    formularFinished: isFormularFinished(state)
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onFinish: () => {
      dispatch(setFormularFinished(true))
    }
  }
}

const ConnectedCoreLayout = connect(
  mapStateToProps,
  mapDispatchToProps
)(CoreLayout)


export default ConnectedCoreLayout
