import UrlapElem from "./UrlapElem.js";

class UrlapView {
    #szuloElem;
    #leiro;
    #formElem;
    #urlapElemLista = [];
    #urlapAdat = {};

    constructor(szuloElem, leiro) {
        this.#leiro = leiro;
        this.#szuloElem = szuloElem;
        this.#szuloElem.append("<form>");
        this.#formElem = this.#szuloElem.children("form");

        this.#urlapOsszerak();

        $("#submit").on("click", (event) => {
            event.preventDefault();
            
            let index = 0;
            while (index < this.#urlapElemLista.length && this.#urlapElemLista[index].isValid()) {
                index++;
            }

            if (index < this.#urlapElemLista.length) {
                alert("Hibás adatok!");
            } else {
                this.#urlapAdat = {}

                this.#urlapElemLista.forEach(element => {
                    this.#urlapAdat[element.getKey()] = element.getValue();
                });
                
                window.dispatchEvent(new CustomEvent("ujAdat", {detail : this.#urlapAdat}));
            }

        });
    }

    #urlapOsszerak() {
        this.#urlapElemLista = [];

        for (const key in this.#leiro) {
            if (Object.hasOwnProperty.call(this.#leiro, key)) {
                this.#urlapElemLista.push(new UrlapElem(this.#formElem, this.#leiro[key], key));
            }
        }
        this.#formElem.append(`<div><input type="submit" id="submit" value="Ok" /></div>`);
    }
}

export default UrlapView;