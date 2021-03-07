
let imagens = document.querySelectorAll('.imagem');
let modal  = document.querySelector('.moddal');
let imgModal = document.querySelector('#modal-img');
let btClose= document.querySelector('#bt-close');
let modalCont = document.querySelector('.modal-content');
let copy = ""

for (let i = 0; i<imagens.length; i++){
    imagens[i].addEventListener('click', ()=>{
    copy = imagens[i].cloneNode(true)
    modalCont.append(copy);
    setTimeout(()=>{
        modal.style.display = "flex";
    },200);
    })
}
btClose.addEventListener('click', function(){
    modal.style.display = "none";
    document.querySelector('.modal-content .imagem').remove();
    setInterval(5000)
})

window.onscroll = ()=>{
    document.querySelector('.footer-all').style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    if (window.pageYOffset == 0){
        clear();
    }
}
function clear(){
    document.querySelector('.footer-all').style.backgroundColor = "transparent";
}

function menuToggle(){
    let menuArea = document.querySelector('.menu-area');
    if(menuArea.style.width == "200px"){
        menuArea.style.width = "0px"
        document.querySelector('.open').src = "./menu/menu 01.png"
        document.querySelector('.open').style.width = "35px"
        setInterval(5000)
    }else{
        menuArea.style.width = "200px"
        document.querySelector('.open').src = "./menu/menu 02.png"
        document.querySelector('.open').style.width = "25px"
        setInterval(5000)
    }
}
function menuToggle2(){
    let menuArea = document.querySelector('.menu-area');
    if(menuArea.style.width == "200px"){
        menuArea.style.width = "0px"
        document.querySelector('.open').src = "./menu/menu 01.png"
        document.querySelector('.open').style.width = "35px"
        setInterval(5000)
    }
}

document.querySelector('.toogle').addEventListener('click', ()=>{
    const ajudar = document.querySelector('.ajuda');
    if(ajudar.style.display == "none"){
        ajudar.style.display = "flex";
    }else{
        ajudar.style.display = "none";
    }
})

function fazerpedido(){
    let texto =  document.querySelector("#msg").value;
    texto = window.encodeURIComponent(texto);
    let celular = 5531993511665
    window.open("https://api.whatsapp.com/send?phone=" + celular + "&text=" + texto, "_blank");
    }

    function pedirAjuda(){
        let texto =  document.querySelector("#msg2").value;
        texto = window.encodeURIComponent(texto);
        let celular = 5531993511665
        window.open("https://api.whatsapp.com/send?phone=" + celular + "&text=" + texto, "_blank");
        }
    
    
 const animation = document.querySelectorAll('[data-animate]');
 const anime = 'animate';   

 function animateScroll(){
    const janela = window.pageYOffset + (window.innerHeight * 0.85);
    animation.forEach(function(e){
        if(janela > e.offsetTop){
            e.classList.add(anime)
        }else{
            e.classList.remove(anime)
        }
    })
 }
 animateScroll();
  if(animation.length){
 window.addEventListener('scroll',function(){
    animateScroll();
 })
}
