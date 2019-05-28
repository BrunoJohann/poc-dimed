export class consultaRegrasFiscais {
    constructor(
        public uf?: string,
        public pais?: string,
        public ufDestino?: string,
        public paisDestino?: string,
    ) {
        uf = "RS",
		pais = "BR",
		ufDestino = "RS",
		paisDestino = "BR"
    }
}