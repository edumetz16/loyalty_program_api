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
    root.LoyaltyProgramApi.SweepstakeUserResponse = factory(root.LoyaltyProgramApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SweepstakeUserResponse model module.
   * @module model/SweepstakeUserResponse
   * @version 4.0.2
   */

  /**
   * Constructs a new <code>SweepstakeUserResponse</code>.
   * @alias module:model/SweepstakeUserResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>SweepstakeUserResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SweepstakeUserResponse} obj Optional instance to populate.
   * @return {module:model/SweepstakeUserResponse} The populated <code>SweepstakeUserResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('codigo')) {
        obj['codigo'] = ApiClient.convertToType(data['codigo'], 'String');
      }
      if (data.hasOwnProperty('mensaje')) {
        obj['mensaje'] = ApiClient.convertToType(data['mensaje'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} codigo
   */
  exports.prototype['codigo'] = undefined;
  /**
   * @member {String} mensaje
   */
  exports.prototype['mensaje'] = undefined;



  return exports;
}));


