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
    root.LoyaltyProgramApi.ChangeInformationResponse = factory(root.LoyaltyProgramApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ChangeInformationResponse model module.
   * @module model/ChangeInformationResponse
   * @version 4.0.2
   */

  /**
   * Constructs a new <code>ChangeInformationResponse</code>.
   * @alias module:model/ChangeInformationResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ChangeInformationResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChangeInformationResponse} obj Optional instance to populate.
   * @return {module:model/ChangeInformationResponse} The populated <code>ChangeInformationResponse</code> instance.
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
   * value \"1\" if the information was changed successfully.
   * @member {String} Estado
   */
  exports.prototype['Estado'] = undefined;
  /**
   * @member {String} Mensaje
   */
  exports.prototype['Mensaje'] = undefined;



  return exports;
}));


