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
        mensagem.innerHTML = `<h2>Olá ${nome}!<br> Aguarde nosso o contato!</h2>`;
}
function rolar_home() {
    var elmnt = document.getElementById("home");
    elmnt.scrollIntoView();
  }