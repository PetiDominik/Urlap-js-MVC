
class TableItem {
    #id;
    #feladatAdatok;
    #szuloElem;
    #keys;

    constructor(id, feladat, szuloElem, keys) {
        this.#id = id;
        this.#feladatAdatok = feladat;
        this.#szuloElem = szuloElem;
        this.#keys = keys;

        this.#htmlBeagyaz();
    }

    #htmlKodLetrehoz() {
        let oszlopok = "";
        let element = this.#feladatAdatok;

        this.#keys.forEach(key => {
            let text = element[key] || "-";
            oszlopok += `<td>${text}</td>`;
        });
            
        let txt = `<tr class="` + (element.kesz ? "kesz" : "") +`">
                ${oszlopok}
                <td>
                ` + (element.kesz ? `<i class="fa fa-remove fa-2x"></i>` : `<i class="fa fa-check fa-2x"></i>`)
                + `<i class="fa fa-trash fa-2x"></i>
                </td>
            </tr>`;

        return txt;
    }

    #htmlBeagyaz() {
        const TXT = this.#htmlKodLetrehoz();
        this.#szuloElem.append(TXT);

        let szulo = this.#szuloElem.children("tr:last-child").children("td:last-child");
        
        /* console.log(this.#szuloElem.children("tr:last-child .fa-check")); */
        szulo.children(".fa-check").on("click", (event) => {
            this.#dispatch("isDoneListItem");
        });
        
        szulo.children(".fa-remove").on("click", (event) => {
            this.#dispatch("isDoneListItem");
        });

        szulo.children(".fa-trash").on("click", (event) => {
            this.#dispatch("removeListItem");
        });
    }

    #dispatch(evntName) {
        const EVENT = new CustomEvent(evntName, {detail : this.getId()});

        window.dispatchEvent(EVENT);
    }

    getId() {
        return this.#id;
    }

    checkId(id) {
        return this.#id == id;
    }
}

export default TableItem;