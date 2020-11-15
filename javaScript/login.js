

    var t = 2;
    const usuario = 'Marcelo Santos'
    const loginAdmin = 'marcelo.lsantos@bandtec.com.br';
    const senhaAdmin = 'Mr321456.';

    function limpar() {
        var login = in_emailLogin.value;
        var senha = in_senhaLogin.value;

        if (login != "" && senha != "") {
            in_emailLogin.value = "";
            in_senhaLogin.value = "";

        } else if (login != "") {
            in_emailLogin.value = "";

        } else {
            in_senhaLogin.value = "";
        }
    }

    function logar(){
        var login = in_emailLogin.value;
        var senha = in_senhaLogin.value;
        var acesso = (loginAdmin===login && senhaAdmin === senha);

        if (acesso == true && t <= 0) {
            limpar();
            mensagem.innerHTML = `<p>Olá, ${usuario}!<br>`;
            alert('Você entrou com sucesso!');
            in_emailLogin.style.display = 'none';
            in_senhaLogin.style.display = 'none';
            div_botao.style.display = 'none';
            console.log(t);
            t = 0;
        } else if (acesso == false && t > 1) {
            limpar();
            p_mensagem.innerHTML = `<p>Falha de autenticação!<br>Você tem mais ${t} tentativas!</b>`;
            t--;
            console.log(t);
        } else if (acesso == false && t > 0) {
            limpar();
            p_mensagem.innerHTML = `<p>Falha de autenticação!<br>Você tem mais ${t} tentativas!</b>`;
            t--;
            console.log(t);

        } else {
            limpar();
            p_mensageminnerHTML = `<p>Falha de autenticação!<br>Procure o Administrador ou recarregue a página!</b>`;
            in_emailLogin.style.display = 'none';
            in_senhaLogin.style.display = 'none';
            div_botao.style.display = 'none';
            h_mensagem.style.display = 'none';
            t--;
            console.log(t);

        }
}