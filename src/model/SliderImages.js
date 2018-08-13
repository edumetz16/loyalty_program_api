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
    root.LoyaltyProgramApi.SliderImages = factory(root.LoyaltyProgramApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SliderImages model module.
   * @module model/SliderImages
   * @version 4.0.2
   */

  /**
   * Constructs a new <code>SliderImages</code>.
   * @alias module:model/SliderImages
   * @class
   * @param cantidad {String} ammount of images
   * @param urls {Array.<String>} 
   */
  var exports = function(cantidad, urls) {
    var _this = this;

    _this['cantidad'] = cantidad;
    _this['urls'] = urls;
  };

  /**
   * Constructs a <code>SliderImages</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SliderImages} obj Optional instance to populate.
   * @return {module:model/SliderImages} The populated <code>SliderImages</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('cantidad')) {
        obj['cantidad'] = ApiClient.convertToType(data['cantidad'], 'String');
      }
      if (data.hasOwnProperty('urls')) {
        obj['urls'] = ApiClient.convertToType(data['urls'], ['String']);
      }
    }
    return obj;
  }

  /**
   * ammount of images
   * @member {String} cantidad
   */
  exports.prototype['cantidad'] = undefined;
  /**
   * @member {Array.<String>} urls
   */
  exports.prototype['urls'] = undefined;



  return exports;
}));


