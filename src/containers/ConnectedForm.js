import { connect } from 'react-redux'

import Form from 'forms/Form'
import { updateField, getFields } from 'modules/form'
import { sendMail } from 'utils/mailer'
import { setFormularFinished } from 'store/FormularFinished/FormularFinished'

var mapStateToProps = (state) => ({
    fields: getFields(state.form)
})

var mapDispatchToProps = (dispatch) => ({
    updateField: (name, value) => {
        dispatch(updateField(name, value))
    },
    onSubmit: (fields) => {
        sendMail(fields, (code, res) => {
        })
        dispatch( setFormularFinished(true) )
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)