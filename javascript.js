document.addEventListener("DOMContentLoaded", function(){

  let respuestaUsuario = window.prompt("¿Qué cuadrado quieres?");
  
  function responderAlUsuario (respuestaUsuario){
    if(respuestaUsuario === "1"){
      let cuadradoUno = document.getElementsByClassName("bloque-uno")
      cuadradoUno[0].style.backgroundColor = "red";
    } 
    else if (respuestaUsuario === "2"){
      let cuadradoDos = document.getElementsByClassName("bloque-dos")
      cuadradoDos[0].style.backgroundColor = "red";

    }
    else if (respuestaUsuario === "3"){
      let cuadradoTres = document.getElementsByClassName("bloque-tres")
      cuadradoTres[0].style.backgroundColor = "red";

    }
    else if (respuestaUsuario === "4"){
      let cuadradoCuatro = document.getElementsByClassName("bloque-cuatro")
      cuadradoCuatro[0].style.backgroundColor = "red";

    }
    else{
      return "Respuesta no válida"
    }
    
  }
responderAlUsuario(respuestaUsuario);

})
