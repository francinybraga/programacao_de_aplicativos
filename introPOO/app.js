import { PagamentoCartao } from "./model/PagamentoCartao.js";
import { PagamentoBoleto } from "./model/PagamentoBoleto.js";
import { PagamentoPix } from "./model/PagamentoPix.js";

const pix = new PagamentoPix(1000, "gjkfdkgabryellkgfviadinkfnjsdn")
const cartao = new PagamentoCartao(500, 4883, 2)
const boleto = new PagamentoBoleto(250, "8412545623144")

pix.aplicarDesconto(10)
const pagamentos = [pix, cartao, boleto]
console.log('Pagamentos criados')

for (let i = 0; i < pagamentos.length; i++) {
    pagamentos[i].processarPag();
}
console.log("Pagamentos processados")