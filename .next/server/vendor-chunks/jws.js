/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/jws";
exports.ids = ["vendor-chunks/jws"];
exports.modules = {

/***/ "(action-browser)/./node_modules/jws/index.js":
/*!***********************************!*\
  !*** ./node_modules/jws/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("/*global exports*/ var SignStream = __webpack_require__(/*! ./lib/sign-stream */ \"(action-browser)/./node_modules/jws/lib/sign-stream.js\");\nvar VerifyStream = __webpack_require__(/*! ./lib/verify-stream */ \"(action-browser)/./node_modules/jws/lib/verify-stream.js\");\nvar ALGORITHMS = [\n    \"HS256\",\n    \"HS384\",\n    \"HS512\",\n    \"RS256\",\n    \"RS384\",\n    \"RS512\",\n    \"PS256\",\n    \"PS384\",\n    \"PS512\",\n    \"ES256\",\n    \"ES384\",\n    \"ES512\"\n];\nexports.ALGORITHMS = ALGORITHMS;\nexports.sign = SignStream.sign;\nexports.verify = VerifyStream.verify;\nexports.decode = VerifyStream.decode;\nexports.isValid = VerifyStream.isValid;\nexports.createSign = function createSign(opts) {\n    return new SignStream(opts);\n};\nexports.createVerify = function createVerify(opts) {\n    return new VerifyStream(opts);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9qd3MvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCLEdBQ2hCLElBQUlBLGFBQWFDLG1CQUFPQSxDQUFDO0FBQ3pCLElBQUlDLGVBQWVELG1CQUFPQSxDQUFDO0FBRTNCLElBQUlFLGFBQWE7SUFDZjtJQUFTO0lBQVM7SUFDbEI7SUFBUztJQUFTO0lBQ2xCO0lBQVM7SUFBUztJQUNsQjtJQUFTO0lBQVM7Q0FDbkI7QUFFREMsa0JBQWtCLEdBQUdEO0FBQ3JCQyxZQUFZLEdBQUdKLFdBQVdLLElBQUk7QUFDOUJELGNBQWMsR0FBR0YsYUFBYUksTUFBTTtBQUNwQ0YsY0FBYyxHQUFHRixhQUFhSyxNQUFNO0FBQ3BDSCxlQUFlLEdBQUdGLGFBQWFNLE9BQU87QUFDdENKLGtCQUFrQixHQUFHLFNBQVNLLFdBQVdDLElBQUk7SUFDM0MsT0FBTyxJQUFJVixXQUFXVTtBQUN4QjtBQUNBTixvQkFBb0IsR0FBRyxTQUFTTyxhQUFhRCxJQUFJO0lBQy9DLE9BQU8sSUFBSVIsYUFBYVE7QUFDMUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0XzE0X3Rlc3QvLi9ub2RlX21vZHVsZXMvandzL2luZGV4LmpzP2UyMTEiXSwic291cmNlc0NvbnRlbnQiOlsiLypnbG9iYWwgZXhwb3J0cyovXG52YXIgU2lnblN0cmVhbSA9IHJlcXVpcmUoJy4vbGliL3NpZ24tc3RyZWFtJyk7XG52YXIgVmVyaWZ5U3RyZWFtID0gcmVxdWlyZSgnLi9saWIvdmVyaWZ5LXN0cmVhbScpO1xuXG52YXIgQUxHT1JJVEhNUyA9IFtcbiAgJ0hTMjU2JywgJ0hTMzg0JywgJ0hTNTEyJyxcbiAgJ1JTMjU2JywgJ1JTMzg0JywgJ1JTNTEyJyxcbiAgJ1BTMjU2JywgJ1BTMzg0JywgJ1BTNTEyJyxcbiAgJ0VTMjU2JywgJ0VTMzg0JywgJ0VTNTEyJ1xuXTtcblxuZXhwb3J0cy5BTEdPUklUSE1TID0gQUxHT1JJVEhNUztcbmV4cG9ydHMuc2lnbiA9IFNpZ25TdHJlYW0uc2lnbjtcbmV4cG9ydHMudmVyaWZ5ID0gVmVyaWZ5U3RyZWFtLnZlcmlmeTtcbmV4cG9ydHMuZGVjb2RlID0gVmVyaWZ5U3RyZWFtLmRlY29kZTtcbmV4cG9ydHMuaXNWYWxpZCA9IFZlcmlmeVN0cmVhbS5pc1ZhbGlkO1xuZXhwb3J0cy5jcmVhdGVTaWduID0gZnVuY3Rpb24gY3JlYXRlU2lnbihvcHRzKSB7XG4gIHJldHVybiBuZXcgU2lnblN0cmVhbShvcHRzKTtcbn07XG5leHBvcnRzLmNyZWF0ZVZlcmlmeSA9IGZ1bmN0aW9uIGNyZWF0ZVZlcmlmeShvcHRzKSB7XG4gIHJldHVybiBuZXcgVmVyaWZ5U3RyZWFtKG9wdHMpO1xufTtcbiJdLCJuYW1lcyI6WyJTaWduU3RyZWFtIiwicmVxdWlyZSIsIlZlcmlmeVN0cmVhbSIsIkFMR09SSVRITVMiLCJleHBvcnRzIiwic2lnbiIsInZlcmlmeSIsImRlY29kZSIsImlzVmFsaWQiLCJjcmVhdGVTaWduIiwib3B0cyIsImNyZWF0ZVZlcmlmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/jws/index.js\n");

/***/ }),

