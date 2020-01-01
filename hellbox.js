document.addEventListener("DOMContentLoaded", function() {
  var curtain = document.createElement("div")
  curtain.style.cssText = "position: fixed; top: 0; left: 0; z-index: 1; width: 100%; height: 100%; background: rgba(0,0,0,0.5) none 50% 50%/contain no-repeat; display: none"
  document.body.appendChild(curtain)
  curtain.onclick = function() { curtain.style.display = "none" }
  var boxes = document.getElementsByClassName("hellbox")
  for(var i=0; i<boxes.length; ++i) boxes[i].addEventListener("click", function(e) {
    e.preventDefault()
    curtain.style.backgroundImage = "url('"+e.target.parentNode.href+"')"
    curtain.style.display = "block"
  })
})
