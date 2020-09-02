const body = document.getElementsByTagName('body')
const button = document.getElementsByTagName('button')

button[0].addEventListener('click', () => {
  body[0].classList.toggle('active')
})
