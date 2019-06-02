const colors1 = []
let alphabet = '0123456789abcde'.split('')
alphabet.map(letter => colors1.push(`#${letter + letter + letter}`))

function ccontent({ target: { innerText: content } }) {
  let textArea = document.createElement('textarea')
  let notification = document.getElementById('notification')
  notification.classList.add('show')

  textArea.value = content
  document.body.appendChild(textArea)
  textArea.select()
  document.execCommand('copy')
  textArea.remove()

  setTimeout(() => {
    notification.classList.remove('show')
  }, 900)
}

function generateColors(colors = [], container) {
  colors.map(color => {
    let swatch = document.createElement('div')
    let desc = document.createElement('span')

    Object.assign(swatch.style, {
      backgroundColor: color,
      color: color,
      cursor: 'pointer'
    })
    swatch.classList = 'swatch'
    desc.innerHTML = color
    swatch.appendChild(desc).addEventListener('click', ccontent)
    container.appendChild(swatch)
  })
}

generateColors(colors1, document.querySelectorAll('.colorGrid')[0])
