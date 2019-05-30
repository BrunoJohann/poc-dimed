import { Categoria } from '../Categoria.model';
import { Promocao } from '../Promocao.model';

export class ItemDetalhe {
    constructor(
        public codigo?: number,
        public precoPor?: number,
        public precoDe?: number,
        public ean?: number,
        public origemDesconto?: string,
        public nomenclatura?: string,
        public nomenclaturaDetalhada?: string,
        public principioAtivo?: string,
        public classeTerapeutica?: string,
        public situacaoItem?: string,
        public advertencias?: Array<string>,
        public categorias?: Categoria[],
        public promocao?: Promocao,
    ) {}
}