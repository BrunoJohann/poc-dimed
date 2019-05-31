import { ItemFinal } from 'src/app/model/ItemFinal.model';
import { Builder } from 'builder-pattern';

export class ResultadoBuscaComponentStub { 

    public static mockItemFinal(): ItemFinal {
        return Builder<ItemFinal>()
                .nomeDetalhado('RITTER CEREAL BROWNIE CHOCO 25G AV')
                .codigoItem(12)
                .estoqueLoja(1)
                .precoPor(2.99)
                .precoDe(2.98)
                .precoVenda(3.0)
                .nomenclaturaVarejo("BARRA RITTER CEREAL BROWNI CHOC 25G AV")
                .ean(2)
                .origemDesconto("PROMOÇÃO")
                .nomenclatura(null)
                .nomenclaturaDetalhada(null)
                .principioAtivo(null)
                .classeTerapeutica(null)
                .situacaoItem(null)
                .advertencias(null)
                .categorias(null)
                .mostrarItem(null)
                .promocao(null)
                .build()
    }
    
    public open() { }

}