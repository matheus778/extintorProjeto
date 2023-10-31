const { Extintor } = require('../models/Extintor');
const { ExtintorFabricante } = require('../models/ExtintorFabricante');
const { Fabricante } = require('../models/Fabricante');
const { Vistoria } = require('../models/Vistoria');
const dayjs = require('dayjs');


const extintorController = {
  index: async (req, res) => {
    const extintores = await Extintor.findAll({ raw: true, order: [['idExtintor', 'DESC']] });

    res.render('extintor', { extintores });
  },

  show: async (req, res) => {
    const { id } = req.params;
    const extintor = await Extintor.findOne({ raw: true, where: { idExtintor: id } });
    let classes = `${extintor.classeExtintor}`.toUpperCase();

    let classeExtintor = {
      a: false,
      b: false,
      c: false
    }

    const vistoriaBusca = await Vistoria.findOne({ raw: true, where: { idExtintor: id } });
    const fabricanteBusca = await ExtintorFabricante.findOne({ raw: true, where: { idExtintor: id } });
    let vistoria = {}
    Object.entries(vistoriaBusca).forEach((el) => {
      if (el[1] == null) {
        return
      } else {
        return vistoria[`${el[0]}`] = dayjs(el[1]).format('DD/MM/YYYY');
      }
    })

    const fabricante = await Fabricante.findOne({
      raw: true, where: { idFabricante: fabricanteBusca.idFabricante }
    });

    if (classes.includes('A')) {
      classeExtintor.a = true;
    }

    if (classes.includes('B')) {
      classeExtintor.b = true;
    }

    if (classes.includes('C')) {
      classeExtintor.c = true;
    }

    res.render('detalhe', { extintor, classeExtintor, fabricante, vistoria })
  },

  create: async (req, res) => {
    const fabricantes = await Fabricante.findAll({ raw: true });
    res.render('adicionarExtintor', { fabricantes });
  },

  store: async (req, res) => {
    const {
      numeroDeSerie,
      anoFabricacao,
      capacidadeNominal,
      classeExtintor,
      agenteExtintor,
      vencRecarga,
      vencTesteHidroestatico,
      idFabricante
    } = req.body;

    const extintor = await Extintor.create({
      numeroDeSerie,
      anoFabricacao,
      capacidadeNominal,
      classeExtintor,
      agenteExtintor,
      vencRecarga,
      vencTesteHidroestatico,
    });

    await ExtintorFabricante.create({
      idExtintor: extintor.idExtintor,
      idFabricante
    });


    await Vistoria.create({
      idExtintor: extintor.idExtintor
    })

    res.redirect('/extintor');
  },

  edit: async (req, res) => {
    const { id } = req.params;

    const fabricantes = await Fabricante.findAll({ raw: true });
    const extintor = await Extintor.findOne({ raw: true, where: { idExtintor: id } });

    const { idFabricante } = await ExtintorFabricante.findOne({
      attributes: ['idFabricante'],
      where: { idExtintor: extintor.idExtintor },
    });

    const fabricanteSelecionado = await Fabricante.findOne({
      raw: true,
      where: { idFabricante: idFabricante }
    });

    res.render('editarExtintor', { extintor, fabricantes, fabricanteSelecionado })
  },

  update: async (req, res) => {
    const { id } = req.params;
    const {
      numeroDeSerie,
      anoFabricacao,
      capacidadeNominal,
      classeExtintor,
      agenteExtintor,
      vencRecarga,
      vencTesteHidroestatico,
      idFabricante
    } = req.body;

    const extintor = await Extintor.update({
      numeroDeSerie,
      anoFabricacao,
      capacidadeNominal,
      classeExtintor,
      agenteExtintor,
      vencRecarga,
      vencTesteHidroestatico,
    }, {
      where: { idExtintor: id }
    });


    await ExtintorFabricante.update({
      idFabricante
    }, {
      where: { idExtintor: id }
    });

    res.redirect('/extintor')
  },

  destroy: async (req, res) => {
    const { id } = req.params;

    await Extintor.destroy({
      where: { idExtintor: id }
    });

    res.redirect('/extintor')
  }
};

module.exports = { extintorController };