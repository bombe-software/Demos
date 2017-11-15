var CryptoJS = require("crypto-js");

exports.solicitud = function (Params, Route) {
	var data = {
		params: Params,
		route: Route
	};

	return CryptoJS.AES.encrypt(JSON.stringify(data), 'jaiba').toString();
};