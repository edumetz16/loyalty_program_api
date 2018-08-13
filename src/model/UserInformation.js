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
    root.LoyaltyProgramApi.UserInformation = factory(root.LoyaltyProgramApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserInformation model module.
   * @module model/UserInformation
   * @version 4.0.2
   */

  /**
   * Constructs a new <code>UserInformation</code>.
   * @alias module:model/UserInformation
   * @class
   */
  var exports = function() {
    var _this = this;






















































  };

  /**
   * Constructs a <code>UserInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserInformation} obj Optional instance to populate.
   * @return {module:model/UserInformation} The populated <code>UserInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('mClave')) {
        obj['mClave'] = ApiClient.convertToType(data['mClave'], 'String');
      }
      if (data.hasOwnProperty('mCodigoPostal')) {
        obj['mCodigoPostal'] = ApiClient.convertToType(data['mCodigoPostal'], 'String');
      }
      if (data.hasOwnProperty('mOrigenDelAlta')) {
        obj['mOrigenDelAlta'] = ApiClient.convertToType(data['mOrigenDelAlta'], 'String');
      }
      if (data.hasOwnProperty('mNdeCliente')) {
        obj['mNdeCliente'] = ApiClient.convertToType(data['mNdeCliente'], 'String');
      }
      if (data.hasOwnProperty('mUsuarioAlta')) {
        obj['mUsuarioAlta'] = ApiClient.convertToType(data['mUsuarioAlta'], 'String');
      }
      if (data.hasOwnProperty('mId')) {
        obj['mId'] = ApiClient.convertToType(data['mId'], 'String');
      }
      if (data.hasOwnProperty('mIdClub')) {
        obj['mIdClub'] = ApiClient.convertToType(data['mIdClub'], 'String');
      }
      if (data.hasOwnProperty('mApellido')) {
        obj['mApellido'] = ApiClient.convertToType(data['mApellido'], 'String');
      }
      if (data.hasOwnProperty('mNombre')) {
        obj['mNombre'] = ApiClient.convertToType(data['mNombre'], 'String');
      }
      if (data.hasOwnProperty('mGenero')) {
        obj['mGenero'] = ApiClient.convertToType(data['mGenero'], 'String');
      }
      if (data.hasOwnProperty('mIdTipoDoc')) {
        obj['mIdTipoDoc'] = ApiClient.convertToType(data['mIdTipoDoc'], 'String');
      }
      if (data.hasOwnProperty('mTipoDocumento')) {
        obj['mTipoDocumento'] = ApiClient.convertToType(data['mTipoDocumento'], 'String');
      }
      if (data.hasOwnProperty('mNumeroDoc')) {
        obj['mNumeroDoc'] = ApiClient.convertToType(data['mNumeroDoc'], 'String');
      }
      if (data.hasOwnProperty('mMail')) {
        obj['mMail'] = ApiClient.convertToType(data['mMail'], 'String');
      }
      if (data.hasOwnProperty('mFechaAlta')) {
        obj['mFechaAlta'] = ApiClient.convertToType(data['mFechaAlta'], 'String');
      }
      if (data.hasOwnProperty('mFechaNac')) {
        obj['mFechaNac'] = ApiClient.convertToType(data['mFechaNac'], 'Date');
      }
      if (data.hasOwnProperty('mTelefono')) {
        obj['mTelefono'] = ApiClient.convertToType(data['mTelefono'], 'String');
      }
      if (data.hasOwnProperty('mCelular')) {
        obj['mCelular'] = ApiClient.convertToType(data['mCelular'], 'String');
      }
      if (data.hasOwnProperty('mDireccion')) {
        obj['mDireccion'] = ApiClient.convertToType(data['mDireccion'], 'String');
      }
      if (data.hasOwnProperty('mFk_Ciudad')) {
        obj['mFk_Ciudad'] = ApiClient.convertToType(data['mFk_Ciudad'], 'String');
      }
      if (data.hasOwnProperty('mLocalidad')) {
        obj['mLocalidad'] = ApiClient.convertToType(data['mLocalidad'], 'String');
      }
      if (data.hasOwnProperty('mNumeroTarjeta')) {
        obj['mNumeroTarjeta'] = ApiClient.convertToType(data['mNumeroTarjeta'], 'String');
      }
      if (data.hasOwnProperty('mIdTipoTarjeta')) {
        obj['mIdTipoTarjeta'] = ApiClient.convertToType(data['mIdTipoTarjeta'], 'String');
      }
      if (data.hasOwnProperty('mTipoTarjeta')) {
        obj['mTipoTarjeta'] = ApiClient.convertToType(data['mTipoTarjeta'], 'String');
      }
      if (data.hasOwnProperty('mPuntosAcumuladosClub')) {
        obj['mPuntosAcumuladosClub'] = ApiClient.convertToType(data['mPuntosAcumuladosClub'], 'String');
      }
      if (data.hasOwnProperty('mImagenPerfil')) {
        obj['mImagenPerfil'] = ApiClient.convertToType(data['mImagenPerfil'], 'String');
      }
      if (data.hasOwnProperty('IdClub')) {
        obj['IdClub'] = ApiClient.convertToType(data['IdClub'], 'String');
      }
      if (data.hasOwnProperty('IdSocio')) {
        obj['IdSocio'] = ApiClient.convertToType(data['IdSocio'], 'String');
      }
      if (data.hasOwnProperty('ApellidoSocio')) {
        obj['ApellidoSocio'] = ApiClient.convertToType(data['ApellidoSocio'], 'String');
      }
      if (data.hasOwnProperty('NombreSocio')) {
        obj['NombreSocio'] = ApiClient.convertToType(data['NombreSocio'], 'String');
      }
      if (data.hasOwnProperty('Sexo')) {
        obj['Sexo'] = ApiClient.convertToType(data['Sexo'], 'String');
      }
      if (data.hasOwnProperty('IdTipoDocumento')) {
        obj['IdTipoDocumento'] = ApiClient.convertToType(data['IdTipoDocumento'], 'String');
      }
      if (data.hasOwnProperty('NumeroDoc')) {
        obj['NumeroDoc'] = ApiClient.convertToType(data['NumeroDoc'], 'String');
      }
      if (data.hasOwnProperty('MailSocio')) {
        obj['MailSocio'] = ApiClient.convertToType(data['MailSocio'], 'String');
      }
      if (data.hasOwnProperty('FechaNacimiento')) {
        obj['FechaNacimiento'] = ApiClient.convertToType(data['FechaNacimiento'], 'Date');
      }
      if (data.hasOwnProperty('TelefonoSocio')) {
        obj['TelefonoSocio'] = ApiClient.convertToType(data['TelefonoSocio'], 'String');
      }
      if (data.hasOwnProperty('CelularSocio')) {
        obj['CelularSocio'] = ApiClient.convertToType(data['CelularSocio'], 'String');
      }
      if (data.hasOwnProperty('Direccion')) {
        obj['Direccion'] = ApiClient.convertToType(data['Direccion'], 'String');
      }
      if (data.hasOwnProperty('fk_Ciudad')) {
        obj['fk_Ciudad'] = ApiClient.convertToType(data['fk_Ciudad'], 'String');
      }
      if (data.hasOwnProperty('IdTipoTarjeta')) {
        obj['IdTipoTarjeta'] = ApiClient.convertToType(data['IdTipoTarjeta'], 'String');
      }
      if (data.hasOwnProperty('Clave')) {
        obj['Clave'] = ApiClient.convertToType(data['Clave'], 'String');
      }
      if (data.hasOwnProperty('CodigoPostal')) {
        obj['CodigoPostal'] = ApiClient.convertToType(data['CodigoPostal'], 'String');
      }
      if (data.hasOwnProperty('OrigenDelAlta')) {
        obj['OrigenDelAlta'] = ApiClient.convertToType(data['OrigenDelAlta'], 'String');
      }
      if (data.hasOwnProperty('NDeCliente')) {
        obj['NDeCliente'] = ApiClient.convertToType(data['NDeCliente'], 'String');
      }
      if (data.hasOwnProperty('UsuarioAlta')) {
        obj['UsuarioAlta'] = ApiClient.convertToType(data['UsuarioAlta'], 'String');
      }
      if (data.hasOwnProperty('Ocupacion')) {
        obj['Ocupacion'] = ApiClient.convertToType(data['Ocupacion'], 'String');
      }
      if (data.hasOwnProperty('Localidad')) {
        obj['Localidad'] = ApiClient.convertToType(data['Localidad'], 'String');
      }
      if (data.hasOwnProperty('NumeroTarjeta')) {
        obj['NumeroTarjeta'] = ApiClient.convertToType(data['NumeroTarjeta'], 'String');
      }
      if (data.hasOwnProperty('PuntosAcumuladosClub')) {
        obj['PuntosAcumuladosClub'] = ApiClient.convertToType(data['PuntosAcumuladosClub'], 'String');
      }
      if (data.hasOwnProperty('TipoDocumento')) {
        obj['TipoDocumento'] = ApiClient.convertToType(data['TipoDocumento'], 'String');
      }
      if (data.hasOwnProperty('FechaAlta')) {
        obj['FechaAlta'] = ApiClient.convertToType(data['FechaAlta'], 'Date');
      }
      if (data.hasOwnProperty('TipoDeTarjeta')) {
        obj['TipoDeTarjeta'] = ApiClient.convertToType(data['TipoDeTarjeta'], 'String');
      }
      if (data.hasOwnProperty('ImagenPerfil')) {
        obj['ImagenPerfil'] = ApiClient.convertToType(data['ImagenPerfil'], 'String');
      }
    }
    return obj;
  }

  /**
   * users password
   * @member {String} mClave
   */
  exports.prototype['mClave'] = undefined;
  /**
   * @member {String} mCodigoPostal
   */
  exports.prototype['mCodigoPostal'] = undefined;
  /**
   * @member {String} mOrigenDelAlta
   */
  exports.prototype['mOrigenDelAlta'] = undefined;
  /**
   * @member {String} mNdeCliente
   */
  exports.prototype['mNdeCliente'] = undefined;
  /**
   * user's username
   * @member {String} mUsuarioAlta
   */
  exports.prototype['mUsuarioAlta'] = undefined;
  /**
   * @member {String} mId
   */
  exports.prototype['mId'] = undefined;
  /**
   * @member {String} mIdClub
   */
  exports.prototype['mIdClub'] = undefined;
  /**
   * @member {String} mApellido
   */
  exports.prototype['mApellido'] = undefined;
  /**
   * @member {String} mNombre
   */
  exports.prototype['mNombre'] = undefined;
  /**
   * @member {String} mGenero
   */
  exports.prototype['mGenero'] = undefined;
  /**
   * @member {String} mIdTipoDoc
   */
  exports.prototype['mIdTipoDoc'] = undefined;
  /**
   * @member {String} mTipoDocumento
   */
  exports.prototype['mTipoDocumento'] = undefined;
  /**
   * @member {String} mNumeroDoc
   */
  exports.prototype['mNumeroDoc'] = undefined;
  /**
   * @member {String} mMail
   */
  exports.prototype['mMail'] = undefined;
  /**
   * @member {String} mFechaAlta
   */
  exports.prototype['mFechaAlta'] = undefined;
  /**
   * @member {Date} mFechaNac
   */
  exports.prototype['mFechaNac'] = undefined;
  /**
   * @member {String} mTelefono
   */
  exports.prototype['mTelefono'] = undefined;
  /**
   * @member {String} mCelular
   */
  exports.prototype['mCelular'] = undefined;
  /**
   * @member {String} mDireccion
   */
  exports.prototype['mDireccion'] = undefined;
  /**
   * @member {String} mFk_Ciudad
   */
  exports.prototype['mFk_Ciudad'] = undefined;
  /**
   * @member {String} mLocalidad
   */
  exports.prototype['mLocalidad'] = undefined;
  /**
   * @member {String} mNumeroTarjeta
   */
  exports.prototype['mNumeroTarjeta'] = undefined;
  /**
   * @member {String} mIdTipoTarjeta
   */
  exports.prototype['mIdTipoTarjeta'] = undefined;
  /**
   * @member {String} mTipoTarjeta
   */
  exports.prototype['mTipoTarjeta'] = undefined;
  /**
   * @member {String} mPuntosAcumuladosClub
   */
  exports.prototype['mPuntosAcumuladosClub'] = undefined;
  /**
   * @member {String} mImagenPerfil
   */
  exports.prototype['mImagenPerfil'] = undefined;
  /**
   * @member {String} IdClub
   */
  exports.prototype['IdClub'] = undefined;
  /**
   * @member {String} IdSocio
   */
  exports.prototype['IdSocio'] = undefined;
  /**
   * @member {String} ApellidoSocio
   */
  exports.prototype['ApellidoSocio'] = undefined;
  /**
   * @member {String} NombreSocio
   */
  exports.prototype['NombreSocio'] = undefined;
  /**
   * @member {String} Sexo
   */
  exports.prototype['Sexo'] = undefined;
  /**
   * @member {String} IdTipoDocumento
   */
  exports.prototype['IdTipoDocumento'] = undefined;
  /**
   * @member {String} NumeroDoc
   */
  exports.prototype['NumeroDoc'] = undefined;
  /**
   * @member {String} MailSocio
   */
  exports.prototype['MailSocio'] = undefined;
  /**
   * @member {Date} FechaNacimiento
   */
  exports.prototype['FechaNacimiento'] = undefined;
  /**
   * @member {String} TelefonoSocio
   */
  exports.prototype['TelefonoSocio'] = undefined;
  /**
   * @member {String} CelularSocio
   */
  exports.prototype['CelularSocio'] = undefined;
  /**
   * @member {String} Direccion
   */
  exports.prototype['Direccion'] = undefined;
  /**
   * @member {String} fk_Ciudad
   */
  exports.prototype['fk_Ciudad'] = undefined;
  /**
   * @member {String} IdTipoTarjeta
   */
  exports.prototype['IdTipoTarjeta'] = undefined;
  /**
   * @member {String} Clave
   */
  exports.prototype['Clave'] = undefined;
  /**
   * @member {String} CodigoPostal
   */
  exports.prototype['CodigoPostal'] = undefined;
  /**
   * @member {String} OrigenDelAlta
   */
  exports.prototype['OrigenDelAlta'] = undefined;
  /**
   * @member {String} NDeCliente
   */
  exports.prototype['NDeCliente'] = undefined;
  /**
   * @member {String} UsuarioAlta
   */
  exports.prototype['UsuarioAlta'] = undefined;
  /**
   * @member {String} Ocupacion
   */
  exports.prototype['Ocupacion'] = undefined;
  /**
   * @member {String} Localidad
   */
  exports.prototype['Localidad'] = undefined;
  /**
   * @member {String} NumeroTarjeta
   */
  exports.prototype['NumeroTarjeta'] = undefined;
  /**
   * @member {String} PuntosAcumuladosClub
   */
  exports.prototype['PuntosAcumuladosClub'] = undefined;
  /**
   * @member {String} TipoDocumento
   */
  exports.prototype['TipoDocumento'] = undefined;
  /**
   * @member {Date} FechaAlta
   */
  exports.prototype['FechaAlta'] = undefined;
  /**
   * @member {String} TipoDeTarjeta
   */
  exports.prototype['TipoDeTarjeta'] = undefined;
  /**
   * @member {String} ImagenPerfil
   */
  exports.prototype['ImagenPerfil'] = undefined;



  return exports;
}));