/***/ "(action-browser)/./node_modules/jws/lib/data-stream.js":
/*!*********************************************!*\
  !*** ./node_modules/jws/lib/data-stream.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/*global module, process*/ \nvar Buffer = (__webpack_require__(/*! safe-buffer */ \"(action-browser)/./node_modules/safe-buffer/index.js\").Buffer);\nvar Stream = __webpack_require__(/*! stream */ \"stream\");\nvar util = __webpack_require__(/*! util */ \"util\");\nfunction DataStream(data) {\n    this.buffer = null;\n    this.writable = true;\n    this.readable = true;\n    // No input\n    if (!data) {\n        this.buffer = Buffer.alloc(0);\n        return this;\n    }\n    // Stream\n    if (typeof data.pipe === \"function\") {\n        this.buffer = Buffer.alloc(0);\n        data.pipe(this);\n        return this;\n    }\n    // Buffer or String\n    // or Object (assumedly a passworded key)\n    if (data.length || typeof data === \"object\") {\n        this.buffer = data;\n        this.writable = false;\n        process.nextTick((function() {\n            this.emit(\"end\", data);\n            this.readable = false;\n            this.emit(\"close\");\n        }).bind(this));\n        return this;\n    }\n    throw new TypeError(\"Unexpected data type (\" + typeof data + \")\");\n}\nutil.inherits(DataStream, Stream);\nDataStream.prototype.write = function write(data) {\n    this.buffer = Buffer.concat([\n        this.buffer,\n        Buffer.from(data)\n    ]);\n    this.emit(\"data\", data);\n};\nDataStream.prototype.end = function end(data) {\n    if (data) this.write(data);\n    this.emit(\"end\", data);\n    this.emit(\"close\");\n    this.writable = false;\n    this.readable = false;\n};\nmodule.exports = DataStream;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9qd3MvbGliL2RhdGEtc3RyZWFtLmpzIiwibWFwcGluZ3MiOiJBQUFBLHdCQUF3QjtBQUN4QixJQUFJQSxTQUFTQyx1R0FBNkI7QUFDMUMsSUFBSUMsU0FBU0QsbUJBQU9BLENBQUM7QUFDckIsSUFBSUUsT0FBT0YsbUJBQU9BLENBQUM7QUFFbkIsU0FBU0csV0FBV0MsSUFBSTtJQUN0QixJQUFJLENBQUNDLE1BQU0sR0FBRztJQUNkLElBQUksQ0FBQ0MsUUFBUSxHQUFHO0lBQ2hCLElBQUksQ0FBQ0MsUUFBUSxHQUFHO0lBRWhCLFdBQVc7SUFDWCxJQUFJLENBQUNILE1BQU07UUFDVCxJQUFJLENBQUNDLE1BQU0sR0FBR04sT0FBT1MsS0FBSyxDQUFDO1FBQzNCLE9BQU8sSUFBSTtJQUNiO0lBRUEsU0FBUztJQUNULElBQUksT0FBT0osS0FBS0ssSUFBSSxLQUFLLFlBQVk7UUFDbkMsSUFBSSxDQUFDSixNQUFNLEdBQUdOLE9BQU9TLEtBQUssQ0FBQztRQUMzQkosS0FBS0ssSUFBSSxDQUFDLElBQUk7UUFDZCxPQUFPLElBQUk7SUFDYjtJQUVBLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsSUFBSUwsS0FBS00sTUFBTSxJQUFJLE9BQU9OLFNBQVMsVUFBVTtRQUMzQyxJQUFJLENBQUNDLE1BQU0sR0FBR0Q7UUFDZCxJQUFJLENBQUNFLFFBQVEsR0FBRztRQUNoQkssUUFBUUMsUUFBUSxDQUFDO1lBQ2YsSUFBSSxDQUFDQyxJQUFJLENBQUMsT0FBT1Q7WUFDakIsSUFBSSxDQUFDRyxRQUFRLEdBQUc7WUFDaEIsSUFBSSxDQUFDTSxJQUFJLENBQUM7UUFDWixHQUFFQyxJQUFJLENBQUMsSUFBSTtRQUNYLE9BQU8sSUFBSTtJQUNiO0lBRUEsTUFBTSxJQUFJQyxVQUFVLDJCQUEwQixPQUFPWCxPQUFPO0FBQzlEO0FBQ0FGLEtBQUtjLFFBQVEsQ0FBQ2IsWUFBWUY7QUFFMUJFLFdBQVdjLFNBQVMsQ0FBQ0MsS0FBSyxHQUFHLFNBQVNBLE1BQU1kLElBQUk7SUFDOUMsSUFBSSxDQUFDQyxNQUFNLEdBQUdOLE9BQU9vQixNQUFNLENBQUM7UUFBQyxJQUFJLENBQUNkLE1BQU07UUFBRU4sT0FBT3FCLElBQUksQ0FBQ2hCO0tBQU07SUFDNUQsSUFBSSxDQUFDUyxJQUFJLENBQUMsUUFBUVQ7QUFDcEI7QUFFQUQsV0FBV2MsU0FBUyxDQUFDSSxHQUFHLEdBQUcsU0FBU0EsSUFBSWpCLElBQUk7SUFDMUMsSUFBSUEsTUFDRixJQUFJLENBQUNjLEtBQUssQ0FBQ2Q7SUFDYixJQUFJLENBQUNTLElBQUksQ0FBQyxPQUFPVDtJQUNqQixJQUFJLENBQUNTLElBQUksQ0FBQztJQUNWLElBQUksQ0FBQ1AsUUFBUSxHQUFHO0lBQ2hCLElBQUksQ0FBQ0MsUUFBUSxHQUFHO0FBQ2xCO0FBRUFlLE9BQU9DLE9BQU8sR0FBR3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dF8xNF90ZXN0Ly4vbm9kZV9tb2R1bGVzL2p3cy9saWIvZGF0YS1zdHJlYW0uanM/NmI3OSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKmdsb2JhbCBtb2R1bGUsIHByb2Nlc3MqL1xudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ3NhZmUtYnVmZmVyJykuQnVmZmVyO1xudmFyIFN0cmVhbSA9IHJlcXVpcmUoJ3N0cmVhbScpO1xudmFyIHV0aWwgPSByZXF1aXJlKCd1dGlsJyk7XG5cbmZ1bmN0aW9uIERhdGFTdHJlYW0oZGF0YSkge1xuICB0aGlzLmJ1ZmZlciA9IG51bGw7XG4gIHRoaXMud3JpdGFibGUgPSB0cnVlO1xuICB0aGlzLnJlYWRhYmxlID0gdHJ1ZTtcblxuICAvLyBObyBpbnB1dFxuICBpZiAoIWRhdGEpIHtcbiAgICB0aGlzLmJ1ZmZlciA9IEJ1ZmZlci5hbGxvYygwKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIFN0cmVhbVxuICBpZiAodHlwZW9mIGRhdGEucGlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHRoaXMuYnVmZmVyID0gQnVmZmVyLmFsbG9jKDApO1xuICAgIGRhdGEucGlwZSh0aGlzKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIEJ1ZmZlciBvciBTdHJpbmdcbiAgLy8gb3IgT2JqZWN0IChhc3N1bWVkbHkgYSBwYXNzd29yZGVkIGtleSlcbiAgaWYgKGRhdGEubGVuZ3RoIHx8IHR5cGVvZiBkYXRhID09PSAnb2JqZWN0Jykge1xuICAgIHRoaXMuYnVmZmVyID0gZGF0YTtcbiAgICB0aGlzLndyaXRhYmxlID0gZmFsc2U7XG4gICAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmVtaXQoJ2VuZCcsIGRhdGEpO1xuICAgICAgdGhpcy5yZWFkYWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy5lbWl0KCdjbG9zZScpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICB0aHJvdyBuZXcgVHlwZUVycm9yKCdVbmV4cGVjdGVkIGRhdGEgdHlwZSAoJysgdHlwZW9mIGRhdGEgKyAnKScpO1xufVxudXRpbC5pbmhlcml0cyhEYXRhU3RyZWFtLCBTdHJlYW0pO1xuXG5EYXRhU3RyZWFtLnByb3RvdHlwZS53cml0ZSA9IGZ1bmN0aW9uIHdyaXRlKGRhdGEpIHtcbiAgdGhpcy5idWZmZXIgPSBCdWZmZXIuY29uY2F0KFt0aGlzLmJ1ZmZlciwgQnVmZmVyLmZyb20oZGF0YSldKTtcbiAgdGhpcy5lbWl0KCdkYXRhJywgZGF0YSk7XG59O1xuXG5EYXRhU3RyZWFtLnByb3RvdHlwZS5lbmQgPSBmdW5jdGlvbiBlbmQoZGF0YSkge1xuICBpZiAoZGF0YSlcbiAgICB0aGlzLndyaXRlKGRhdGEpO1xuICB0aGlzLmVtaXQoJ2VuZCcsIGRhdGEpO1xuICB0aGlzLmVtaXQoJ2Nsb3NlJyk7XG4gIHRoaXMud3JpdGFibGUgPSBmYWxzZTtcbiAgdGhpcy5yZWFkYWJsZSA9IGZhbHNlO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBEYXRhU3RyZWFtO1xuIl0sIm5hbWVzIjpbIkJ1ZmZlciIsInJlcXVpcmUiLCJTdHJlYW0iLCJ1dGlsIiwiRGF0YVN0cmVhbSIsImRhdGEiLCJidWZmZXIiLCJ3cml0YWJsZSIsInJlYWRhYmxlIiwiYWxsb2MiLCJwaXBlIiwibGVuZ3RoIiwicHJvY2VzcyIsIm5leHRUaWNrIiwiZW1pdCIsImJpbmQiLCJUeXBlRXJyb3IiLCJpbmhlcml0cyIsInByb3RvdHlwZSIsIndyaXRlIiwiY29uY2F0IiwiZnJvbSIsImVuZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/jws/lib/data-stream.js\n");

/***/ }),

