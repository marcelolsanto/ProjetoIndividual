function cadastrar() {
    var cpf = in_cpf.value;
    var usuario = in_nome.value;
    var celular = in_celular.value;
    var email = in_email2.value;
    var senha = in_senha.value;
    var senha_ok = in_confirma.value;
    var validacao_senha = (senha != '' &&  senha_ok  != '');
    var validacao_dados = (cpf != ''&& usuario != ''&& celular != ''&&email != '');
    
    if (validacao_senha && validacao_dados) {
        in_nome.style.display = 'none';
        in_celular.style.display = 'none';
        in_cpf.style.display = 'none';
        in_senha.style.display = 'none';
        btn_cadastro.style.display = 'none';
        btn_login.style.display = 'block';
        mensagem1.innerHTML = `<h3>Faça o Login!</h3>`;
        alert(`Usuário cadastrado com sucesso!`);
        logar();
    } else {
        alert(`Atenção!`);
        alert(`Preencha os dados corretamente!`);
    }

}