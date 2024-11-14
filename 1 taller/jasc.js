// Función para generar la tabla de multiplicar
function generarTabla() {
    // Obtenemos el número ingresado por el usuario
    const numero = document.getElementById('numeroTabla').value;

    // Validamos si el usuario ha ingresado un número
    if (numero === '') {
        document.getElementById('resultadoTabla').innerHTML = 'Por favor, ingresa un número.';
        return;
    }

    // Variable para almacenar el resultado de la tabla
    let resultado = '';

    // Generamos la tabla usando un bucle for
    for (let i = 1; i <= 10; i++) {
        resultado += `${numero} x ${i} = ${numero * i}<br>`;
    }

    // Mostramos el resultado en el área designada
    document.getElementById('resultadoTabla').innerHTML = resultado;
}

// Función para calcular el promedio de notas
function calcularPromedio() {
    // Obtenemos y convertimos los valores de las notas a números
    const notas = [
        parseFloat(document.getElementById('nota1').value),
        parseFloat(document.getElementById('nota2').value),
        parseFloat(document.getElementById('nota3').value),
        parseFloat(document.getElementById('nota4').value),
        parseFloat(document.getElementById('nota5').value)
    ];

    // Verificamos si alguna de las notas es NaN (es decir, si algún campo está vacío)
    if (notas.some(isNaN)) {
        document.getElementById('resultadoPromedio').innerHTML = 'Por favor, ingresa todas las notas.';
        return;
    }

    // Calculamos la suma y el promedio de las notas
    const suma = notas.reduce((total, nota) => total + nota, 0);
    const promedio = (suma / notas.length).toFixed(1);

    // Mostramos el promedio en el área designada
    document.getElementById('resultadoPromedio').innerHTML = `El promedio es: ${promedio}`;
}
