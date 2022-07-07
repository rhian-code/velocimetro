function verificar() {
  var velocidade = document.getElementById("velocidade");
  // pegando qualquer valor que entrar no input
  var vel = Number(velocidade.value);
  // transformando em valor number
  var res = document.getElementById("resultado");
  var multa = document.getElementById("multa");
  var bg = document.querySelector("body");
  // criei a var Bg para usar essa variavel permitindo a mudança dela pelo
  res.innerHTML = `Sua velocidade é de ${vel}Km/h`;
  // Não é preciso colocar o nome do id pois o getElement ja selecionou ele
  res.style.marginTop = "30px";
  if (vel > 80) {
    multa.innerHTML = "O limite é 80km, Você foi multado!";
    multa.style.marginTop = "30px";
    bg.style.background = "red";
  }else if (vel < 80) {
    multa.innerHTML = "Você está dentro do limite, continue assim!";
    multa.style.marginTop = "30px";
    bg.style.background="green"
    bg.style.textShadow = "1px 1px 4px black";
  }
}
