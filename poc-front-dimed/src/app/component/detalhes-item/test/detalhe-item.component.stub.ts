import { Builder } from 'builder-pattern';
import { ItemFinal } from 'src/app/model/ItemFinal.model';
import { Promocao } from 'src/app/model/Promocao.model';

export class DetalhePackComponentStub {

    public static mockItemFinal(): ItemFinal {
        return Builder<ItemFinal>()
                .nomeDetalhado('RITTER CEREAL BROWNIE CHOCO 25G AV')
                .codigoItem(12)
                .estoqueLoja(1)
                .precoPor(2.99)
                .precoDe(2.98)
                .precoVenda(3.0)
                .nomenclaturaVarejo('BARRA RITTER CEREAL BROWNI CHOC 25G AV')
                .ean(2)
                .origemDesconto('PROMOÇÃO')
                .nomenclatura(null)
                .nomenclaturaDetalhada(null)
                .principioAtivo(null)
                .classeTerapeutica(null)
                .situacaoItem(null)
                .advertencias(null)
                .categorias(null)
                .mostrarItem(null)
                .promocao(this.mockPromocao())
                .build()
    }

    public static mockPromocao(): Promocao {
        return Builder<Promocao>()
                .codigoFilialPromotora(1)
                .codigoPromocao(1)
                .percentualDesconto(1)
                .build()
    }

    public setItemFinal() { }

}