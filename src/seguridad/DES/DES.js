import Permutador from './Permutador';
import Sustituidor from './Sustituidor';
import Feistel from './Feistel';
import Parseador from './parseador';
class DES {

    cifrar(cadena, clave) {
        let cadenas64 = parseInt(cadena,16).toString(2);
        // console.log("Binario " + cadenas64);

        let Parse = new Parseador().stringToBinary();

        let cifradoAnt = this.cifrar_64(cadena, clave);

        return cifradoAnt;
    }

    /**
     * Permite desencriptar cadenas largas mayores a 64 bits
     *
     * @param cadena La cadena a desencriptar
     * @param clave La clave del desencriptado
     * @return La cadena ya desencriptada
     */
    desicifrar(cadena,clave) {

        //let cadenas64 = new Parseador().hexToBin(cadena);
       
        let cifradoAnt = this.descifrar_64(cadena, clave);

        return cifradoAnt;
    }

    /**
     * Encipta los bloques de solo 64 bits
     *
     * @param cadena Recibe una cadena en forma de binario de 64 bits
     * @param clave Recibe una clave de 48 bits
     * @return un bloque el 64 bits encriptado
     */
    cifrar_64(cadena, clave) {
        //Aplicar permutacion IP
        
        let cadenaPermutada = new Permutador().IP(cadena);
        //console.log('cadenitas' + cadenaPermutada).
        // Aplicar las 16 claves
        
        let cadenaPermutada_1 = new Feistel().cifrado(cadenaPermutada, clave);
      

        //Invertir la cadena R(16)L(16)
        let cadenaPermutada_2 = cadenaPermutada_1.substring(32, 64) + cadenaPermutada_1.substring(0, 32);

        //Permutacion final
        let encriptado = new Permutador().IP_1(cadenaPermutada_2);
        
        return encriptado;
    }

    /**
     * Encipta los bloques de solo 64 bits
     *
     * @param cadena Recibe una cadena en forma de binario de 64 bits
     * @param clave Recibe una clave de 48 bits
     * @return un bloque el 64 bits descifrado
     */
    descifrar_64(cadena, clave) {
      let cadenaPermutada = new Permutador().IP(cadena);
        //console.log('cadenitas' + cadenaPermutada).
        // Aplicar las 16 claves
        
        let cadenaPermutada_1 = new Feistel().descifrado(cadenaPermutada, clave);
      

        //Invertir la cadena R(16)L(16)
        let cadenaPermutada_2 = cadenaPermutada_1.substring(32, 64) + cadenaPermutada_1.substring(0, 32);

        //Permutacion final
        let encriptado = new Permutador().IP_1(cadenaPermutada_2);
     
        return encriptado;
    }

}
export default DES;
