
var modal=document.querySelector("#modal-overlay")
var modalBack=document.querySelector("#modal-background")
var title=document.querySelector("#title")
var nome=document.querySelector("#nome")
var poetry=document.querySelector("#poetry")
var poetrylist=JSON.parse(localStorage.getItem('poetrylist'))?? [];
var tamanho=poetrylist.length
let Autor
let nomepoesia
var ol2019=document.querySelector(".ano2019")
var ol2020=document.querySelector(".ano2020")
var objectButton=document.querySelector("#botao")
var body=document.querySelector("body")

body.classList.add("mouse")


  function carregarArquivo2() {
    const promessa=new Promise((resolve, reject) => {
        var script = document.createElement('script');
        script.src = 'poesias.js';
        script.onload = resolve
        document.head.appendChild(script);
    })
   return promessa
  
}

 carregarArquivo2().then(generatefunc)




function botao(){
    modal.classList.add("appear")
    body.classList.remove("mouse")
    nome.innerHTML="Gabi Opuchkevich"
    title.innerHTML= "Se voce vier, eu serei!"
    poetry.innerHTML=`<img  src="images/poesia.jpeg" alt="" >`
}

function loop1() {

    for(i=1;i<53;i++){
 
        var poesia=eval(`pp${i}`).poetry
        var titulo=eval(`pp${i}`).title 
        
        var nomevariavel=`pp${i}`
        
        ol2020.innerHTML+=`<li id="${nomevariavel}"> ${titulo}</li>`
       // if(i===52){  aux=1}
    }  }
  

    function loop2() {
    for(i=1;i<44;i++){
       
        var poesia=eval(`po${i}`).poetry
        var titulo=eval(`po${i}`).title 
        var aux
        var aux1
        
        var nomevariavel=`po${i}`
        
        ol2019.innerHTML+=`<li id="${nomevariavel}"> ${titulo}</li>
        `
    
       }}
    async function generatefunc(){
        const result = await loop1();
        const result2 = await loop2();
        carregar()
   
      }
          
   
    

    
  function carregar(){

   //window.addEventListener("load",()=>{
    var lis = document.querySelectorAll('li');
    
var lislenght=lis.length

for(i=0;i<lislenght;i++){ 

    lis[i].addEventListener("click",clickds)}

    

    for(i=0;i<lislenght;i++){
        lis[i].addEventListener("mouseover",greenclass)
    }
    
    for(i=0;i<lislenght;i++){
        lis[i].addEventListener("mouseout",normalclass)
    }
    
    runpoetrylist(tamanho)
}

function alreadyopen(id){
 
    var item = document.querySelector(`#${id.id}`);
    item.classList.add("already-view");
  
}

function closeModal(){
    modal.classList.remove("appear")
    body.classList.add("mouse")

}

function addLocalstorage(){
    
   
    localStorage.setItem('poetrylist',JSON.stringify(poetrylist))
    
}
   function runpoetrylist(tamanho){
   
    for(i=0;i<=tamanho;i++){
        if(poetrylist[i]!=undefined){
       alreadyopen(poetrylist[i])
    }}
}
function isthisonlist(id){

    return poetrylist.find(poetry=>poetry.id===id)
}
function clickds(){
    let text=this.innerHTML
    nomepoesia=this.id
    text=String(text)
    let autoraux=text.includes("- Pê")
    if(autoraux){
        Autor="<br>Pedro Coelho"
        text=text.replace("- Pê","")
    }
       
       else{
           Autor="<br>Gabi Opuchkevich"
           text=text.replace("- Gabi","")}
    
   nome.innerHTML=Autor
    
title.innerHTML=text
poetry.innerHTML=eval(`${nomepoesia}`).poetry
 const id=this.id
 tamanho=poetrylist.length
 let teste=isthisonlist(id)
if(teste){
    console.log("i")}
else{
    if(id){
    poetrylist[tamanho]={id:`${id}`}}
    addLocalstorage()}

modal.classList.add("appear")
body.classList.remove("mouse")


 const hiddenlenght=document.querySelectorAll('.my-class').length;


runpoetrylist(tamanho)
    


}






objectButton.addEventListener("click",botao)


modalBack.addEventListener("click",closeModal)




function greenclass(){
    this.classList.add("onmouse");
    this.style.cursor = 'pointer';

}

function normalclass(){
    this.classList.remove("onmouse");
}

