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
    root.LoyaltyProgramApi.UserDeviceInfo = factory(root.LoyaltyProgramApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserDeviceInfo model module.
   * @module model/UserDeviceInfo
   * @version 4.0.2
   */

  /**
   * Constructs a new <code>UserDeviceInfo</code>.
   * @alias module:model/UserDeviceInfo
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>UserDeviceInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserDeviceInfo} obj Optional instance to populate.
   * @return {module:model/UserDeviceInfo} The populated <code>UserDeviceInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('gcm_id')) {
        obj['gcm_id'] = ApiClient.convertToType(data['gcm_id'], 'String');
      }
      if (data.hasOwnProperty('fk_socio')) {
        obj['fk_socio'] = ApiClient.convertToType(data['fk_socio'], 'String');
      }
      if (data.hasOwnProperty('latitud')) {
        obj['latitud'] = ApiClient.convertToType(data['latitud'], 'String');
      }
      if (data.hasOwnProperty('longitud')) {
        obj['longitud'] = ApiClient.convertToType(data['longitud'], 'String');
      }
    }
    return obj;
  }

  /**
   * fcm id
   * @member {String} gcm_id
   */
  exports.prototype['gcm_id'] = undefined;
  /**
   * user id
   * @member {String} fk_socio
   */
  exports.prototype['fk_socio'] = undefined;
  /**
   * latitude
   * @member {String} latitud
   */
  exports.prototype['latitud'] = undefined;
  /**
   * longitude
   * @member {String} longitud
   */
  exports.prototype['longitud'] = undefined;



  return exports;
}));


