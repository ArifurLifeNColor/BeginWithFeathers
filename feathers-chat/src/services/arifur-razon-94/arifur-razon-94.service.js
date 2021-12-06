// Initializes the `arifur + Razon@94` service on path `/arifur-razon-94`
const { ArifurRazon94 } = require('./arifur-razon-94.class');
const createModel = require('../../models/arifur-razon-94.model');
const hooks = require('./arifur-razon-94.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/arifur-razon-94', new ArifurRazon94(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('arifur-razon-94');

  service.hooks(hooks);
};
