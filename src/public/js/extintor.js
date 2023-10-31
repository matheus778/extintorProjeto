const formularioExtintor = document.forms.namedItem('formulario-extintor');
const btnSubmit = document.querySelector('#btn-submit')

const nSerie = document.querySelector('#n-serie-extintor');
const aFabricacao = document.querySelector('#a-fabricacao-extintor');
const capacidade = document.querySelector('#capacidade-extintor');
const classe = document.querySelector('#classe-extintor');
const agente = document.querySelector('#agente-extintor');
const recarga = document.querySelector('#recarga-extintor');
const hidroestatico = document.querySelector('#hidroestatico-extintor');
const selectFabricante = document.querySelector('#select-fabricante');

const nSerieFeedback = document.querySelector('#n-serie-feedback');
const aFabricacaoFeedback = document.querySelector('#a-fabricacao-feedback');
const capacidadeFeedback = document.querySelector('#capacidade-feedback');
const classeFeedback = document.querySelector('#classe-feedback');
const agenteFeedback = document.querySelector('#agente-feedback');
const recargaFeedback = document.querySelector('#recarga-feedback');
const hidroestaticoFeedback = document.querySelector('#hidroestatico-feedback');
const selectFeedback = document.querySelector('#select-feedback');

function nSerieValidate() {
  if (validator.isEmpty(nSerie.value)) {
    nSerie.classList.add('is-invalid');
    nSerieFeedback.innerText = 'O nome do fabricante não pode ficar vazio';
    return false;
  }

  if (!validator.isLength(nSerie.value, { min: 3 })) {
    nSerie.classList.add('is-invalid');
    nSerieFeedback.innerText = 'Nome de fornecedor muito curto';
    return false;
  }

  // caso passe em todas as validações
  nSerie.classList.remove('is-invalid');
  nSerie.classList.add('is-valid');
  return true;
}

function aFabricacaoValidate() {
  if (validator.isEmpty(aFabricacao.value)) {
    aFabricacao.classList.add('is-invalid');
    aFabricacaoFeedback.innerText = 'O ano de fabricação não pode ficar vazio';
    return false;
  }

  if (!validator.isLength(aFabricacao.value, { min: 3, })) {
    aFabricacao.classList.add('is-invalid');
    aFabricacaoFeedback.innerText = 'Ano de fabricação incorreto';
    return false;
  }


  // caso passe em todas as validações
  aFabricacao.classList.remove('is-invalid');
  aFabricacao.classList.add('is-valid');
  return true;
}

function capacidadeValidate() {
  if (validator.isEmpty(capacidade.value)) {
    capacidade.classList.add('is-invalid');
    capacidadeFeedback.innerText = 'Este campo não pode ficar vazio';
    return false;
  }
  if (!validator.isLength(capacidade.value, { min: 3 })) {
    capacidade.classList.add('is-invalid');
    capacidadeFeedback.innerText = 'Preencha este campo corretamente. Ex 25KG';
    return false;
  }

  capacidade.classList.remove('is-invalid');
  capacidade.classList.add('is-valid');
  return true;
}


function classeValidate() {
  if (validator.isEmpty(classe.value)) {
    classe.classList.add('is-invalid');
    classeFeedback.innerText = 'Este campo não pode ficar vazio';
    return false;
  }

  if (!validator.isLength(classe.value, { min: 1, max: 3 })) {
    classe.classList.add('is-invalid');
    classeFeedback.innerText = 'Preencha este campo corretamente. Ex ABC';
    return false;
  }

  classe.classList.remove('is-invalid');
  classe.classList.add('is-valid');
  return true
}

function agenteValidate() {
  if (validator.isEmpty(agente.value)) {
    agente.classList.add('is-invalid');
    agenteFeedback.innerText = 'Este campo não pode ficar vazio';
    return false;
  }

  if (!validator.isLength(agente.value, { min: 4 })) {
    agente.classList.add('is-invalid');
    agenteFeedback.innerText = 'Preencha este campo corretamente. Ex ABC';
    return false;
  }

  agente.classList.remove('is-invalid');
  agente.classList.add('is-valid');
  return true
}

function recargaValidate() {
  let data = new Date(recarga.value);
  console.log(data)
  console.log(validator.isDate(data))
  if (!validator.isDate(data)) {
    recarga.classList.add('is-invalid');
    recargaFeedback.innerText = 'Insira uma data valida';
    return false;
  }

  recarga.classList.remove('is-invalid')
  recarga.classList.add('is-valid');
  return true;
}

function HidroestaticoValidate() {
  let data = new Date(hidroestatico.value);

  if (!validator.isDate(data)) {
    hidroestatico.classList.add('is-invalid');
    hidroestaticoFeedback.innerText = 'Insira uma data valida';
    return false;
  }

  hidroestatico.classList.remove('is-invalid')
  hidroestatico.classList.add('is-valid');
  return true;
}

function selectValidate() {
  if (selectFabricante.value == 'Selecione o fabricante') {
    selectFabricante.classList.add('is-invalid');

    selectFeedback.innerText = 'Selecione um fornecedor corretamente';
    return false;
  }

  selectFabricante.classList.remove('is-invalid')
  selectFabricante.classList.add('is-valid');
  return true;
}

IMask(nSerie, { mask: Number });
IMask(aFabricacao, { mask: Number });
IMask(capacidade, {
  mask: '0[00]aa',
  prepareChar: str => str.toUpperCase(),
});

IMask(classe, {
  mask: '#[##]',
  prepareChar: str => str.toUpperCase(),
  definitions: {
    '#': /[ABC]/
  }
});

formularioExtintor.addEventListener('submit', (ev) => {
  ev.preventDefault();
  nSerieValidate();
  aFabricacaoValidate();
  capacidadeValidate();
  classeValidate();
  agenteValidate();
  recargaValidate();
  HidroestaticoValidate();
  selectValidate();

  if (nSerieValidate() && aFabricacaoValidate()
    && capacidadeValidate() && classeValidate()
    && agenteValidate() && recargaValidate() && HidroestaticoValidate()
    && selectValidate()
  ) {
    return formularioExtintor.submit();
  }

  return;
});


nSerie.addEventListener('keyup', nSerieValidate);
aFabricacao.addEventListener('keyup', aFabricacaoValidate);
capacidade.addEventListener('keyup', capacidadeValidate);
classe.addEventListener('keyup', classeValidate);
agente.addEventListener('keyup', agenteValidate);
recarga.addEventListener('keyup', recargaValidate);
recarga.addEventListener('change', recargaValidate);
hidroestatico.addEventListener('keyup', HidroestaticoValidate);
hidroestatico.addEventListener('change', HidroestaticoValidate);
selectFabricante.addEventListener('change', selectValidate)