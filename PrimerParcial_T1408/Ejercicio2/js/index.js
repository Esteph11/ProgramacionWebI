function calcular() {
    // Obtener las notas  
    let nota1 = parseFloat(document.getElementById("nota1").value) || 0;
    let nota2 = parseFloat(document.getElementById("nota2").value) || 0;
    let nota3 = parseFloat(document.getElementById("nota3").value) || 0;

    if (nota1 === 0 || nota2 === 0 || nota3 === 0) {
        alert("Valores en blanco");
        return;
    }

    if (nota1 > 30) {
        warning("Nota 1 no debe ser más de 30%")
    } else if (nota2 > 30) {
        warning("Nota 2 no debe ser más de 30%")
    } else if (nota3 > 40) {
        warning("Nota 3 no debe ser más de 40%")
    } else {

        // Calcular el notafinal   
        let notafinal = nota1 + nota2 + nota3;

        // Determinar el mensaje según el notafinal  
        let mensaje;
        if (notafinal < 60) {
            mensaje = "Reprobado";
        } else if (notafinal < 80) {
            mensaje = "Bueno";
        } else if (notafinal < 90) {
            mensaje = "Muy Bueno";
        } else {
            mensaje = "Sobresaliente";
        }

        // Mostrar el resultado  
        document.getElementById("resultado").value = `${notafinal.toFixed()}% - ${mensaje}`;

    }
}

// Limpiar campos  
function limpiar() {
    document.getElementById("nota1").value = '';
    document.getElementById("nota2").value = '';
    document.getElementById("nota3").value = '';
    document.getElementById("resultado").value = '';
}

function warning(mensaje) {
    Swal.fire({
        icon: "warning",
        title: "Error",
        text: mensaje
    })
}
