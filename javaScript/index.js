


function enviar() {
    var email = in_email.value;
    var email_invalido = email == "";

    if (email_invalido && tentativas > 1) {
        tentativas--;
        p.innerHTML = ``;
        mensagem.innerHTML = `<h3>Digite seu email corretamente!</h3><br>Você tem mais ${tentativas} tentativas!`;
    } else if (email_invalido && tentativas == 1) {
        tentativas--;
        p.innerHTML = ``;
        in_email.style.display = 'none';
        btn1.style.display = 'none';
        mensagem.innerHTML = `<h3>Recarregue a página e tente outra vez!</h3>`;
    } else {
        alert('Seu e-mail foi enviado com sucesso!');
        mensagem.innerHTML = `<h3>Aguarde nosso o contato!</h3>`;
        in_email.style.display = 'none';
        btn1.style.display = 'none';
        p.innerHTML = ``;
        scroll_sobre();
    }
}

function calcular() {
    var ambientes = descricao_ambientes.value;
    var qtAmbientes = Number(in_qtAmbientes.value);
    var qtHoras = 8;
    var projeto_hora = 18 * 1.3;
    var total = (projeto_hora * qtHoras) * qtAmbientes/2;
    var prazo_entrega = qtAmbientes + .1;
    var validacao = (ambientes == '' || qtAmbientes == '');

    if (validacao) {
        alert('Preencha os campos Válidos!');
    } else if (total < 200) {
        mensagem_orçamento.innerHTML = `Seu projeto de ${ambientes}<br> 
        Poderá ficar pronto em até ${prazo_entrega.toFixed(0)} dia(s)!<br>
        Por apenas R$ ${total.toFixed(2)}`;
        descricao_ambientes.style.display = 'none';
        in_qtAmbientes.style.display = 'none';
        label_desc_ambientes.style.display = 'none';
        label_qt_ambientes.style.display = 'none';
        btn_calcular.style.display = 'none';
        in_parcelas.style.display = 'none';
        btn_cadastrar.style.display = 'block';

    } else if (total > 200) {
        mensagem_orçamento.innerHTML = `Seu projeto de ${ambientes}<br> 
        Poderá ficar pronto em até ${prazo_entrega.toFixed(0)} dia(s)!<br>
        Por apenas R$ ${total.toFixed(2)}<br>
        Você gostaria  de parcelar?`;
        descricao_ambientes.style.display = 'none';
        in_qtAmbientes.style.display = 'none';
        label_desc_ambientes.style.display = 'none';
        label_qt_ambientes.style.display = 'none';
        btn_calcular.style.display = 'none';
        in_parcelas.style.display = 'block';
        label_qt_parcelas.style.display = 'block';
        btn_parcelar.style.display = 'block';
    } else {
        alert('Preencha os campos Válidos!');
    }
}

