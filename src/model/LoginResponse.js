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
    root.LoyaltyProgramApi.LoginResponse = factory(root.LoyaltyProgramApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LoginResponse model module.
   * @module model/LoginResponse
   * @version 4.0.2
   */

  /**
   * Constructs a new <code>LoginResponse</code>.
   * @alias module:model/LoginResponse
   * @class
   * @param estado {String} value \"-1\" if the password does not match or a user ID if login was successfull.
   * @param mensaje {String} 
   */
  var exports = function(estado, mensaje) {
    var _this = this;

    _this['estado'] = estado;
    _this['mensaje'] = mensaje;
  };

  /**
   * Constructs a <code>LoginResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoginResponse} obj Optional instance to populate.
   * @return {module:model/LoginResponse} The populated <code>LoginResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('estado')) {
        obj['estado'] = ApiClient.convertToType(data['estado'], 'String');
      }
      if (data.hasOwnProperty('mensaje')) {
        obj['mensaje'] = ApiClient.convertToType(data['mensaje'], 'String');
      }
    }
    return obj;
  }

  /**
   * value \"-1\" if the password does not match or a user ID if login was successfull.
   * @member {String} estado
   */
  exports.prototype['estado'] = undefined;
  /**
   * @member {String} mensaje
   */
  exports.prototype['mensaje'] = undefined;



  return exports;
}));


