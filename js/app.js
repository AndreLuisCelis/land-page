
const pontoDeQuebraLarguraDaTela = 768;

let btnMenuMobile = document.getElementById('btn-menu-mobile');

let menuMobile = document.getElementById('menu-mobile');
menuMobile.hidden = 'true'

let menuDesktop = document.getElementById('menu-desktop');


window.onload = ()=> {
    definirTipoDeMenu();
    capturarCliqueFora();
}

window.onresize = ()=> {
    definirTipoDeMenu();
}

function definirTipoDeMenu(){
    mostrarOuEsconderBtnMenuMobile();
    mostrarOuEsconderMenuDesktop();
}

let obterLarguraDaTela = ()=> {
    return document.body.clientWidth;
}

let mostrarOuEsconderBtnMenuMobile =()=>{
 obterLarguraDaTela()<=pontoDeQuebraLarguraDaTela?btnMenuMobile.hidden = false:btnMenuMobile.hidden = true;
}

let mostrarOuEsconderMenuDesktop = ()=>{
    obterLarguraDaTela()>=pontoDeQuebraLarguraDaTela?menuDesktop.hidden = false:menuDesktop.hidden = true;
}

let capturarCliqueFora =()=>{
    document.documentElement.onclick = (event)=> {
        if(event.target !== menuMobile && event.target !== btnMenuMobile){
            fechaMenuMobile();
        }
    }
}

let abrirMenuMobile = ()=> {
    menuMobile.hidden = false;
}

let fechaMenuMobile = ()=> {
    menuMobile.hidden = true;
}

btnMenuMobile.onclick = ()=> {
        abrirMenuMobile();
}


function sendMail() {
    let message = document.getElementById('messageMail').value;
    let link = "mailto:celisaplicativos@gmail.com?"
             + "&subject=" + "\n Ola celisaplicativos Gostaria de mais informações"
             + "&body=" + "\n " + message;
      enviarMensagem(link)
}

function sendWhats() {
    // Solução no link : https://medium.com/@jeanlivino/como-resolver-o-problema-na-api-do-whatsapp-em-navegadores-desktop-9e64740d22cd
    let message = document.getElementById('messageMail').value;
    let linkDesktop = "https://web.whatsapp.com/send?phone=5511991625833?"
             + "&text=" + "\n " + message;

    let linkMobile = "whatsapp://send?phone=5511991625833?"
     + "&text=" + "\n " + message;
     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        enviarMensagem(linkMobile);
    } else { enviarMensagem(linkDesktop)}
    
}

let enviarMensagem = (link)=>{
    console.log('enviar')
    let  a = document.createElement('a');
     a.target = '_blank';
     a.href = link;
     a.click();
}