/***/ "(action-browser)/./node_modules/jws/lib/sign-stream.js":
/*!*********************************************!*\
  !*** ./node_modules/jws/lib/sign-stream.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/*global module*/ \nvar Buffer = (__webpack_require__(/*! safe-buffer */ \"(action-browser)/./node_modules/safe-buffer/index.js\").Buffer);\nvar DataStream = __webpack_require__(/*! ./data-stream */ \"(action-browser)/./node_modules/jws/lib/data-stream.js\");\nvar jwa = __webpack_require__(/*! jwa */ \"(action-browser)/./node_modules/jwa/index.js\");\nvar Stream = __webpack_require__(/*! stream */ \"stream\");\nvar toString = __webpack_require__(/*! ./tostring */ \"(action-browser)/./node_modules/jws/lib/tostring.js\");\nvar util = __webpack_require__(/*! util */ \"util\");\nfunction base64url(string, encoding) {\n    return Buffer.from(string, encoding).toString(\"base64\").replace(/=/g, \"\").replace(/\\+/g, \"-\").replace(/\\//g, \"_\");\n}\nfunction jwsSecuredInput(header, payload, encoding) {\n    encoding = encoding || \"utf8\";\n    var encodedHeader = base64url(toString(header), \"binary\");\n    var encodedPayload = base64url(toString(payload), encoding);\n    return util.format(\"%s.%s\", encodedHeader, encodedPayload);\n}\nfunction jwsSign(opts) {\n    var header = opts.header;\n    var payload = opts.payload;\n    var secretOrKey = opts.secret || opts.privateKey;\n    var encoding = opts.encoding;\n    var algo = jwa(header.alg);\n    var securedInput = jwsSecuredInput(header, payload, encoding);\n    var signature = algo.sign(securedInput, secretOrKey);\n    return util.format(\"%s.%s\", securedInput, signature);\n}\nfunction SignStream(opts) {\n    var secret = opts.secret || opts.privateKey || opts.key;\n    var secretStream = new DataStream(secret);\n    this.readable = true;\n    this.header = opts.header;\n    this.encoding = opts.encoding;\n    this.secret = this.privateKey = this.key = secretStream;\n    this.payload = new DataStream(opts.payload);\n    this.secret.once(\"close\", (function() {\n        if (!this.payload.writable && this.readable) this.sign();\n    }).bind(this));\n    this.payload.once(\"close\", (function() {\n        if (!this.secret.writable && this.readable) this.sign();\n    }).bind(this));\n}\nutil.inherits(SignStream, Stream);\nSignStream.prototype.sign = function sign() {\n    try {\n        var signature = jwsSign({\n            header: this.header,\n            payload: this.payload.buffer,\n            secret: this.secret.buffer,\n            encoding: this.encoding\n        });\n        this.emit(\"done\", signature);\n        this.emit(\"data\", signature);\n        this.emit(\"end\");\n        this.readable = false;\n        return signature;\n    } catch (e) {\n        this.readable = false;\n        this.emit(\"error\", e);\n        this.emit(\"close\");\n    }\n};\nSignStream.sign = jwsSign;\nmodule.exports = SignStream;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9qd3MvbGliL3NpZ24tc3RyZWFtLmpzIiwibWFwcGluZ3MiOiJBQUFBLGVBQWU7QUFDZixJQUFJQSxTQUFTQyx1R0FBNkI7QUFDMUMsSUFBSUMsYUFBYUQsbUJBQU9BLENBQUM7QUFDekIsSUFBSUUsTUFBTUYsbUJBQU9BLENBQUM7QUFDbEIsSUFBSUcsU0FBU0gsbUJBQU9BLENBQUM7QUFDckIsSUFBSUksV0FBV0osbUJBQU9BLENBQUM7QUFDdkIsSUFBSUssT0FBT0wsbUJBQU9BLENBQUM7QUFFbkIsU0FBU00sVUFBVUMsTUFBTSxFQUFFQyxRQUFRO0lBQ2pDLE9BQU9ULE9BQ0pVLElBQUksQ0FBQ0YsUUFBUUMsVUFDYkosUUFBUSxDQUFDLFVBQ1RNLE9BQU8sQ0FBQyxNQUFNLElBQ2RBLE9BQU8sQ0FBQyxPQUFPLEtBQ2ZBLE9BQU8sQ0FBQyxPQUFPO0FBQ3BCO0FBRUEsU0FBU0MsZ0JBQWdCQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUwsUUFBUTtJQUNoREEsV0FBV0EsWUFBWTtJQUN2QixJQUFJTSxnQkFBZ0JSLFVBQVVGLFNBQVNRLFNBQVM7SUFDaEQsSUFBSUcsaUJBQWlCVCxVQUFVRixTQUFTUyxVQUFVTDtJQUNsRCxPQUFPSCxLQUFLVyxNQUFNLENBQUMsU0FBU0YsZUFBZUM7QUFDN0M7QUFFQSxTQUFTRSxRQUFRQyxJQUFJO0lBQ25CLElBQUlOLFNBQVNNLEtBQUtOLE1BQU07SUFDeEIsSUFBSUMsVUFBVUssS0FBS0wsT0FBTztJQUMxQixJQUFJTSxjQUFjRCxLQUFLRSxNQUFNLElBQUlGLEtBQUtHLFVBQVU7SUFDaEQsSUFBSWIsV0FBV1UsS0FBS1YsUUFBUTtJQUM1QixJQUFJYyxPQUFPcEIsSUFBSVUsT0FBT1csR0FBRztJQUN6QixJQUFJQyxlQUFlYixnQkFBZ0JDLFFBQVFDLFNBQVNMO0lBQ3BELElBQUlpQixZQUFZSCxLQUFLSSxJQUFJLENBQUNGLGNBQWNMO0lBQ3hDLE9BQU9kLEtBQUtXLE1BQU0sQ0FBQyxTQUFTUSxjQUFjQztBQUM1QztBQUVBLFNBQVNFLFdBQVdULElBQUk7SUFDdEIsSUFBSUUsU0FBU0YsS0FBS0UsTUFBTSxJQUFFRixLQUFLRyxVQUFVLElBQUVILEtBQUtVLEdBQUc7SUFDbkQsSUFBSUMsZUFBZSxJQUFJNUIsV0FBV21CO0lBQ2xDLElBQUksQ0FBQ1UsUUFBUSxHQUFHO0lBQ2hCLElBQUksQ0FBQ2xCLE1BQU0sR0FBR00sS0FBS04sTUFBTTtJQUN6QixJQUFJLENBQUNKLFFBQVEsR0FBR1UsS0FBS1YsUUFBUTtJQUM3QixJQUFJLENBQUNZLE1BQU0sR0FBRyxJQUFJLENBQUNDLFVBQVUsR0FBRyxJQUFJLENBQUNPLEdBQUcsR0FBR0M7SUFDM0MsSUFBSSxDQUFDaEIsT0FBTyxHQUFHLElBQUlaLFdBQVdpQixLQUFLTCxPQUFPO0lBQzFDLElBQUksQ0FBQ08sTUFBTSxDQUFDVyxJQUFJLENBQUMsU0FBUztRQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDbEIsT0FBTyxDQUFDbUIsUUFBUSxJQUFJLElBQUksQ0FBQ0YsUUFBUSxFQUN6QyxJQUFJLENBQUNKLElBQUk7SUFDYixHQUFFTyxJQUFJLENBQUMsSUFBSTtJQUVYLElBQUksQ0FBQ3BCLE9BQU8sQ0FBQ2tCLElBQUksQ0FBQyxTQUFTO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUNYLE1BQU0sQ0FBQ1ksUUFBUSxJQUFJLElBQUksQ0FBQ0YsUUFBUSxFQUN4QyxJQUFJLENBQUNKLElBQUk7SUFDYixHQUFFTyxJQUFJLENBQUMsSUFBSTtBQUNiO0FBQ0E1QixLQUFLNkIsUUFBUSxDQUFDUCxZQUFZeEI7QUFFMUJ3QixXQUFXUSxTQUFTLENBQUNULElBQUksR0FBRyxTQUFTQTtJQUNuQyxJQUFJO1FBQ0YsSUFBSUQsWUFBWVIsUUFBUTtZQUN0QkwsUUFBUSxJQUFJLENBQUNBLE1BQU07WUFDbkJDLFNBQVMsSUFBSSxDQUFDQSxPQUFPLENBQUN1QixNQUFNO1lBQzVCaEIsUUFBUSxJQUFJLENBQUNBLE1BQU0sQ0FBQ2dCLE1BQU07WUFDMUI1QixVQUFVLElBQUksQ0FBQ0EsUUFBUTtRQUN6QjtRQUNBLElBQUksQ0FBQzZCLElBQUksQ0FBQyxRQUFRWjtRQUNsQixJQUFJLENBQUNZLElBQUksQ0FBQyxRQUFRWjtRQUNsQixJQUFJLENBQUNZLElBQUksQ0FBQztRQUNWLElBQUksQ0FBQ1AsUUFBUSxHQUFHO1FBQ2hCLE9BQU9MO0lBQ1QsRUFBRSxPQUFPYSxHQUFHO1FBQ1YsSUFBSSxDQUFDUixRQUFRLEdBQUc7UUFDaEIsSUFBSSxDQUFDTyxJQUFJLENBQUMsU0FBU0M7UUFDbkIsSUFBSSxDQUFDRCxJQUFJLENBQUM7SUFDWjtBQUNGO0FBRUFWLFdBQVdELElBQUksR0FBR1Q7QUFFbEJzQixPQUFPQyxPQUFPLEdBQUdiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dF8xNF90ZXN0Ly4vbm9kZV9tb2R1bGVzL2p3cy9saWIvc2lnbi1zdHJlYW0uanM/NmYwOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKmdsb2JhbCBtb2R1bGUqL1xudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ3NhZmUtYnVmZmVyJykuQnVmZmVyO1xudmFyIERhdGFTdHJlYW0gPSByZXF1aXJlKCcuL2RhdGEtc3RyZWFtJyk7XG52YXIgandhID0gcmVxdWlyZSgnandhJyk7XG52YXIgU3RyZWFtID0gcmVxdWlyZSgnc3RyZWFtJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3Rvc3RyaW5nJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcblxuZnVuY3Rpb24gYmFzZTY0dXJsKHN0cmluZywgZW5jb2RpbmcpIHtcbiAgcmV0dXJuIEJ1ZmZlclxuICAgIC5mcm9tKHN0cmluZywgZW5jb2RpbmcpXG4gICAgLnRvU3RyaW5nKCdiYXNlNjQnKVxuICAgIC5yZXBsYWNlKC89L2csICcnKVxuICAgIC5yZXBsYWNlKC9cXCsvZywgJy0nKVxuICAgIC5yZXBsYWNlKC9cXC8vZywgJ18nKTtcbn1cblxuZnVuY3Rpb24gandzU2VjdXJlZElucHV0KGhlYWRlciwgcGF5bG9hZCwgZW5jb2RpbmcpIHtcbiAgZW5jb2RpbmcgPSBlbmNvZGluZyB8fCAndXRmOCc7XG4gIHZhciBlbmNvZGVkSGVhZGVyID0gYmFzZTY0dXJsKHRvU3RyaW5nKGhlYWRlciksICdiaW5hcnknKTtcbiAgdmFyIGVuY29kZWRQYXlsb2FkID0gYmFzZTY0dXJsKHRvU3RyaW5nKHBheWxvYWQpLCBlbmNvZGluZyk7XG4gIHJldHVybiB1dGlsLmZvcm1hdCgnJXMuJXMnLCBlbmNvZGVkSGVhZGVyLCBlbmNvZGVkUGF5bG9hZCk7XG59XG5cbmZ1bmN0aW9uIGp3c1NpZ24ob3B0cykge1xuICB2YXIgaGVhZGVyID0gb3B0cy5oZWFkZXI7XG4gIHZhciBwYXlsb2FkID0gb3B0cy5wYXlsb2FkO1xuICB2YXIgc2VjcmV0T3JLZXkgPSBvcHRzLnNlY3JldCB8fCBvcHRzLnByaXZhdGVLZXk7XG4gIHZhciBlbmNvZGluZyA9IG9wdHMuZW5jb2Rpbmc7XG4gIHZhciBhbGdvID0gandhKGhlYWRlci5hbGcpO1xuICB2YXIgc2VjdXJlZElucHV0ID0gandzU2VjdXJlZElucHV0KGhlYWRlciwgcGF5bG9hZCwgZW5jb2RpbmcpO1xuICB2YXIgc2lnbmF0dXJlID0gYWxnby5zaWduKHNlY3VyZWRJbnB1dCwgc2VjcmV0T3JLZXkpO1xuICByZXR1cm4gdXRpbC5mb3JtYXQoJyVzLiVzJywgc2VjdXJlZElucHV0LCBzaWduYXR1cmUpO1xufVxuXG5mdW5jdGlvbiBTaWduU3RyZWFtKG9wdHMpIHtcbiAgdmFyIHNlY3JldCA9IG9wdHMuc2VjcmV0fHxvcHRzLnByaXZhdGVLZXl8fG9wdHMua2V5O1xuICB2YXIgc2VjcmV0U3RyZWFtID0gbmV3IERhdGFTdHJlYW0oc2VjcmV0KTtcbiAgdGhpcy5yZWFkYWJsZSA9IHRydWU7XG4gIHRoaXMuaGVhZGVyID0gb3B0cy5oZWFkZXI7XG4gIHRoaXMuZW5jb2RpbmcgPSBvcHRzLmVuY29kaW5nO1xuICB0aGlzLnNlY3JldCA9IHRoaXMucHJpdmF0ZUtleSA9IHRoaXMua2V5ID0gc2VjcmV0U3RyZWFtO1xuICB0aGlzLnBheWxvYWQgPSBuZXcgRGF0YVN0cmVhbShvcHRzLnBheWxvYWQpO1xuICB0aGlzLnNlY3JldC5vbmNlKCdjbG9zZScsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXRoaXMucGF5bG9hZC53cml0YWJsZSAmJiB0aGlzLnJlYWRhYmxlKVxuICAgICAgdGhpcy5zaWduKCk7XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgdGhpcy5wYXlsb2FkLm9uY2UoJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5zZWNyZXQud3JpdGFibGUgJiYgdGhpcy5yZWFkYWJsZSlcbiAgICAgIHRoaXMuc2lnbigpO1xuICB9LmJpbmQodGhpcykpO1xufVxudXRpbC5pbmhlcml0cyhTaWduU3RyZWFtLCBTdHJlYW0pO1xuXG5TaWduU3RyZWFtLnByb3RvdHlwZS5zaWduID0gZnVuY3Rpb24gc2lnbigpIHtcbiAgdHJ5IHtcbiAgICB2YXIgc2lnbmF0dXJlID0gandzU2lnbih7XG4gICAgICBoZWFkZXI6IHRoaXMuaGVhZGVyLFxuICAgICAgcGF5bG9hZDogdGhpcy5wYXlsb2FkLmJ1ZmZlcixcbiAgICAgIHNlY3JldDogdGhpcy5zZWNyZXQuYnVmZmVyLFxuICAgICAgZW5jb2Rpbmc6IHRoaXMuZW5jb2RpbmdcbiAgICB9KTtcbiAgICB0aGlzLmVtaXQoJ2RvbmUnLCBzaWduYXR1cmUpO1xuICAgIHRoaXMuZW1pdCgnZGF0YScsIHNpZ25hdHVyZSk7XG4gICAgdGhpcy5lbWl0KCdlbmQnKTtcbiAgICB0aGlzLnJlYWRhYmxlID0gZmFsc2U7XG4gICAgcmV0dXJuIHNpZ25hdHVyZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRoaXMucmVhZGFibGUgPSBmYWxzZTtcbiAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZSk7XG4gICAgdGhpcy5lbWl0KCdjbG9zZScpO1xuICB9XG59O1xuXG5TaWduU3RyZWFtLnNpZ24gPSBqd3NTaWduO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpZ25TdHJlYW07XG4iXSwibmFtZXMiOlsiQnVmZmVyIiwicmVxdWlyZSIsIkRhdGFTdHJlYW0iLCJqd2EiLCJTdHJlYW0iLCJ0b1N0cmluZyIsInV0aWwiLCJiYXNlNjR1cmwiLCJzdHJpbmciLCJlbmNvZGluZyIsImZyb20iLCJyZXBsYWNlIiwiandzU2VjdXJlZElucHV0IiwiaGVhZGVyIiwicGF5bG9hZCIsImVuY29kZWRIZWFkZXIiLCJlbmNvZGVkUGF5bG9hZCIsImZvcm1hdCIsImp3c1NpZ24iLCJvcHRzIiwic2VjcmV0T3JLZXkiLCJzZWNyZXQiLCJwcml2YXRlS2V5IiwiYWxnbyIsImFsZyIsInNlY3VyZWRJbnB1dCIsInNpZ25hdHVyZSIsInNpZ24iLCJTaWduU3RyZWFtIiwia2V5Iiwic2VjcmV0U3RyZWFtIiwicmVhZGFibGUiLCJvbmNlIiwid3JpdGFibGUiLCJiaW5kIiwiaW5oZXJpdHMiLCJwcm90b3R5cGUiLCJidWZmZXIiLCJlbWl0IiwiZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/jws/lib/sign-stream.js\n");

/***/ }),

