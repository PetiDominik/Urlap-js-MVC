
import { URLAP_LEIRO } from "./urlapleiro.js";

class UrlapModel {
    #leiro;

    constructor() {
        this.#leiro = URLAP_LEIRO;
    }

    getLeiro() {
        return {...this.#leiro};
    }
}

export default UrlapModel;