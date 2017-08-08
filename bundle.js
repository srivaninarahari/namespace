var VehicleNameSpace;
(function (VehicleNameSpace) {
    function carDetails(car) {
        console.log("model: " + car.model + ", engine: " + car.engine + "  and horsepower : " + car.horsepower);
    }
    VehicleNameSpace.carDetails = carDetails;
})(VehicleNameSpace || (VehicleNameSpace = {}));
