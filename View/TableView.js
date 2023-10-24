import { URLAP_LEIRO } from "../Model/urlapleiro.js";
import TableItem from "./TableItem.js";

class TableView {
    #szuloElem;
    #container;
    #keys;
    #tableId;

    constructor(DATAS, szuloElem, tableId) {
        this.#tableId = tableId;
        this.#keys = Object.keys(DATAS[0] || []).filter(key => key != "kesz" && key != "torolve");
        this.#szuloElem = szuloElem;
        this.#tableInsert();
        this.#container = $(`#${this.#tableId} tbody`);

        DATAS.forEach((item, index) => {
            new TableItem(index, item, this.#container, this.#keys);
        });
        
    }

    #tableInsert() {
        this.#szuloElem.html();

        let txt = `<table class="table" id="${this.#tableId}"><thead><tr>`;
        this.#keys.forEach(key => {
            let text = URLAP_LEIRO[key].extra.label;
            
            txt += `<th>${text}</th>`;
        });
        /*<i class="fa fa-plus fa-2x" title="Új elem hozzáadása"></i>*/
        txt += `<th>
                    
                </th></tr></thead><tbody></tbody></table>`;

        this.#szuloElem.html(txt);
    }

}

export default TableView;