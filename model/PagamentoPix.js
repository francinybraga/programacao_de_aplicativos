import { Pagamento } from "./pagamento.js";
export class PagamentoPix extends Pagamento {
    #chavePix;
    constructor(valor, chavePix){
        super(valor);
        this.#chavePix = chavePix;
    }

    get chavePix(){
        return this.#chavePix;
    }
    processarPag() {
        console.log(`Copie e cole essa chave pix ${this.#chavePix} no valor ${this.getvalor}`)
    }
}