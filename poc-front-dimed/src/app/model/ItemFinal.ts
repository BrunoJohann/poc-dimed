import { Categoria } from './Categoria';

export class ItemFinal {
    constructor(
        public codigoItem?: number,
        public estoqueLoja?: number,
        public precoPor?: number,
        public nomenclaturaVarejo?: string,
        public ean?: number,
        public origemDesconto?: string,
        public precoDe?: number,
        public nomenclatura?: string,
        public nomenclaturaDetalhada?: string,
        public principioAtivo?: string,
        public classeTerapeutica?: string,
        public situacaoItem?: string,
        public advertencias?: Array<string>,
        public categorias?: Categoria[]
    ) {}
}