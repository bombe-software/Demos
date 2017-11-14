//Id Usuario, Ruta y Contraseña

import RSA from './RSA/rsa';
import DES from './DES/des';

import parse from './DES/parseador';

var jaiba = new parse();

//  {"D":5,"E":5,"N":21}

exports.solicitud = function (idUsuario, route, password) {
	let objParse = {
        user: jaiba.stringToASCIICifrado(idUsuario, 5, 21),
        route: jaiba.stringToASCIICifrado(route, 5, 21),
        pass: jaiba.stringToASCIICifrado(password, 5, 21)
    };
    
    return objParse;
};