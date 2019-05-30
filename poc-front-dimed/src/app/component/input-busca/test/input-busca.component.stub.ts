import { Builder } from 'builder-pattern';
import { ItemDetalhe } from 'src/app/model/EstruturaPost/ItemDetalhe.model';
import { ProdutoDetalhe } from 'src/app/model/EstruturaPost/ProdutoDetalhe.model';
import { Estoque } from 'src/app/model/Estoque.model';
import { Precos } from 'src/app/model/EstruturaPreco/Precos.model';
import { Preco } from 'src/app/model/EstruturaPreco/Preco.model';


export class InputBuscaComponentStub {

    public static mockProdutoDetalhe() {
        return Builder<ProdutoDetalhe>()
                .itens([this.mockListaItensDetalhe()])
                .build()
    }

    public static mockListaItensDetalhe(): ItemDetalhe {
        return Builder<ItemDetalhe>()
                .codigo(123)
                .precoPor(2.9)
                .precoDe(null)
                .ean(null)
                .origemDesconto(null)
                .nomenclatura(null)
                .nomenclaturaDetalhada(null)
                .principioAtivo(null)
                .classeTerapeutica(null)
                .situacaoItem(null)
                .advertencias(null)
                .categorias(null)
                .promocao(null)
                .build()
    }

    public static mockEstoque(): Estoque {
        return Builder<Estoque>()
                .codigoItem(123)
                .filial(101)
                .estoqueLoja(2)
                .build()
    }

    public static mockPrecos(): Precos {
        return Builder<Precos>()
                .codigoItem(123)
                .preco(this.mockPreco())
                .build()
    }

    public static mockPreco(): Preco {
        return Builder<Preco>()
                .precoVenda(null)
                .precoPor(2.9)
                .precoFidelidade(null)
                .precoFidelidade55Mais(null)
                .build()
    }

    public getDetalhe() { }
    public getEstoque() { }
    public getPreco() { }

    public getProduto() { }
    public get() { }
}
