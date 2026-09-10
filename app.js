import { PagamentoCartao } from "./model/PagamentoCartao.js";
import { PagamentoBoleto } from "./model/PagamentoBoleto.js";
import { PagamentoPix } from "./model/PagamentoPix.js";
import { Pagamento } from "./model/pagamento.js";
const pix = new PagamentoPix(1000, "gjkfdkgabryellkgfviadinkfnjsdn")
const cartao = new PagamentoCartao(500, 4883, 2)
const boleto = new PagamentoBoleto(250, "8412545623144")

pix.aplicarDesconto(10)
const pagamentos = [pix, cartao, boleto]
console.log('Pagamentos criados')
// const pagamento = new Pagamento(300)
// pagamentos.push(pagamento)
// console.log(pagamentos[3].getvalor)

for (let i = 0; i < pagamentos.length; i++) {
    const pagamento = pagamentos[i]
    pagamentos[i].processarPag();
    if (pagamento instanceof PagamentoCartao || pagamento instanceof PagamentoBoleto) {
        console.log(`Valor: ${pagamento.getvalor}`)
    }
}
console.log("Pagamentos processados")