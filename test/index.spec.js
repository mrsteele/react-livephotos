/* global describe, it, expect */
/* eslint no-unused-expressions: 0 */

import React from 'react'
import { mount } from 'enzyme'
import LivePhotos from '../src'

describe('LivePhotos', () => {
  it('should run a test', () => {
    expect(false).to.be.false
  })

  describe('Render', () => {
    it('should be able to mount', () => {
      const wrapper = mount(<LivePhotos />)
      expect(wrapper.type()).to.equal(LivePhotos)
    })
  })
})
