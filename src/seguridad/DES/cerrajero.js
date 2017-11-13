import Parseador from './parseador';
import Permutador from './Permutador';
/**
 *
 * @author Saúl Fernando González Domínguez(Vicroni)
 * @version 06/11/2017 1.0
 */
class Cerrajero {

	generarClaves(clave) {
        //Transformar la clave de 64 bits en un binario
        //console.log("Clavesita" + clave);
        let claves = [];
        let claveBinaria = clave;
        if (claveBinaria.length != 64) {
            let n = 64 - claveBinaria.length;
            for (let i = 0; i < n; i++) {
                claveBinaria = "0" + claveBinaria;
            }
        }

        //Hacer una reduccion cad 8 bits para tener un clave de 56 bits
        let reduccion = "";
        for (let i = 0; i < claveBinaria.length; i++) {
            if ((i + 1) % 8 != 0) {
                reduccion =+ claveBinaria[i];
            }
        }

        //Hacer la primera permutacion
        //let clavePermutadaU = claveBinaria;

        let clavePermutadaU = new Permutador().PC_1(claveBinaria);

        //Dividir en dos bloques
        let c = clavePermutadaU.substring(0, 28);
        let d = clavePermutadaU.substring(28, 56);


        //Se hace un  currimiento para obtener 16 claves c
        let c_recorrida = [];
        c_recorrida[0] = this.currimiento(c, 0);
        for (let i = 1; i < 16; i++) {
            c_recorrida[i] = this.currimiento(c_recorrida[i - 1], i);
        }

        //Se hace un  currimiento para obtener 16 claves c
        let d_recorrida = [];
        d_recorrida[0] = this.currimiento(d, 0);
        for (let i = 1; i < 16; i++) {
            d_recorrida[i] = this.currimiento(d_recorrida[i - 1], i);
        }

        //Se unen las respectivas claves  c y d, 
        //despues de meten a la caja de permutación
        for (let i = 0; i < 16; i++) {
            claves[i] = this.permutacion_subclaves(c_recorrida[i], d_recorrida[i]);
        }
 
        return claves;
    }



	currimiento(subclave, i) {
    	let TC_1 = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
        for (let j = 0; j <TC_1[i]; j++) {
            subclave = subclave.substring(1, subclave.length) + subclave[0];
        }
        return subclave;
    }

    permutacion_subclaves(c, d) {
        let subclave = c + d;
        let res = new Permutador().PC_2(subclave);
        return res;
    }

}
	
export default Cerrajero;
