document.getElementById('suma').innerHTML=1+2;

// Create an Array:
const violetta  = ["León", "Thomás", "Diego"];

document.getElementById("array").innerHTML=violetta;

function prueba(){
    // Change an element:
    violetta[1] = "Federico";

    // Add an element:
    violetta.push("Maxi");

    // Display the Array:
    document.getElementById("array").innerHTML = violetta; 
}


function aviso(){
    window.alert('Oye amigo te ves muy lindo')
}

function consola(){
    console.log('Te amo Yoongi')
}

function imprimir(){
    window.print();
    let a, b, c;
    a=4;
    b=16;
    c=a*b+a;
    console.log(c)
}

//Solo un comentario

/* Varios comentarios
holla
no se tea mo 
*/