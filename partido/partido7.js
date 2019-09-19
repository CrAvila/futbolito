
var question = document.getElementById("quest");
var next = document.getElementById("sig");
var back = document.getElementById("ant");
var todas = document.getElementById("primeroAB");
var texto = document.getElementById("pab0");
var ans = document.getElementById("respuesta");
var show =document.getElementById("mostrar");
var ejem = document.getElementById("ejemploimg");




var preguntas1ab = [" ¿Cuantas veces aparece el número nueve en la numeración del 1 al 100?","Si en una cuenta corriente se tiene un saldo  de -$15000 y se depositan $45000 y posteriormente se retiran $25000. ¿Cuánto dinero queda en la cuenta?","Calcular el valor numérico de −3/4 𝑎+7/5 𝑏 donde 𝑎=−6 𝑦 𝑏=1","Cubo de Rubik","Resolver la siguiente ecuación: 4𝑦+3=2𝑦+9","Coloca las cifras del uno al seis sin repetir, en los círculos del triángulo de manera que las cifras de cada lado sumen 10 ","TORRE DE HANOI"]


/*var preguntas1ab = ["","","","Cubo de Rubik","","","TORRE DE HANOI"]*/


var respuesta1ab = ["20 veces","$5000"," 31/10","","𝑦=2","",""];

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
        ejem.src ="images/ut.png";
        ejem.style.display = "none";
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
        ejem.src ="images/triangquest.jpg";
        
                ejem.style.display = "block";
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
          ans.textContent = respuesta1ab[1];
      }
      else if(question.textContent == 2){
          ans.textContent = respuesta1ab[2];
      }
      else if(question.textContent == 3){
        ans.textContent = respuesta1ab[3];
    }
    else if(question.textContent == 4){
        ans.textContent = respuesta1ab[4];
    }
    else if(question.textContent == 5){
        ejem.src="images/triang.jpg"
    }
    else if(question.textContent == 6){
        ans.textContent = respuesta1ab[6];
    }
}


next.addEventListener("click", siguiente )

back.addEventListener("click", anterior )

next.addEventListener("click", partido )

back.addEventListener("click", partido )

show.addEventListener("click",answer);

partido() 













