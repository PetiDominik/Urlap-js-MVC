
class DataService {

    constructor() {

    }

    getData(endPoint, okFnc) {
        axios.get(endPoint)
            .then(function (response) {

                okFnc(response.data.names);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
            });
    }

    addData() {
        
    }
}

export default DataService;