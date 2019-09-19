
var question = document.getElementById("quest");
var next = document.getElementById("sig");
var back = document.getElementById("ant");
var todas = document.getElementById("primeroAB");
var texto = document.getElementById("pab0");
var ans = document.getElementById("respuesta");
var show =document.getElementById("mostrar");
var ejem = document.getElementById("ejemploimg");


var preguntas1ab = [" Si un pastor tiene 15 ovejas y se le mueren todas menos nueve, ¿cuántas le quedan?","Resuelvan la siguiente desigualdad  𝟏<𝟑(𝒙+𝟒)−𝟑<𝟓 y presente el conjunto solución  en notación de corchetes","Desarrolle el siguiente binomio:","Cubo de Rubik","Un árbol quebrado por el viento forma un triángulo rectángulo con el suelo. Determina la altura inicial del árbol si la parte que cayó hacia el suelo forma con este un ángulo  de 20º y la parte del tronco que quedo en pie mide 2.3 m de altura.","Hallar el área del siguiente rectángulo ","TORRE DE HANOI"]


/*var preguntas1ab = ["","","","Cubo de Rubik","","","TORRE DE HANOI"]*/


var respuesta1ab = ["9","","","","","10x²+46x+48",""];

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
        ejem.style.display = "block";
    }
    else if (question.textContent == 2){
        texto.textContent = preguntas1ab[2];
        
        ejem.src ="images/bin.png";
        mostrar.style.display = "block";
        ejem.style.display = "block";
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
        ejem.src ="images/trianrecta.png";
        ejem.style.display = "block";
        mostrar.style.display = "block";
    }
    else if (question.textContent == 5){
        texto.textContent = preguntas1ab[5];
        ejem.src ="images/rectan.png";
        ejem.style.display = "block";
        mostrar.style.display = "block";
        mostrar.style.marginLeft = "200px";
        respuesta.style.marginLeft = "100px";
        
         
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
          ejem.src = "images/desi.png"
          ans.style.fontSize="50px";
      }
      else if(question.textContent == 2){
          ejem.src ="images/bin1.png";
          ans.style.fontSize="50px";
      }
      else if(question.textContent == 3){
        ans.textContent = respuesta1ab[3];
        ans.style.fontSize="50px";
    }
    else if(question.textContent == 4){
        ejem.src = "images/trianrectaans.png";
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













