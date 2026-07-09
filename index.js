const botao = document.getElementById('buscar')
const resultado = document.getElementById('resultado')
const preco = document.getElementById('preco')
import { chaveapi } from './chaveip.js'





botao.addEventListener('click', async function() {
  const produto = document.getElementById('produto')

  const resposta = await fetch(`https://api.unsplash.com/search/photos?query=${produto.value}&client_id=${chaveapi}`)
  const dados = await resposta.json()
  const li = document.createElement('li')
  li.style.listStyleType = "none";
  const img = document.createElement('img')
  img.src = dados.results[0].urls.regular
  img.width = 400
  const valor = document.createElement('p')
  valor.textContent = `R$: ${Number(preco.value).toFixed(2)}`

  
  resultado.appendChild(li)
  li.appendChild(img)
  li.appendChild(valor)

  produto.value = ""
 
  preco.value = ''
})

