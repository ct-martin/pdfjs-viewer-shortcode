/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/src/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/src/block/block.js":
/*!***********************************!*\
  !*** ./blocks/src/block/block.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./blocks/src/block/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/block/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
var __ = wp.i18n.__;


var registerBlockType = wp.blocks.registerBlockType;
var _wp$blockEditor = wp.blockEditor,
    MediaUpload = _wp$blockEditor.MediaUpload,
    InspectorControls = _wp$blockEditor.InspectorControls;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    PanelRow = _wp$components.PanelRow,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl,
    TextControl = _wp$components.TextControl;
var defaultHeight = 800;
var defaultWidth = 0;
var ALLOWED_MEDIA_TYPES = ['application/pdf'];
registerBlockType('pdfjsblock/pdfjs-embed', {
  title: __('Embed PDF.js Viewer', 'pdfjs-viewer-shortcode'),
  icon: 'media-document',
  category: 'common',
  attributes: {
    imageURL: {
      type: 'string'
    },
    imgID: {
      type: 'number'
    },
    imgTitle: {
      type: 'string',
      "default": 'PDF File'
    },
    showDownload: {
      type: 'boolean',
      "default": !!window.pdfjs_options.pdfjs_download_button
    },
    showPrint: {
      type: 'boolean',
      "default": !!window.pdfjs_options.pdfjs_print_button
    },
    showFullscreen: {
      type: 'boolean',
      "default": !!window.pdfjs_options.pdfjs_fullscreen_button
    },
    openFullscreen: {
      type: 'boolean',
      "default": !!window.pdfjs_options.pdfjs_fullscreen_link_button
    },
    fullscreenText: {
      type: 'string',
      "default": window.pdfjs_options.pdfjs_fullscreen_link_text ? window.pdfjs_options.pdfjs_fullscreen_link_text : 'View Fullscreen'
    },
    viewerHeight: {
      type: 'number',
      "default": window.pdfjs_options.pdfjs_embed_height ? Number(window.pdfjs_options.pdfjs_embed_height) : 800
    },
    viewerWidth: {
      type: 'number',
      "default": window.pdfjs_options.pdfjs_embed_width ? Number(window.pdfjs_options.pdfjs_embed_width) : 0
    },
    viewerScale: {
      type: 'string',
      "default": window.pdfjs_options.pdfjs_viewer_scale ? window.pdfjs_options.pdfjs_viewer_scale : 'auto'
    },
    searchText: {
      type: 'string',
      "default": ''
    }
  },
  keywords: [__('PDF Selector', 'pdfjs-viewer-shortcode')],
  edit: function edit(props) {
    var onFileSelect = function onFileSelect(img) {
      props.setAttributes({
        imageURL: img.url,
        imgID: img.id,
        imgTitle: img.title
      });
    };

    var onRemoveImg = function onRemoveImg() {
      props.setAttributes({
        imageURL: null,
        imgID: null,
        imgTitle: null
      });
    };

    var onToggleDownload = function onToggleDownload(value) {
      props.setAttributes({
        showDownload: value
      });
    };

    var onTogglePrint = function onTogglePrint(value) {
      props.setAttributes({
        showPrint: value
      });
    };

    var onToggleFullscreen = function onToggleFullscreen(value) {
      props.setAttributes({
        showFullscreen: value
      });
    };

    var onToggleOpenFullscreen = function onToggleOpenFullscreen(value) {
      props.setAttributes({
        openFullscreen: value
      });
    };

    var onHeightChange = function onHeightChange(value) {
      // handle the reset button
      if (undefined === value) {
        value = defaultHeight;
      }

      props.setAttributes({
        viewerHeight: value
      });
    };

    var onWidthChange = function onWidthChange(value) {
      // handle the reset button
      if (undefined === value) {
        value = defaultWidth;
      }

      props.setAttributes({
        viewerWidth: value
      });
    };

    var onScaleChange = function onScaleChange(value) {
      props.setAttributes({
        viewerScale: value
      });
    };

    var onFullscreenTextChange = function onFullscreenTextChange(value) {
      props.setAttributes({
        fullscreenText: value
      });
    };

    var onSearchTextChange = function onSearchTextChange(value) {
      props.setAttributes({
        searchText: value
      });
    };

    return [wp.element.createElement(InspectorControls, {
      key: "i1"
    }, wp.element.createElement(PanelBody, {
      title: __('PDF.js Options', 'pdfjs-viewer-shortcode')
    }, wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
      label: __('Show Download Option', 'pdfjs-viewer-shortcode'),
      help: props.attributes.showDownload ? __('Yes', 'pdfjs-viewer-shortcode') : __('No', 'pdfjs-viewer-shortcode'),
      checked: props.attributes.showDownload,
      onChange: onToggleDownload
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
      label: __('Show Print Option', 'pdfjs-viewer-shortcode'),
      help: props.attributes.showPrint ? __('Yes', 'pdfjs-viewer-shortcode') : __('No', 'pdfjs-viewer-shortcode'),
      checked: props.attributes.showPrint,
      onChange: onTogglePrint
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
      label: __('Show Fullscreen Option', 'pdfjs-viewer-shortcode'),
      help: props.attributes.showFullscreen ? __('Yes', 'pdfjs-viewer-shortcode') : __('No', 'pdfjs-viewer-shortcode'),
      checked: props.attributes.showFullscreen,
      onChange: onToggleFullscreen
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(ToggleControl, {
      label: __('Open Fullscreen in new tab?', 'pdfjs-viewer-shortcode'),
      help: props.attributes.openFullscreen ? __('Yes', 'pdfjs-viewer-shortcode') : __('No', 'pdfjs-viewer-shortcode'),
      checked: props.attributes.openFullscreen,
      onChange: onToggleOpenFullscreen
    })), wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {
      label: "Fullscreen Text",
      value: props.attributes.fullscreenText,
      onChange: onFullscreenTextChange
    }))), wp.element.createElement(PanelBody, {
      title: __('Embed Height', 'pdfjs-viewer-shortcode')
    }, wp.element.createElement(RangeControl, {
      label: __('Viewer Height (pixels)', 'pdfjs-viewer-shortcode'),
      value: props.attributes.viewerHeight,
      onChange: onHeightChange,
      min: 0,
      max: 5000,
      allowReset: true,
      initialPosition: defaultHeight
    })), wp.element.createElement(PanelBody, {
      title: __('Embed Width', 'pdfjs-viewer-shortcode')
    }, wp.element.createElement(RangeControl, {
      label: __('Viewer Width (pixels)', 'pdfjs-viewer-shortcode'),
      help: "By default 0 will be 100%.",
      value: props.attributes.viewerWidth,
      onChange: onWidthChange,
      min: 0,
      max: 5000,
      allowReset: true,
      initialPosition: defaultWidth
    })), wp.element.createElement(PanelBody, {
      title: __('Scale', 'pdfjs-viewer-shortcode')
    }, wp.element.createElement(SelectControl, {
      label: "Viewer Scale",
      value: props.attributes.viewerScale,
      options: [{
        label: 'Automatic',
        value: 'auto'
      }, {
        label: 'Actual Size',
        value: 'page-actual'
      }, {
        label: 'Page Fit',
        value: 'page-fit'
      }, {
        label: 'Page Width',
        value: 'page-width'
      }, {
        label: '50%',
        value: '50'
      }, {
        label: '75%',
        value: '75'
      }, {
        label: '100%',
        value: '100'
      }, {
        label: '125%',
        value: '125'
      }, {
        label: '150%',
        value: '150'
      }, {
        label: '200%',
        value: '200'
      }, {
        label: '300%',
        value: '300'
      }, {
        label: '400%',
        value: '400'
      }],
      onChange: onScaleChange
    })), wp.element.createElement(PanelBody, {
      title: __('Extra', 'pdfjs-viewer-shortcode')
    }, wp.element.createElement(PanelRow, null, wp.element.createElement(TextControl, {
      label: "Search Term Highlight",
      value: props.attributes.searchText,
      onChange: onSearchTextChange,
      help: "Only single words are working at this time."
    })))), wp.element.createElement("div", {
      className: "pdfjs-wrapper components-placeholder",
      key: "i2",
      style: {
        height: props.attributes.viewerHeight
      }
    }, wp.element.createElement("div", null, wp.element.createElement("strong", null, __('PDF.js Embed', 'pdfjs-viewer-shortcode'))), props.attributes.imageURL ? wp.element.createElement("div", {
      className: "pdfjs-upload-wrapper"
    }, wp.element.createElement("div", {
      className: "pdfjs-upload-button-wrapper"
    }, wp.element.createElement("span", {
      className: "dashicons dashicons-media-document"
    }), wp.element.createElement("span", {
      className: "pdfjs-title"
    }, props.attributes.imgTitle ? props.attributes.imgTitle : props.attributes.imageURL)), props.isSelected ? wp.element.createElement(Button, {
      className: "button",
      onClick: onRemoveImg
    }, __('Remove PDF', 'pdfjs-viewer-shortcode')) : null) : wp.element.createElement("div", null, wp.element.createElement(MediaUpload, {
      onSelect: onFileSelect,
      allowedTypes: ALLOWED_MEDIA_TYPES,
      value: props.attributes.imgID,
      render: function render(_ref) {
        var open = _ref.open;
        return wp.element.createElement(Button, {
          className: "button",
          onClick: open
        }, __('Choose PDF', 'pdfjs-viewer-shortcode'));
      }
    })))];
  },
  save: function save(props) {
    var updatedSearchString = props.attributes.searchText.replace('=', '');
    return wp.element.createElement("div", {
      className: "pdfjs-wrapper"
    }, "[pdfjs-viewer attachment_id=".concat(props.attributes.imgID, " viewer_width=").concat(props.attributes.viewerWidth !== undefined ? props.attributes.viewerWidth : defaultWidth, " viewer_height=").concat(props.attributes.viewerHeight !== undefined ? props.attributes.viewerHeight : defaultHeight, " url=").concat(props.attributes.imageURL, " download=").concat(props.attributes.showDownload.toString(), " print=").concat(props.attributes.showPrint.toString(), " fullscreen=").concat(props.attributes.showFullscreen.toString(), " fullscreen_target=").concat(props.attributes.openFullscreen.toString(), " fullscreen_text=\"").concat(encodeURIComponent(props.attributes.fullscreenText), "\" zoom=").concat(props.attributes.viewerScale.toString(), " search_term=\"").concat(encodeURIComponent(updatedSearchString), "\"  ]"));
  }
});

/***/ }),

