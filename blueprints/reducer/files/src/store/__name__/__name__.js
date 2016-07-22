const ACTION_TYPE_1 = "ACTION_TYPE_1"
const ACTION_TYPE_2 = "ACTION_TYPE_2"
const ACTION_TYPE_3 = "ACTION_TYPE_3"

export const action = (value) => ({
	type: ACTION_TYPE_1,
	value
})

const <%= pascalEntityName %> = (state = {}, action) => {
  switch (action.type) {
    case 'ACTION_TYPE_1':
      return {}
	case 'ACTION_TYPE_2':
      return {}
	case 'ACTION_TYPE_3':
      return {}
    default:
      return state
  }
}

export default <%= pascalEntityName %>
