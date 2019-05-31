import { Builder } from 'builder-pattern';

import { Produto } from 'src/app/model/Produto.model';

export class BuscaInicialServiceStub { 

    public static mockProduto(): Produto[] {
        return [
                Builder<Produto>()
                .codigoItem(123)
                .nomenclaturaVarejo('')
                .build()
            ]
    }

}