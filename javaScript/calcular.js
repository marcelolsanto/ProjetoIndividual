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