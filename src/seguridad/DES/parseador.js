
/**
 *
 * @author Saúl Fernando González Domínguez(Vicroni)
 * @version 06/11/2017 1.0
 */
class Parseador {

    checkBin(n){
    	return/^[01]{1,64}$/.test(n)
    }

	checkDec(n){
		return/^[0-9]{1,64}$/.test(n)
	}

	checkHex(n){
		return/^[0-9A-Fa-f]{1,64}$/.test(n)
	}

	pad(s,z){
		s=""+s;
		return s.length<z?pad("0"+s,z):s
	}

	unpad(s){
		s=""+s;
		return s.replace(/^0+/,'')
	}

	Dec2Bin(n){
		if(!this.checkDec(n)||n<0)
			return 0;
		return n.toString(2)
	}

	Dec2Hex(n){
		if(!this.checkDec(n)||n<0)
			return 0;
		return n.toString(16)
	}

	Bin2Dec(n){
		if(!this.checkBin(n))
			return 0;
		return parseInt(n,2).toString(10)
	}

    Bin2Hex(n){
    	if(!this.checkBin(n))
    		return 0;
    	return parseInt(n,2).toString(16)
    }

	//Hexadecimal Operations
	Hex2Bin(n){
		if(!this.checkHex(n))
			return 0;
		return parseInt(n,16).toString(2);
	}
    
	Hex2Dec(n){
		if(!this.checkHex(n))
			return 0;
		return parseInt(n,16).toString(10)
	}

    hexToBin(n){
    	if(!this.checkHex(n))
    		return 0;
    	return parseInt(n,16).toString(2);
    }

    binToHex(n){
    	if(!this.checkBin(n))
    		return 0;
    	return parseInt(n,2).toString(16)
    }

    stringToASCII(n){
    	var ascii = '';
    	for (var i = n.length - 1; i >= 0; i--) {
    		ascii += n.charCodeAt(i)
    	};
    	return ascii;
    }

    stringToASCIICifrado(n, clave, m){
    	var ascii = '';
    	for (var i = n.length - 1; i >= 0; i--) {
    		ascii += (Math.pow(n.charCodeAt(i), clave)%m).toString();
    	};
    	return ascii;
    }

	stringToBinary(input) {
	  var output = "";
	  for (var i = 0; i < input.length; i++) {
	  	let encode = input[i].charCodeAt(0).toString(2);
	  	if(encode.length < 8){
	  		for (var i = 8-encode.length; i < 8; i++) {
	  			encode += '0';
	  		};
	  	}
	    output += encode;
	  }
	  return output;
	} 

}
	
export default Parseador;
