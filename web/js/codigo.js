function aleatorio(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada){
            if(jugada == 1){
        resultado = "Piedra"
    } else if(jugada == 2){
        resultado = "Papel"
    } else if(jugada == 3){
        resultado = "Tijera"
    } else {
        resultado = "No valido"
    }

return resultado
}
function combate(){

        if(pc == jugador){
        resultado = "EMPATE"
        }else if(jugador == 1 && pc ==3){
        resultado = "GANASTE"
        }else if(jugador == 2 && pc ==1){
        resultado = "GANASTE"
        }else if(jugador == 3 && pc ==2){
        resultado = "GANASTE"
        }else { resultado = "PERDISTE"}

        alert(resultado)
        }    
//1 es piedra, 2 es papel, 3 es tijera.
let jugador = 0
let pc = 0
let triunfos = 0
let perdidas = 0
let empate  = 0

    while(triunfos < 3 && perdidas < 3) 
    {
        pc = aleatorio(1,3)
        jugador = prompt("Elige: 1 para piedra, 2 para papel 3 para tijera")
            //alert("elegiste "+ jugador)
                
                alert("tu eliges: " + eleccion(jugador))
                alert("pc elige: " + eleccion(pc))
        combate()
            
            if(resultado == "GANASTE")
            {triunfos = triunfos + 1}
            else if(resultado == "EMPATE")
            {empate: empate + 1}
            else { perdidas = perdidas + 1}
    }   

    alert("Ganaste " + triunfos)
    alert("Perdiste " + perdidas)
    alert("Empates " + empate)