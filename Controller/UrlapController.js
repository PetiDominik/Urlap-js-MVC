
import DataService from "../Model/DataService.js";
import UrlapModel from "../Model/UrlapModel.js";
import TableView from "../View/TableView.js";
import UrlapView from "../View/UrlapView.js";

class UrlapController {
    #dataService;

    constructor() {
        this.#dataService = new DataService();

        console.log("Controller");
        const URLAP = new UrlapModel();
        new UrlapView($("#urlap"), URLAP.getLeiro());
        this.#dataService.getData("../data.json", this.dataTable);


        $(window).on("ujAdat", (event) => {
            let datas = event.detail;
            console.log(datas);
        });
    }

    dataTable(datas) {
        new TableView(datas, $("#datas"));
    }
}

export default UrlapController;