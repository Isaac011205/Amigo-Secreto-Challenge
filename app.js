// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    // Validación: campo vacío
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    // Añadir al array
    amigos.push(nombre);

    // Limpiar el campo
    input.value = '';

    // Actualizar la lista visual
    mostrarListaAmigos();
}

function mostrarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    
    // Limpiar la lista antes de volver a pintarla
    lista.innerHTML = '';

    // Recorrer el array y crear <li> por cada amigo
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay nombres en la lista para sortear.');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let nombreSorteado = amigos[indiceSorteado];

    // Mostrar resultado en pantalla
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpiar resultado anterior

    let li = document.createElement('li');
    li.textContent = `El amigo secreto es: ${nombreSorteado}`;
    resultado.appendChild(li);
}
