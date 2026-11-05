const formulario = document.getElementById
("formulario")

formulario.addEventListener("submit", function (event) {

event.preventDefault()

// CAPTURAR OS VALORES DIGITADOS PELO USUARIO

const nome = document.getElementById("nome").value
const email = document.getElementById("email").value
const telefone = document.getElementById("telefone").value
const ingressos = document.getElementById("ingressos").value
const duvidas = document.getElementById("duvidas").value



if (telefone.trim() === "" ){
    
    alert("Digite seu telefone")
    return
}


const textoWhatsapp = `
Olá! Gostaria de comprar o Ingresso para o show do MC Cabelinho
Nome: ${nome}
Telefone: ${telefone}
Email: ${email}
Tipo Ingresso: ${ingressos}
Duvidas Sobre: ${duvidas}
`



//CONDIFICAR A MENSAGEM PARA SER UTILIZADA NA URL
const mensagemCodificada = encodeURIComponent
(textoWhatsapp)

//NUMERO WHATSAPP
const numeroWhatsapp = "11939406844"

//MONTA O LINK DO WHATSAPP

const link = "https://wa.me/" + numeroWhatsapp + "?text=" + mensagemCodificada;

window.location.href = link

})