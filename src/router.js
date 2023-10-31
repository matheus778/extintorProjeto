const routes = require('express').Router();
const { extintorController } = require('./controllers/extintorController');
const { fabricanteController } = require('./controllers/fabricanteController');
const { homeController } = require('./controllers/homeController');
const { vistoriaController } = require('./controllers/vistoriaController');

routes.get('/', homeController.index);

routes.get('/fabricante', fabricanteController.index);
routes.get('/fabricante/create', fabricanteController.create);
routes.post('/fabricante/store', fabricanteController.store);
routes.get('/fabricante/edit/:id', fabricanteController.edit);
routes.post('/fabricante/update/:id', fabricanteController.update);
routes.get('/fabricante/destroy/:id', fabricanteController.destroy);

routes.get('/extintor', extintorController.index);
routes.get('/extintor/show/:id', extintorController.show);
routes.get('/extintor/create', extintorController.create);
routes.post('/extintor/store', extintorController.store);
routes.get('/extintor/edit/:id', extintorController.edit);
routes.post('/extintor/update/:id', extintorController.update);
routes.get('/extintor/destroy/:id', extintorController.destroy);

routes.get('/vistoria', vistoriaController.show);
routes.post('/vistoria/store', vistoriaController.store);

/*
index - mostrar
show - resgatar alguma coisa
edit - mostra formulario para atualizar registro
update - atualizar o registro 
create - mostrar formulario para cadastrar o registro
store - cadastrar registro no banco
destroy - deletar registro do banco
*/

module.exports = routes;