/***/ "./blocks/src/block/editor.scss":
/*!**************************************!*\
  !*** ./blocks/src/block/editor.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./editor.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./blocks/src/block/editor.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./blocks/src/block/style.scss":
/*!*************************************!*\
  !*** ./blocks/src/block/style.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./blocks/src/blocks.js":
/*!******************************!*\
  !*** ./blocks/src/blocks.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block/block */ "./blocks/src/block/block.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./blocks/src/block/editor.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./blocks/src/block/editor.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".pdfjs-wrapper .dashicons {\n  vertical-align: middle;\n  margin-right: 10px; }\n\n.pdfjs-title {\n  font-size: 16px; }\n\n.pdfjs-wrapper.components-placeholder {\n  justify-content: start; }\n\n.pdfjs-upload-button-wrapper {\n  padding: 20px 0; }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2NrL2VkaXRvci5zY3NzPzBlNGQiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9zdHlsZS5zY3NzPzRiMTQiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9lZGl0b3Iuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyJdLCJuYW1lcyI6WyJfXyIsIndwIiwiaTE4biIsInJlZ2lzdGVyQmxvY2tUeXBlIiwiYmxvY2tzIiwiYmxvY2tFZGl0b3IiLCJNZWRpYVVwbG9hZCIsIkluc3BlY3RvckNvbnRyb2xzIiwiY29tcG9uZW50cyIsIkJ1dHRvbiIsIlBhbmVsUm93IiwiUGFuZWxCb2R5IiwiVG9nZ2xlQ29udHJvbCIsIlJhbmdlQ29udHJvbCIsIlNlbGVjdENvbnRyb2wiLCJUZXh0Q29udHJvbCIsImRlZmF1bHRIZWlnaHQiLCJkZWZhdWx0V2lkdGgiLCJBTExPV0VEX01FRElBX1RZUEVTIiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJhdHRyaWJ1dGVzIiwiaW1hZ2VVUkwiLCJ0eXBlIiwiaW1nSUQiLCJpbWdUaXRsZSIsInNob3dEb3dubG9hZCIsIndpbmRvdyIsInBkZmpzX29wdGlvbnMiLCJwZGZqc19kb3dubG9hZF9idXR0b24iLCJzaG93UHJpbnQiLCJwZGZqc19wcmludF9idXR0b24iLCJzaG93RnVsbHNjcmVlbiIsInBkZmpzX2Z1bGxzY3JlZW5fYnV0dG9uIiwib3BlbkZ1bGxzY3JlZW4iLCJwZGZqc19mdWxsc2NyZWVuX2xpbmtfYnV0dG9uIiwiZnVsbHNjcmVlblRleHQiLCJwZGZqc19mdWxsc2NyZWVuX2xpbmtfdGV4dCIsInZpZXdlckhlaWdodCIsInBkZmpzX2VtYmVkX2hlaWdodCIsIk51bWJlciIsInZpZXdlcldpZHRoIiwicGRmanNfZW1iZWRfd2lkdGgiLCJ2aWV3ZXJTY2FsZSIsInBkZmpzX3ZpZXdlcl9zY2FsZSIsInNlYXJjaFRleHQiLCJrZXl3b3JkcyIsImVkaXQiLCJwcm9wcyIsIm9uRmlsZVNlbGVjdCIsImltZyIsInNldEF0dHJpYnV0ZXMiLCJ1cmwiLCJpZCIsIm9uUmVtb3ZlSW1nIiwib25Ub2dnbGVEb3dubG9hZCIsInZhbHVlIiwib25Ub2dnbGVQcmludCIsIm9uVG9nZ2xlRnVsbHNjcmVlbiIsIm9uVG9nZ2xlT3BlbkZ1bGxzY3JlZW4iLCJvbkhlaWdodENoYW5nZSIsInVuZGVmaW5lZCIsIm9uV2lkdGhDaGFuZ2UiLCJvblNjYWxlQ2hhbmdlIiwib25GdWxsc2NyZWVuVGV4dENoYW5nZSIsIm9uU2VhcmNoVGV4dENoYW5nZSIsImxhYmVsIiwiaGVpZ2h0IiwiaXNTZWxlY3RlZCIsIm9wZW4iLCJzYXZlIiwidXBkYXRlZFNlYXJjaFN0cmluZyIsInJlcGxhY2UiLCJ0b1N0cmluZyIsImVuY29kZVVSSUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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OztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFIiwiZmlsZSI6ImJsb2Nrcy5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vYmxvY2tzL3NyYy9ibG9ja3MuanNcIik7XG4iLCJjb25zdCB7IF9fIH0gPSB3cC5pMThuO1xuXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG5jb25zdCB7IHJlZ2lzdGVyQmxvY2tUeXBlIH0gPSB3cC5ibG9ja3M7XG5jb25zdCB7IE1lZGlhVXBsb2FkLCBJbnNwZWN0b3JDb250cm9scyB9ID0gd3AuYmxvY2tFZGl0b3I7XG5cbmNvbnN0IHtcblx0QnV0dG9uLFxuXHRQYW5lbFJvdyxcblx0UGFuZWxCb2R5LFxuXHRUb2dnbGVDb250cm9sLFxuXHRSYW5nZUNvbnRyb2wsXG5cdFNlbGVjdENvbnRyb2wsXG5cdFRleHRDb250cm9sLFxufSA9IHdwLmNvbXBvbmVudHM7XG5cbmNvbnN0IGRlZmF1bHRIZWlnaHQgPSA4MDA7XG5jb25zdCBkZWZhdWx0V2lkdGggPSAwO1xuXG5jb25zdCBBTExPV0VEX01FRElBX1RZUEVTID0gWyAnYXBwbGljYXRpb24vcGRmJyBdO1xuXG5yZWdpc3RlckJsb2NrVHlwZSggJ3BkZmpzYmxvY2svcGRmanMtZW1iZWQnLCB7XG5cdHRpdGxlOiBfXyggJ0VtYmVkIFBERi5qcyBWaWV3ZXInLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKSxcblx0aWNvbjogJ21lZGlhLWRvY3VtZW50Jyxcblx0Y2F0ZWdvcnk6ICdjb21tb24nLFxuXHRhdHRyaWJ1dGVzOiB7XG5cdFx0aW1hZ2VVUkw6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdH0sXG5cdFx0aW1nSUQ6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdH0sXG5cdFx0aW1nVGl0bGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogJ1BERiBGaWxlJyxcblx0XHR9LFxuXHRcdHNob3dEb3dubG9hZDoge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogISEgd2luZG93LnBkZmpzX29wdGlvbnMucGRmanNfZG93bmxvYWRfYnV0dG9uLFxuXHRcdH0sXG5cdFx0c2hvd1ByaW50OiB7XG5cdFx0XHR0eXBlOiAnYm9vbGVhbicsXG5cdFx0XHRkZWZhdWx0OiAhISB3aW5kb3cucGRmanNfb3B0aW9ucy5wZGZqc19wcmludF9idXR0b24sXG5cdFx0fSxcblx0XHRzaG93RnVsbHNjcmVlbjoge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogISEgd2luZG93LnBkZmpzX29wdGlvbnMucGRmanNfZnVsbHNjcmVlbl9idXR0b24sXG5cdFx0fSxcblx0XHRvcGVuRnVsbHNjcmVlbjoge1xuXHRcdFx0dHlwZTogJ2Jvb2xlYW4nLFxuXHRcdFx0ZGVmYXVsdDogISEgd2luZG93LnBkZmpzX29wdGlvbnMucGRmanNfZnVsbHNjcmVlbl9saW5rX2J1dHRvbixcblx0XHR9LFxuXHRcdGZ1bGxzY3JlZW5UZXh0OiB7XG5cdFx0XHR0eXBlOiAnc3RyaW5nJyxcblx0XHRcdGRlZmF1bHQ6IHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX2Z1bGxzY3JlZW5fbGlua190ZXh0XG5cdFx0XHRcdD8gd2luZG93LnBkZmpzX29wdGlvbnMucGRmanNfZnVsbHNjcmVlbl9saW5rX3RleHRcblx0XHRcdFx0OiAnVmlldyBGdWxsc2NyZWVuJyxcblx0XHR9LFxuXHRcdHZpZXdlckhlaWdodDoge1xuXHRcdFx0dHlwZTogJ251bWJlcicsXG5cdFx0XHRkZWZhdWx0OiB3aW5kb3cucGRmanNfb3B0aW9ucy5wZGZqc19lbWJlZF9oZWlnaHRcblx0XHRcdFx0PyBOdW1iZXIoIHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX2VtYmVkX2hlaWdodCApXG5cdFx0XHRcdDogODAwLFxuXHRcdH0sXG5cdFx0dmlld2VyV2lkdGg6IHtcblx0XHRcdHR5cGU6ICdudW1iZXInLFxuXHRcdFx0ZGVmYXVsdDogd2luZG93LnBkZmpzX29wdGlvbnMucGRmanNfZW1iZWRfd2lkdGhcblx0XHRcdFx0PyBOdW1iZXIoIHdpbmRvdy5wZGZqc19vcHRpb25zLnBkZmpzX2VtYmVkX3dpZHRoIClcblx0XHRcdFx0OiAwLFxuXHRcdH0sXG5cdFx0dmlld2VyU2NhbGU6IHtcblx0XHRcdHR5cGU6ICdzdHJpbmcnLFxuXHRcdFx0ZGVmYXVsdDogd2luZG93LnBkZmpzX29wdGlvbnMucGRmanNfdmlld2VyX3NjYWxlXG5cdFx0XHRcdD8gd2luZG93LnBkZmpzX29wdGlvbnMucGRmanNfdmlld2VyX3NjYWxlXG5cdFx0XHRcdDogJ2F1dG8nLFxuXHRcdH0sXG5cdFx0c2VhcmNoVGV4dDoge1xuXHRcdFx0dHlwZTogJ3N0cmluZycsXG5cdFx0XHRkZWZhdWx0OiAnJyxcblx0XHR9LFxuXHR9LFxuXHRrZXl3b3JkczogWyBfXyggJ1BERiBTZWxlY3RvcicsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApIF0sXG5cblx0ZWRpdCggcHJvcHMgKSB7XG5cdFx0Y29uc3Qgb25GaWxlU2VsZWN0ID0gKCBpbWcgKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdGltYWdlVVJMOiBpbWcudXJsLFxuXHRcdFx0XHRpbWdJRDogaW1nLmlkLFxuXHRcdFx0XHRpbWdUaXRsZTogaW1nLnRpdGxlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRjb25zdCBvblJlbW92ZUltZyA9ICgpID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0aW1hZ2VVUkw6IG51bGwsXG5cdFx0XHRcdGltZ0lEOiBudWxsLFxuXHRcdFx0XHRpbWdUaXRsZTogbnVsbCxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25Ub2dnbGVEb3dubG9hZCA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdHNob3dEb3dubG9hZDogdmFsdWUsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uVG9nZ2xlUHJpbnQgPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRzaG93UHJpbnQ6IHZhbHVlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRjb25zdCBvblRvZ2dsZUZ1bGxzY3JlZW4gPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRzaG93RnVsbHNjcmVlbjogdmFsdWUsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uVG9nZ2xlT3BlbkZ1bGxzY3JlZW4gPSAoIHZhbHVlICkgPT4ge1xuXHRcdFx0cHJvcHMuc2V0QXR0cmlidXRlcygge1xuXHRcdFx0XHRvcGVuRnVsbHNjcmVlbjogdmFsdWUsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdGNvbnN0IG9uSGVpZ2h0Q2hhbmdlID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdC8vIGhhbmRsZSB0aGUgcmVzZXQgYnV0dG9uXG5cdFx0XHRpZiAoIHVuZGVmaW5lZCA9PT0gdmFsdWUgKSB7XG5cdFx0XHRcdHZhbHVlID0gZGVmYXVsdEhlaWdodDtcblx0XHRcdH1cblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0dmlld2VySGVpZ2h0OiB2YWx1ZSxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25XaWR0aENoYW5nZSA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHQvLyBoYW5kbGUgdGhlIHJlc2V0IGJ1dHRvblxuXHRcdFx0aWYgKCB1bmRlZmluZWQgPT09IHZhbHVlICkge1xuXHRcdFx0XHR2YWx1ZSA9IGRlZmF1bHRXaWR0aDtcblx0XHRcdH1cblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0dmlld2VyV2lkdGg6IHZhbHVlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cblx0XHRjb25zdCBvblNjYWxlQ2hhbmdlID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0dmlld2VyU2NhbGU6IHZhbHVlLFxuXHRcdFx0fSApO1xuXHRcdH07XG5cdFx0Y29uc3Qgb25GdWxsc2NyZWVuVGV4dENoYW5nZSA9ICggdmFsdWUgKSA9PiB7XG5cdFx0XHRwcm9wcy5zZXRBdHRyaWJ1dGVzKCB7XG5cdFx0XHRcdGZ1bGxzY3JlZW5UZXh0OiB2YWx1ZSxcblx0XHRcdH0gKTtcblx0XHR9O1xuXG5cdFx0Y29uc3Qgb25TZWFyY2hUZXh0Q2hhbmdlID0gKCB2YWx1ZSApID0+IHtcblx0XHRcdHByb3BzLnNldEF0dHJpYnV0ZXMoIHtcblx0XHRcdFx0c2VhcmNoVGV4dDogdmFsdWUsXG5cdFx0XHR9ICk7XG5cdFx0fTtcblxuXHRcdHJldHVybiBbXG5cdFx0XHQ8SW5zcGVjdG9yQ29udHJvbHMga2V5PVwiaTFcIj5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnUERGLmpzIE9wdGlvbnMnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKSB9PlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxUb2dnbGVDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oXG5cdFx0XHRcdFx0XHRcdFx0J1Nob3cgRG93bmxvYWQgT3B0aW9uJyxcblx0XHRcdFx0XHRcdFx0XHQncGRmanMtdmlld2VyLXNob3J0Y29kZSdcblx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdGhlbHA9e1xuXHRcdFx0XHRcdFx0XHRcdHByb3BzLmF0dHJpYnV0ZXMuc2hvd0Rvd25sb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IF9fKCAnWWVzJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnIClcblx0XHRcdFx0XHRcdFx0XHRcdDogX18oICdObycsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IHByb3BzLmF0dHJpYnV0ZXMuc2hvd0Rvd25sb2FkIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBvblRvZ2dsZURvd25sb2FkIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnU2hvdyBQcmludCBPcHRpb24nLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKSB9XG5cdFx0XHRcdFx0XHRcdGhlbHA9e1xuXHRcdFx0XHRcdFx0XHRcdHByb3BzLmF0dHJpYnV0ZXMuc2hvd1ByaW50XG5cdFx0XHRcdFx0XHRcdFx0XHQ/IF9fKCAnWWVzJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnIClcblx0XHRcdFx0XHRcdFx0XHRcdDogX18oICdObycsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Y2hlY2tlZD17IHByb3BzLmF0dHJpYnV0ZXMuc2hvd1ByaW50IH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBvblRvZ2dsZVByaW50IH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKFxuXHRcdFx0XHRcdFx0XHRcdCdTaG93IEZ1bGxzY3JlZW4gT3B0aW9uJyxcblx0XHRcdFx0XHRcdFx0XHQncGRmanMtdmlld2VyLXNob3J0Y29kZSdcblx0XHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRcdGhlbHA9e1xuXHRcdFx0XHRcdFx0XHRcdHByb3BzLmF0dHJpYnV0ZXMuc2hvd0Z1bGxzY3JlZW5cblx0XHRcdFx0XHRcdFx0XHRcdD8gX18oICdZZXMnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKVxuXHRcdFx0XHRcdFx0XHRcdFx0OiBfXyggJ05vJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnIClcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRjaGVja2VkPXsgcHJvcHMuYXR0cmlidXRlcy5zaG93RnVsbHNjcmVlbiB9XG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgb25Ub2dnbGVGdWxsc2NyZWVuIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8VG9nZ2xlQ29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD17IF9fKFxuXHRcdFx0XHRcdFx0XHRcdCdPcGVuIEZ1bGxzY3JlZW4gaW4gbmV3IHRhYj8nLFxuXHRcdFx0XHRcdFx0XHRcdCdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJ1xuXHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdFx0aGVscD17XG5cdFx0XHRcdFx0XHRcdFx0cHJvcHMuYXR0cmlidXRlcy5vcGVuRnVsbHNjcmVlblxuXHRcdFx0XHRcdFx0XHRcdFx0PyBfXyggJ1llcycsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApXG5cdFx0XHRcdFx0XHRcdFx0XHQ6IF9fKCAnTm8nLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdGNoZWNrZWQ9eyBwcm9wcy5hdHRyaWJ1dGVzLm9wZW5GdWxsc2NyZWVuIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBvblRvZ2dsZU9wZW5GdWxsc2NyZWVuIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbFJvdz5cblx0XHRcdFx0XHQ8UGFuZWxSb3c+XG5cdFx0XHRcdFx0XHQ8VGV4dENvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJGdWxsc2NyZWVuIFRleHRcIlxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IHByb3BzLmF0dHJpYnV0ZXMuZnVsbHNjcmVlblRleHQgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17IG9uRnVsbHNjcmVlblRleHRDaGFuZ2UgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L1BhbmVsUm93PlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnRW1iZWQgSGVpZ2h0JywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICkgfT5cblx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKFxuXHRcdFx0XHRcdFx0XHQnVmlld2VyIEhlaWdodCAocGl4ZWxzKScsXG5cdFx0XHRcdFx0XHRcdCdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJ1xuXHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHR2YWx1ZT17IHByb3BzLmF0dHJpYnV0ZXMudmlld2VySGVpZ2h0IH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgb25IZWlnaHRDaGFuZ2UgfVxuXHRcdFx0XHRcdFx0bWluPXsgMCB9XG5cdFx0XHRcdFx0XHRtYXg9eyA1MDAwIH1cblx0XHRcdFx0XHRcdGFsbG93UmVzZXQ9eyB0cnVlIH1cblx0XHRcdFx0XHRcdGluaXRpYWxQb3NpdGlvbj17IGRlZmF1bHRIZWlnaHQgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0XHQ8UGFuZWxCb2R5IHRpdGxlPXsgX18oICdFbWJlZCBXaWR0aCcsICdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJyApIH0+XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9eyBfXyhcblx0XHRcdFx0XHRcdFx0J1ZpZXdlciBXaWR0aCAocGl4ZWxzKScsXG5cdFx0XHRcdFx0XHRcdCdwZGZqcy12aWV3ZXItc2hvcnRjb2RlJ1xuXHRcdFx0XHRcdFx0KSB9XG5cdFx0XHRcdFx0XHRoZWxwPVwiQnkgZGVmYXVsdCAwIHdpbGwgYmUgMTAwJS5cIlxuXHRcdFx0XHRcdFx0dmFsdWU9eyBwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlcldpZHRoIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgb25XaWR0aENoYW5nZSB9XG5cdFx0XHRcdFx0XHRtaW49eyAwIH1cblx0XHRcdFx0XHRcdG1heD17IDUwMDAgfVxuXHRcdFx0XHRcdFx0YWxsb3dSZXNldD17IHRydWUgfVxuXHRcdFx0XHRcdFx0aW5pdGlhbFBvc2l0aW9uPXsgZGVmYXVsdFdpZHRoIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnU2NhbGUnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKSB9PlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD1cIlZpZXdlciBTY2FsZVwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17IHByb3BzLmF0dHJpYnV0ZXMudmlld2VyU2NhbGUgfVxuXHRcdFx0XHRcdFx0b3B0aW9ucz17IFtcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJ0F1dG9tYXRpYycsIHZhbHVlOiAnYXV0bycgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJ0FjdHVhbCBTaXplJywgdmFsdWU6ICdwYWdlLWFjdHVhbCcgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJ1BhZ2UgRml0JywgdmFsdWU6ICdwYWdlLWZpdCcgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJ1BhZ2UgV2lkdGgnLCB2YWx1ZTogJ3BhZ2Utd2lkdGgnIH0sXG5cdFx0XHRcdFx0XHRcdHsgbGFiZWw6ICc1MCUnLCB2YWx1ZTogJzUwJyB9LFxuXHRcdFx0XHRcdFx0XHR7IGxhYmVsOiAnNzUlJywgdmFsdWU6ICc3NScgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJzEwMCUnLCB2YWx1ZTogJzEwMCcgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJzEyNSUnLCB2YWx1ZTogJzEyNScgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJzE1MCUnLCB2YWx1ZTogJzE1MCcgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJzIwMCUnLCB2YWx1ZTogJzIwMCcgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJzMwMCUnLCB2YWx1ZTogJzMwMCcgfSxcblx0XHRcdFx0XHRcdFx0eyBsYWJlbDogJzQwMCUnLCB2YWx1ZTogJzQwMCcgfSxcblx0XHRcdFx0XHRcdF0gfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBvblNjYWxlQ2hhbmdlIH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1BhbmVsQm9keT5cblx0XHRcdFx0PFBhbmVsQm9keSB0aXRsZT17IF9fKCAnRXh0cmEnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKSB9PlxuXHRcdFx0XHRcdDxQYW5lbFJvdz5cblx0XHRcdFx0XHRcdDxUZXh0Q29udHJvbFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIlNlYXJjaCBUZXJtIEhpZ2hsaWdodFwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgcHJvcHMuYXR0cmlidXRlcy5zZWFyY2hUZXh0IH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyBvblNlYXJjaFRleHRDaGFuZ2UgfVxuXHRcdFx0XHRcdFx0XHRoZWxwPVwiT25seSBzaW5nbGUgd29yZHMgYXJlIHdvcmtpbmcgYXQgdGhpcyB0aW1lLlwiXG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDwvUGFuZWxSb3c+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz4sXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBkZmpzLXdyYXBwZXIgY29tcG9uZW50cy1wbGFjZWhvbGRlclwiIGtleT1cImkyXCIgc3R5bGU9e3toZWlnaHQ6IHByb3BzLmF0dHJpYnV0ZXMudmlld2VySGVpZ2h0fX0+XG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PHN0cm9uZz57IF9fKCAnUERGLmpzIEVtYmVkJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICkgfTwvc3Ryb25nPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0eyBwcm9wcy5hdHRyaWJ1dGVzLmltYWdlVVJMID8gKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGRmanMtdXBsb2FkLXdyYXBwZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGRmanMtdXBsb2FkLWJ1dHRvbi13cmFwcGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImRhc2hpY29ucyBkYXNoaWNvbnMtbWVkaWEtZG9jdW1lbnRcIj48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInBkZmpzLXRpdGxlXCI+XG5cdFx0XHRcdFx0XHRcdFx0eyBwcm9wcy5hdHRyaWJ1dGVzLmltZ1RpdGxlXG5cdFx0XHRcdFx0XHRcdFx0XHQ/IHByb3BzLmF0dHJpYnV0ZXMuaW1nVGl0bGVcblx0XHRcdFx0XHRcdFx0XHRcdDogcHJvcHMuYXR0cmlidXRlcy5pbWFnZVVSTCB9XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0eyBwcm9wcy5pc1NlbGVjdGVkID8gKFxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyBvblJlbW92ZUltZyB9PlxuXHRcdFx0XHRcdFx0XHRcdHsgX18oICdSZW1vdmUgUERGJywgJ3BkZmpzLXZpZXdlci1zaG9ydGNvZGUnICkgfVxuXHRcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cblx0XHRcdFx0XHRcdCkgOiBudWxsIH1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgb25GaWxlU2VsZWN0IH1cblx0XHRcdFx0XHRcdFx0YWxsb3dlZFR5cGVzPXsgQUxMT1dFRF9NRURJQV9UWVBFUyB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgcHJvcHMuYXR0cmlidXRlcy5pbWdJRCB9XG5cdFx0XHRcdFx0XHRcdHJlbmRlcj17ICggeyBvcGVuIH0gKSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0PEJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrPXsgb3BlbiB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyBfXyggJ0Nob29zZSBQREYnLCAncGRmanMtdmlld2VyLXNob3J0Y29kZScgKSB9XG5cdFx0XHRcdFx0XHRcdFx0PC9CdXR0b24+XG5cdFx0XHRcdFx0XHRcdCkgfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KSB9XG5cdFx0XHQ8L2Rpdj4sXG5cdFx0XTtcblx0fSxcblxuXHRzYXZlKHByb3BzKSB7XG5cdFx0Y29uc3QgdXBkYXRlZFNlYXJjaFN0cmluZyA9IHByb3BzLmF0dHJpYnV0ZXMuc2VhcmNoVGV4dC5yZXBsYWNlKFxuXHRcdFx0Jz0nLFxuXHRcdFx0Jydcblx0XHQpO1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBkZmpzLXdyYXBwZXJcIj5cblx0XHRcdFx0e2BbcGRmanMtdmlld2VyIGF0dGFjaG1lbnRfaWQ9JHsgcHJvcHMuYXR0cmlidXRlcy5pbWdJRCB9IHZpZXdlcl93aWR0aD0keyAoIHByb3BzLmF0dHJpYnV0ZXMudmlld2VyV2lkdGggIT09IHVuZGVmaW5lZCApID8gcHJvcHMuYXR0cmlidXRlcy52aWV3ZXJXaWR0aCA6IGRlZmF1bHRXaWR0aCB9IHZpZXdlcl9oZWlnaHQ9JHsgKCBwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlckhlaWdodCAhPT0gdW5kZWZpbmVkICkgPyBwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlckhlaWdodCA6IGRlZmF1bHRIZWlnaHQgfSB1cmw9JHsgcHJvcHMuYXR0cmlidXRlcy5pbWFnZVVSTCB9IGRvd25sb2FkPSR7IHByb3BzLmF0dHJpYnV0ZXMuc2hvd0Rvd25sb2FkLnRvU3RyaW5nKCkgfSBwcmludD0keyBwcm9wcy5hdHRyaWJ1dGVzLnNob3dQcmludC50b1N0cmluZygpIH0gZnVsbHNjcmVlbj0keyBwcm9wcy5hdHRyaWJ1dGVzLnNob3dGdWxsc2NyZWVuLnRvU3RyaW5nKCkgfSBmdWxsc2NyZWVuX3RhcmdldD0keyBwcm9wcy5hdHRyaWJ1dGVzLm9wZW5GdWxsc2NyZWVuLnRvU3RyaW5nKCkgfSBmdWxsc2NyZWVuX3RleHQ9XCIkeyBlbmNvZGVVUklDb21wb25lbnQoIHByb3BzLmF0dHJpYnV0ZXMuZnVsbHNjcmVlblRleHQgKSB9XCIgem9vbT0keyBwcm9wcy5hdHRyaWJ1dGVzLnZpZXdlclNjYWxlLnRvU3RyaW5nKCl9IHNlYXJjaF90ZXJtPVwiJHsgZW5jb2RlVVJJQ29tcG9uZW50KCB1cGRhdGVkU2VhcmNoU3RyaW5nICkgfVwiICBdYH1cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH0sXG59ICk7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2VkaXRvci5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vYmxvY2svYmxvY2snO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wZGZqcy13cmFwcGVyIC5kYXNoaWNvbnMge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIG1hcmdpbi1yaWdodDogMTBweDsgfVxcblxcbi5wZGZqcy10aXRsZSB7XFxuICBmb250LXNpemU6IDE2cHg7IH1cXG5cXG4ucGRmanMtd3JhcHBlci5jb21wb25lbnRzLXBsYWNlaG9sZGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7IH1cXG5cXG4ucGRmanMtdXBsb2FkLWJ1dHRvbi13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDIwcHggMDsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiXSwic291cmNlUm9vdCI6IiJ9