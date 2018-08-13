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
    instance = new LoyaltyProgramApi.Modules();
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

  describe('Modules', function() {
    it('should create an instance of Modules', function() {
      // uncomment below and update the code to test Modules
      //var instane = new LoyaltyProgramApi.Modules();
      //expect(instance).to.be.a(LoyaltyProgramApi.Modules);
    });

    it('should have the property pantallaInicio (base name: "pantallaInicio")', function() {
      // uncomment below and update the code to test the property pantallaInicio
      //var instane = new LoyaltyProgramApi.Modules();
      //expect(instance).to.be();
    });

    it('should have the property giftCards (base name: "giftCards")', function() {
      // uncomment below and update the code to test the property giftCards
      //var instane = new LoyaltyProgramApi.Modules();
      //expect(instance).to.be();
    });

    it('should have the property cupones (base name: "cupones")', function() {
      // uncomment below and update the code to test the property cupones
      //var instane = new LoyaltyProgramApi.Modules();
      //expect(instance).to.be();
    });

    it('should have the property tratamientos (base name: "tratamientos")', function() {
      // uncomment below and update the code to test the property tratamientos
      //var instane = new LoyaltyProgramApi.Modules();
      //expect(instance).to.be();
    });

    it('should have the property sesiones (base name: "sesiones")', function() {
      // uncomment below and update the code to test the property sesiones
      //var instane = new LoyaltyProgramApi.Modules();
      //expect(instance).to.be();
    });

    it('should have the property codigoBarra (base name: "codigoBarra")', function() {
      // uncomment below and update the code to test the property codigoBarra
      //var instane = new LoyaltyProgramApi.Modules();
      //expect(instance).to.be();
    });

    it('should have the property concurso (base name: "concurso")', function() {
      // uncomment below and update the code to test the property concurso
      //var instane = new LoyaltyProgramApi.Modules();
      //expect(instance).to.be();
    });

    it('should have the property formularioAltaWeb (base name: "FormularioAltaWeb")', function() {
      // uncomment below and update the code to test the property formularioAltaWeb
      //var instane = new LoyaltyProgramApi.Modules();
      //expect(instance).to.be();
    });

    it('should have the property sorteos (base name: "sorteos")', function() {
      // uncomment below and update the code to test the property sorteos
      //var instane = new LoyaltyProgramApi.Modules();
      //expect(instance).to.be();
    });

    it('should have the property noticias (base name: "noticias")', function() {
      // uncomment below and update the code to test the property noticias
      //var instane = new LoyaltyProgramApi.Modules();
      //expect(instance).to.be();
    });

    it('should have the property listadoSucursales (base name: "listadoSucursales")', function() {
      // uncomment below and update the code to test the property listadoSucursales
      //var instane = new LoyaltyProgramApi.Modules();
      //expect(instance).to.be();
    });

    it('should have the property tituloBotonConcurso (base name: "tituloBotonConcurso")', function() {
      // uncomment below and update the code to test the property tituloBotonConcurso
      //var instane = new LoyaltyProgramApi.Modules();
      //expect(instance).to.be();
    });

    it('should have the property descripcionBotonConcurso (base name: "descripcionBotonConcurso")', function() {
      // uncomment below and update the code to test the property descripcionBotonConcurso
      //var instane = new LoyaltyProgramApi.Modules();
      //expect(instance).to.be();
    });

    it('should have the property pkConcurso (base name: "pkConcurso")', function() {
      // uncomment below and update the code to test the property pkConcurso
      //var instane = new LoyaltyProgramApi.Modules();
      //expect(instance).to.be();
    });

  });

}));
