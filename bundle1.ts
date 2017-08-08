var VehicleNameSpace;
(function (VehicleNameSpace) {
    function carDetails(car) {
        console.log("model: " + car.model + ", engine: " + car.engine + "  and horsepower : " + car.horsepower);
    }
    VehicleNameSpace.carDetails = carDetails;
})(VehicleNameSpace || (VehicleNameSpace = {}));
///<reference path="bundle.ts"/>
var car = { model: "nano", engine: "100", horsepower: 200 };
VehicleNameSpace.carDetails(car);
