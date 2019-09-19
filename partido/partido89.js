
var question = document.getElementById("quest");
var next = document.getElementById("sig");
var back = document.getElementById("ant");
var todas = document.getElementById("primeroAB");
var texto = document.getElementById("pab0");
var ans = document.getElementById("respuesta");
var show =document.getElementById("mostrar");
var ejem = document.getElementById("ejemploimg");


var preguntas1ab = [" ¿Cuánto es la mitad de dos, más tres?","Los números de cada círculo es la multiplicación de los números de abajo. ¿Eres capaz de resolver el misterio? ","Dos números suman 304  y el doble de uno de ellos es 56. ¿Qué números son?","Cubo de Rubik","La suma de tres números consecutivos es 153, encuentre los tres números por medio del planteamiento de una ecuación lineal ","El  área de un terreno rectangular es 128𝑐㎡. Si el largo es el doble que el ancho, encontrar las dimensiones del terreno","TORRE DE HANOI"]


/*var preguntas1ab = ["","","","Cubo de Rubik","","","TORRE DE HANOI"]*/


var respuesta1ab = ["4",""," 276 y 28","","𝑥+𝑥+1+𝑥+2=153 Los números son 51, 52, 53","Largo es 16, Ancho 8",""];

num = 0;

function siguiente(){
    question.textContent = ++num;
    if (num > 0 ){
        back.disabled = false;
     }
     if (num >=7){
         question.textContent = 7;
         next.disabled = true;
     }
     ans.textContent = "";
}


function anterior(){
    question.textContent = --num;
    if(num <= 0){
        question.textContent = 0;
        back.disabled = true;
    }  
    if(num <= 6){
        next.disabled = false;
    }
    ans.textContent = "";

}
function partido(){
    if(question.textContent == 0){
        texto.textContent = "Pregunta de calentamiento: "+ preguntas1ab[0];
        ejem.src ="images/ut.png";
        ejem.style.display = "none";
        mostrar.style.display = "block";
        respuesta.style.marginLeft = "225px";
        
    }
    else if (question.textContent == 1){
        texto.textContent = preguntas1ab[1];
        ejem.src ="images/circulosquest.jpg";
        ejem.style.display = "block";
        mostrar.style.display = "block";
        
    }
    else if (question.textContent == 2){
        texto.textContent = preguntas1ab[2];
        ejem.src ="images/ut.png";
        ejem.style.display = "none";
        mostrar.style.display = "block";
        
    }
    else if (question.textContent == 3){
        texto.textContent = preguntas1ab[3];
        ejem.src = "images/cubo.jpg";
        ejem.style.display = "block";
        ejem.style.marginLeft = "140px";
        mostrar.style.display = "none";
        
    }
    else if (question.textContent == 4){
        texto.textContent = preguntas1ab[4];
        ejem.src ="images/ut.png";
        ejem.style.display = "none";
        mostrar.style.display = "block";

    }
    else if (question.textContent == 5){
        texto.textContent = preguntas1ab[5];
        ejem.src ="images/ut.png";
        ejem.style.display = "none";
        mostrar.style.display = "block";
    }
    else if (question.textContent == 6){
        texto.textContent = preguntas1ab[6];
        ejem.src ="images/hanoi.jpg";
        ejem.style.display = "block";
        ejem.style.marginLeft = "140px";
        mostrar.style.display = "none";
    }
    else if (question.textContent == 7){
        texto.textContent = "Partido Finalizado";
        ejem.src ="images/hanoi.jpg";
        ejem.style.display = "none";
        ejem.style.marginLeft = "140px";
        mostrar.style.display = "none";
    }
}

function answer(){
    if(question.textContent == 0){
      ans.textContent = respuesta1ab[0];    }
      else if(question.textContent == 1){
          ejem.src = "images/circulosquestans.jpg";
          ans.style.fontSize="50px";
      }
      else if(question.textContent == 2){
          ans.textContent = respuesta1ab[2];
          ans.style.fontSize="50px";
      }
      else if(question.textContent == 3){
        ans.textContent = respuesta1ab[3];
        ans.style.fontSize="50px";
    }
    else if(question.textContent == 4){
        ans.textContent = respuesta1ab[4];
        ans.style.fontSize="35px";
    }
    else if(question.textContent == 5){
        ans.textContent = respuesta1ab[5];
        ans.style.fontSize="50px";
    }
    else if(question.textContent == 6){
        ans.textContent = respuesta1ab[6];
        ans.style.fontSize="50px";
    }
}


next.addEventListener("click", siguiente )

back.addEventListener("click", anterior )

next.addEventListener("click", partido )

back.addEventListener("click", partido )

show.addEventListener("click",answer);

partido() 













