/**
 * validaciones.js
 * Examen de validaciones
 */
'use strict'
window.onload=iniciar

//Función iniciar
function iniciar(){
    //Ejercicio 2
    //Select
    let select = document.getElementById('sCurso')
    select.onchange=elegirCursos

    //Ejercicio 4
     let ponerACero=document.querySelector("#btnCero")
     ponerACero.onclick=cero
}

//Ejercicio 2
//Función para elegir Curso
function elegirCursos() {
    if (document.getElementById('sCurso').value==1) {
 
        //Creo el select
        let select=document.createElement('select')
        select.id='modulo'
        select.name='modulo'

        let div=document.getElementsByClassName('select')[0]
        div.appendChild(select)

        //Array de los Módulos
        let modulos=["Programacion", "Lenguaje de Marca", "Base de Datos", "Entorno de Desarrollo", "Sistemas"]
        //Ordenar Array alfabeticamente
        modulos.sort()

        //Recorrer el Array
        for(let modulo in modulos){
            let opcion=document.createElement('option')
            opcion.text=modulos[modulo]
            select.appendChild(opcion)
        }
    }else{
        if (document.getElementById('sCurso').value==2) {
 
            //Creo el select
            let select=document.createElement('select')
            select.id='modulo2'
            select.name='modulo2'
    
            let div=document.getElementsByClassName('select')[0]
            div.appendChild(select)
    
            //Array de los Módulos
            let modulos2=["DIW", "DEAP", "DWES"]
            //Ordenar Array alfabeticamente
            modulos2.sort()
    
            //Recorrer el Array
            for(let modulo2 in modulos2){
                let opcion=document.createElement('option')
                opcion.text=modulos2[modulo2]
                select.appendChild(opcion)
            }
        }
    }
    
}

//Ejercicio 4
//Inicializar type=number a 0
function cero(){
    for(let i=1; i<=3; i++){
        document.querySelector("#iCalculo"+i).value=0;
    }
}
console.log('Cargado JS')
