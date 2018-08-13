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
    instance = new LoyaltyProgramApi.Subsidiary();
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

  describe('Subsidiary', function() {
    it('should create an instance of Subsidiary', function() {
      // uncomment below and update the code to test Subsidiary
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be.a(LoyaltyProgramApi.Subsidiary);
    });

    it('should have the property idSucursal (base name: "IdSucursal")', function() {
      // uncomment below and update the code to test the property idSucursal
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be();
    });

    it('should have the property pkSucursal (base name: "pk_Sucursal")', function() {
      // uncomment below and update the code to test the property pkSucursal
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be();
    });

    it('should have the property idClub (base name: "IdClub")', function() {
      // uncomment below and update the code to test the property idClub
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be();
    });

    it('should have the property fkClub (base name: "fk_Club")', function() {
      // uncomment below and update the code to test the property fkClub
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be();
    });

    it('should have the property descripcionSucursal (base name: "DescripcionSucursal")', function() {
      // uncomment below and update the code to test the property descripcionSucursal
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be();
    });

    it('should have the property domicilioSucursal (base name: "DomicilioSucursal")', function() {
      // uncomment below and update the code to test the property domicilioSucursal
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be();
    });

    it('should have the property visible (base name: "Visible")', function() {
      // uncomment below and update the code to test the property visible
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be();
    });

    it('should have the property latitud (base name: "Latitud")', function() {
      // uncomment below and update the code to test the property latitud
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be();
    });

    it('should have the property longitud (base name: "Longitud")', function() {
      // uncomment below and update the code to test the property longitud
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be();
    });

    it('should have the property nombreParaMapa (base name: "NombreParaMapa")', function() {
      // uncomment below and update the code to test the property nombreParaMapa
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be();
    });

    it('should have the property direccionParaMapa (base name: "DireccionParaMapa")', function() {
      // uncomment below and update the code to test the property direccionParaMapa
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be();
    });

    it('should have the property iframeMapa (base name: "IframeMapa")', function() {
      // uncomment below and update the code to test the property iframeMapa
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be();
    });

    it('should have the property datosAdicionales (base name: "DatosAdicionales")', function() {
      // uncomment below and update the code to test the property datosAdicionales
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be();
    });

    it('should have the property multiSucursal (base name: "multiSucursal")', function() {
      // uncomment below and update the code to test the property multiSucursal
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be();
    });

    it('should have the property imagenMulti (base name: "imagenMulti")', function() {
      // uncomment below and update the code to test the property imagenMulti
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be();
    });

    it('should have the property premio (base name: "premio")', function() {
      // uncomment below and update the code to test the property premio
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be();
    });

    it('should have the property appHorario (base name: "AppHorario")', function() {
      // uncomment below and update the code to test the property appHorario
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be();
    });

    it('should have the property appDireccion (base name: "AppDireccion")', function() {
      // uncomment below and update the code to test the property appDireccion
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be();
    });

    it('should have the property appTelefono1 (base name: "AppTelefono1")', function() {
      // uncomment below and update the code to test the property appTelefono1
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be();
    });

    it('should have the property appTelefono2 (base name: "AppTelefono2")', function() {
      // uncomment below and update the code to test the property appTelefono2
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be();
    });

    it('should have the property appFacebook (base name: "AppFacebook")', function() {
      // uncomment below and update the code to test the property appFacebook
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be();
    });

    it('should have the property appTwitter (base name: "AppTwitter")', function() {
      // uncomment below and update the code to test the property appTwitter
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be();
    });

    it('should have the property appInstagram (base name: "AppInstagram")', function() {
      // uncomment below and update the code to test the property appInstagram
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be();
    });

    it('should have the property appYoutube (base name: "AppYoutube")', function() {
      // uncomment below and update the code to test the property appYoutube
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be();
    });

    it('should have the property appGooglePlus (base name: "AppGooglePlus")', function() {
      // uncomment below and update the code to test the property appGooglePlus
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be();
    });

    it('should have the property appWeb (base name: "AppWeb")', function() {
      // uncomment below and update the code to test the property appWeb
      //var instane = new LoyaltyProgramApi.Subsidiary();
      //expect(instance).to.be();
    });

  });

}));