var buttons = document.getElementsByTagName('button')
var headerButton = buttons[0]
var main = document.getElementById('form_main')

headerButton.onclick = function () {
  setTimeout(() => {
    main.scrollIntoView()
  }, 100)
  return false
}

// image lazy load
function init() {
    var imgDefer = document.getElementsByTagName('img');
    for (var i = 0; i < imgDefer.length; i++) {
        if (imgDefer[i].getAttribute('data-src')) {
            imgDefer[i].setAttribute('src', imgDefer[i].getAttribute('data-src'));
        }
    }
}
window.onload = init;
