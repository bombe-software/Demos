var CryptoJS = require("crypto-js");

exports.solicitud = function (Params, Route) {
	var data = {
		CorreoElectronico: Params.CorreoElectronico,
		route: Route
	};

	//return CryptoJS.AES.encrypt(JSON.stringify(data), Params.Contrasena).toString();
	
};