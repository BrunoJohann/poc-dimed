import { ItemFinal } from 'src/app/model/ItemFinal.model';
import { Builder } from 'builder-pattern';

export class PrimeiraTelaComponentStub {

    public static mockItemFinalArray(): ItemFinal[] {
        return [
                Builder<ItemFinal>()
                .nomeDetalhado('BARRA RITTER CEREAL BROWNI CHOC 25G AV')
                .codigoItem(555)
                .estoqueLoja(1)
                .precoPor(2.9)
                .precoDe(2.9)
                .precoVenda(2.9)
                .nomenclaturaVarejo('BARRA RITTER CEREAL BROWNI CHOC 25G AV')
                .ean(123456)
                .origemDesconto(null)
                .nomenclatura(null)
                .nomenclaturaDetalhada(null)
                .principioAtivo(null)
                .classeTerapeutica(null)
                .situacaoItem(null)
                .advertencias(null)
                .categorias(null)
                .mostrarItem(null)
                .promocao(null)
                .build(),

                Builder<ItemFinal>()
                .nomeDetalhado('PARAC+CAF 500/65MG 20CP REV EMS GEN C')
                .codigoItem(5656)
                .estoqueLoja(-5)
                .precoPor(2.5)
                .precoDe(2.5)
                .precoVenda(2.5)
                .nomenclaturaVarejo('PARAC+CAF 500/65MG 20CP REV EMS GEN C')
                .ean(654321)
                .origemDesconto(null)
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
        ]
    }
    
    public get() { }

}