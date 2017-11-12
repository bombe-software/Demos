
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

}
	
export default Parseador;
