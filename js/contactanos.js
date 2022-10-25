function mostrarMensaje(mensaje){
    alert(mensaje);
}

function incrementarContador(valor) {
    // // formas de definir un varibales javascript
    // //let:esta variables cambia
    // let a =3 
    // //const: esta variable solo se presenta una vez 
    // const c =25

    // let valor = document.getElementById("contador").value;


    // if(valor > 5) {
    //     alert("el numero es mayor a 5");
    
    // } else if (valor >= 0) {
    //     alert("El numero es positivo");
    // } else {
    //     alert("El numero es negativo")
    // }

    // for(i=0; i < 5; i++){
    //     console.log(i);
        
    // }
    valor++;
    document.getElementById("contador").value = valor;

    

    document.getElementById("salida").innerHTML = '<b>'+ valor+"</b>";

}