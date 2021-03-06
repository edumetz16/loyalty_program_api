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
    define(['ApiClient', 'model/SubsidiaryLocation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SubsidiaryLocation'));
  } else {
    // Browser globals (root is window)
    if (!root.LoyaltyProgramApi) {
      root.LoyaltyProgramApi = {};
    }
    root.LoyaltyProgramApi.SubsidiariesCitymarketing = factory(root.LoyaltyProgramApi.ApiClient, root.LoyaltyProgramApi.SubsidiaryLocation);
  }
}(this, function(ApiClient, SubsidiaryLocation) {
  'use strict';




  /**
   * The SubsidiariesCitymarketing model module.
   * @module model/SubsidiariesCitymarketing
   * @version 4.0.2
   */

  /**
   * Constructs a new <code>SubsidiariesCitymarketing</code>.
   * @alias module:model/SubsidiariesCitymarketing
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SubsidiariesCitymarketing</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubsidiariesCitymarketing} obj Optional instance to populate.
   * @return {module:model/SubsidiariesCitymarketing} The populated <code>SubsidiariesCitymarketing</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('arr_sucursalDirectorio')) {
        obj['arr_sucursalDirectorio'] = ApiClient.convertToType(data['arr_sucursalDirectorio'], [SubsidiaryLocation]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/SubsidiaryLocation>} arr_sucursalDirectorio
   */
  exports.prototype['arr_sucursalDirectorio'] = undefined;



  return exports;
}));


