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
    root.LoyaltyProgramApi.NewsItem = factory(root.LoyaltyProgramApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NewsItem model module.
   * @module model/NewsItem
   * @version 4.0.2
   */

  /**
   * Constructs a new <code>NewsItem</code>.
   * @alias module:model/NewsItem
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>NewsItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NewsItem} obj Optional instance to populate.
   * @return {module:model/NewsItem} The populated <code>NewsItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pk')) {
        obj['pk'] = ApiClient.convertToType(data['pk'], 'String');
      }
      if (data.hasOwnProperty('fechaPublicacion')) {
        obj['fechaPublicacion'] = ApiClient.convertToType(data['fechaPublicacion'], 'String');
      }
      if (data.hasOwnProperty('titulo')) {
        obj['titulo'] = ApiClient.convertToType(data['titulo'], 'String');
      }
      if (data.hasOwnProperty('subtitulo')) {
        obj['subtitulo'] = ApiClient.convertToType(data['subtitulo'], 'String');
      }
      if (data.hasOwnProperty('vista')) {
        obj['vista'] = ApiClient.convertToType(data['vista'], 'String');
      }
    }
    return obj;
  }

  /**
   * news id
   * @member {String} pk
   */
  exports.prototype['pk'] = undefined;
  /**
   * date published
   * @member {String} fechaPublicacion
   */
  exports.prototype['fechaPublicacion'] = undefined;
  /**
   * news title
   * @member {String} titulo
   */
  exports.prototype['titulo'] = undefined;
  /**
   * news subtitle
   * @member {String} subtitulo
   */
  exports.prototype['subtitulo'] = undefined;
  /**
   * news viewed
   * @member {String} vista
   */
  exports.prototype['vista'] = undefined;



  return exports;
}));

