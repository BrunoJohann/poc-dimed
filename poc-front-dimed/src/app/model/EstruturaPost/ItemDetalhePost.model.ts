import { ItemPost } from './ItemPost.model';
import { consultaRegrasFiscais } from './ConsultaRegrasFiscais.model';

export class ItemDetalhePostModel {
    constructor(
        public filial?: string,
        public perfil?: number,
        public itens?: ItemPost[],
        public consultaRegrasFiscais?: consultaRegrasFiscais[]
    ) {}
}