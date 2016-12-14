/******/ (function(modules) { // webpackBootstrap
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
/***/ function(module, exports) {

	import React from 'react';
	import ReactDOM from 'react-dom';
	import injectTapEventPlugin from 'react-tap-event-plugin';

	import Slider from './slider/Slider';
	import NavBar from './navbar/NavBar';

	import './index.css';

	injectTapEventPlugin();

	const Body = () => React.createElement(
	    'div',
	    null,
	    React.createElement(Slider, null),
	    React.createElement(
	        'div',
	        { className: 'tab-body' },
	        React.createElement(NavBar, null),
	        React.createElement(
	            'footer',
	            null,
	            React.createElement(
	                'p',
	                { className: 'pull-right' },
	                React.createElement(
	                    'a',
	                    { href: '#' },
	                    'Back to top'
	                )
	            )
	        )
	    )
	);

	ReactDOM.render(React.createElement(Body, null), document.getElementById('my-body'));

/***/ }
/******/ ]);