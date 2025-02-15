//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById("amigo").value;
    if (nome == "") {
        alert("Por favor, insira um nome.");
    }
    else {
        amigos.push(nome);
        document.getElementById("amigo").value = "";
        percorrerArray();
        document.getElementById("resultado").innerHTML = "";
    }
}

function percorrerArray() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Por favor, insira um nome.");
    }
    else {
        document.getElementById("listaAmigos").innerHTML = "";
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        document.getElementById("resultado").innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
        amigos = [];
    }
}
