(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("regularjs"));
	else if(typeof define === 'function' && define.amd)
		define(["Regular"], factory);
	else if(typeof exports === 'object')
		exports["RGUI"] = factory(require("regularjs"));
	else
		root["RGUI"] = factory(root["Regular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _rguiBase = __webpack_require__(1);\n\nObject.keys(_rguiBase).forEach(function (key) {\n  if (key === \"default\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _rguiBase[key];\n    }\n  });\n});\n\nvar _index = __webpack_require__(7);\n\nObject.keys(_index).forEach(function (key) {\n  if (key === \"default\") return;\n  Object.defineProperty(exports, key, {\n    enumerable: true,\n    get: function get() {\n      return _index[key];\n    }\n  });\n});\n\n/*****************\n ** WEBPACK FOOTER\n ** ./.rgui-cache/js/index.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./.rgui-cache/js/index.js?");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports._ = exports.Component = undefined;\n\nvar _component = __webpack_require__(2);\n\nvar _component2 = _interopRequireDefault(_component);\n\nvar _util = __webpack_require__(6);\n\nvar _util2 = _interopRequireDefault(_util);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.Component = _component2.default;\nexports._ = _util2.default;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-base/index.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-base/index.js?");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _regularjs = __webpack_require__(3);\n\nvar _regularjs2 = _interopRequireDefault(_regularjs);\n\nvar _filter = __webpack_require__(4);\n\nvar _filter2 = _interopRequireDefault(_filter);\n\nvar _directive = __webpack_require__(5);\n\nvar _directive2 = _interopRequireDefault(_directive);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * @class Component\n * @extend Regular\n * @param {boolean=false}           options.data.readonly            => 是否只读\n * @param {boolean=false}           options.data.disabled            => 是否禁用\n * @param {boolean=true}            options.data.visible             => 是否显示\n * @param {string=''}               options.data.class               => 补充class\n */\nvar Component = _regularjs2.default.extend({\n    /**\n     * @protected\n     */\n\n    config: function config() {\n        this.data = Object.assign({\n            readonly: false,\n            disabled: false,\n            visible: true,\n            'class': '',\n            console: typeof console === 'undefined' ? undefined : console\n        }, this.data);\n        this.supr();\n    }\n}).filter(_filter2.default).directive(_directive2.default);\n\nexports.default = Component;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-base/component/index.js\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-base/component/index.js?");

/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("module.exports = __WEBPACK_EXTERNAL_MODULE_3__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external {\"root\":\"Regular\",\"amd\":\"Regular\",\"commonjs\":\"regularjs\",\"commonjs2\":\"regularjs\"}\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%7B%22root%22:%22Regular%22,%22amd%22:%22Regular%22,%22commonjs%22:%22regularjs%22,%22commonjs2%22:%22regularjs%22%7D?");

