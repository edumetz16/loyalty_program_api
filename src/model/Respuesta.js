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
    root.LoyaltyProgramApi.Respuesta = factory(root.LoyaltyProgramApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Respuesta model module.
   * @module model/Respuesta
   * @version 4.0.2
   */

  /**
   * Constructs a new <code>Respuesta</code>.
   * @alias module:model/Respuesta
   * @class
   * @param estado {String} Response status
   * @param mensaje {String} Response message
   */
  var exports = function(estado, mensaje) {
    var _this = this;

    _this['Estado'] = estado;
    _this['Mensaje'] = mensaje;
  };

  /**
   * Constructs a <code>Respuesta</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Respuesta} obj Optional instance to populate.
   * @return {module:model/Respuesta} The populated <code>Respuesta</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Estado')) {
        obj['Estado'] = ApiClient.convertToType(data['Estado'], 'String');
      }
      if (data.hasOwnProperty('Mensaje')) {
        obj['Mensaje'] = ApiClient.convertToType(data['Mensaje'], 'String');
      }
    }
    return obj;
  }

  /**
   * Response status
   * @member {String} Estado
   */
  exports.prototype['Estado'] = undefined;
  /**
   * Response message
   * @member {String} Mensaje
   */
  exports.prototype['Mensaje'] = undefined;



  return exports;
}));


