    document.getElementById('rectangleForm').addEventListener('submit', function(event) {  
    event.preventDefault(); // Evita que se recargue la página  
}); 
function calcular() {
    let base = document.getElementById("base").value  
    let altura = document.getElementById("altura").value  

    // Valida que ambos valores sean positivos  
    if (base <= 0 || altura <= 0) {  
        alert('Valores deben ser positivos para la base y la altura.');  
        return;  
    }  

    // Calcula el área  
    let area = base * altura;  

    // Muestra el resultado  
    document.getElementById('resultado').innerText = area;   
}

// Limpiar campos  
function limpiar(){
    document.getElementById('base').value = '';  
    document.getElementById('altura').value = '';  
    document.getElementById('resultado').innerText = '0';  
}
 

function warning(mensaje) {
    Swal.fire({
        icon: "warning",
        title: "Error",
        text: mensaje
    })
}