/***/ "(action-browser)/./node_modules/jws/lib/tostring.js":
/*!******************************************!*\
  !*** ./node_modules/jws/lib/tostring.js ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/*global module*/ \nvar Buffer = (__webpack_require__(/*! buffer */ \"buffer\").Buffer);\nmodule.exports = function toString(obj) {\n    if (typeof obj === \"string\") return obj;\n    if (typeof obj === \"number\" || Buffer.isBuffer(obj)) return obj.toString();\n    return JSON.stringify(obj);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9qd3MvbGliL3Rvc3RyaW5nLmpzIiwibWFwcGluZ3MiOiJBQUFBLGVBQWU7QUFDZixJQUFJQSxTQUFTQyxvREFBd0I7QUFFckNDLE9BQU9DLE9BQU8sR0FBRyxTQUFTQyxTQUFTQyxHQUFHO0lBQ3BDLElBQUksT0FBT0EsUUFBUSxVQUNqQixPQUFPQTtJQUNULElBQUksT0FBT0EsUUFBUSxZQUFZTCxPQUFPTSxRQUFRLENBQUNELE1BQzdDLE9BQU9BLElBQUlELFFBQVE7SUFDckIsT0FBT0csS0FBS0MsU0FBUyxDQUFDSDtBQUN4QiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRfMTRfdGVzdC8uL25vZGVfbW9kdWxlcy9qd3MvbGliL3Rvc3RyaW5nLmpzPzIzYTIiXSwic291cmNlc0NvbnRlbnQiOlsiLypnbG9iYWwgbW9kdWxlKi9cbnZhciBCdWZmZXIgPSByZXF1aXJlKCdidWZmZXInKS5CdWZmZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdG9TdHJpbmcob2JqKSB7XG4gIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJylcbiAgICByZXR1cm4gb2JqO1xuICBpZiAodHlwZW9mIG9iaiA9PT0gJ251bWJlcicgfHwgQnVmZmVyLmlzQnVmZmVyKG9iaikpXG4gICAgcmV0dXJuIG9iai50b1N0cmluZygpO1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob2JqKTtcbn07XG4iXSwibmFtZXMiOlsiQnVmZmVyIiwicmVxdWlyZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJ0b1N0cmluZyIsIm9iaiIsImlzQnVmZmVyIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/jws/lib/tostring.js\n");

/***/ }),

