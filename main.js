(()=>{"use strict";var e=document.querySelector(".profile__edit-button"),t=(document.querySelector(".popup__form-edit"),document.querySelector(".profile__add-button")),n=(document.querySelector(".popup__form-add"),document.querySelector(".profile__avatar-container"));function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._settings=t,this._inputs=Array.from(this._form.querySelectorAll(this._settings.inputSelector)),this._button=this._form.querySelector(this._settings.saveButtonSelector)}var t,n;return t=e,(n=[{key:"_hasInvalidInput",value:function(){return this._inputs.some((function(e){return!e.validity.valid}))}},{key:"_disableButton",value:function(){this._button.setAttribute("disabled",""),this._button.classList.add(this._settings.buttonDisabledClass)}},{key:"checkButtonValidity",value:function(){this._hasInvalidInput()?this._disableButton():(this._button.removeAttribute("disabled"),this._button.classList.remove(this._settings.buttonDisabledClass))}},{key:"_showInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._settings.inputErrorClass),t.textContent=e.validationMessage}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._settings.inputErrorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e)}},{key:"_setEventListeners",value:function(){var e=this;this.checkButtonValidity(),this._inputs.forEach((function(t){t.addEventListener("input",(function(n){e._checkInputValidity(t),e.checkButtonValidity()}))}))}},{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(e){e.preventDefault()})),this._setEventListeners()}},{key:"resetErrors",value:function(){var e=this;this._inputs.forEach((function(t){e._hideInputError(t)}))}}])&&r(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(t,n,r,o,i){var a,c,s=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),c=function(){s._newCard.remove(),s._newCard=null},(a="deleteCard")in this?Object.defineProperty(this,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):this[a]=c,this._template=document.querySelector(n).content.querySelector(".element"),this._name=t.name,this._link=t.link,this._likes=t.likes,this._id=t.id,this._userId=t.userId,this._ownerId=t.ownerId,this._data=t,this._handlerImg=r,this._handleDeleteClick=o,this._handleLikeClick=i}var t,n;return t=e,(n=[{key:"_setEventlisteners",value:function(){var e=this;this._deleteButton=this._newCard.querySelector(".element__delete-button"),this._likeButton.addEventListener("click",(function(){return e._handleLikeClick(e._id)})),this._deleteButton.addEventListener("click",(function(){return e._handleDeleteClick(e._id)})),this._elementImg.addEventListener("click",(function(){return e._handlerImg(e._data)}))}},{key:"isLiked",value:function(){var e=this;return this._likes.find((function(t){return t._id===e._userId}))}},{key:"_showLike",value:function(){this._likeButton.classList.add("element__like_active")}},{key:"_hideLike",value:function(){this._likeButton.classList.remove("element__like_active")}},{key:"setLikes",value:function(e){this._likes=e,this._newCard.querySelector(".element__like-count").textContent=this._likes.length,this.isLiked()?this._showLike():this._hideLike()}},{key:"createCards",value:function(){return this._newCard=this._template.cloneNode(!0),this._likeButton=this._newCard.querySelector(".element__like"),this._elementImg=this._newCard.querySelector(".element__img"),this._newCard.querySelector(".element__title").textContent=this._name,this._elementImg.alt=this._name,this._elementImg.src=this._link,this.setLikes(this._likes),this._setEventlisteners(),this._ownerId!==this._userId&&(this._deleteButton.style.display="none"),this._newCard}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._items.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"setEventListeners",value:function(){var e=this;this._popup.querySelector(".popup__close-button").addEventListener("click",(function(){e.close()})),this._popup.addEventListener("mousedown",(function(t){t.target===t.currentTarget&&e.close()}))}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(){return h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=d(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},h.apply(this,arguments)}function d(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=v(e)););return e}function _(e,t){return _=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_(e,t)}function y(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function v(e){return v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},v(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=v(r);if(o){var n=v(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._popupImgSrc=t._popup.querySelector(".popup__img"),t._popupImgTitle=t._popup.querySelector(".popup__img-title"),t}return t=a,(n=[{key:"open",value:function(e){h(v(a.prototype),"open",this).call(this),this._popupImgSrc.src=e.link,this._popupImgSrc.alt=e.name,this._popupImgTitle.textContent=e.name}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function w(){return w="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=E(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},w.apply(this,arguments)}function E(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=I(e)););return e}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function j(e,t){if(t&&("object"===b(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return C(e)}function C(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function I(e){return I=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},I(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=I(r);if(o){var n=I(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return j(this,e)});function a(e,t){var n,r,o,c,s;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),c=function(e){n._form.querySelector(".popup__save-button").textContent=e},(o="changeButtonName")in(r=C(n=i.call(this,e)))?Object.defineProperty(r,o,{value:c,enumerable:!0,configurable:!0,writable:!0}):r[o]=c,n._submitForm=t,n._form=n._popup.querySelector(".popup__form"),n._inputs=function(e){if(Array.isArray(e))return k(e)}(s=n._form.querySelectorAll(".popup__input"))||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(s)||function(e,t){if(e){if("string"==typeof e)return k(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?k(e,t):void 0}}(s)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputs.forEach((function(t){e[t.name]=t.value})),e}},{key:"close",value:function(){w(I(a.prototype),"close",this).call(this),this._form.reset()}},{key:"changeSubmitHandler",value:function(e){this._submitForm=e}},{key:"setEventListeners",value:function(){var e=this;w(I(a.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._submitForm(e._getInputValues()),e.changeButtonName("Сохранение..."),e.close()}))}},{key:"setInputValues",value:function(e){this._inputs.forEach((function(t){t.value=e[t.name]}))}}])&&g(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(l);function L(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){var n=t.userName,r=t.userInfo,o=t.profileAvatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userInfo=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._userName.textContent,profession:this._userInfo.textContent}}},{key:"setUserInfo",value:function(e,t,n){this._userName.textContent=e,this._userInfo.textContent=t,this._avatar.src=n}}])&&L(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B,T=new(function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"getUser",value:function(){return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch(console.log)}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch(console.log)}},{key:"editProfile",value:function(e,t){return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch(console.log)}},{key:"addCard",value:function(e,t){return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch(console.log)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch(console.log)}},{key:"addLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch(console.log)}},{key:"deleteLike",value:function(e){return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch(console.log)}},{key:"changeAvatar",value:function(e){return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))})).catch(console.log)}}])&&q(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-39",headers:{authorization:"4a199308-096c-41cb-b4ac-4703709cab9f","Content-Type":"application/json"}});T.getUser().then((function(e){V.setUserInfo(e.name,e.about,e.avatar),B=e._id})).catch((function(e){console.log(e)})),T.getInitialCards().then((function(e){e.forEach((function(e){var t=R(e);x.addItem(t)}))})).catch((function(e){console.log(e)}));var A,U={};A={formSelector:".popup__form",inputSelector:".popup__input",saveButtonSelector:".popup__save-button",inputErrorClass:"popup__input_type-error",buttonDisabledClass:"popup__save-button_disabled"},Array.from(document.querySelectorAll(A.formSelector)).forEach((function(e){var t=new o(A,e),n=e.getAttribute("name");U[n]=t,t.enableValidation()}));var R=function(e){var t=new a({name:e.name,link:e.link,likes:e.likes,id:e._id,userId:B,ownerId:e.owner._id},".template-item",M,(function(e){N.changeButtonName("Да"),N.open(),N.changeSubmitHandler((function(){T.deleteCard(e).then((function(e){t.deleteCard()})).catch((function(e){console.log(e)}))}))}),(function(e){t.isLiked()?T.deleteLike(e).then((function(e){t.setLikes(e.likes)})).catch((function(e){console.log(e)})):T.addLike(e).then((function(e){t.setLikes(e.likes)})).catch((function(e){console.log(e)}))}));return t.createCards()},x=new s({items:[],renderer:function(e){x.addItem(R(e))}},".elements"),N=new O(".popup_for_delete-card",(function(){}));N.setEventListeners();var V=new P({userName:".profile__title",userInfo:".profile__subtitle",profileAvatarSelector:".profile__avatar"}),D=new O(".popup_for_edit",(function(e){var t=e.name,n=e.profession;T.editProfile(t,n).then((function(){V.setUserInfo(t,n)})).catch((function(e){console.log(e)}))}));D.setEventListeners(),e.addEventListener("click",(function(){U["edit-form"].resetErrors();var e=V.getUserInfo();D.setInputValues(e),U["edit-form"].checkButtonValidity(),D.changeButtonName("Сохранить"),D.open()}));var H=new O(".popup_for_avatar",(function(e){var t=e.avatar;T.changeAvatar(t).then((function(e){V.setUserInfo(e.name,e.about,e.avatar),H.close()})).catch((function(e){console.log(e)}))}));H.setEventListeners(),n.addEventListener("click",(function(){U["change-avatar-form"].resetErrors(),H.open(),U["change-avatar-form"].checkButtonValidity()}));var F=new O(".popup_for_add",(function(e){T.addCard(e.title,e.link).then((function(e){var t=R(e);x.addItem(t)})).catch((function(e){console.log(e)}))}));t.addEventListener("click",(function(){F.changeButtonName("Создать"),F.open(),U["add-form"].resetErrors(),U["add-form"].checkButtonValidity()})),F.setEventListeners();var J=new m(".popup_for_img");J.setEventListeners();var M=function(e){J.open(e)}})();