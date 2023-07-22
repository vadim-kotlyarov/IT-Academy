class Car {
    constructor() {
        this.brand = 'brand';
        this.model = 'model';
        this.color = 'color';
        this.fuelConsumption = 0;
        this.price = 10000;
    }
    getPrice() {
        return this.price;
    }
}

class Economy extends Car {
    constructor() {
        super();
        this.climateControl = false;
        this.signal = false;
        this.parctronic = false;
        this.babyCarSeat = false;
    }
}

class Comfort extends Car {
    constructor() {
        super();
        this.climateControl = true;
        this.signal = true;
        this.parctronic = true;
        this.babyCarSeat = false;
    }
}

class CarBuilder {
    constructor(type) {
        if (type == 'economy') {
            this.car = new Economy();
        } else if (type == 'comfort') {
            this.car = new Comfort();
        } else {
            console.log('Type is not defined. Allowed types: economy, comfort.')
        }

    }

    changeBrand(brand) {
        this.car.brand = brand;
        return this;
    }

    changeModel(model) {
        this.car.model = model;
        return this;
    }

    changeColor(color) {
        this.car.color = color;
        return this;
    }

    changeFuelConsumption(fuelConsumption) {
        this.car.fuelConsumption = fuelConsumption;
        return this;
    }

    changePrice(price) {
        this.car.price = price;
        return this;
    }

    build() {
        return this.car;
    }
}

class CarWithBabyCarSeat {
    constructor(car) {
        this.car = car;
        this.car.price = this.car.getPrice() + 100;
        this.car.babyCarSeat = true;
    }

}

function getNewArrayCarAutopark(arrayCarAutopark) {
    let newArrayCarAutopark = [];
    for (let i = 0; i < arrayCarAutopark.length; i++) {
        if (arrayCarAutopark[i] instanceof CarWithBabyCarSeat) {
            newArrayCarAutopark[i] = arrayCarAutopark[i].car
        } else {
            newArrayCarAutopark[i] = arrayCarAutopark[i]
        }
    }
    return newArrayCarAutopark;
}

function getFleetCost(arrayCarAutopark) {
    let newArrayCarAutopark = getNewArrayCarAutopark(arrayCarAutopark);
    let fleetCost = newArrayCarAutopark.reduce(function (sum, car) {
        return sum + car.price;
    }, 0);
    return fleetCost;
}

function sortFuelConsumption(arrayCarAutopark) {
    let newArrayCarAutopark = getNewArrayCarAutopark(arrayCarAutopark);
    newArrayCarAutopark.sort(function (a, b) {
        if (a.fuelConsumption > b.fuelConsumption) {
            return 1;
        }
        if (a.fuelConsumption < b.fuelConsumption) {
            return -1;
        }
        return 0;
    });
    return newArrayCarAutopark;
}

function findCarsByGivenParameters(arrayCarAutopark, searchData) {
    let newArrayCarAutopark = getNewArrayCarAutopark(arrayCarAutopark);
    if (Object.keys(searchData).includes('brand')) {
        newArrayCarAutopark = newArrayCarAutopark.filter(car => car.brand == searchData.brand)
    }
    if (Object.keys(searchData).includes('model')) {
        newArrayCarAutopark = newArrayCarAutopark.filter(car => car.model == searchData.model)
    }
    if (Object.keys(searchData).includes('color')) {
        newArrayCarAutopark = newArrayCarAutopark.filter(car => car.color == searchData.color)
    }
    if (Object.keys(searchData).includes('fuelConsumption')) {
        newArrayCarAutopark = newArrayCarAutopark.filter(car => car.fuelConsumption == searchData.fuelConsumption)
    }
    if (Object.keys(searchData).includes('price')) {
        newArrayCarAutopark = newArrayCarAutopark.filter(car => car.price == searchData.price)
    }
    if (Object.keys(searchData).includes('climateControl')) {
        newArrayCarAutopark = newArrayCarAutopark.filter(car => car.climateControl == searchData.climateControl)
    }
    if (Object.keys(searchData).includes('signal')) {
        newArrayCarAutopark = newArrayCarAutopark.filter(car => car.signal == searchData.signal)
    }
    if (Object.keys(searchData).includes('parctronic')) {
        newArrayCarAutopark = newArrayCarAutopark.filter(car => car.parctronic == searchData.parctronic)
    }
    if (Object.keys(searchData).includes('babyCarSeat')) {
        newArrayCarAutopark = newArrayCarAutopark.filter(car => car.babyCarSeat === searchData.babyCarSeat)
    }
    return newArrayCarAutopark;
}

let car1 = new CarBuilder('economy')
    .changeBrand('Renault')
    .changeModel('Logan')
    .changeColor('black')
    .changeFuelConsumption(10)
    .changePrice(12000)
    .build();

let car2 = new CarBuilder('comfort')
    .changeBrand('WV')
    .changeModel('Polo')
    .changeColor('red')
    .changeFuelConsumption(12)
    .changePrice(16000)
    .build();

car2 = new CarWithBabyCarSeat(car2);

let car3 = new CarBuilder('economy')
    .changeBrand('Renault')
    .changeModel('Logan')
    .changeColor('white')
    .changeFuelConsumption(9.5)
    .changePrice(12000)
    .build();

car3 = new CarWithBabyCarSeat(car3);

let car4 = new CarBuilder('comfort')
    .changeBrand('WV')
    .changeModel('Polo')
    .changeColor('grey')
    .changeFuelConsumption(11.5)
    .changePrice(16000)
    .build();

let arrayCarAutopark = [car1, car2, car3, car4];

getFleetCost(arrayCarAutopark);
sortFuelConsumption(arrayCarAutopark);
let searchData = {
    brand: 'WV',
    model: 'Polo',
    color: 'red',
    fuelConsumption: 12,
    price: 16100,
    climateControl: true,
    signal: true,
    parctronic: true,
    babyCarSeat: true
}
findCarsByGivenParameters(arrayCarAutopark, searchData);
console.log(getFleetCost(arrayCarAutopark));
console.log(sortFuelConsumption(arrayCarAutopark));
console.log(findCarsByGivenParameters(arrayCarAutopark, searchData));