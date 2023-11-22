const form = document.querySelector('form')
const nome = document.querySelector("#nome")
const table = document.querySelector('tbody')
const telefone = document.querySelector("#telefone")

form.addEventListener('submit', (e) => {
    e.preventDefault()

    renderizarLinha()
})

let telefones = []
let nomes = []
let linhas = '';

const manipularRadioButtons = () => {
  
  const sexo = document.querySelectorAll("input[type='radio']")

    let sexoSelecionado;

    for (let i = 0; i < sexo.length; i++) {
          if(sexo[i].checked){
          sexoSelecionado = sexo[i].value
        }

      sexo[i].checked = false
    }

    return sexoSelecionado
}


const renderizarLinha = () => {

  const sexoSelecionado = manipularRadioButtons()

    if(nomes.includes(nome.value) || telefones.includes(parseInt(telefone.value))){

    alert("Nome ou Telefone já existente")

    }
    else{

    nomes.push(nome.value)
    telefones.push(parseInt(telefone.value))

    let imagem = document.createElement('img')

    if(sexoSelecionado === 'masculino'){

    imagem.src = `./images/masci.png`
    imagem.alt = "homem"

    }
    else if(sexoSelecionado === 'feminino'){

    imagem.src = `./images/femia.png`
    imagem.alt = "mulher"

    }

    let ultimoNome = nomes[nomes.length - 1]
    let ultimoTelefone = telefones[telefones.length - 1]

    let linha = '<tr>'
    linha += `<td><img src="${imagem.src}" alt="${imagem.alt}" /></td>`
    linha += `<td>${ultimoNome}</td>`
    linha += `<td>${ultimoTelefone}</td>`

    linhas += linha

    nome.value = ""
    telefone.value = ""

    return table.innerHTML = linhas

  }

}