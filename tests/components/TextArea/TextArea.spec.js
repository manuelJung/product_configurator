import React from 'react'
import { bindActionCreators } from 'redux'
import { TextArea } from 'components/TextArea'
import { shallow } from 'enzyme'

describe('(Component) TextArea', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {}
    _wrapper = shallow(TextArea {..._props} />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })


})