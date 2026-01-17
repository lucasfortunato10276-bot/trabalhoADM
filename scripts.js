




const botoesMenu = document.querySelectorAll('.menu');


const secoes = document.querySelectorAll('section');


function esconderTudo() {
  secoes.forEach(secao => {
    secao.classList.add('escondido');
  });
}

botoesMenu.forEach(botao => {
  botao.addEventListener('click', () => {

    const idDaSecao = botao.dataset.section;

    
    esconderTudo();

    document
      .getElementById(idDaSecao)
      .classList.remove('escondido');
  });
});

esconderTudo();
document.getElementById('sc1').classList.remove('escondido');

function oo(){
  alert("Alterações Salvas")  


}
var temp = document.querySelector(".kj")
setTimeout(()=>{
temp.classList.add("kkj")






},1900)






