import React from 'react'
import { bindActionCreators } from 'redux'
import { <%= pascalEntityName %> } from 'components/<%= pascalEntityName %>'
import { shallow } from 'enzyme'

describe('(Component) <%= pascalEntityName %>', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {}
    _wrapper = shallow(<%= pascalEntityName %> {..._props} />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })


})