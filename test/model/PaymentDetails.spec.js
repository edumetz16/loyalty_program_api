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
    instance = new LoyaltyProgramApi.PaymentDetails();
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

  describe('PaymentDetails', function() {
    it('should create an instance of PaymentDetails', function() {
      // uncomment below and update the code to test PaymentDetails
      //var instane = new LoyaltyProgramApi.PaymentDetails();
      //expect(instance).to.be.a(LoyaltyProgramApi.PaymentDetails);
    });

    it('should have the property prizeId (base name: "prize_id")', function() {
      // uncomment below and update the code to test the property prizeId
      //var instane = new LoyaltyProgramApi.PaymentDetails();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new LoyaltyProgramApi.PaymentDetails();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new LoyaltyProgramApi.PaymentDetails();
      //expect(instance).to.be();
    });

    it('should have the property currencyId (base name: "currency_id")', function() {
      // uncomment below and update the code to test the property currencyId
      //var instane = new LoyaltyProgramApi.PaymentDetails();
      //expect(instance).to.be();
    });

    it('should have the property unitPrice (base name: "unit_price")', function() {
      // uncomment below and update the code to test the property unitPrice
      //var instane = new LoyaltyProgramApi.PaymentDetails();
      //expect(instance).to.be();
    });

    it('should have the property frequency (base name: "frequency")', function() {
      // uncomment below and update the code to test the property frequency
      //var instane = new LoyaltyProgramApi.PaymentDetails();
      //expect(instance).to.be();
    });

    it('should have the property frequencyType (base name: "frequency_type")', function() {
      // uncomment below and update the code to test the property frequencyType
      //var instane = new LoyaltyProgramApi.PaymentDetails();
      //expect(instance).to.be();
    });

  });

}));
