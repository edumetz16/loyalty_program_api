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
    define(['ApiClient', 'model/Credit'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Credit'));
  } else {
    // Browser globals (root is window)
    if (!root.LoyaltyProgramApi) {
      root.LoyaltyProgramApi = {};
    }
    root.LoyaltyProgramApi.CreditsResponse = factory(root.LoyaltyProgramApi.ApiClient, root.LoyaltyProgramApi.Credit);
  }
}(this, function(ApiClient, Credit) {
  'use strict';




  /**
   * The CreditsResponse model module.
   * @module model/CreditsResponse
   * @version 4.0.2
   */

  /**
   * Constructs a new <code>CreditsResponse</code>.
   * @alias module:model/CreditsResponse
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>CreditsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreditsResponse} obj Optional instance to populate.
   * @return {module:model/CreditsResponse} The populated <code>CreditsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('codigo')) {
        obj['codigo'] = ApiClient.convertToType(data['codigo'], 'String');
      }
      if (data.hasOwnProperty('mensaje')) {
        obj['mensaje'] = ApiClient.convertToType(data['mensaje'], [Credit]);
      }
    }
    return obj;
  }

  /**
   * @member {String} codigo
   */
  exports.prototype['codigo'] = undefined;
  /**
   * @member {Array.<module:model/Credit>} mensaje
   */
  exports.prototype['mensaje'] = undefined;



  return exports;
}));


