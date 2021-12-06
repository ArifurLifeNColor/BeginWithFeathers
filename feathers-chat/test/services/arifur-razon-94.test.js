const assert = require('assert');
const app = require('../../src/app');

describe('\'arifur + Razon@94\' service', () => {
  it('registered the service', () => {
    const service = app.service('arifur-razon-94');

    assert.ok(service, 'Registered the service');
  });
});
