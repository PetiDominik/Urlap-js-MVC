
import UrlapModel from "../Model/UrlapModel.js";
import UrlapView from "../View/UrlapView.js";

class UrlapController {

    constructor() {
        console.log("Controller");
        const URLAP = new UrlapModel();
        new UrlapView($("#urlap"), URLAP.getLeiro());

    }
}

export default UrlapController;