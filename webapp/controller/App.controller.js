sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"opensap/myapp/model/formatter"
], function (Controller, MessageToast, Filter, FilterOperator, formatter) {
	"use strict";
	return Controller.extend("opensap.myapp.controller.App", {

		formatter: formatter,

		onShowHello: function () {
			// read msg from i18n model
			var oBundle = this.getView().getModel("i18n").getResourceBundle();
			var sRecipient =
				this.getView().getModel("helloPanel").getProperty("/recipient/name");
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);
			// show message
			MessageToast.show(sMsg);
		},

		onFilterProducts: function (oEvent) {
			// build filter array
			var aFilter = [],
				sQuery = oEvent.getParameter("query"),
				// retrieve list control
				oList = this.getView().byId("productsList"),
				// get binding for aggregation 'items'
				oBinding = oList.getBinding("items");
			if (sQuery) {
				aFilter.push(new Filter("ProductID", FilterOperator.Contains,
					sQuery));
			}
			// apply filter. an empty fsilter array simply removes the filter
			// which will make all entries visible again
			oBinding.filter(aFilter);
		}

	});
});