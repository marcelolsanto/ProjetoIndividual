function entrar() {
    aguardar();
    var formulario = new URLSearchParams(new FormData(form_login));
    fetch("/usuarios/autenticar", {
        method: "POST",
        body: formulario
    }).then(resposta => {

        if (resposta.ok) {
            resposta.json().then(json => {
                sessionStorage.login_usuario_meuapp = json.login;
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
    //img_aguarde.style.visibility = 'visible';
    p3_mensagem.style.visibility = 'hidden';
}

function finalizar_aguardar(resposta) {
    btn_entrar.disabled = false;
    //img_aguarde.style.visibility = 'hidden';
    p3_mensagem.style.visibility = 'visible';
    p3_mensagem.innerHTML = resposta;
}