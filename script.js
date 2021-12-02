const counters = document.querySelectorAll('.counter')

window.addEventListener('dblclick', () => {
  counters.forEach((counter) => {
    counter.innerText = ''
    const target = +counter.getAttribute('data-target')
    let c = 0
    const int = setInterval(function () {
      c = c + 60
      if (c < target) {
        counter.innerText = c
      } else {
        clearInterval(int)
        counter.innerText = target
      }
    }, 1)
  })
})
