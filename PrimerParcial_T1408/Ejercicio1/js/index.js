function calcular() {
    let base = document.getElementById("base").value;
    let altura = document.getElementById("altura").value;

    if (base === "") {
        warning("Valor de Base en blanco")
    } else if (altura === "") {
        warning("Valor de Altura en blanco")
    } else {

        let b = parseFloat(base)
        let h = parseFloat(altura)

        // Valida que ambos valores sean positivos  
        if (base <= 0 || altura <= 0) {
            alert('Valores deben ser positivos para la base y la altura.');
            return;
        } else {
            // Calcula el área | A = b x h
            let a = b * h;
            // Muestra el resultado  
            document.getElementById("resultado").value = a;

        }
    }
}

// Limpiar campos  
function limpiar() {
    document.getElementById("base").value = '';
    document.getElementById("altura").value = '';
    document.getElementById("resultado").value = '0';
}


function warning(mensaje) {
    Swal.fire({
        icon: "warning",
        title: "Error",
        text: mensaje
    })
}