// https://www.gamethemesongs.com/search.php?q=failure
// https://studio.code.org/docs/gamelab/playSound/
let container = document.querySelector("#container")
// console.log(container)
let screens = document.querySelectorAll(".screen")
let activeScreenId = undefined


function setScreen(nombre){
    nombre = nombre + "Screen"
    for(scr of screens){
        if(scr.id == nombre){
            scr.style.display = "block";
        }else{
            scr.style.display = "none";
        }
    }
    // fetch(`./screens/${nombre}.html`)
    // .then(response=>response.text())
    // .then(text=>container.innerHTML = text)
}
setScreen("home")

// Funciones varias

function roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
}


// Home screen controller
let butHomeToInput = document.querySelector("#homeToInput")
butHomeToInput.addEventListener("click", function(event){
    console.log(event)
    setScreen("input")
})

// Input screen controller
let butInputToHome = document.querySelector("#inputToHome")
butInputToHome.addEventListener("click", function(event){
    console.log(event)
    setScreen("home")
})

let promedio = undefined;
let audioSrc = undefined;
let formNotas = document.querySelector("#formNotas")
formNotas.addEventListener("submit",function(event){
    event.preventDefault();
    let nota1 = Number(formNotas.elements["nota1"].value)
    let nota2 = Number(formNotas.elements["nota2"].value)
    let nota3 = Number(formNotas.elements["nota3"].value)
    if (isNaN(nota1) || isNaN(nota2)|| isNaN(nota3)){
        alert("Las notas no son válidas")
    }
    else{
        promedio = roundToTwo((nota1 + nota2 + nota3)/3);
        if(promedio >= 6){
            imgResultado.src = imgUrlHappy;
            audioSrc = './assets/Success.mp3';
        }else{
            imgResultado.src = imgUrlSad;
            audioSrc = 'https://audio.code.org/failure3.mp3';
        }
        textResultado.innerHTML = promedio;
        setScreen("output")

        playAudio();
    }
})


function playAudio() {
    var audio = new Audio(audioSrc);
    audio.play();
}


// Output screen controller
let imgUrlHappy = "https://as1.ftcdn.net/v2/jpg/01/12/43/90/1000_F_112439016_DkgjEftsYWLvlYtyl7gVJo1H9ik7wu1z.jpg";
let imgUrlSad = "https://cdn4.vectorstock.com/i/1000x1000/07/33/sad-face-icon-unhappy-face-symbol-vector-23730733.jpg";
let imgResultado = document.querySelector("#promedioImg");
let textResultado = document.querySelector("#resultProm");


let butOutputToHome = document.querySelector("#outputToHome")
butOutputToHome.addEventListener("click", function(event){
    // console.log(event)
    setScreen("home")
})