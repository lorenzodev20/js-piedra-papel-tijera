/** Juego de piedra, papel o tijeras */


function juegoPiedraPapelTijera(computadora, jugador) 
{
  var piedra  = "piedra";
  var papel   = "papel";
  var tijera  = "tijera";
  
  if(jugador == piedra && computadora == tijera){

    console.log("El jugador sacó: "+jugador+" y La computadora sacó: "+computadora);
    console.log("Ganó El jugador.");

  }else if(jugador == tijera && computadora == papel){

    console.log("El jugador sacó: "+jugador+" y La computadora sacó: "+computadora);
    console.log("Ganó El jugador.");

  }else if(jugador == papel && computadora == piedra){

    console.log("El jugador sacó: "+jugador+" y La computadora sacó: "+computadora);
    console.log("Ganó El jugador.");

  }else if(computadora == piedra && jugador == tijera){

    console.log("El jugador sacó: "+jugador+" y La computadora sacó: "+computadora);
    console.log("Ganó la computadora.");

  }else if(computadora == tijera && jugador == papel){

    console.log("El jugador sacó: "+jugador+" y La computadora sacó: "+computadora);
    console.log("Ganó la computadora.");

  }else if(computadora == papel && jugador == piedra){

    console.log("El jugador sacó: "+jugador+" y La computadora sacó: "+computadora);
    console.log("Ganó la computadora.");

  }else if(jugador == computadora){

    console.log("El jugador sacó: "+jugador+" y La computadora sacó: "+computadora);
    console.log("Es un empate");
  }
  
}
// Llamado a la funcion
juegoPiedraPapelTijera('piedra','tijera');

/* 
//En caso de querelo hacer automatico
  const armas = ['piedra','papel','tijera'];

  // Retorna un entero aleatorio entre min (incluido) y max (excluido)
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  var computadora = armas[getRandomInt(3)];

  var persona = armas[getRandomInt(3)]; 
*/

