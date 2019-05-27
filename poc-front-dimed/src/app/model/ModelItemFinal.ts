import { Categoria } from './Categoria';

export class ModelItemFinal {
    constructor(
        // codigoItem?: number,
        public origemDesconto?: string,
        public precoPor?: number,
        public precoDe?: number,
        public nomenclatura?: string,
        public nomenclaturaDetalhada?: string,
        public principioAtivo?: string,
        public classeTerapeutica?: number,
        public situacaoItem?: string,
        public advertencias?: Array<string>,
        public categorias?: Categoria[]
    ) {}
}