/***/ },
/* 4 */
/***/ function(module, exports) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar filter = {};\n\nfilter.dateFormat = function () {\n    function fix() {\n        var str = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];\n\n        str = str + '';\n        return str.length <= 1 ? '0' + str : str;\n    }\n\n    var MAPS = {\n        yyyy: function yyyy(date) {\n            return date.getFullYear();\n        },\n        MM: function MM(date) {\n            return fix(date.getMonth() + 1);\n        },\n        dd: function dd(date) {\n            return fix(date.getDate());\n        },\n        HH: function HH(date) {\n            return fix(date.getHours());\n        },\n        mm: function mm(date) {\n            return fix(date.getMinutes());\n        },\n        ss: function ss(date) {\n            return fix(date.getSeconds());\n        }\n    };\n    var trunk = new RegExp(Object.keys(MAPS).join('|'), 'g');\n\n    return function (value) {\n        var format = arguments.length <= 1 || arguments[1] === undefined ? 'yyyy-MM-dd HH:mm' : arguments[1];\n\n        if (!value) return '';\n        value = new Date(value);\n\n        return format.replace(trunk, function (capture) {\n            return MAPS[capture] ? MAPS[capture](value) : '';\n        });\n    };\n}();\n\nfilter.format = function (value, type) {\n    for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n        args[_key - 2] = arguments[_key];\n    }\n\n    return filter[type + 'Format'].apply(filter, [value].concat(args));\n};\n\nexports.default = filter;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-base/filter/index.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-base/filter/index.js?");

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol ? \"symbol\" : typeof obj; };\n\nvar _util = __webpack_require__(6);\n\nvar _util2 = _interopRequireDefault(_util);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar directive = {};\n\nvar rClassGenerator = function rClassGenerator(rClass) {\n    directive[rClass] = function (elem, value) {\n        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.type === 'expression') this.$watch(value, function (newValue, oldValue) {\n            _util2.default.dom[newValue ? 'addClass' : 'delClass'](elem, rClass);\n        });else if (!!value || value === '') _util2.default.dom.addClass(elem, rClass);\n    };\n};\n\nrClassGenerator('z-crt');\nrClassGenerator('z-sel');\nrClassGenerator('z-chk');\nrClassGenerator('z-dis');\nrClassGenerator('z-divider');\n\ndirective['r-show'] = function (elem, value) {\n    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.type == 'expression') this.$watch(value, function (newValue, oldValue) {\n        if (!newValue == !oldValue) return;\n\n        if (typeof newValue === 'string') elem.style.display = newValue;else elem.style.display = newValue ? 'block' : '';\n    });else if (!!value || value === '') {\n        if (typeof value === 'string' && value !== '') elem.style.display = value;else elem.style.display = value ? 'block' : '';\n    }\n};\n\ndirective['r-autofocus'] = function (elem, value) {\n    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.type == 'expression') this.$watch(value, function (newValue, oldValue) {\n        newValue && setTimeout(function () {\n            return elem.focus();\n        }, 0);\n    });else if (!!value || value === '') setTimeout(function () {\n        return elem.focus();\n    }, 0);\n};\n\ndirective['r-attr'] = function (elem, value) {\n    var ATTRS = {\n        'INPUT': ['autocomplete', 'autofocus', 'checked', 'disabled', 'max', 'maxlength', 'min', 'multiple', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'step', 'type'],\n        'TEXTAREA': ['autofocus', 'disabled', 'maxlength', 'name', 'placeholder', 'readonly', 'required', 'wrap'],\n        'SELECT': ['autofocus', 'disabled', 'multiple', 'name', 'required']\n    };\n\n    this.$watch(value, function (newValue, oldValue) {\n        ATTRS[elem.tagName].forEach(function (attr) {\n            return newValue[attr] && _util2.default.dom.attr(elem, attr, newValue[attr]);\n        });\n    }, true);\n};\n\nexports.default = directive;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-base/directive/index.js\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-base/directive/index.js?");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _regularjs = __webpack_require__(3);\n\nvar _regularjs2 = _interopRequireDefault(_regularjs);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar util = {};\n\nutil.noop = _regularjs2.default.util.noop;\nutil.dom = _regularjs2.default.dom;\n\nexports.default = util;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./~/rgui-base/util/index.js\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./~/rgui-base/util/index.js?");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.Modal = undefined;\n\nvar _modal = __webpack_require__(8);\n\nvar _modal2 = _interopRequireDefault(_modal);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.Modal = _modal2.default;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./index.js\n ** module id = 7\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./index.js?");

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _rguiBase = __webpack_require__(1);\n\nvar _index = __webpack_require__(9);\n\nvar _index2 = _interopRequireDefault(_index);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * @class Modal\n * @extend Component\n * @param {object}                  options.data                     =  绑定属性\n * @param {string='提示'}           options.data.title               => 对话框标题\n * @param {string=''}               options.data.content             => 对话框内容\n * @param {string=''}               options.data.contentTemplate    @=> 对话框内容模板，用于支持复杂内容的自定义。\n * @param {string='确定'}           options.data.okButton            => 确定按钮的文字，如果为空则不显示。\n * @param {string='取消'}           options.data.cancelButton        => 取消按钮的文字，如果为空则不显示。\n * @param {string=''}               options.data.class               => 补充class\n */\nvar Modal = _rguiBase.Component.extend({\n    name: 'modal',\n    template: _index2.default,\n    /**\n     * @protected\n     * @override\n     */\n    config: function config() {\n        this.data = Object.assign({\n            title: '提示',\n            content: '',\n            contentTemplate: '',\n            okButton: '确定',\n            cancelButton: '取消'\n        }, this.data);\n        this.supr();\n    },\n\n    /**\n     * @protected\n     * @override\n     */\n    init: function init() {\n        this.supr();\n\n        // 如果不是内嵌组件，则嵌入到document.body中\n        if (this.$root === this) this.$inject(document.body);\n    },\n\n    /**\n     * @method close() 关闭对话框\n     * @public\n     * @return {void}\n     */\n    close: function close() {\n        /**\n         * @event close 关闭对话框时触发\n         * @property {object} sender 事件发送对象\n         */\n        this.$emit('close', {\n            sender: this\n        });\n\n        this.destroy();\n    },\n\n    /**\n     * @method ok() 确定对话框\n     * @public\n     * @return {void}\n     */\n    ok: function ok() {\n        /**\n         * @event ok 确定对话框时触发\n         * @property {object} sender 事件发送对象\n         */\n        this.$emit('ok', {\n            sender: this\n        });\n\n        this.close();\n    },\n\n    /**\n     * @method cancel() 取消对话框\n     * @public\n     * @return {void}\n     */\n    cancel: function cancel() {\n        /**\n         * @event cancel 取消对话框时触发\n         * @property {object} sender 事件发送对象\n         */\n        this.$emit('cancel', {\n            sender: this\n        });\n\n        this.close();\n    }\n});\n\n/**\n * @method alert(content[,title]) 弹出一个alert对话框。关闭时始终触发确定事件。\n * @static\n * @public\n * @param  {string=''} content 对话框内容\n * @param  {string='提示'} title 对话框标题\n * @return {Modal} modal 返回该对话框\n */\nModal.alert = function (content) {\n    var title = arguments.length <= 1 || arguments[1] === undefined ? '提示' : arguments[1];\n    var okButton = arguments.length <= 2 || arguments[2] === undefined ? '确定' : arguments[2];\n\n    var modal = new this({\n        data: { content: content, title: title, okButton: okButton, cancelButton: '' }\n    });\n\n    return modal;\n};\n\n/**\n * @method confirm(content[,title]) 弹出一个confirm对话框\n * @static\n * @public\n * @param  {string=''} content 对话框内容\n * @param  {string='提示'} title 对话框标题\n * @return {Modal} modal 返回该对话框\n */\nModal.confirm = function (content) {\n    var title = arguments.length <= 1 || arguments[1] === undefined ? '提示' : arguments[1];\n    var okButton = arguments.length <= 2 || arguments[2] === undefined ? '确定' : arguments[2];\n    var cancelButton = arguments.length <= 3 || arguments[3] === undefined ? '取消' : arguments[3];\n\n    var modal = new this({\n        data: { content: content, title: title, okButton: okButton, cancelButton: cancelButton }\n    });\n\n    return modal;\n};\n\nexports.default = Modal;\n\n/*****************\n ** WEBPACK FOOTER\n ** ./modal/index.js\n ** module id = 8\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./modal/index.js?");

/***/ },
/* 9 */
/***/ function(module, exports) {

	eval("module.exports =[{\"type\":\"element\",\"tag\":\"div\",\"attrs\":[{\"type\":\"attribute\",\"name\":\"class\",\"value\":{\"type\":\"expression\",\"body\":\"['m-modal ',c._sg_('class', d, e)].join('')\",\"constant\":false,\"setbody\":false}},{\"type\":\"attribute\",\"name\":\"r-hide\",\"value\":{\"type\":\"expression\",\"body\":\"(!c._sg_('visible', d, e))\",\"constant\":false,\"setbody\":false}}],\"children\":[{\"type\":\"text\",\"text\":\"\\n    \"},{\"type\":\"element\",\"tag\":\"div\",\"attrs\":[{\"type\":\"attribute\",\"name\":\"class\",\"value\":\"modal_dialog\"}],\"children\":[{\"type\":\"text\",\"text\":\"\\n        \"},{\"type\":\"element\",\"tag\":\"div\",\"attrs\":[{\"type\":\"attribute\",\"name\":\"class\",\"value\":\"modal_hd\"}],\"children\":[{\"type\":\"text\",\"text\":\"\\n            \"},{\"type\":\"element\",\"tag\":\"a\",\"attrs\":[{\"type\":\"attribute\",\"name\":\"class\",\"value\":\"modal_close\"},{\"type\":\"attribute\",\"name\":\"on-click\",\"value\":{\"type\":\"expression\",\"body\":\"c._sg_('cancelButton', d, e)?c['cancel']():c['ok']()\",\"constant\":false,\"setbody\":false}}],\"children\":[{\"type\":\"element\",\"tag\":\"i\",\"attrs\":[{\"type\":\"attribute\",\"name\":\"class\",\"value\":\"u-icon u-icon-close\"}],\"children\":[]}]},{\"type\":\"text\",\"text\":\"\\n            \"},{\"type\":\"element\",\"tag\":\"h3\",\"attrs\":[{\"type\":\"attribute\",\"name\":\"class\",\"value\":\"modal_title\"}],\"children\":[{\"type\":\"expression\",\"body\":\"c._sg_('title', d, e)\",\"constant\":false,\"setbody\":\"c._ss_('title',p_,d, '=', 1)\"}]},{\"type\":\"text\",\"text\":\"\\n        \"}]},{\"type\":\"text\",\"text\":\"\\n        \"},{\"type\":\"element\",\"tag\":\"div\",\"attrs\":[{\"type\":\"attribute\",\"name\":\"class\",\"value\":\"modal_bd\"}],\"children\":[{\"type\":\"text\",\"text\":\"\\n            \"},{\"type\":\"if\",\"test\":{\"type\":\"expression\",\"body\":\"c._sg_('contentTemplate', d, e)\",\"constant\":false,\"setbody\":\"c._ss_('contentTemplate',p_,d, '=', 1)\"},\"consequent\":[{\"type\":\"template\",\"content\":{\"type\":\"expression\",\"body\":\"c._sg_('contentTemplate', d, e)\",\"constant\":false,\"setbody\":\"c._ss_('contentTemplate',p_,d, '=', 1)\",\"once\":true}}],\"alternate\":[{\"type\":\"expression\",\"body\":\"c._sg_('content', d, e)\",\"constant\":false,\"setbody\":\"c._ss_('content',p_,d, '=', 1)\"}]},{\"type\":\"text\",\"text\":\"\\n        \"}]},{\"type\":\"text\",\"text\":\"\\n        \"},{\"type\":\"element\",\"tag\":\"div\",\"attrs\":[{\"type\":\"attribute\",\"name\":\"class\",\"value\":\"modal_ft\"}],\"children\":[{\"type\":\"text\",\"text\":\"\\n            \"},{\"type\":\"if\",\"test\":{\"type\":\"expression\",\"body\":\"c._sg_('okButton', d, e)\",\"constant\":false,\"setbody\":\"c._ss_('okButton',p_,d, '=', 1)\"},\"consequent\":[{\"type\":\"element\",\"tag\":\"button\",\"attrs\":[{\"type\":\"attribute\",\"name\":\"class\",\"value\":\"u-btn u-btn-primary\"},{\"type\":\"attribute\",\"name\":\"r-autofocus\"},{\"type\":\"attribute\",\"name\":\"on-click\",\"value\":{\"type\":\"expression\",\"body\":\"c['ok']()\",\"constant\":false,\"setbody\":false}}],\"children\":[{\"type\":\"expression\",\"body\":\"c._sg_('okButton', d, e)\",\"constant\":false,\"setbody\":\"c._ss_('okButton',p_,d, '=', 1)\"}]}],\"alternate\":[]},{\"type\":\"text\",\"text\":\"\\n            \"},{\"type\":\"if\",\"test\":{\"type\":\"expression\",\"body\":\"c._sg_('cancelButton', d, e)\",\"constant\":false,\"setbody\":\"c._ss_('cancelButton',p_,d, '=', 1)\"},\"consequent\":[{\"type\":\"element\",\"tag\":\"button\",\"attrs\":[{\"type\":\"attribute\",\"name\":\"class\",\"value\":\"u-btn\"},{\"type\":\"attribute\",\"name\":\"on-click\",\"value\":{\"type\":\"expression\",\"body\":\"c['cancel']()\",\"constant\":false,\"setbody\":false}}],\"children\":[{\"type\":\"expression\",\"body\":\"c._sg_('cancelButton', d, e)\",\"constant\":false,\"setbody\":\"c._ss_('cancelButton',p_,d, '=', 1)\"}]}],\"alternate\":[]},{\"type\":\"text\",\"text\":\"\\n        \"}]},{\"type\":\"text\",\"text\":\"\\n    \"}]},{\"type\":\"text\",\"text\":\"\\n\"}]}]\n\n/*****************\n ** WEBPACK FOOTER\n ** ./modal/index.rgl\n ** module id = 9\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./modal/index.rgl?");

/***/ }
/******/ ])
});
;