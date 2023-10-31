const { Extintor } = require("../models/Extintor");

const homeController = {
  index: async (req, res) => {
    const extintores = await Extintor.findAll({ raw: true })
    res.render('home', { extintores })
  },
}

module.exports = { homeController };