function scroll_home() {
    var element = document.getElementById("home");
    element.scrollIntoView();
}

function scroll_projetos() {
    var element = document.getElementById("projetos");
    element.scrollIntoView();
}

function mostrar_organizacão() {
    h3_organizacao.style.display = 'flex';
    p_organizacao.style.display = 'flex';
    btn_organizacao2.style.display ='block';
    btn_organizacao1.style.display ='none';
}
function ocultar_organizacao() {
    h3_organizacao.style.display = 'none';
    p_organizacao.style.display = 'none';
    btn_organizacao2.style.display = 'none';
    btn_organizacao1.style.display = 'block';
}

function mostrar_criatividade() {
    h3_criatividade.style.display = 'flex';
    p_criatividade.style.display = 'flex';
    btn_criatividade2.style.display ='block';
    btn_criatividade1.style.display ='none';
}
function ocultar_criatividade() {
    h3_criatividade.style.display = 'none';
    p_criatividade.style.display = 'none';
    btn_criatividade2.style.display = 'none';
    btn_criatividade1.style.display = 'block';
}
function mostar_compromisso() {
    h3_compromisso.style.display = 'flex';
    p_compromisso.style.display = 'flex';
    btn_compromisso2.style.display ='block';
    btn_compromisso1.style.display ='none';
}
function ocultar_compromisso() {
    h3_compromisso.style.display = 'none';
    p_compromisso.style.display = 'none';
    btn_compromisso2.style.display = 'none';
    btn_compromisso1.style.display = 'block';
}

var clicks = {missao:0,visao:0,valor:0}
    function mostrar_ocultar_missao() {
        if (clicks.missao %2 == 0) {
            clicks.missao++;
            mostrar_texto();
        } else {
            clicks.missao++;
            ocultar_texto();
        }
        function mostrar_texto(){
            h3_missao.style.display = 'block';
            p_missao.style.display = 'block';
        }
        function ocultar_texto() {
            h3_missao.style.display = 'none';
            p_missao.style.display = 'none';
        }
    }

    function mostrar_ocultar_visao() {
        if (clicks.visao %2 == 0) {
            clicks.visao++;
            mostrar_texto();
        } else {
            clicks.visao++;
            ocultar_texto();
        }
        function mostrar_texto(){
            h3_visao.style.display = 'block';
            p_visao.style.display = 'block';
        }
        function ocultar_texto() {
            h3_visao.style.display = 'none';
            p_visao.style.display = 'none';
        }
    }

    function mostrar_ocultar_valor() {
        if (clicks.valor %2 == 0) {
            clicks.valor++;
            mostrar_texto();
        } else {
            clicks.valor++;
            ocultar_texto();
        }
        function mostrar_texto(){
            h3_valor.style.display = 'block';
            p_valor.style.display = 'block';
        }
        function ocultar_texto() {
            h3_valor.style.display = 'none';
            p_valor.style.display = 'none';
        }
    }
