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
    instance = new LoyaltyProgramApi.UserLoginRequest();
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

  describe('UserLoginRequest', function() {
    it('should create an instance of UserLoginRequest', function() {
      // uncomment below and update the code to test UserLoginRequest
      //var instane = new LoyaltyProgramApi.UserLoginRequest();
      //expect(instance).to.be.a(LoyaltyProgramApi.UserLoginRequest);
    });

    it('should have the property tipoDato (base name: "TipoDato")', function() {
      // uncomment below and update the code to test the property tipoDato
      //var instane = new LoyaltyProgramApi.UserLoginRequest();
      //expect(instance).to.be();
    });

    it('should have the property numeroDato (base name: "NumeroDato")', function() {
      // uncomment below and update the code to test the property numeroDato
      //var instane = new LoyaltyProgramApi.UserLoginRequest();
      //expect(instance).to.be();
    });

    it('should have the property claveSocio (base name: "ClaveSocio")', function() {
      // uncomment below and update the code to test the property claveSocio
      //var instane = new LoyaltyProgramApi.UserLoginRequest();
      //expect(instance).to.be();
    });

    it('should have the property numeroDoc (base name: "NumeroDoc")', function() {
      // uncomment below and update the code to test the property numeroDoc
      //var instane = new LoyaltyProgramApi.UserLoginRequest();
      //expect(instance).to.be();
    });

    it('should have the property idClub (base name: "IdClub")', function() {
      // uncomment below and update the code to test the property idClub
      //var instane = new LoyaltyProgramApi.UserLoginRequest();
      //expect(instance).to.be();
    });

  });

}));