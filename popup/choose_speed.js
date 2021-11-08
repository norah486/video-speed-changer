document.addEventListener("click", function(e) {  
  if (e.target.classList.contains("choice")) {
    browser.tabs.executeScript({
      code: `document.querySelectorAll('video').forEach(v => v.playbackRate = ${e.target.textContent})`
    })
  }

  else if (e.target.classList.contains("custom")) {

    var moreBtn = document.getElementById("btnMore");
    var hidSpeed = document.getElementById("sp_hid");
    var shownSpeed = document.getElementById("sp_shown");

    if (moreBtn.innerHTML == "More") {
      moreBtn.innerHTML = "Less"
      hidSpeed.style.display = "inline"
      shownSpeed.style.display = "none"
    } else if (moreBtn.innerHTML == "Less") {
      moreBtn.innerHTML = "More"
      hidSpeed.style.display = "none"
      shownSpeed.style.display = "inline"
    }
  }

  else {
    return;
  }

});

