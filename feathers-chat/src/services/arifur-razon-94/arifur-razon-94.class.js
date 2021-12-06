const { Service } = require('feathers-knex');

exports.ArifurRazon94 = class ArifurRazon94 extends Service {
  constructor(options) {
    super({
      ...options,
      name: 'arifur_razon_94'
    });
  }
};
