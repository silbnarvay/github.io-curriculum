//Variable para botón arriba

let btnArriba = document.getElementById("flecha_arriba");
document.addEventListener("scroll", scroll);

//Botón para ir arriba en la página

function scroll(){
    var pagina = document.querySelector("html");
    var x = pagina.scrollTop;
    if(x >= 0 && x <= 20 ){
    btnArriba.style.visibility='hidden';
    }else{
        btnArriba.style.visibility='visible';
    }
};


btnArriba.addEventListener("click", function() {
    window.scrollTo(0, 0)
});