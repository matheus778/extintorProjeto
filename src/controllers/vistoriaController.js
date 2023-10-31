const { Extintor } = require("../models/Extintor");
const { Vistoria } = require("../models/Vistoria");
const { getMonth } = require("../utils/getMonth");

const vistoriaController = {
  show: async (req, res) => {
    const ano = new Date().getFullYear();
    const titulo = `${getMonth()}/${ano}`;

    let extintores = (await Extintor.findAll({
      raw: true, attributes: ['idExtintor', 'numeroDeSerie'],
      include: [{ model: Vistoria }],
    }));

    const extintoresNaoChecados = extintores.filter((el, index) => el[`Vistorium.${getMonth().toLowerCase()}`] == null);
    const extintoresChecados = extintores.filter(el => el[`Vistorium.${getMonth().toLowerCase()}`] != null);

    res.render('vistoria', { extintoresChecados, extintoresNaoChecados, titulo })
  },

  store: async (req, res) => {
    let { confirma } = req.body;

    if (!confirma) {
      return res.redirect('/vistoria');
    }

    const month = getMonth().toLowerCase();
    const propsVistoriaUpdate = {}
    propsVistoriaUpdate[`${month}`] = new Date();

    // retorna todos os ids selecionados em um array
    const idsExtintores = Object.entries(req.body).flatMap((el) => {
      return el[1]
    })

    // esse for vai ser usado para adicionar um por um na vistoria
    for (let i = 0; i < idsExtintores.length; i++) {
      await Vistoria.update(propsVistoriaUpdate, {
        where: { idExtintor: idsExtintores[i] }
      });
    }

    res.redirect('/')
  }
}

module.exports = { vistoriaController };