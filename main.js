document.addEventListener('keyup', (event) => {
  const keyName = event.key;

  if (keyName != 1 && keyName != 0) {
    let valueInvalid = document.getElementById('valueInvalid');

    valueInvalid.innerHTML = `${keyName} é um valor inválido! 
    <br> Por favor digite apenas combinações com 0 e 1.
    <br> Exemplo: 101101`;

    let fieldBinary = document.getElementById('inputBinary');
    fieldBinary.value = fieldBinary.value.slice(0, -1);
  } else {
    valueInvalid.innerHTML = '';
  }
});

bin2dec = () => {
  let fieldBinary = document.getElementById('inputBinary').value;
  let quantity = fieldBinary.length;
  let pos = fieldBinary.length;

  let i = 0;
  let dec = 0;

  do {
    pos -= 1;
    dec += fieldBinary.substr(i, 1) * Math.pow(2, pos);
    i++;
  } while (i < quantity);

  document.getElementById('convertDec').value = dec;
};
