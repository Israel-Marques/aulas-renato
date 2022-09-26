// Delimitação de Strings


const aspasSimples = 'Olá, mundo'
console.log(aspasSimples)

// caracteres de escapa

const aspasDuplas = "Outra mensagem \n diferente" // \n quebra linha
console.log(aspasDuplas)

const textoComCrase = `Olá eu sou o
Javascript. Eu sou melhor que o Python` // utilizando crase como aspas não é necessario usar o /n pra quebrar linha
console.log(textoComCrase)

// métodos das strings

const texto = 'O javascript foi criado alguns anos após o Python. No entanto, o Javascript é bem mais bacana.'

console.log(texto)
console.log(texto.toUpperCase())
console.log(texto.toLowerCase())
console.log(texto.concat(' A linguagem C é a mãe de todas as linguagens.'))
// console.log(texto[5]) // mostra uma letra especifica
console.log(texto.substring(1, 12))

// case sensitive --> diferencia letra maiuscula de minuscula

console.log(texto.replace('Javascript', 'Rust')) // substitui a primeira ocorrencia da pesquisa
console.log(texto.replaceAll('Javascript', 'Kotlin'))
console.log(texto.replace(/Javascript/gi, 'PHP'))
console.log(texto.replace(/Javascript/gi, 'PHP'))

const html = '<!DOCTYPE html>\n<html></html>'

console.log(html.startsWith('<!DOCTYPE html>'))
console.log(html.startsWith('batata'))

console.log(html.endsWith('</body'))

const mensagem = '                                                        Olá, mundo                                 '
console.log(mensagem)
console.log(mensagem.trim())

let senha = 'sonic'

console.log(senha.length)
console.log(senha.length >= 8)

