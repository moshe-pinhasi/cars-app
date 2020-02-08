import {storage} from './storage.service'

const KEY = 'cars'

var gFilterBy = 'All';
var ids = new Array(9).fill().map( (_, idx) => idx)
var gCars = _createCars();

function getCars() {
    return gCars;
}

function getCarCount() {
    return gCars.length
}

function removeCar(carId) {
    var idx = gCars.findIndex(car => car.id === carId)
    gCars.splice(idx, 1);
    storage.store(KEY, gCars);
}

function getCar(carId) {
    return gCars.find(car => car.id === carId)
}

function addCar(vendor) {
    var car = _createCar(vendor);
    gCars.unshift(car);
    storage.store(KEY, gCars);
}

function updateCar(car) {
    var idx = gCars.findIndex(currCar => currCar.id === car.id)
    gCars[idx] = car;
    storage.store(KEY, gCars);
}


// Private functions:
function _createCars() {
    var cars = storage.load(KEY);
    if (cars) return cars;

    var cars = ['Marley', 'Barney', 'Olive', 'Harry', 'Carush', 'Carko', 'Carti', 'Misty', 'Wills']
        .map(_createCar)

    storage.store(KEY, cars);
    return cars;
}

function _createCar(vendor) {
    return {
        id: _makeId(),
        vendor: vendor,
        speed: Math.floor(Math.random() * 100) + 80,
        desc: `Driving ${vendor}, is fun and exciting,  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente aut consequuntur fugiat pariatur eligendi deleniti illo omnis architecto iure libero dolores earum voluptatem corporis eveniet necessitatibus dolorem, cupiditate itaque praesentium.`
    }
}

function _makeId() {
    const idx = parseInt(Math.random() * ids.length)
    const id = ids[idx]
    ids.splice(idx, 1)
    return id
}

export const carService = {
    getCars,
    addCar,
    updateCar,
    removeCar,
    getCarCount
}

