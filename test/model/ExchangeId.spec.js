/**
 * Loyalty Program API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 4.0.2
 * Contact: eduardo@linead.com.ar
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 1.0.16
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.LoyaltyProgramApi);
  }
}(this, function(expect, LoyaltyProgramApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LoyaltyProgramApi.ExchangeId();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ExchangeId', function() {
    it('should create an instance of ExchangeId', function() {
      // uncomment below and update the code to test ExchangeId
      //var instane = new LoyaltyProgramApi.ExchangeId();
      //expect(instance).to.be.a(LoyaltyProgramApi.ExchangeId);
    });

    it('should have the property idMovimiento (base name: "IdMovimiento")', function() {
      // uncomment below and update the code to test the property idMovimiento
      //var instane = new LoyaltyProgramApi.ExchangeId();
      //expect(instance).to.be();
    });

  });

}));