    function enviar() {
    var email = in_email.value;
    var nome = in_nome.value;
    var celular = in_celular;
        alert(`O seu contato foi enviado com sucesso!`);
        in_nome.style.display = 'none';
        in_celular.style.display = 'none';
        in_email2.style.display = 'none';
        in_email.style.display = 'none';
        btn1.style.display = 'none';
        btn2.style.display = 'none';
        mensagem.innerHTML = `<p>Olá ${nome}!<br> Aguarde nosso o contato!</p>`;
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
  function scroll_cadastro() {
    var element = document.getElementById("cadastro");
    element.scrollIntoView();
  }
