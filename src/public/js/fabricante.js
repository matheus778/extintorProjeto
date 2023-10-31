const formularioFabricante = document.forms.namedItem('formulario-fabricante');
const nome = document.querySelector('#nome-fabricante');
const telefone = document.querySelector("#telefone-fabricante");
const email = document.querySelector('#email-fabricante');
const endereco = document.querySelector('#endereco-fabricante');

const nomeFeedback = document.querySelector('#nome-feedback');
const telefoneFeedback = document.querySelector('#telefone-feedback');
const emailFeedback = document.querySelector("#email-feedback");
const enderecoFeedback = document.querySelector('#endereco-feedback');

const buttonSubmit = document.querySelector('#btn-adicionar-fabricante');

function nomeValidate() {
  if (validator.isEmpty(nome.value)) {
    nome.classList.add('is-invalid');
    nomeFeedback.innerText = 'O nome do fabricante não pode ficar vazio';
    return false;
  }

  if (!validator.isLength(nome.value, { min: 5 })) {
    nome.classList.add('is-invalid');
    nomeFeedback.innerText = 'Nome de fornecedor muito curto';
    return false;
  }

  // caso passe em todas as validações
  nome.classList.remove('is-invalid');
  nome.classList.add('is-valid');
  return true;
}

function telefoneValidate() {
  if (validator.isEmpty(telefone.value)) {
    telefone.classList.add('is-invalid');
    telefoneFeedback.innerText = 'O numero do fabricante não pode ficar vazio';
    return false;
  }

  if (!validator.isMobilePhone(telefone.value, ['pt-BR'])) {
    telefone.classList.add('is-invalid');
    telefoneFeedback.innerText = 'Numero de telefone invalido';
    return false;
  }

  telefone.classList.remove('is-invalid');
  telefone.classList.add('is-valid');

  return true;
}

function emailValidate() {
  if (validator.isEmpty(email.value)) {
    email.classList.add('is-invalid');
    emailFeedback.innerText = 'O email do fabricante não pode ficar vazio';
    return false;
  }

  if (!validator.isEmail(email.value)) {
    email.classList.add('is-invalid');
    emailFeedback.innerText = 'Endereço de email invalido';
    return false
  }

  email.classList.remove('is-invalid');
  email.classList.add('is-valid');

  return true;
}

function enderecoValidate() {
  if (validator.isEmpty(endereco.value)) {
    endereco.classList.add('is-invalid');
    enderecoFeedback.innerText = 'O endereço do fabricante não pode ficar vazio';
    return false;
  }

  if (!validator.isLength(endereco.value, { min: 15 })) {
    endereco.classList.add('is-invalid');
    enderecoFeedback.innerText = 'Muito curto para ser um endereço';
    return false;
  }



  endereco.classList.remove('is-invalid');
  endereco.classList.add('is-valid');
  return true;
}

function validateInputs(ev){
  ev.preventDefault();

  nomeValidate();
  telefoneValidate();
  emailValidate();
  enderecoValidate();

  if (
    nomeValidate() && telefoneValidate()
    && emailValidate() && enderecoValidate()
  ) {
    formularioFabricante.submit();
  }
}

buttonSubmit.addEventListener('click', ev => validateInputs(ev));

nome.addEventListener('keyup', nomeValidate);
telefone.addEventListener('keyup', telefoneValidate);
email.addEventListener('keyup', emailValidate);
endereco.addEventListener('keyup', enderecoValidate);

const mask = IMask(telefone, {mask:'+{55} (00) 00000-0000'});