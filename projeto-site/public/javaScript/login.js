function entrar() {
    aguardar();
    var formulario = new URLSearchParams(new FormData(form_email));
    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(resposta => {
        if (resposta.ok) {
            resposta.json().then(json => {
                sessionStorage.email_usuario_meuapp = json.email;
                sessionStorage.nome_usuario_meuapp = json.nome;
                window.location.href = 'index.html';
            });
        } else {
            console.log('Erro de login!');
            resposta.text().then(texto => {
                console.error(texto);
                finalizar_aguardar(texto);
            window.location.href = 'cadastro.html';
            });
        }
    });
    return false;
}

function aguardar() {
    btn_entrar.disabled = true;
    p3_mensagem.style.visibility = 'hidden';
}

function finalizar_aguardar(resposta) {
    btn_entrar.disabled = false;
    p3_mensagem.style.visibility = 'visible';
    p3_mensagem.innerHTML = resposta;
}