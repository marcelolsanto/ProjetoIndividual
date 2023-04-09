let email_usuario = '';
let nome_usuario = '';

function verificar_autenticacao() {
    email_usuario = sessionStorage.email_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;
    
    if (email_usuario == undefined)  {
        redirecionar_login();
    } else {
        b_usuario.innerHTML = nome_usuario;
        validar_sessao();
    }
}

function validar_sessao() {
    fetch(`/usuarios/sessao/entrar/${email_usuario}`, {cache:'no-store'})
    .then(resposta => {
        if (resposta.ok) {
            resposta.text().
                then(texto => {
                console.log('Sessão :) ', texto);    
            });
        } else {
            console.error('Sessão :( ');
            logoff();
        } 
    });    
}

function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_login();
    return;
}

function finalizar_sessao() {
    fetch(`/usuarios/sessao/sair/${email_usuario}`, { cache: 'no-store' })
        .then(resposta => {
            if (resposta.ok) {
                resposta.text().
                    then(texto => {
                        console.log('Sessão finalizada! :) ', texto);
                    });
            } 
        });
}

function redirecionar_login() {
    window.location.href = 'login.html';
}

function redirecionar_cadastro() {
    window.location.href = 'cadastro.html';
}