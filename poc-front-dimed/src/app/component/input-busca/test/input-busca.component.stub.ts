import { Builder } from 'builder-pattern';
import { ItemDetalhe } from 'src/app/model/EstruturaPost/ItemDetalhe.model';
import { ProdutoDetalhe } from 'src/app/model/EstruturaPost/ProdutoDetalhe.model';
import { Estoque } from 'src/app/model/Estoque.model';
import { Precos } from 'src/app/model/EstruturaPreco/Precos.model';
import { Preco } from 'src/app/model/EstruturaPreco/Preco.model';
import { Produto } from 'src/app/model/Produto.model';
import { ItemFinal } from 'src/app/model/ItemFinal.model';
import { Promocao } from 'src/app/model/Promocao.model';


export class InputBuscaComponentStub {

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

    public static mockItemFinal(): ItemFinal {
        return Builder<ItemFinal>()
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
    }

    public static mockItemFinalAtribuidoValores(): ItemFinal {
        return Builder<ItemFinal>()
                .nomeDetalhado('PARAC+CAF 500/65MG 20CP REV EMS GEN C')
                .codigoItem(5656)
                .estoqueLoja(2)
                .precoPor(2.9)
                .precoDe(2.9)
                .precoVenda(2.9)
                .nomenclaturaVarejo('PARAC+CAF 500/65MG 20CP REV EMS GEN C')
                .ean(654321)
                .origemDesconto('PROMOCAO')
                .nomenclatura('PARAC+CAF 500/65MG 20CP REV EMS GEN C')
                .nomenclaturaDetalhada('PARAC+CAF 500/65MG 20CP REV EMS GEN C')
                .principioAtivo(null)
                .classeTerapeutica(null)
                .situacaoItem(null)
                .advertencias(null)
                .categorias(null)
                .mostrarItem(true)
                .promocao(this.mockPromocao())
                .build()
    }

    public static mockProduto(): Produto {
        return Builder<Produto>()
                .codigoItem(123)
                .nomenclaturaVarejo('')
                .build()
    }

    public static mockProdutoDetalhe(): ProdutoDetalhe {
        return Builder<ProdutoDetalhe>()
                .itens([this.mockListaItensDetalhe()])
                .build()
    }

    public static mockProdutoDetalheVazio(): ProdutoDetalhe {
        return Builder<ProdutoDetalhe>()
                .itens([null])
                .build()
    }

    public static mockListaItensDetalhe(): ItemDetalhe {
        return Builder<ItemDetalhe>()
                .codigo(123)
                .precoPor(2.9)
                .precoDe(2.9)
                .ean(654321)
                .origemDesconto('PROMOCAO')
                .nomenclatura("PARAC+CAF 500/65MG 20CP REV EMS GEN C")
                .nomenclaturaDetalhada("PARAC+CAF 500/65MG 20CP REV EMS GEN C")
                .principioAtivo(null)
                .classeTerapeutica(null)
                .situacaoItem(null)
                .advertencias(null)
                .categorias(null)
                .promocao(this.mockPromocao())
                .build()
    }

    public static mockEstoque(): Estoque[] {
        return [Builder<Estoque>()
                .codigoItem(123)
                .filial(101)
                .estoqueLoja(2)
                .build()]
    }

    public static mockPrecos(): Precos[] {
        return [Builder<Precos>()
                .codigoItem(123)
                .preco(this.mockPreco())
                .build()]
            
    }

    public static mockPreco(): Preco {
        return Builder<Preco>()
                .precoVenda(2.9)
                .precoPor(2.9)
                .precoFidelidade(null)
                .precoFidelidade55Mais(null)
                .build()
    }

    public static mockPromocao(): Promocao {
        return Builder<Promocao>()
                .codigoFilialPromotora(1)
                .codigoPromocao(1)
                .percentualDesconto(1)
                .build()
    }

    public getDetalhe() { }
    public getEstoque() { }
    public getPreco() { }

    public getProduto() { }
    public get() { }
}
