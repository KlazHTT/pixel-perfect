/*-----------------------------------------------------------------------------
-- // BROWSER SIZE
-----------------------------------------------------------------------------*/

// get dimensions of browser window
function getBrowserSize() {
  // check width of browser window
  var width = window.innerWidth
    || document.documentElement.clientWidth
    || document.body.clientWidth

  // check height of browser window
  var height = window.innerHeight
    || document.documentElement.clientHeight
    || document.body.clientHeight

  // display browser size
  document.getElementById('browser-width').innerHTML = width
  document.getElementById('browser-height').innerHTML = height
}

// update dimensions when page loads
window.onload = getBrowserSize

// update dimensions when resizing browser window
window.onresize = getBrowserSize
