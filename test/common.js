import jsdom from 'jsdom'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import 'canvas-prebuilt'

chai.use(chaiEnzyme())

const doc = jsdom.jsdom('<!DOCTYPE html><html><body></body></html>')
const win = doc.defaultView

global.document = doc
global.window = win
global.expect = chai.expect

// resolving issues with apple's assumption of window scope
global.navigator = window.navigator
global.location = window.location
global.CustomEvent = window.CustomEvent

let now = Date.now
const startTime = now()
let lastTime = startTime

// animation frame stuff
global.requestAnimationFrame = (callback) => {
  let currentTime = now()
  let delay = Math.max(0, 16 - (currentTime - lastTime))

  lastTime = currentTime

  return window.setTimeout(() => {
    lastTime = now()

    callback(lastTime - startTime)
  }, delay)
}

global.cancelAnimationFrame = (id) => {
  window.clearTimeout(id)
}
