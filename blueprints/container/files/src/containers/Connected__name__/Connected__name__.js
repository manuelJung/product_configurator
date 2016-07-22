import { connect } from 'react-redux'
import {  } from 'store/actions'
import <%= pascalEntityName %> from 'components/<%= pascalEntityName %>'

const mapStateToProps = (state, ownProps) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
  }
}

const Connected<%= pascalEntityName %> = connect(
  mapStateToProps,
  mapDispatchToProps
)(<%= pascalEntityName %>)


export default Connected<%= pascalEntityName %>
