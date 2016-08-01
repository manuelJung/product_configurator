import React from 'react'
import { bindActionCreators } from 'redux'
import { SuccessPage } from 'components/SuccessPage'
import { shallow } from 'enzyme'

describe('(Component) SuccessPage', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {}
    _wrapper = shallow(SuccessPage {..._props} />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })


})