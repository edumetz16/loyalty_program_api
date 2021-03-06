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
    root.LoyaltyProgramApi.ClubUserRequest = factory(root.LoyaltyProgramApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ClubUserRequest model module.
   * @module model/ClubUserRequest
   * @version 4.0.2
   */

  /**
   * Constructs a new <code>ClubUserRequest</code>.
   * @alias module:model/ClubUserRequest
   * @class
   * @param idClub {String} 
   */
  var exports = function(idClub) {
    var _this = this;




    _this['IdClub'] = idClub;

  };

  /**
   * Constructs a <code>ClubUserRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClubUserRequest} obj Optional instance to populate.
   * @return {module:model/ClubUserRequest} The populated <code>ClubUserRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('TipoDeDato')) {
        obj['TipoDeDato'] = ApiClient.convertToType(data['TipoDeDato'], 'String');
      }
      if (data.hasOwnProperty('Dato')) {
        obj['Dato'] = ApiClient.convertToType(data['Dato'], 'String');
      }
      if (data.hasOwnProperty('NumeroDoc')) {
        obj['NumeroDoc'] = ApiClient.convertToType(data['NumeroDoc'], 'String');
      }
      if (data.hasOwnProperty('IdClub')) {
        obj['IdClub'] = ApiClient.convertToType(data['IdClub'], 'String');
      }
      if (data.hasOwnProperty('mail')) {
        obj['mail'] = ApiClient.convertToType(data['mail'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} TipoDeDato
   */
  exports.prototype['TipoDeDato'] = undefined;
  /**
   * @member {String} Dato
   */
  exports.prototype['Dato'] = undefined;
  /**
   * @member {String} NumeroDoc
   */
  exports.prototype['NumeroDoc'] = undefined;
  /**
   * @member {String} IdClub
   */
  exports.prototype['IdClub'] = undefined;
  /**
   * @member {String} mail
   */
  exports.prototype['mail'] = undefined;



  return exports;
}));


