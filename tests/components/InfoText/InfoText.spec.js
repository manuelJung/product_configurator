import React from 'react'
import { bindActionCreators } from 'redux'
import { InfoText } from 'components/InfoText'
import { shallow } from 'enzyme'

describe('(Component) InfoText', () => {
  let _props, _spies, _wrapper

  beforeEach(() => {
    _spies = {}
    _props = {}
    _wrapper = shallow(<InfoText {..._props} />)
  })

  it('Should render as a <div>.', () => {
    expect(_wrapper.is('div')).to.equal(true)
  })


})