/***/ "(action-browser)/./node_modules/jws/lib/verify-stream.js":
/*!***********************************************!*\
  !*** ./node_modules/jws/lib/verify-stream.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("/*global module*/ \nvar Buffer = (__webpack_require__(/*! safe-buffer */ \"(action-browser)/./node_modules/safe-buffer/index.js\").Buffer);\nvar DataStream = __webpack_require__(/*! ./data-stream */ \"(action-browser)/./node_modules/jws/lib/data-stream.js\");\nvar jwa = __webpack_require__(/*! jwa */ \"(action-browser)/./node_modules/jwa/index.js\");\nvar Stream = __webpack_require__(/*! stream */ \"stream\");\nvar toString = __webpack_require__(/*! ./tostring */ \"(action-browser)/./node_modules/jws/lib/tostring.js\");\nvar util = __webpack_require__(/*! util */ \"util\");\nvar JWS_REGEX = /^[a-zA-Z0-9\\-_]+?\\.[a-zA-Z0-9\\-_]+?\\.([a-zA-Z0-9\\-_]+)?$/;\nfunction isObject(thing) {\n    return Object.prototype.toString.call(thing) === \"[object Object]\";\n}\nfunction safeJsonParse(thing) {\n    if (isObject(thing)) return thing;\n    try {\n        return JSON.parse(thing);\n    } catch (e) {\n        return undefined;\n    }\n}\nfunction headerFromJWS(jwsSig) {\n    var encodedHeader = jwsSig.split(\".\", 1)[0];\n    return safeJsonParse(Buffer.from(encodedHeader, \"base64\").toString(\"binary\"));\n}\nfunction securedInputFromJWS(jwsSig) {\n    return jwsSig.split(\".\", 2).join(\".\");\n}\nfunction signatureFromJWS(jwsSig) {\n    return jwsSig.split(\".\")[2];\n}\nfunction payloadFromJWS(jwsSig, encoding) {\n    encoding = encoding || \"utf8\";\n    var payload = jwsSig.split(\".\")[1];\n    return Buffer.from(payload, \"base64\").toString(encoding);\n}\nfunction isValidJws(string) {\n    return JWS_REGEX.test(string) && !!headerFromJWS(string);\n}\nfunction jwsVerify(jwsSig, algorithm, secretOrKey) {\n    if (!algorithm) {\n        var err = new Error(\"Missing algorithm parameter for jws.verify\");\n        err.code = \"MISSING_ALGORITHM\";\n        throw err;\n    }\n    jwsSig = toString(jwsSig);\n    var signature = signatureFromJWS(jwsSig);\n    var securedInput = securedInputFromJWS(jwsSig);\n    var algo = jwa(algorithm);\n    return algo.verify(securedInput, signature, secretOrKey);\n}\nfunction jwsDecode(jwsSig, opts) {\n    opts = opts || {};\n    jwsSig = toString(jwsSig);\n    if (!isValidJws(jwsSig)) return null;\n    var header = headerFromJWS(jwsSig);\n    if (!header) return null;\n    var payload = payloadFromJWS(jwsSig);\n    if (header.typ === \"JWT\" || opts.json) payload = JSON.parse(payload, opts.encoding);\n    return {\n        header: header,\n        payload: payload,\n        signature: signatureFromJWS(jwsSig)\n    };\n}\nfunction VerifyStream(opts) {\n    opts = opts || {};\n    var secretOrKey = opts.secret || opts.publicKey || opts.key;\n    var secretStream = new DataStream(secretOrKey);\n    this.readable = true;\n    this.algorithm = opts.algorithm;\n    this.encoding = opts.encoding;\n    this.secret = this.publicKey = this.key = secretStream;\n    this.signature = new DataStream(opts.signature);\n    this.secret.once(\"close\", (function() {\n        if (!this.signature.writable && this.readable) this.verify();\n    }).bind(this));\n    this.signature.once(\"close\", (function() {\n        if (!this.secret.writable && this.readable) this.verify();\n    }).bind(this));\n}\nutil.inherits(VerifyStream, Stream);\nVerifyStream.prototype.verify = function verify() {\n    try {\n        var valid = jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);\n        var obj = jwsDecode(this.signature.buffer, this.encoding);\n        this.emit(\"done\", valid, obj);\n        this.emit(\"data\", valid);\n        this.emit(\"end\");\n        this.readable = false;\n        return valid;\n    } catch (e) {\n        this.readable = false;\n        this.emit(\"error\", e);\n        this.emit(\"close\");\n    }\n};\nVerifyStream.decode = jwsDecode;\nVerifyStream.isValid = isValidJws;\nVerifyStream.verify = jwsVerify;\nmodule.exports = VerifyStream;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9qd3MvbGliL3ZlcmlmeS1zdHJlYW0uanMiLCJtYXBwaW5ncyI6IkFBQUEsZUFBZTtBQUNmLElBQUlBLFNBQVNDLHVHQUE2QjtBQUMxQyxJQUFJQyxhQUFhRCxtQkFBT0EsQ0FBQztBQUN6QixJQUFJRSxNQUFNRixtQkFBT0EsQ0FBQztBQUNsQixJQUFJRyxTQUFTSCxtQkFBT0EsQ0FBQztBQUNyQixJQUFJSSxXQUFXSixtQkFBT0EsQ0FBQztBQUN2QixJQUFJSyxPQUFPTCxtQkFBT0EsQ0FBQztBQUNuQixJQUFJTSxZQUFZO0FBRWhCLFNBQVNDLFNBQVNDLEtBQUs7SUFDckIsT0FBT0MsT0FBT0MsU0FBUyxDQUFDTixRQUFRLENBQUNPLElBQUksQ0FBQ0gsV0FBVztBQUNuRDtBQUVBLFNBQVNJLGNBQWNKLEtBQUs7SUFDMUIsSUFBSUQsU0FBU0MsUUFDWCxPQUFPQTtJQUNULElBQUk7UUFBRSxPQUFPSyxLQUFLQyxLQUFLLENBQUNOO0lBQVEsRUFDaEMsT0FBT08sR0FBRztRQUFFLE9BQU9DO0lBQVc7QUFDaEM7QUFFQSxTQUFTQyxjQUFjQyxNQUFNO0lBQzNCLElBQUlDLGdCQUFnQkQsT0FBT0UsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUU7SUFDM0MsT0FBT1IsY0FBY2IsT0FBT3NCLElBQUksQ0FBQ0YsZUFBZSxVQUFVZixRQUFRLENBQUM7QUFDckU7QUFFQSxTQUFTa0Isb0JBQW9CSixNQUFNO0lBQ2pDLE9BQU9BLE9BQU9FLEtBQUssQ0FBQyxLQUFLLEdBQUdHLElBQUksQ0FBQztBQUNuQztBQUVBLFNBQVNDLGlCQUFpQk4sTUFBTTtJQUM5QixPQUFPQSxPQUFPRSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUU7QUFDN0I7QUFFQSxTQUFTSyxlQUFlUCxNQUFNLEVBQUVRLFFBQVE7SUFDdENBLFdBQVdBLFlBQVk7SUFDdkIsSUFBSUMsVUFBVVQsT0FBT0UsS0FBSyxDQUFDLElBQUksQ0FBQyxF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QVFIO1FBQ2xCLElBQUksQ0FBQ0csSUFBSSxDQUFDO1FBQ1YsSUFBSSxDQUFDUixRQUFRLEdBQUc7UUFDaEIsT0FBT0s7SUFDVCxFQUFFLE9BQU96QyxHQUFHO1FBQ1YsSUFBSSxDQUFDb0MsUUFBUSxHQUFHO1FBQ2hCLElBQUksQ0FBQ1EsSUFBSSxDQUFDLFNBQVM1QztRQUNuQixJQUFJLENBQUM0QyxJQUFJLENBQUM7SUFDWjtBQUNGO0FBRUFiLGFBQWFjLE1BQU0sR0FBR25CO0FBQ3RCSyxhQUFhZSxPQUFPLEdBQUdqQztBQUN2QmtCLGFBQWFOLE1BQU0sR0FBR1Q7QUFFdEIrQixPQUFPQyxPQUFPLEdBQUdqQiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRfMTRfdGVzdC8uL25vZGVfbW9kdWxlcy9qd3MvbGliL3ZlcmlmeS1zdHJlYW0uanM/NDAwNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKmdsb2JhbCBtb2R1bGUqL1xudmFyIEJ1ZmZlciA9IHJlcXVpcmUoJ3NhZmUtYnVmZmVyJykuQnVmZmVyO1xudmFyIERhdGFTdHJlYW0gPSByZXF1aXJlKCcuL2RhdGEtc3RyZWFtJyk7XG52YXIgandhID0gcmVxdWlyZSgnandhJyk7XG52YXIgU3RyZWFtID0gcmVxdWlyZSgnc3RyZWFtJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuL3Rvc3RyaW5nJyk7XG52YXIgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcbnZhciBKV1NfUkVHRVggPSAvXlthLXpBLVowLTlcXC1fXSs/XFwuW2EtekEtWjAtOVxcLV9dKz9cXC4oW2EtekEtWjAtOVxcLV9dKyk/JC87XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHRoaW5nKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodGhpbmcpID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cblxuZnVuY3Rpb24gc2FmZUpzb25QYXJzZSh0aGluZykge1xuICBpZiAoaXNPYmplY3QodGhpbmcpKVxuICAgIHJldHVybiB0aGluZztcbiAgdHJ5IHsgcmV0dXJuIEpTT04ucGFyc2UodGhpbmcpOyB9XG4gIGNhdGNoIChlKSB7IHJldHVybiB1bmRlZmluZWQ7IH1cbn1cblxuZnVuY3Rpb24gaGVhZGVyRnJvbUpXUyhqd3NTaWcpIHtcbiAgdmFyIGVuY29kZWRIZWFkZXIgPSBqd3NTaWcuc3BsaXQoJy4nLCAxKVswXTtcbiAgcmV0dXJuIHNhZmVKc29uUGFyc2UoQnVmZmVyLmZyb20oZW5jb2RlZEhlYWRlciwgJ2Jhc2U2NCcpLnRvU3RyaW5nKCdiaW5hcnknKSk7XG59XG5cbmZ1bmN0aW9uIHNlY3VyZWRJbnB1dEZyb21KV1MoandzU2lnKSB7XG4gIHJldHVybiBqd3NTaWcuc3BsaXQoJy4nLCAyKS5qb2luKCcuJyk7XG59XG5cbmZ1bmN0aW9uIHNpZ25hdHVyZUZyb21KV1MoandzU2lnKSB7XG4gIHJldHVybiBqd3NTaWcuc3BsaXQoJy4nKVsyXTtcbn1cblxuZnVuY3Rpb24gcGF5bG9hZEZyb21KV1MoandzU2lnLCBlbmNvZGluZykge1xuICBlbmNvZGluZyA9IGVuY29kaW5nIHx8ICd1dGY4JztcbiAgdmFyIHBheWxvYWQgPSBqd3NTaWcuc3BsaXQoJy4nKVsxXTtcbiAgcmV0dXJuIEJ1ZmZlci5mcm9tKHBheWxvYWQsICdiYXNlNjQnKS50b1N0cmluZyhlbmNvZGluZyk7XG59XG5cbmZ1bmN0aW9uIGlzVmFsaWRKd3Moc3RyaW5nKSB7XG4gIHJldHVybiBKV1NfUkVHRVgudGVzdChzdHJpbmcpICYmICEhaGVhZGVyRnJvbUpXUyhzdHJpbmcpO1xufVxuXG5mdW5jdGlvbiBqd3NWZXJpZnkoandzU2lnLCBhbGdvcml0aG0sIHNlY3JldE9yS2V5KSB7XG4gIGlmICghYWxnb3JpdGhtKSB7XG4gICAgdmFyIGVyciA9IG5ldyBFcnJvcihcIk1pc3NpbmcgYWxnb3JpdGhtIHBhcmFtZXRlciBmb3IgandzLnZlcmlmeVwiKTtcbiAgICBlcnIuY29kZSA9IFwiTUlTU0lOR19BTEdPUklUSE1cIjtcbiAgICB0aHJvdyBlcnI7XG4gIH1cbiAgandzU2lnID0gdG9TdHJpbmcoandzU2lnKTtcbiAgdmFyIHNpZ25hdHVyZSA9IHNpZ25hdHVyZUZyb21KV1MoandzU2lnKTtcbiAgdmFyIHNlY3VyZWRJbnB1dCA9IHNlY3VyZWRJbnB1dEZyb21KV1MoandzU2lnKTtcbiAgdmFyIGFsZ28gPSBqd2EoYWxnb3JpdGhtKTtcbiAgcmV0dXJuIGFsZ28udmVyaWZ5KHNlY3VyZWRJbnB1dCwgc2lnbmF0dXJlLCBzZWNyZXRPcktleSk7XG59XG5cbmZ1bmN0aW9uIGp3c0RlY29kZShqd3NTaWcsIG9wdHMpIHtcbiAgb3B0cyA9IG9wdHMgfHwge307XG4gIGp3c1NpZyA9IHRvU3RyaW5nKGp3c1NpZyk7XG5cbiAgaWYgKCFpc1ZhbGlkSndzKGp3c1NpZykpXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgdmFyIGhlYWRlciA9IGhlYWRlckZyb21KV1MoandzU2lnKTtcblxuICBpZiAoIWhlYWRlcilcbiAgICByZXR1cm4gbnVsbDtcblxuICB2YXIgcGF5bG9hZCA9IHBheWxvYWRGcm9tSldTKGp3c1NpZyk7XG4gIGlmIChoZWFkZXIudHlwID09PSAnSldUJyB8fCBvcHRzLmpzb24pXG4gICAgcGF5bG9hZCA9IEpTT04ucGFyc2UocGF5bG9hZCwgb3B0cy5lbmNvZGluZyk7XG5cbiAgcmV0dXJuIHtcbiAgICBoZWFkZXI6IGhlYWRlcixcbiAgICBwYXlsb2FkOiBwYXlsb2FkLFxuICAgIHNpZ25hdHVyZTogc2lnbmF0dXJlRnJvbUpXUyhqd3NTaWcpXG4gIH07XG59XG5cbmZ1bmN0aW9uIFZlcmlmeVN0cmVhbShvcHRzKSB7XG4gIG9wdHMgPSBvcHRzIHx8IHt9O1xuICB2YXIgc2VjcmV0T3JLZXkgPSBvcHRzLnNlY3JldHx8b3B0cy5wdWJsaWNLZXl8fG9wdHMua2V5O1xuICB2YXIgc2VjcmV0U3RyZWFtID0gbmV3IERhdGFTdHJlYW0oc2VjcmV0T3JLZXkpO1xuICB0aGlzLnJlYWRhYmxlID0gdHJ1ZTtcbiAgdGhpcy5hbGdvcml0aG0gPSBvcHRzLmFsZ29yaXRobTtcbiAgdGhpcy5lbmNvZGluZyA9IG9wdHMuZW5jb2Rpbmc7XG4gIHRoaXMuc2VjcmV0ID0gdGhpcy5wdWJsaWNLZXkgPSB0aGlzLmtleSA9IHNlY3JldFN0cmVhbTtcbiAgdGhpcy5zaWduYXR1cmUgPSBuZXcgRGF0YVN0cmVhbShvcHRzLnNpZ25hdHVyZSk7XG4gIHRoaXMuc2VjcmV0Lm9uY2UoJ2Nsb3NlJywgZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5zaWduYXR1cmUud3JpdGFibGUgJiYgdGhpcy5yZWFkYWJsZSlcbiAgICAgIHRoaXMudmVyaWZ5KCk7XG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgdGhpcy5zaWduYXR1cmUub25jZSgnY2xvc2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLnNlY3JldC53cml0YWJsZSAmJiB0aGlzLnJlYWRhYmxlKVxuICAgICAgdGhpcy52ZXJpZnkoKTtcbiAgfS5iaW5kKHRoaXMpKTtcbn1cbnV0aWwuaW5oZXJpdHMoVmVyaWZ5U3RyZWFtLCBTdHJlYW0pO1xuVmVyaWZ5U3RyZWFtLnByb3RvdHlwZS52ZXJpZnkgPSBmdW5jdGlvbiB2ZXJpZnkoKSB7XG4gIHRyeSB7XG4gICAgdmFyIHZhbGlkID0gandzVmVyaWZ5KHRoaXMuc2lnbmF0dXJlLmJ1ZmZlciwgdGhpcy5hbGdvcml0aG0sIHRoaXMua2V5LmJ1ZmZlcik7XG4gICAgdmFyIG9iaiA9IGp3c0RlY29kZSh0aGlzLnNpZ25hdHVyZS5idWZmZXIsIHRoaXMuZW5jb2RpbmcpO1xuICAgIHRoaXMuZW1pdCgnZG9uZScsIHZhbGlkLCBvYmopO1xuICAgIHRoaXMuZW1pdCgnZGF0YScsIHZhbGlkKTtcbiAgICB0aGlzLmVtaXQoJ2VuZCcpO1xuICAgIHRoaXMucmVhZGFibGUgPSBmYWxzZTtcbiAgICByZXR1cm4gdmFsaWQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB0aGlzLnJlYWRhYmxlID0gZmFsc2U7XG4gICAgdGhpcy5lbWl0KCdlcnJvcicsIGUpO1xuICAgIHRoaXMuZW1pdCgnY2xvc2UnKTtcbiAgfVxufTtcblxuVmVyaWZ5U3RyZWFtLmRlY29kZSA9IGp3c0RlY29kZTtcblZlcmlmeVN0cmVhbS5pc1ZhbGlkID0gaXNWYWxpZEp3cztcblZlcmlmeVN0cmVhbS52ZXJpZnkgPSBqd3NWZXJpZnk7XG5cbm1vZHVsZS5leHBvcnRzID0gVmVyaWZ5U3RyZWFtO1xuIl0sIm5hbWVzIjpbIkJ1ZmZlciIsInJlcXVpcmUiLCJEYXRhU3RyZWFtIiwiandhIiwiU3RyZWFtIiwidG9TdHJpbmciLCJ1dGlsIiwiSldTX1JFR0VYIiwiaXNPYmplY3QiLCJ0aGluZyIsIk9iamVjdCIsInByb3RvdHlwZSIsImNhbGwiLCJzYWZlSnNvblBhcnNlIiwiSlNPTiIsInBhcnNlIiwiZSIsInVuZGVmaW5lZCIsImhlYWRlckZyb21KV1MiLCJqd3NTaWciLCJlbmNvZGVkSGVhZGVyIiwic3BsaXQiLCJmcm9tIiwic2VjdXJlZElucHV0RnJvbUpXUyIsImpvaW4iLCJzaWduYXR1cmVGcm9tSldTIiwicGF5bG9hZEZyb21KV1MiLCJlbmNvZGluZyIsInBheWxvYWQiLCJpc1ZhbGlkSndzIiwic3RyaW5nIiwidGVzdCIsImp3c1ZlcmlmeSIsImFsZ29yaXRobSIsInNlY3JldE9yS2V5IiwiZXJyIiwiRXJyb3IiLCJjb2RlIiwic2lnbmF0dXJlIiwic2VjdXJlZElucHV0IiwiYWxnbyIsInZlcmlmeSIsImp3c0RlY29kZSIsIm9wdHMiLCJoZWFkZXIiLCJ0eXAiLCJqc29uIiwiVmVyaWZ5U3RyZWFtIiwic2VjcmV0IiwicHVibGljS2V5Iiwia2V5Iiwic2VjcmV0U3RyZWFtIiwicmVhZGFibGUiLCJvbmNlIiwid3JpdGFibGUiLCJiaW5kIiwiaW5oZXJpdHMiLCJ2YWxpZCIsImJ1ZmZlciIsIm9iaiIsImVtaXQiLCJkZWNvZGUiLCJpc1ZhbGlkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/jws/lib/verify-stream.js\n");

/***/ })

};
;