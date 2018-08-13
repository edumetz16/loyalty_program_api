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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.LoyaltyProgramApi) {
      root.LoyaltyProgramApi = {};
    }
    root.LoyaltyProgramApi.SweepstakeDetails = factory(root.LoyaltyProgramApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SweepstakeDetails model module.
   * @module model/SweepstakeDetails
   * @version 4.0.2
   */

  /**
   * Constructs a new <code>SweepstakeDetails</code>.
   * @alias module:model/SweepstakeDetails
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>SweepstakeDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SweepstakeDetails} obj Optional instance to populate.
   * @return {module:model/SweepstakeDetails} The populated <code>SweepstakeDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('nombreBoton')) {
        obj['nombreBoton'] = ApiClient.convertToType(data['nombreBoton'], 'String');
      }
      if (data.hasOwnProperty('descripcionBoton')) {
        obj['descripcionBoton'] = ApiClient.convertToType(data['descripcionBoton'], 'String');
      }
      if (data.hasOwnProperty('descripcion')) {
        obj['descripcion'] = ApiClient.convertToType(data['descripcion'], 'String');
      }
      if (data.hasOwnProperty('basesYCondiciones')) {
        obj['basesYCondiciones'] = ApiClient.convertToType(data['basesYCondiciones'], 'String');
      }
      if (data.hasOwnProperty('imagen')) {
        obj['imagen'] = ApiClient.convertToType(data['imagen'], 'String');
      }
      if (data.hasOwnProperty('pk')) {
        obj['pk'] = ApiClient.convertToType(data['pk'], 'String');
      }
      if (data.hasOwnProperty('nombre')) {
        obj['nombre'] = ApiClient.convertToType(data['nombre'], 'String');
      }
      if (data.hasOwnProperty('fechaDesde')) {
        obj['fechaDesde'] = ApiClient.convertToType(data['fechaDesde'], 'Date');
      }
      if (data.hasOwnProperty('fechaHasta')) {
        obj['fechaHasta'] = ApiClient.convertToType(data['fechaHasta'], 'Date');
      }
      if (data.hasOwnProperty('estado')) {
        obj['estado'] = ApiClient.convertToType(data['estado'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {String} nombreBoton
   */
  exports.prototype['nombreBoton'] = undefined;
  /**
   * @member {String} descripcionBoton
   */
  exports.prototype['descripcionBoton'] = undefined;
  /**
   * @member {String} descripcion
   */
  exports.prototype['descripcion'] = undefined;
  /**
   * @member {String} basesYCondiciones
   */
  exports.prototype['basesYCondiciones'] = undefined;
  /**
   * @member {String} imagen
   */
  exports.prototype['imagen'] = undefined;
  /**
   * @member {String} pk
   */
  exports.prototype['pk'] = undefined;
  /**
   * @member {String} nombre
   */
  exports.prototype['nombre'] = undefined;
  /**
   * @member {Date} fechaDesde
   */
  exports.prototype['fechaDesde'] = undefined;
  /**
   * @member {Date} fechaHasta
   */
  exports.prototype['fechaHasta'] = undefined;
  /**
   * @member {Number} estado
   */
  exports.prototype['estado'] = undefined;



  return exports;
}));

