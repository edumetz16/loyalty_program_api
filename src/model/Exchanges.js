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
    define(['ApiClient', 'model/Exchange'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Exchange'));
  } else {
    // Browser globals (root is window)
    if (!root.LoyaltyProgramApi) {
      root.LoyaltyProgramApi = {};
    }
    root.LoyaltyProgramApi.Exchanges = factory(root.LoyaltyProgramApi.ApiClient, root.LoyaltyProgramApi.Exchange);
  }
}(this, function(ApiClient, Exchange) {
  'use strict';




  /**
   * The Exchanges model module.
   * @module model/Exchanges
   * @version 4.0.2
   */

  /**
   * Constructs a new <code>Exchanges</code>.
   * @alias module:model/Exchanges
   * @class
   * @param movimientos {Array.<module:model/Exchange>} 
   */
  var exports = function(movimientos) {
    var _this = this;

    _this['Movimientos'] = movimientos;
  };

  /**
   * Constructs a <code>Exchanges</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Exchanges} obj Optional instance to populate.
   * @return {module:model/Exchanges} The populated <code>Exchanges</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Movimientos')) {
        obj['Movimientos'] = ApiClient.convertToType(data['Movimientos'], [Exchange]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Exchange>} Movimientos
   */
  exports.prototype['Movimientos'] = undefined;



  return exports;
}));


