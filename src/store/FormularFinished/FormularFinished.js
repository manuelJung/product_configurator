const SET_FORMULAR_FINISHED = "SET_FORMULAR_FINISHED"

// Action Creators
export const setFormularFinished = (value) => ({
	type: SET_FORMULAR_FINISHED,
	value
})

// selectors
export const isFormularFinished = (state) => state.FormularFinished

//reducer
const FormularFinished = (state = false, action) => {
  switch (action.type) {
    case 'SET_FORMULAR_FINISHED':
      return action.value
    default:
      return state
  }
}

export default FormularFinished
