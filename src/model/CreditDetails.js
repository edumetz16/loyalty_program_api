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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreditInstance'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CreditInstance'));
  } else {
    // Browser globals (root is window)
    if (!root.LoyaltyProgramApi) {
      root.LoyaltyProgramApi = {};
    }
    root.LoyaltyProgramApi.CreditDetails = factory(root.LoyaltyProgramApi.ApiClient, root.LoyaltyProgramApi.CreditInstance);
  }
}(this, function(ApiClient, CreditInstance) {
  'use strict';




  /**
   * The CreditDetails model module.
   * @module model/CreditDetails
   * @version 4.0.2
   */

  /**
   * Constructs a new <code>CreditDetails</code>.
   * @alias module:model/CreditDetails
   * @class
   */
  var exports = function() {
    var _this = this;

















  };

  /**
   * Constructs a <code>CreditDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreditDetails} obj Optional instance to populate.
   * @return {module:model/CreditDetails} The populated <code>CreditDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pk')) {
        obj['pk'] = ApiClient.convertToType(data['pk'], 'String');
      }
      if (data.hasOwnProperty('importe')) {
        obj['importe'] = ApiClient.convertToType(data['importe'], 'String');
      }
      if (data.hasOwnProperty('fk_socio')) {
        obj['fk_socio'] = ApiClient.convertToType(data['fk_socio'], 'String');
      }
      if (data.hasOwnProperty('cuotas')) {
        obj['cuotas'] = ApiClient.convertToType(data['cuotas'], 'String');
      }
      if (data.hasOwnProperty('observaciones')) {
        obj['observaciones'] = ApiClient.convertToType(data['observaciones'], 'String');
      }
      if (data.hasOwnProperty('fechaCarga')) {
        obj['fechaCarga'] = ApiClient.convertToType(data['fechaCarga'], 'String');
      }
      if (data.hasOwnProperty('usuario')) {
        obj['usuario'] = ApiClient.convertToType(data['usuario'], 'String');
      }
      if (data.hasOwnProperty('valorCuota')) {
        obj['valorCuota'] = ApiClient.convertToType(data['valorCuota'], 'String');
      }
      if (data.hasOwnProperty('vencimientoPrimerCuota')) {
        obj['vencimientoPrimerCuota'] = ApiClient.convertToType(data['vencimientoPrimerCuota'], 'String');
      }
      if (data.hasOwnProperty('estado')) {
        obj['estado'] = ApiClient.convertToType(data['estado'], 'String');
      }
      if (data.hasOwnProperty('instancias')) {
        obj['instancias'] = ApiClient.convertToType(data['instancias'], [CreditInstance]);
      }
      if (data.hasOwnProperty('ultimaCuota')) {
        obj['ultimaCuota'] = ApiClient.convertToType(data['ultimaCuota'], 'String');
      }
      if (data.hasOwnProperty('proximaCuota')) {
        obj['proximaCuota'] = ApiClient.convertToType(data['proximaCuota'], 'String');
      }
      if (data.hasOwnProperty('saldo')) {
        obj['saldo'] = ApiClient.convertToType(data['saldo'], 'String');
      }
      if (data.hasOwnProperty('valorProximaCuota')) {
        obj['valorProximaCuota'] = ApiClient.convertToType(data['valorProximaCuota'], 'String');
      }
      if (data.hasOwnProperty('montoEntregado')) {
        obj['montoEntregado'] = ApiClient.convertToType(data['montoEntregado'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} pk
   */
  exports.prototype['pk'] = undefined;
  /**
   * @member {String} importe
   */
  exports.prototype['importe'] = undefined;
  /**
   * @member {String} fk_socio
   */
  exports.prototype['fk_socio'] = undefined;
  /**
   * @member {String} cuotas
   */
  exports.prototype['cuotas'] = undefined;
  /**
   * @member {String} observaciones
   */
  exports.prototype['observaciones'] = undefined;
  /**
   * @member {String} fechaCarga
   */
  exports.prototype['fechaCarga'] = undefined;
  /**
   * @member {String} usuario
   */
  exports.prototype['usuario'] = undefined;
  /**
   * @member {String} valorCuota
   */
  exports.prototype['valorCuota'] = undefined;
  /**
   * @member {String} vencimientoPrimerCuota
   */
  exports.prototype['vencimientoPrimerCuota'] = undefined;
  /**
   * @member {String} estado
   */
  exports.prototype['estado'] = undefined;
  /**
   * @member {Array.<module:model/CreditInstance>} instancias
   */
  exports.prototype['instancias'] = undefined;
  /**
   * @member {String} ultimaCuota
   */
  exports.prototype['ultimaCuota'] = undefined;
  /**
   * @member {String} proximaCuota
   */
  exports.prototype['proximaCuota'] = undefined;
  /**
   * @member {String} saldo
   */
  exports.prototype['saldo'] = undefined;
  /**
   * @member {String} valorProximaCuota
   */
  exports.prototype['valorProximaCuota'] = undefined;
  /**
   * @member {String} montoEntregado
   */
  exports.prototype['montoEntregado'] = undefined;



  return exports;
}));

