# LoyaltyProgramApi.DevelopersApi

All URIs are relative to *https://www.lineadgroup.com/loyaltyprogram/api/endpoints/clubfoals/*

Method | HTTP request | Description
------------- | ------------- | -------------
[**associateFCMId**](DevelopersApi.md#associateFCMId) | **POST** /gcm_id/asociar_gcm_id.inc.php | associate fcm id
[**buildPrize**](DevelopersApi.md#buildPrize) | **POST** /android-build_prize.php | builds prize content
[**changeInfo**](DevelopersApi.md#changeInfo) | **POST** /android-modificar_socio.php | change user&#39;s info.
[**changePassword**](DevelopersApi.md#changePassword) | **POST** /android-modificar_clave.php | change password.
[**checkUser**](DevelopersApi.md#checkUser) | **POST** /android-validar_dni.php | verifies the user exists
[**checkUser2**](DevelopersApi.md#checkUser2) | **POST** /android-validar_primer_paso.php | verifies the user exists
[**checkUserMail**](DevelopersApi.md#checkUserMail) | **POST** /android-verificar_mail_socio.php | verifies the user exists
[**contactForm**](DevelopersApi.md#contactForm) | **POST** /android-enviar_formulario_contacto.php | send contact form.
[**dettachFMCId**](DevelopersApi.md#dettachFMCId) | **POST** /gcm_id/desloguear_socio.inc.php | associate fcm id
[**getCategories**](DevelopersApi.md#getCategories) | **POST** /android-obtener_rubros.php | gets the categories of prizes
[**getCities**](DevelopersApi.md#getCities) | **GET** /get-cities.php | get list of cities.
[**getCredits**](DevelopersApi.md#getCredits) | **GET** /creditos/cmb_creditos.inc.php | get credits.
[**getCreditsDetails**](DevelopersApi.md#getCreditsDetails) | **GET** /creditos/leer_credito.inc.php | get credit details.
[**getExchangeTicket**](DevelopersApi.md#getExchangeTicket) | **POST** /android-ticket.php | gets user information
[**getMiles**](DevelopersApi.md#getMiles) | **POST** /android-leer_millas.php | gets miles
[**getMilesDetails**](DevelopersApi.md#getMilesDetails) | **POST** /android-movimiento_de_millas.php | gets miles detail
[**getModules**](DevelopersApi.md#getModules) | **GET** /android-leer_modulos.php | get app configuration.
[**getNews**](DevelopersApi.md#getNews) | **POST** /noticias/buscar_noticias_etiquetados.inc.php | get news for a tagged user
[**getNewsDetails**](DevelopersApi.md#getNewsDetails) | **POST** /noticias/leer_noticia.inc.php | get news article details.
[**getNewsList**](DevelopersApi.md#getNewsList) | **POST** /noticias/anticipo_noticias.inc.php | get news list.
[**getNewsWithTag**](DevelopersApi.md#getNewsWithTag) | **POST** /noticias/buscar_noticias_tag.inc.php | get news for a tag
[**getNewsWithUser**](DevelopersApi.md#getNewsWithUser) | **POST** /noticias/leer_etiquetados_segmentado.inc.php | get news for a user
[**getPoints**](DevelopersApi.md#getPoints) | **POST** /android-leer_puntos.php | gets user information
[**getPointsDetails**](DevelopersApi.md#getPointsDetails) | **POST** /android-movimiento_de_puntos.php | gets user information
[**getPrizesFromCategory**](DevelopersApi.md#getPrizesFromCategory) | **POST** /android-obtener_premios_del_rubro.php | get prizes from category
[**getProvinces**](DevelopersApi.md#getProvinces) | **GET** /get-provinces.php | get list of provinces.
[**getRedemptions**](DevelopersApi.md#getRedemptions) | **POST** /android-obtener_canjes.php | get list of redemptions.
[**getSliderImages**](DevelopersApi.md#getSliderImages) | **POST** /android-obtener_imagenes_slide.php | get slider images
[**getSubsidiaries**](DevelopersApi.md#getSubsidiaries) | **POST** /android-sucursales_club.php | get subsidiaries
[**getSubsidiariesCitymarketing**](DevelopersApi.md#getSubsidiariesCitymarketing) | **POST** /android-obtener_sucursales_citymarketing.php | get subsidiaries list details
[**getSubsidiariesList**](DevelopersApi.md#getSubsidiariesList) | **POST** /android-obtener_sucursales.php | get subsidiaries list details
[**getSweepstakeDetails**](DevelopersApi.md#getSweepstakeDetails) | **POST** /concursos/leer_concurso.inc.php | get sweepstake details
[**getSweepstakes**](DevelopersApi.md#getSweepstakes) | **POST** /concursos/leer_concursos_vigentes.inc.php | get sweepstakes.
[**getTagsWithUser**](DevelopersApi.md#getTagsWithUser) | **POST** /noticias/leer_tags_segmentados.inc.php | get tag
[**getUnreadNews**](DevelopersApi.md#getUnreadNews) | **POST** /noticias/cantidad_noticias_sin_leer.inc.php | get unread news.
[**getUserInfo**](DevelopersApi.md#getUserInfo) | **POST** /android-socios.php | gets user information
[**getVouchers**](DevelopersApi.md#getVouchers) | **GET** /android-traer_cupones.php | get list of vouchers.
[**joinSweepstake**](DevelopersApi.md#joinSweepstake) | **POST** /concursos/participar_concurso.inc.php | join sweepstake
[**loginUser**](DevelopersApi.md#loginUser) | **POST** /android-login.php | logs the user in
[**prizePaymentDetails**](DevelopersApi.md#prizePaymentDetails) | **POST** /android-prize_payment_details.php | get payment details for prize
[**recoverPassword**](DevelopersApi.md#recoverPassword) | **POST** /android-recordatorio_clave.php | recover password
[**redeemVoucher**](DevelopersApi.md#redeemVoucher) | **POST** /android-descarga_cupon.php | redeem voucher.
[**registerFCMId**](DevelopersApi.md#registerFCMId) | **POST** /gcm_id/registro_gcm_id.inc.php | register fcm id
[**registerPrizeVisit**](DevelopersApi.md#registerPrizeVisit) | **POST** /android-registrar_visita_premio.php | register visit to prize
[**registerUser**](DevelopersApi.md#registerUser) | **POST** /android-alta_socio.php | Registers a new user
[**reservePrize**](DevelopersApi.md#reservePrize) | **POST** /android-reserva_premio_beneficio.php | reserve a prize.
[**setUserEmail**](DevelopersApi.md#setUserEmail) | **POST** /android-validar_mail.php | associates an email address to a user


<a name="associateFCMId"></a>
# **associateFCMId**
> associateFCMId(opts)

associate fcm id

Associate FCM device ID to a user.

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'deviceInfo': new LoyaltyProgramApi.UserDeviceInfo() // UserDeviceInfo | device information object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.associateFCMId(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceInfo** | [**UserDeviceInfo**](UserDeviceInfo.md)| device information object | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="buildPrize"></a>
# **buildPrize**
> PrizeContent buildPrize(opts)

builds prize content

Builds inner prize content for behavior 3

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'prizeRequest': new LoyaltyProgramApi.PrizeRequest() // PrizeRequest | Request prize content
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.buildPrize(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prizeRequest** | [**PrizeRequest**](PrizeRequest.md)| Request prize content | [optional] 

### Return type

[**PrizeContent**](PrizeContent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="changeInfo"></a>
# **changeInfo**
> ChangeInformationResponse changeInfo(opts)

change user&#39;s info.

Change user&#39;s account information

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'userInformation': new LoyaltyProgramApi.UserInformation() // UserInformation | user information object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.changeInfo(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userInformation** | [**UserInformation**](UserInformation.md)| user information object | [optional] 

### Return type

[**ChangeInformationResponse**](ChangeInformationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="changePassword"></a>
# **changePassword**
> ChangeInformationResponse changePassword(opts)

change password.

Change user&#39;s password

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'contactForm': new LoyaltyProgramApi.ChangePassword() // ChangePassword | contact form object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.changePassword(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactForm** | [**ChangePassword**](ChangePassword.md)| contact form object | [optional] 

### Return type

[**ChangeInformationResponse**](ChangeInformationResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkUser"></a>
# **checkUser**
> UserCheckResponse checkUser(opts)

verifies the user exists

Checks that a user with that identiy card number exists

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'clubUser': new LoyaltyProgramApi.ClubUserRequest() // ClubUserRequest | User object with identity card number and clubID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkUser(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clubUser** | [**ClubUserRequest**](ClubUserRequest.md)| User object with identity card number and clubID | [optional] 

### Return type

[**UserCheckResponse**](UserCheckResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="checkUser2"></a>
# **checkUser2**
> UserCheckResponse checkUser2(opts)

verifies the user exists

Checks that a user with that identiy card number exists

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'clubUser': new LoyaltyProgramApi.ClubUserRequest() // ClubUserRequest | User object with identity card number and clubID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkUser2(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clubUser** | [**ClubUserRequest**](ClubUserRequest.md)| User object with identity card number and clubID | [optional] 

### Return type

[**UserCheckResponse**](UserCheckResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain

<a name="checkUserMail"></a>
# **checkUserMail**
> &#39;String&#39; checkUserMail(opts)

verifies the user exists

Checks that a user with that email exists

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'clubUser': new LoyaltyProgramApi.ClubUserRequest() // ClubUserRequest | User object with identity card number and clubID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.checkUserMail(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clubUser** | [**ClubUserRequest**](ClubUserRequest.md)| User object with identity card number and clubID | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain; charset=utf-8

<a name="contactForm"></a>
# **contactForm**
> ContactResponse contactForm(opts)

send contact form.

Send a contact form

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'contactForm': new LoyaltyProgramApi.ContactForm() // ContactForm | contact form object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.contactForm(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactForm** | [**ContactForm**](ContactForm.md)| contact form object | [optional] 

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dettachFMCId"></a>
# **dettachFMCId**
> dettachFMCId(opts)

associate fcm id

Associate FCM device ID to a user.

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'deviceInfo': new LoyaltyProgramApi.UserDeviceInfo() // UserDeviceInfo | device information object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.dettachFMCId(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceInfo** | [**UserDeviceInfo**](UserDeviceInfo.md)| device information object | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCategories"></a>
# **getCategories**
> Rubros getCategories(opts)

gets the categories of prizes

Gets a list of categories with prizes.

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'club': new LoyaltyProgramApi.ClubRequest() // ClubRequest | Club ID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCategories(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **club** | [**ClubRequest**](ClubRequest.md)| Club ID | [optional] 

### Return type

[**Rubros**](Rubros.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCities"></a>
# **getCities**
> [City] getCities(opts)

get list of cities.

Get a list of cities.

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'idProvincia': "idProvincia_example" // String | time utc
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCities(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **idProvincia** | **String**| time utc | [optional] 

### Return type

[**[City]**](City.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCredits"></a>
# **getCredits**
> CreditsResponse getCredits(opts)

get credits.

Get an array of credits.

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'fkSocio': "fkSocio_example" // String | id socio
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCredits(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fkSocio** | **String**| id socio | [optional] 

### Return type

[**CreditsResponse**](CreditsResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getCreditsDetails"></a>
# **getCreditsDetails**
> CreditDetails getCreditsDetails(opts)

get credit details.

Get credit details.

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'id': "id_example" // String | id credito
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCreditsDetails(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| id credito | [optional] 

### Return type

[**CreditDetails**](CreditDetails.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getExchangeTicket"></a>
# **getExchangeTicket**
> TicketResponse getExchangeTicket(opts)

gets user information

Gets information about the user from the userID and clubID

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'exchangeId': new LoyaltyProgramApi.ExchangeId() // ExchangeId | Sends userID and clubID to obtain user information.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getExchangeTicket(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchangeId** | [**ExchangeId**](ExchangeId.md)| Sends userID and clubID to obtain user information. | [optional] 

### Return type

[**TicketResponse**](TicketResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMiles"></a>
# **getMiles**
> Points getMiles(opts)

gets miles

Gets miles earned

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'clubUserbyID': new LoyaltyProgramApi.ClubUserbyIDRequest() // ClubUserbyIDRequest | Sends userID and clubID to obtain user information.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMiles(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clubUserbyID** | [**ClubUserbyIDRequest**](ClubUserbyIDRequest.md)| Sends userID and clubID to obtain user information. | [optional] 

### Return type

[**Points**](Points.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getMilesDetails"></a>
# **getMilesDetails**
> Exchanges getMilesDetails(opts)

gets miles detail

Gets miles movement list

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'clubUserbyID': new LoyaltyProgramApi.ClubUserbyIDRequest() // ClubUserbyIDRequest | Sends userID and clubID to obtain user information.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getMilesDetails(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clubUserbyID** | [**ClubUserbyIDRequest**](ClubUserbyIDRequest.md)| Sends userID and clubID to obtain user information. | [optional] 

### Return type

[**Exchanges**](Exchanges.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getModules"></a>
# **getModules**
> Modules getModules()

get app configuration.

Get an object for app configuration.

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getModules(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Modules**](Modules.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getNews"></a>
# **getNews**
> [NewsItem] getNews(opts)

get news for a tagged user

gets news for a specific tag

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'taggedUser': new LoyaltyProgramApi.TaggedUser() // TaggedUser | TaggedUser
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNews(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taggedUser** | [**TaggedUser**](TaggedUser.md)| TaggedUser | [optional] 

### Return type

[**[NewsItem]**](NewsItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewsDetails"></a>
# **getNewsDetails**
> NewsDetail getNewsDetails(opts)

get news article details.

Get details from a news article by its id

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'userInformation': new LoyaltyProgramApi.NewsRequest() // NewsRequest | user information object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNewsDetails(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userInformation** | [**NewsRequest**](NewsRequest.md)| user information object | [optional] 

### Return type

[**NewsDetail**](NewsDetail.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewsList"></a>
# **getNewsList**
> [NewsItem] getNewsList(opts)

get news list.

Get list of news

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'userInformation': new LoyaltyProgramApi.UserNews() // UserNews | user information object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNewsList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userInformation** | [**UserNews**](UserNews.md)| user information object | [optional] 

### Return type

[**[NewsItem]**](NewsItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewsWithTag"></a>
# **getNewsWithTag**
> [NewsItem] getNewsWithTag(opts)

get news for a tag

gets news for a specific tag

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'tag': new LoyaltyProgramApi.TagRequest() // TagRequest | tag
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNewsWithTag(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | [**TagRequest**](TagRequest.md)| tag | [optional] 

### Return type

[**[NewsItem]**](NewsItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNewsWithUser"></a>
# **getNewsWithUser**
> [NewsUsers] getNewsWithUser(opts)

get news for a user

gets news for a specific user

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'tag': new LoyaltyProgramApi.UserDeviceInfo() // UserDeviceInfo | user
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNewsWithUser(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | [**UserDeviceInfo**](UserDeviceInfo.md)| user | [optional] 

### Return type

[**[NewsUsers]**](NewsUsers.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPoints"></a>
# **getPoints**
> Points getPoints(opts)

gets user information

Gets information about the user from the userID and clubID

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'clubUserbyID': new LoyaltyProgramApi.ClubUserbyIDRequest() // ClubUserbyIDRequest | Sends userID and clubID to obtain user information.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPoints(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clubUserbyID** | [**ClubUserbyIDRequest**](ClubUserbyIDRequest.md)| Sends userID and clubID to obtain user information. | [optional] 

### Return type

[**Points**](Points.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPointsDetails"></a>
# **getPointsDetails**
> Exchanges getPointsDetails(opts)

gets user information

Gets information about the user from the userID and clubID

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'clubUserbyID': new LoyaltyProgramApi.ClubUserbyIDRequest() // ClubUserbyIDRequest | Sends userID and clubID to obtain user information.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPointsDetails(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clubUserbyID** | [**ClubUserbyIDRequest**](ClubUserbyIDRequest.md)| Sends userID and clubID to obtain user information. | [optional] 

### Return type

[**Exchanges**](Exchanges.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPrizesFromCategory"></a>
# **getPrizesFromCategory**
> Premios getPrizesFromCategory(opts)

get prizes from category

Gets a list of prizes from a certaing category.

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'categoryPrizesRequest': new LoyaltyProgramApi.CategoryRequest() // CategoryRequest | Request prizes from categories Object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPrizesFromCategory(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **categoryPrizesRequest** | [**CategoryRequest**](CategoryRequest.md)| Request prizes from categories Object | [optional] 

### Return type

[**Premios**](Premios.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProvinces"></a>
# **getProvinces**
> [Province] getProvinces()

get list of provinces.

Get a list of provinces.

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProvinces(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Province]**](Province.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRedemptions"></a>
# **getRedemptions**
> Redemptions getRedemptions(opts)

get list of redemptions.

Get a list of redeemed prizes.

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'redemptionsRequest': new LoyaltyProgramApi.RedemptionsRequest() // RedemptionsRequest | redemptions request object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRedemptions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redemptionsRequest** | [**RedemptionsRequest**](RedemptionsRequest.md)| redemptions request object | [optional] 

### Return type

[**Redemptions**](Redemptions.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSliderImages"></a>
# **getSliderImages**
> SliderImages getSliderImages(opts)

get slider images

Gets the images of the slider in the home screen.

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'club': new LoyaltyProgramApi.ClubRequest() // ClubRequest | Club ID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSliderImages(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **club** | [**ClubRequest**](ClubRequest.md)| Club ID | [optional] 

### Return type

[**SliderImages**](SliderImages.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubsidiaries"></a>
# **getSubsidiaries**
> Subsidiaries getSubsidiaries(opts)

get subsidiaries

Gets a list of subsidiaries.

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'club': new LoyaltyProgramApi.ClubRequest() // ClubRequest | Club ID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubsidiaries(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **club** | [**ClubRequest**](ClubRequest.md)| Club ID | [optional] 

### Return type

[**Subsidiaries**](Subsidiaries.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubsidiariesCitymarketing"></a>
# **getSubsidiariesCitymarketing**
> SubsidiariesCitymarketing getSubsidiariesCitymarketing(opts)

get subsidiaries list details

Gets a list of subsidiaries with city details.

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'club': new LoyaltyProgramApi.ClubRequest() // ClubRequest | Club ID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubsidiariesCitymarketing(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **club** | [**ClubRequest**](ClubRequest.md)| Club ID | [optional] 

### Return type

[**SubsidiariesCitymarketing**](SubsidiariesCitymarketing.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubsidiariesList"></a>
# **getSubsidiariesList**
> Subsidiaries getSubsidiariesList(opts)

get subsidiaries list details

Gets a list of subsidiaries with details.

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'club': new LoyaltyProgramApi.ClubRequest() // ClubRequest | Club ID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubsidiariesList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **club** | [**ClubRequest**](ClubRequest.md)| Club ID | [optional] 

### Return type

[**Subsidiaries**](Subsidiaries.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSweepstakeDetails"></a>
# **getSweepstakeDetails**
> SweepstakeDetails getSweepstakeDetails(opts)

get sweepstake details

Get details of a specific sweepstake.

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'sweepstakeId': new LoyaltyProgramApi.ObjectRequest() // ObjectRequest | sweepstake object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSweepstakeDetails(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sweepstakeId** | [**ObjectRequest**](ObjectRequest.md)| sweepstake object | [optional] 

### Return type

[**SweepstakeDetails**](SweepstakeDetails.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSweepstakes"></a>
# **getSweepstakes**
> [Sweepstake] getSweepstakes(opts)

get sweepstakes.

Get Availble Sweepstakes.

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'clubUser': new LoyaltyProgramApi.ClubUserbyIDRequest() // ClubUserbyIDRequest | club user object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSweepstakes(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clubUser** | [**ClubUserbyIDRequest**](ClubUserbyIDRequest.md)| club user object | [optional] 

### Return type

[**[Sweepstake]**](Sweepstake.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTagsWithUser"></a>
# **getTagsWithUser**
> [NewsTags] getTagsWithUser(opts)

get tag

gets tags for a specific user

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'tag': new LoyaltyProgramApi.UserDeviceInfo() // UserDeviceInfo | user
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTagsWithUser(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | [**UserDeviceInfo**](UserDeviceInfo.md)| user | [optional] 

### Return type

[**[NewsTags]**](NewsTags.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUnreadNews"></a>
# **getUnreadNews**
> &#39;Number&#39; getUnreadNews(opts)

get unread news.

Get number of unread news

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'userInformation': new LoyaltyProgramApi.UserDeviceInfo() // UserDeviceInfo | user information object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUnreadNews(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userInformation** | [**UserDeviceInfo**](UserDeviceInfo.md)| user information object | [optional] 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserInfo"></a>
# **getUserInfo**
> User getUserInfo(opts)

gets user information

Gets information about the user from the userID and clubID

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'clubUserbyID': new LoyaltyProgramApi.ClubUserbyIDRequest() // ClubUserbyIDRequest | Sends userID and clubID to obtain user information.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserInfo(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clubUserbyID** | [**ClubUserbyIDRequest**](ClubUserbyIDRequest.md)| Sends userID and clubID to obtain user information. | [optional] 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVouchers"></a>
# **getVouchers**
> Vouchers getVouchers(opts)

get list of vouchers.

Get a list of redeemed prizes.

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  '_date': 56 // Number | time utc
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVouchers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **Number**| time utc | [optional] 

### Return type

[**Vouchers**](Vouchers.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="joinSweepstake"></a>
# **joinSweepstake**
> SweepstakeUserResponse joinSweepstake(opts)

join sweepstake

Join a user to a sweepstake.

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'prizeView': new LoyaltyProgramApi.SweepstakeUser() // SweepstakeUser | prize view object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.joinSweepstake(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prizeView** | [**SweepstakeUser**](SweepstakeUser.md)| prize view object | [optional] 

### Return type

[**SweepstakeUserResponse**](SweepstakeUserResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="loginUser"></a>
# **loginUser**
> LoginResponse loginUser(opts)

logs the user in

Checks that a user with that identity card number exists

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'clubUser': new LoyaltyProgramApi.UserLoginRequest() // UserLoginRequest | Sends identity card number and password to log the user in
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.loginUser(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clubUser** | [**UserLoginRequest**](UserLoginRequest.md)| Sends identity card number and password to log the user in | [optional] 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="prizePaymentDetails"></a>
# **prizePaymentDetails**
> PaymentDetails prizePaymentDetails(opts)

get payment details for prize

Gets the details to submit a payment for a specific prize.

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'prizeRequest': new LoyaltyProgramApi.PrizeRequest() // PrizeRequest | Request prize content
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.prizePaymentDetails(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prizeRequest** | [**PrizeRequest**](PrizeRequest.md)| Request prize content | [optional] 

### Return type

[**PaymentDetails**](PaymentDetails.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="recoverPassword"></a>
# **recoverPassword**
> LoginResponse recoverPassword(opts)

recover password

Sends the user the password to his email address

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'clubUser': new LoyaltyProgramApi.ClubUserRequest() // ClubUserRequest | Sends identity card number and password to log the user in
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recoverPassword(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clubUser** | [**ClubUserRequest**](ClubUserRequest.md)| Sends identity card number and password to log the user in | [optional] 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="redeemVoucher"></a>
# **redeemVoucher**
> &#39;String&#39; redeemVoucher(opts)

redeem voucher.

Redeem a Voucher using an email address.

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'emailVoucher': new LoyaltyProgramApi.EmailVoucher() // EmailVoucher | email to get voucher
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.redeemVoucher(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **emailVoucher** | [**EmailVoucher**](EmailVoucher.md)| email to get voucher | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/plain; charset=utf-8

<a name="registerFCMId"></a>
# **registerFCMId**
> registerFCMId(opts)

register fcm id

Register a device&#39;s ID for push notifications.

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'deviceInfo': new LoyaltyProgramApi.DeviceInfo() // DeviceInfo | device information object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.registerFCMId(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deviceInfo** | [**DeviceInfo**](DeviceInfo.md)| device information object | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registerPrizeVisit"></a>
# **registerPrizeVisit**
> registerPrizeVisit(opts)

register visit to prize

Register a user&#39;s visit to a prize in the application.

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'prizeView': new LoyaltyProgramApi.PrizeViewRequest() // PrizeViewRequest | prize view object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.registerPrizeVisit(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prizeView** | [**PrizeViewRequest**](PrizeViewRequest.md)| prize view object | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="registerUser"></a>
# **registerUser**
> LoginResponse registerUser(opts)

Registers a new user

Creates a new user

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'socio': new LoyaltyProgramApi.UserInformation() // UserInformation | Sends all the information set by the user
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.registerUser(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **socio** | [**UserInformation**](UserInformation.md)| Sends all the information set by the user | [optional] 

### Return type

[**LoginResponse**](LoginResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reservePrize"></a>
# **reservePrize**
> RedemptionConfirm reservePrize(opts)

reserve a prize.

Reserve a priz for the usere and generate the redemtion code.

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'prizeRedeemRequest': new LoyaltyProgramApi.PrizeRedeemRequest() // PrizeRedeemRequest | prize redeem request object
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reservePrize(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **prizeRedeemRequest** | [**PrizeRedeemRequest**](PrizeRedeemRequest.md)| prize redeem request object | [optional] 

### Return type

[**RedemptionConfirm**](RedemptionConfirm.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setUserEmail"></a>
# **setUserEmail**
> ValidateMailResponse setUserEmail(opts)

associates an email address to a user

Checks that a user with that identiy card number exists

### Example
```javascript
var LoyaltyProgramApi = require('loyalty_program_api');

var apiInstance = new LoyaltyProgramApi.DevelopersApi();

var opts = { 
  'validateMailRequest': new LoyaltyProgramApi.ValidateMailRequest() // ValidateMailRequest | User object with identity card number and clubID
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setUserEmail(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **validateMailRequest** | [**ValidateMailRequest**](ValidateMailRequest.md)| User object with identity card number and clubID | [optional] 

### Return type

[**ValidateMailResponse**](ValidateMailResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

