window.addEventListener("scroll",function(){
    var header = this.document.querySelector(".header__nav");
    header.classList.toggle("abajo",window.scrollY>0);
    
});

const icon = document.querySelector(".fa-bars");
const menu = document.querySelector("#menu");

icon.addEventListener("click",function(){
menu.classList.toggle("move");
});



const  icon_search = document.querySelector(".fa-search");
const  Busqueda = document.querySelector("#container-search"); 
const buttonsearch = document.querySelector("#js");

icon_search.addEventListener("click",function(){
Busqueda.classList.add("add");
});


buttonsearch.addEventListener("click",function(){
    Busqueda.classList.remove("add");
    });

const button = document.querySelector("#button");
const cross = document.querySelector("#fa-times");
const form = document.querySelector("#fondo-form");
const content = document.querySelector("#contact__form");


button.addEventListener("click",function(){
 
form.classList.add("visibility");
content.classList.add("visibility");
});
cross.addEventListener("click",function(){
    form.classList.remove("visibility");
    content.classList.remove("visibility");
    
});



let i =0;
let readmore =document.querySelector("#readmore");
const bajada = document.querySelector(".bajada");
readmore.addEventListener("click",function(){
if(!i){
document.getElementById("paragraph__Text2").style.display="inline";
readmore.innerHTML="LEER MENOS";
bajada.classList.remove("fa-chevron-down");



bajada.classList.remove("bajada");
bajada.classList.add("fa-chevron-up");
bajada.style.visibility ="visible";
i = 1;
}else{
        document.getElementById("paragraph__Text2").style.display="none";
        readmore.innerHTML ='LEER MAS';
        bajada.style.visibility ="visible";
        bajada.classList.remove("fa-chevron-up");
        bajada.classList.add("fa-chevron-down");

        
        i = 0;
}
});



var btn = document.querySelectorAll('.btn');
function cambiar(number){
    for(i = 0; i < btn.length; i++){
        btn[i].classList.remove("sky");
        if(number==1){
                btn[i].classList.add("close");
                btn[0].classList.remove("close");
                btn[0].classList.add("sky");

        
            }
            if(number==2){
                btn[i].classList.add("close");
                btn[1].classList.remove("close");
                btn[1].classList.add("sky");

        
            }
            if(number==3){
                btn[i].classList.add("close");
                btn[2].classList.remove("close");
                btn[2].classList.add("sky");

        
            }
            if(number==4){
                btn[i].classList.add("close");
                btn[3].classList.remove("close");
                btn[3].classList.add("sky");

        
            }
    }
}