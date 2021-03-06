import { Categoria } from './Categoria.model';
import { Promocao } from './Promocao.model';

export class ItemFinal {
    constructor(
        public nomeDetalhado?: string,
        public codigoItem?: number,
        public estoqueLoja?: number,
        public precoPor?: number,
        public precoDe?: number,
        public precoVenda?: number,
        public nomenclaturaVarejo?: string,
        public ean?: number,
        public origemDesconto?: string,
        public nomenclatura?: string,
        public nomenclaturaDetalhada?: string,
        public principioAtivo?: string,
        public classeTerapeutica?: string,
        public situacaoItem?: string,
        public advertencias?: Array<string>,
        public categorias?: Categoria[],
        public mostrarItem?: boolean,
        public promocao?: Promocao
    ) {}
}