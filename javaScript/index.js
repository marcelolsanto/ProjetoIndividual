function scroll_home() {
    var element = document.getElementById("home");
    element.scrollIntoView();
}
function scroll_sobre() {
    var element = document.getElementById("sobre");
    element.scrollIntoView();
}
function scroll_projetos() {
    var element = document.getElementById("projetos");
    element.scrollIntoView();
}
function scroll_orcamento() {
    var element = document.getElementById("orcamento");
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