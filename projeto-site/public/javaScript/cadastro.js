function cadastrar() {
    aguardar();
    var formulario = new URLSearchParams(new FormData(form_cadastro));
    fetch("/usuarios/cadastrar", {
        method: "POST",
        body: formulario
    }).then(function (response) {
        if (response.ok) {
            window.location.href='login.html';
        } else {
            console.log('Erro de cadastro!');
            response.text().then(function (resposta) {
                div_erro.innerHTML = resposta;
            });
            finalizar_aguardar();
        }
    });

    return false;
}

function aguardar() {
    btn_cadastro.disabled = true;
    p4_mensagem.style.display='none';
}

function finalizar_aguardar(resposta) {
    btn_cadastro.disabled = false;
    p4_mensagem.style.display='block';
}