const formularioVistoria = document.forms.namedItem('formulario-vistoria');
const checkBoxVistoria = document.querySelector('#checkbox-confirma');

formularioVistoria.addEventListener('submit', (ev) => {
  ev.preventDefault();

  if (!checkBoxVistoria.checked) {
    alert('voce precisa confirmar que foi realizada a vistoria');
    return;
  }

  formularioVistoria.submit();
});