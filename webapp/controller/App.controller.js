sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";
	return Controller.extend("opensap.myapp.controller.App", {
		onShowHello: function () {
			// show a native JavaScript alert
			console.log("button clicked.");
			alert("Hey there this is my first ui5 app.");
		}
	});
});