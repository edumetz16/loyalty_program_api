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
    define(['ApiClient', 'model/CityLocations'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CityLocations'));
  } else {
    // Browser globals (root is window)
    if (!root.LoyaltyProgramApi) {
      root.LoyaltyProgramApi = {};
    }
    root.LoyaltyProgramApi.SubsidiaryLocation = factory(root.LoyaltyProgramApi.ApiClient, root.LoyaltyProgramApi.CityLocations);
  }
}(this, function(ApiClient, CityLocations) {
  'use strict';




  /**
   * The SubsidiaryLocation model module.
   * @module model/SubsidiaryLocation
   * @version 4.0.2
   */

  /**
   * Constructs a new <code>SubsidiaryLocation</code>.
   * @alias module:model/SubsidiaryLocation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>SubsidiaryLocation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubsidiaryLocation} obj Optional instance to populate.
   * @return {module:model/SubsidiaryLocation} The populated <code>SubsidiaryLocation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('DescripcionSucursal')) {
        obj['DescripcionSucursal'] = ApiClient.convertToType(data['DescripcionSucursal'], 'String');
      }
      if (data.hasOwnProperty('arr_sucursalLocalidad')) {
        obj['arr_sucursalLocalidad'] = ApiClient.convertToType(data['arr_sucursalLocalidad'], [CityLocations]);
      }
    }
    return obj;
  }

  /**
   * @member {String} DescripcionSucursal
   */
  exports.prototype['DescripcionSucursal'] = undefined;
  /**
   * @member {Array.<module:model/CityLocations>} arr_sucursalLocalidad
   */
  exports.prototype['arr_sucursalLocalidad'] = undefined;



  return exports;
}));


