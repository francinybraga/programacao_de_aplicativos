import { Pagamento } from "./pagamento.js";
export class PagamentoBoleto extends Pagamento {
    #codigoBarra
    constructor(valor, codigoBarra) {
        super(valor),
            this.#codigoBarra = codigoBarra
    }
    get codigoBarra() {
        return this.#codigoBarra
    }
        processarPag() {
        console.log(`Boleto gerado com sucesso ${this.#codigoBarra}`)
    }
}