namespace VehicleNameSpace{
export interface Car{
    model:string;
    engine:string;
    horsepower:number;
}
export function carDetails(car:Car){
console.log(`model: ${car.model}, engine: ${car.engine}  and horsepower : ${car.horsepower}`)
}
}
