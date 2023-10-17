
import UrlapModel from "../Model/UrlapModel.js";
import UrlapView from "../View/UrlapView.js";

class UrlapController {

    constructor() {
        console.log("Controller");
        const URLAP = new UrlapModel();
        new UrlapView($("#urlap"), URLAP.getLeiro());


        $(window).on("ujAdat", (event) => {
            let datas = event.detail;
            console.log(datas);
        });
    }
}

export default UrlapController;