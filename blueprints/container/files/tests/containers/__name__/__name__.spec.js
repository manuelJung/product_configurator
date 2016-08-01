import React from 'react'
import { bindActionCreators } from 'redux'
import { <%= pascalEntityName %> } from 'containers/<%= pascalEntityName %>'
import { shallow } from 'enzyme'

describe('(Container) <%= pascalEntityName %>', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {}
    _wrapper = shallow(<<%= pascalEntityName %> {..._props} />)
  })

  it('Should')


})