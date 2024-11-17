"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _MyComponentModule = _interopRequireDefault(require("../src/MyComponent.module.css"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
//========= this code works perfect ==============//

// import React from 'react';

// const MyComponent = ({ message }) => {
//     return(
//         <div style={{ color: 'blue', fontSize: '20px' }}>
//             {message}
//         </div>

//     ) 
// };

// export default MyComponent;

//=========== this avove code is workig perfect ====================//

var MyComponent = function MyComponent(_ref) {
  var message = _ref.message,
    imageUrl = _ref.imageUrl,
    _ref$theme = _ref.theme,
    theme = _ref$theme === void 0 ? 'light' : _ref$theme,
    customStyles = _ref.customStyles;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_MyComponentModule["default"].container, " ").concat(theme === 'dark' ? _MyComponentModule["default"]['theme-dark'] : _MyComponentModule["default"]['theme-light']),
    style: customStyles
  }, imageUrl && /*#__PURE__*/_react["default"].createElement("img", {
    src: imageUrl,
    alt: "Card image",
    className: _MyComponentModule["default"].image
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: _MyComponentModule["default"].message
  }, message));
};
var _default = exports["default"] = MyComponent;