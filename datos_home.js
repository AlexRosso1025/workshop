let img_header = document.getElementById('img_header')
let text_header = document.getElementById('text_header')

const URL = 'https://api.chucknorris.io/jokes/random'

let noticias = () => {
  noticia_principal()
}

let noticia_principal = () => {
  const traer_noticia =
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        text_header.textContent = data.value
        img_header.src = data.icon_url
      })

  return traer_noticia
}