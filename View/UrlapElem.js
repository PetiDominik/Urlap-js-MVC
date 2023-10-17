
class UrlapElem {
    #formElem;
    #adatok;
    #key;
    #inputElem;
    #valid;
    #invalid;
    #isValid;

    constructor(formElem, adatok, key) {
        this.#isValid = false;
        this.#formElem = formElem;
        this.#adatok = adatok;
        this.#key = key;
        this.#elem();

        this.#inputElem = $(`#in-${key}`);
        this.#valid = this.#formElem.children("div:last-child").children(`#valid-${key}`);
        this.#invalid = this.#formElem.children("div:last-child").children(`#invalid-${key}`);

        this.#inputElem.on("input", () => {
            let val = this.#inputElem.val();
            let regex = this.#adatok.pattern;
            let regexObj = new RegExp(regex);
            
            if (regexObj.test(val)) {
                this.#isValid = true;
                this.#valid.removeClass("elrejt");
                this.#invalid.addClass("elrejt");
            } else {
                this.#isValid = false;
                this.#valid.addClass("elrejt");
                this.#invalid.removeClass("elrejt");
            }
        });
    }

    #elem() {
        let txt = `<div><label for="${this.#key}">${this.#adatok.extra.label}</label><input id="in-${this.#key}"`;

        for (const key in this.#adatok) {
            if (key != "extra" && Object.hasOwnProperty.call(this.#adatok, key)) {
                const data = this.#adatok[key];
                txt += ` ${key}="${data}"`;
            }
        }
        txt += `/><div id="valid-${this.#key}" class="elrejt">Ok</div><div id="invalid-${this.#key}" class="elrejt">${this.#adatok.extra.validation}</div></div>`;

        this.#formElem.append(txt);
    }

    isValid() {
        return this.#isValid;
    }

    getValue() {
        return this.#inputElem.val();
    }

    getKey() {
        return this.#key
    }
}

export default UrlapElem;