import Permutador from './Permutador';
import Sustituidor from './Sustituidor';
import Cerrajero from './Cerrajero';
class Feistel {
    
    cifrado(cadena,clave){
        let claves = new Cerrajero().generarClaves(clave);
       for (let i = 0; i<claves.length; i++) {
            cadena = this.aplicarLlave(cadena, claves[i]);
              
        }
        return cadena;
    }
    
    /**
     * Aplica un descifrado feistel a una cadena y genera las claves apartir de
     * la principal
     * @param cadena es una cadena a la que aplicarle el feistel
     * @param clave es la clave del feistel
     * @return es la cadena descifrada
     */    
    descifrado(cadena,clave){
        let claves = new Cerrajero().generarClaves(clave);
        for (let i = claves.length - 1; i >= 0;  i--) {
             cadena = this.aplicarLlave(cadena, claves[i]);
        }
        return cadena;


    }
    
    
    /**
     * Es el algoritmo feistel aplicado a DES
     * @param cadena recibe una cadena la cadena aplicar el feiste
     * @param clave es la llave del feistel
     * @return una cadena a la que se le aplico una llave
     */
    aplicarLlave(cadena,clave) {      

        let Lo = cadena.substring(0, 32);
        let Ro = cadena.substring(32, 64);

        //Se realiza la expansion a 48 bits
        let Ri = new Permutador().E(Ro);
        
        // Se realiza el xor con la clave
        Ri = this.XOR(Ri, clave);
        
        Ri = new Sustituidor().sustitucion(Ri);
        
        //Se realiza la permutacion P a Ri
        Ri = new Permutador().P(Ri);

        //Aplicar Xor Lo con Ri
        Ri = this.XOR(Lo, Ri);
        //Concatener de manera invertida
        return Ro + Ri;
    }


    /**
     * Aplica un Xor sin pasar a binario los datos, suponiendo que ambas cadenas
     * son iguales
     *
     * @param binario_1 Un bloque de bits del mismo tamaño que binario_2
     * @param binario_2 Un bloque de bits del mismo tamaño que binario_1
     * @return
     */
    XOR(binario_1,binario_2) {
        //StringBuilder resultado = new StringBuilder();

        let resultado="";
        for (let i = 0; i < binario_1.length; i++) {
          
            if (binario_1.charAt(i) == binario_2.charAt(i)) {
                //resultado.append('0');
                resultado += '0';
            } else {
                //resultado.append('1');
                resultado += '1';
            }
        }

        return resultado.toString();
    } 
}
export default Feistel;