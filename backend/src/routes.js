const { Router } = require('express');
const PandemicController = require('./controllers/PandemicController');

const routes = Router();

routes.get('/pandemics', PandemicController.index);
routes.post('/pandemics', PandemicController.store);

module.exports = routes; 