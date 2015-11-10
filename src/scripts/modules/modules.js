var _ = require('lodash');

/*
Registry of all modules.
*/
var Modules = {};

var ModulesFunctions = {
  create: function (key, definition) {
    Modules[key] = _.defaults(definition, {
      start: _.identity,
      actions: {},
      state: {}
    });

    return Modules[key];
  },

  get: function (key) {
    return Modules[key];
  },

  keys: function () {
    return Object.keys(Modules);
  }
};

module.exports = ModulesFunctions;