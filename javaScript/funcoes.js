let login_usuario;
let nome_usuario;

function redirecionar_login() {
    window.location.href = 'login.html';
}

function redirecionar_cadastro() {
    window.location.href = 'cadastro.html';
}


function verificar_autenticacao() {
    login_usuario = sessionStorage.login_usuario_meuapp;
    nome_usuario = sessionStorage.nome_usuario_meuapp;
    
    if (login_usuario == undefined)  {
        redirecionar_cadastro();
    } else {
        b_usuario.innerHTML = nome_usuario;
        validar_sessao();
    }
}

function logoff() {
    finalizar_sessao();
    sessionStorage.clear();
    redirecionar_cadastro();
}

function validar_sessao() {
    fetch(`/usuarios/sessao/${login_usuario}`, {cache:'no-store'})
    .then(resposta => {
        if (resposta.ok) {
            resposta.text().then(texto => {
                console.log('Sessão :) ', texto);    
            });
        } else {
            console.error('Sessão :.( ');
            logoff();
        } 
    });
}

function finalizar_sessao() {
    fetch(`/usuarios/sair/${login_usuario}`, {cache:'no-store'}); 
}