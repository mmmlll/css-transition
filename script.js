document.addEventListener('DOMContentLoaded', init)

function init () {
  var allDivs = document.querySelectorAll('div')
  allDivs.forEach(function (div) {
    div.addEventListener('click', addExpanded)
  })
}

function addExpanded (event) {
  var elem = event.target
  elem.classList.add('expanded')
  // elem.className += ' expanded' does NOT work
  // note that .class should NOT be used. .className instead 
}
