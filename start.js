function factoryFactory(type) {
    return function(make, model, year, tof = type) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.type = tof;
    };
}

const bicycleFactory = factoryFactory("bicycle");
const bike1 = new bicycleFactory("bike1", "modelA", "1999");
const bike2 = new bicycleFactory("bike2", "modelB", "2003");
const bike3 = new bicycleFactory("bike3", "modelC", "2007");

const carFactory = factoryFactory("car");
const car1 = new carFactory("car1", "modelA", "1999");
const car2 = new carFactory("car2", "modelB", "2003");
const car3 = new carFactory("car3", "modelC", "2007");

const boatFactory = factoryFactory("boat");
const boat1 = new boatFactory("boat1", "modelA", "1996");
const boat2 = new boatFactory("boat2", "modelB", "2005");
const boat3 = new boatFactory("boat3", "modelC", "2010");

const blimpFactory = factoryFactory("blimp");
const blimp1 = new blimpFactory("blimp1", "modelA", "1924");
const blimp2 = new blimpFactory("blimp2", "modelB", "1925");
const blimp3 = new blimpFactory("blimp3", "modelC", "1931");

const trainFactory = factoryFactory("train");
const train1 = new trainFactory("train1", "modelA", "1924");
const train2 = new trainFactory("train2", "modelB", "1925");
const train3 = new trainFactory("train3", "modelC", "1931");

const vehicles = [
    bike1,
    bike2,
    bike3,
    car1,
    car2,
    car3,
    boat1,
    boat2,
    boat3,
    blimp1,
    blimp2,
    blimp3,
    train1,
    train2,
    train3,
];

for (const i in vehicles) {
    console.log(vehicles[i]);

};

console.log(typeof carFactory);
///type of factory is Function
console.log(typeof boat1);
////type of  created object is Object