function parcelar() {
    var tentativas = 3;
    p1_parcelas.innerHTML = '';
    p2_parcelas.innerHTML = '';
    const juros = (100+1.3)/100;
    var qtAmbientes = Number(in_qtAmbientes.value)/2;
    var nParcelas = Number(in_parcelas.value);
    var qtHoras = 8;
    var projeto_hora = 18 * 1.3;
    var total_avista = (projeto_hora * qtHoras) * qtAmbientes;
    var total_parcelas = total_avista/nParcelas;
    if (total_avista < 100 || nParcelas == "" ) {
        limpar_orcamento();
        alert('Valor total menor que R$ 100,00!');
        descricao_ambientes.style.display = 'block';
        in_qtAmbientes.style.display = 'block';
        label_desc_ambientes.style.display = 'block';
        label_qt_ambientes.style.display = 'block';
        btn_calcular.style.display = 'block';
        in_parcelas.style.display = 'none';
        label_qt_parcelas.style.display = 'none';
        btn_parcelar.style.display = 'none';
    } else if (nParcelas > 20 || nParcelas == "" ) {
        alert('Parcelas inválidas! Insira parcelas menores ou igual a 20!');
        limpar()
    } else if (total_avista <= 300 && nParcelas <= 3){
        if (total_parcelas < 100){
            limpar_orcamento();
        alert('Valor das prestações é de R$ '+total_parcelas.toFixed(2)+' menor que R$ 100,00!');
        alert('Diminua a quantidade de parcelas!');
        total_parcelas *= juros;
    } else {
        for (prestacao = 1; prestacao <= 3 && prestacao <= nParcelas; prestacao++) {
            p1_parcelas.innerHTML += `Parcela ${prestacao}: R$ ${total_parcelas.toFixed(2)}<br>`;
            limpar_orcamento();
            total_parcelas *= juros;
        }
    }
    } else {
        if (total_parcelas < 100){
            limpar_orcamento();
            alert('Valor das prestações é de R$ '+total_parcelas.toFixed(2)+' menor que R$ 100,00!');
            alert('Diminua a quantidade de parcelas!');
        } else {
            for (prestacao = 1; prestacao <= 7 && prestacao <= nParcelas;prestacao++) {
                p1_parcelas.innerHTML += `Parcela ${prestacao}: R$ ${total_parcelas.toFixed(2)}<br>`;
                limpar_orcamento();
                total_parcelas *= juros;
            }
            for (prestacao = 8; prestacao <= nParcelas; prestacao++) {
                p2_parcelas.innerHTML += `Parcela ${prestacao}: R$ ${total_parcelas.toFixed(2)}<br>`;
                limpar_orcamento();
                total_parcelas *= juros;
            }
        }
    }
    function limpar_orcamento() {
        in_parcelas.value = '';
    }
}

function scroll_home() {
    var element = document.getElementById("home");
    element.scrollIntoView();
}
function scroll_sobre() {
    var element = document.getElementById("sobre");
    element.scrollIntoView();
}
function scroll_portfolio() {
    var element = document.getElementById("portfolio");
    element.scrollIntoView();
}
function scroll_orcamento() {
    var element = document.getElementById("orcamento");
    element.scrollIntoView();
}

function logar(){
    var t = 2;
    const Admin = "Marcelo Santos";
    const email = "marcelo.lsantos@bandtec.com";
    const key = "Mr321456.";
    const root = (Admin == "Marcelo Santos" && email == "marcelo.lsantos@bandtec.com"&&key == "Mr321456.");

    var login = in_email2.value;
    var senha = in_senha.value;
    var acesso = (login == in_email2.value && senha == in_senha.value);

    if (root||acesso && t >= 0) {
        alert('Você entrou com sucesso!');
        t = 0;

    } else if (acesso == "" && t > 1) {
        p3_mensagem.innerHTML = `<p>Falha de autenticação!<br>Você tem mais ${t} tentativas!</b>`;
        t--;

    } else if (acesso == "" && t > 0) {
        p3_mensagem.innerHTML = `<p>Falha de autenticação!<br>Você tem mais ${t} tentativas!</b>`;
        t--;

    } else {
        p3_mensagem.innerHTML = `<p>Falha de autenticação!<br>Procure o Administrador ou recarregue a página!</b>`;
        t--;
    }
}

function cadastrar() {
    var cpf = in_cpf.value;
    var usuario = in_nome.value;
    var celular = in_celular.value;
    var email = in_email2.value;
    var senha = in_senha.value;
    var senha_ok = in_confirma.value;
    var validacao_senha = (senha != '' &&  senha_ok  != '');
    var validacao_dados = (cpf != '' && usuario != '' && celular != '' &email != '');
    
    if (validacao_senha && validacao_dados) {
        in_nome.style.display = 'none';
        in_celular.style.display = 'none';
        in_email2.style.display = 'none';
        in_cpf.style.display = 'none';
        in_senha.style.display = 'none';
        in_confirma.style.display = 'none';
        btn_cadastro.style.display = 'none';
        btn_login.style.display = 'block';
        mensagem1.innerHTML = `<p>Olá ${usuario}!<br>
        Click em ascessar e confira nossa página!</p>`;
        alert(`Usuário cadastrado com sucesso!`);
        logar();
    } else {
        alert(`Atenção!`);
        alert(`Preencha os dados corretamente!`);
    }
}