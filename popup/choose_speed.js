document.addEventListener("click", function(e) {
  if (e.target.classList.contains("choice")) {
    browser.tabs.executeScript({
      code: `document.querySelectorAll('video').forEach(v => v.playbackRate = ${e.target.textContent})`
    })
  }

  /*else if (e.target.classList.contains("custom")) {
    browser.tabs.executeScript({
      file: "/content_scripts/custom_speed.js"
    })
  }*/

  else {
    return;
  }

});

