document.addEventListener('keypress', (event) => {
  const keyName = event.key;
  //O usuário deve ser notificado se algo diferente de 0 ou 1
  //    foi inserido
  if (keyName != 1 && keyName != 0) {
    document.getElementById('valueInvalid').innerHTML =
      'Valor inválido, por favor digite apenas 0 e/ou 1';
  }
});
