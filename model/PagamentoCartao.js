import { Pagamento } from "./pagamento.js";
export class PagamentoCartao extends Pagamento {
    #ultimonum
    #parcelas
    constructor(valor, ultimonum, parcelas) {
        super(valor),
            this.#ultimonum = ultimonum,
            this.#parcelas = parcelas
    }
    get ultimonum() {
        return this.#ultimonum
    }
    get parcelas() {
        return this.#parcelas
    }

    processarPag() {
        console.log(`Enviar dados do cartão para a operadora ${this.#ultimonum} e as parcelas ${this.#parcelas}`)
    }
}