import React from 'react'
import { bindActionCreators } from 'redux'
import Connected<%= pascalEntityName %> from 'containers/Connected<%= pascalEntityName %>'
import { shallow } from 'enzyme'

describe('(Component) <%= pascalEntityName %>', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {}
    _wrapper = shallow(Connected<%= pascalEntityName %> {..._props} />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })


})