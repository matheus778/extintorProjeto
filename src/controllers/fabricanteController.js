const { Fabricante } = require('../models/Fabricante');

const fabricanteController = {
  index: async (req, res) => {
    const fabricantes = await Fabricante.findAll({ raw: true });

    return res.render('fabricante', { fabricantes });
  },

  create: (req, res) => {
    return res.render("adicionarFabricante");
  },

  store: async (req, res) => {
    const { nome, telefone, email, endereco } = req.body;

    const novoFabricante = await Fabricante.create({
      idFabricante: null,
      nome,
      telefone,
      email,
      endereco
    });

    return res.redirect('/fabricante')
  },

  edit: async (req, res) => {
    const { id } = req.params;

    const fabricante = await Fabricante.findOne({
      raw: true,
      where: {
        idFabricante: id
      }
    });

    return res.render('editarFabricante', { fabricante })
  },

  update: async (req, res) => {
    const { nome, telefone, email, endereco } = req.body;
    const { id } = req.params;

    await Fabricante.update({
      id,
      nome,
      telefone,
      email,
      endereco
    },
      {
        where: {
          idFabricante: id
        }
      });

    return res.redirect('/fabricante')
  },

  destroy: async (req, res) => {
    const { id } = req.params;

    await Fabricante.destroy({
      where: {
        idFabricante: id
      }
    });

    res.redirect('/fabricante')
  }
}

module.exports = { fabricanteController };