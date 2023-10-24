
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
            this.#validation();
        });
    }

    #elem() {
        let txt = `<div><label for="${this.#key}">${this.#adatok.extra.label}</label><input id="in-${this.#key}"`;

        for (const key in this.#adatok) {
            if (key != "extra" && Object.hasOwnProperty.call(this.#adatok, key)) {
                const data = this.#adatok[key];
                if (data == null) {
                    console.log(key);
                    txt += ` ${key}`;
                } else {
                    txt += ` ${key}="${data}"`;
                }
            }
        }
        txt += `/><div id="valid-${this.#key}" class="elrejt">Ok</div><div id="invalid-${this.#key}" class="elrejt">${this.#adatok.extra.validation}</div></div>`;

        this.#formElem.append(txt);
    }

    #validation() {
        let isValid = false;

        switch (this.#adatok.type) {
            case "date":
                let dateVal = new Date(this.#inputElem.val());
                
                isValid = dateVal >= new Date(this.#adatok.min) && dateVal <=  new Date(this.#adatok.max);
                break;
            case "checkbox":
                isValid = this.#adatok.extra.needToBeChecked == this.#inputElem.is(":checked");
                break;
            case "number":
                let num = this.#inputElem.val();
                isValid = this.#adatok.extra.min <= num && num <= this.#adatok.extra.max;
                break;
            default:
                let val = this.#inputElem.val();
                let regex = this.#adatok.pattern;
                isValid = new RegExp(regex).test(val);
                break;
        }

        if (isValid) {
            this.#isValid = true;
            this.#valid.removeClass("elrejt");
            this.#invalid.addClass("elrejt");
        } else {
            this.#isValid = false;
            this.#valid.addClass("elrejt");
            this.#invalid.removeClass("elrejt");
        }
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