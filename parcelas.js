function parcelar() {
    p1_parcelas.innerHTML = '';
    p2_parcelas.innerHTML = '';
    const juros = (100+1.3)/100;
    var qtAmbientes = Number(in_qtAmbientes.value)/2;
    var nParcelas = Number(in_parcelas.value);
    const qtHoras = 8;
    var projeto_hora = 18 * 1.3;
    var total_avista = (projeto_hora * qtHoras) * qtAmbientes;
    var total_parcelas = total_avista/nParcelas;
    
    if (total_avista < 100 && nParcelas == "" ) {
        limpar_orcamento();
        alert('Valor total menor que R$ 100,00!');
        descricao_ambientes.style.display = 'block';
        in_qtAmbientes.style.display = 'block';
        label_desc_ambientes.style.display = 'block';
        label_qt_ambientes.style.display = 'block';
        in_parcelas.style.display = 'none';
        label_qt_parcelas.style.display = 'none';
        btn_parcelar.style.display = 'none';

    } else if (nParcelas > 20 || nParcelas == "") {
        alert('Preencha o campo ou reduza a quantidade de parcelas');
        limpar_parcela();
    } else if (total_avista <= 300 && nParcelas <= 3){
        if (total_parcelas < 100){
            limpar_parcela();
        alert('Valor das prestações é de R$ '+total_parcelas.toFixed(2)+' menor que R$ 100,00!');
        alert('Diminua a quantidade de parcelas!');
        total_parcelas *= juros;
    } else {
        for (prestacao = 1; prestacao <= 3 && prestacao <= nParcelas; prestacao++) {
            p1_parcelas.innerHTML += `Parcelas ${prestacao}: R$ ${total_parcelas.toFixed(2)}<br>`;
            limpar_parcela();
            total_parcelas *= juros;
        }
    }
    } else {
        if (total_parcelas < 100){
            limpar_parcela();
            alert('Valor das prestações é de R$ '+total_parcelas.toFixed(2)+' menor que R$ 100,00!');
            alert('Diminua a quantidade de parcelas!');
        } else {
            for (prestacao = 1; prestacao <= 7 && prestacao <= nParcelas;prestacao++) {
                p1_parcelas.innerHTML += `Parcela ${prestacao}: R$ ${total_parcelas.toFixed(2)}<br>`;
                limpar_parcela();
                total_parcelas *= juros;
            }
            for (prestacao = 8; prestacao <= nParcelas; prestacao++) {
                p2_parcelas.innerHTML += `Parcela ${prestacao}: R$ ${total_parcelas.toFixed(2)}<br>`;
                limpar_parcela();
                total_parcelas *= juros;
            }
        }
    }
    function limpar_parcela() {
        in_parcelas.value = '';
    }
}