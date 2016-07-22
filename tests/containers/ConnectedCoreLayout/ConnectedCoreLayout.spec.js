import React from 'react'
import { bindActionCreators } from 'redux'
import ConnectedCoreLayout from 'containers/ConnectedCoreLayout'
import { shallow } from 'enzyme'

describe('(Component) CoreLayout', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {}
    _wrapper = shallow(ConnectedCoreLayout {..._props} />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })


})