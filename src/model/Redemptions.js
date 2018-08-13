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
    define(['ApiClient', 'model/Redemption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Redemption'));
  } else {
    // Browser globals (root is window)
    if (!root.LoyaltyProgramApi) {
      root.LoyaltyProgramApi = {};
    }
    root.LoyaltyProgramApi.Redemptions = factory(root.LoyaltyProgramApi.ApiClient, root.LoyaltyProgramApi.Redemption);
  }
}(this, function(ApiClient, Redemption) {
  'use strict';




  /**
   * The Redemptions model module.
   * @module model/Redemptions
   * @version 4.0.2
   */

  /**
   * Constructs a new <code>Redemptions</code>.
   * @alias module:model/Redemptions
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Redemptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Redemptions} obj Optional instance to populate.
   * @return {module:model/Redemptions} The populated <code>Redemptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('CanjesPendientes')) {
        obj['CanjesPendientes'] = ApiClient.convertToType(data['CanjesPendientes'], [Redemption]);
      }
      if (data.hasOwnProperty('CanjesCerrados')) {
        obj['CanjesCerrados'] = ApiClient.convertToType(data['CanjesCerrados'], [Redemption]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Redemption>} CanjesPendientes
   */
  exports.prototype['CanjesPendientes'] = undefined;
  /**
   * @member {Array.<module:model/Redemption>} CanjesCerrados
   */
  exports.prototype['CanjesCerrados'] = undefined;



  return exports;
}));

