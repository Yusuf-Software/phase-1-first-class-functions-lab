// Code your solution in this file!
const returnFirstTwoDrivers = function (array) {
    let newArr = [array[0], array[1]];
    return newArr;
};

const returnLastTwoDrivers = function (array) {
    let newArr = [array[array.length - 2], array[array.length - 1]];
    return newArr;
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return function () {
        return fare ** 2;
    }
}

function fareDoubler(fare) {
    const cb = createFareMultiplier(fare)(); //I didn't get what was this function invoke for? :K
    return fare * 2;
}

function fareTripler(fare) {
    const cb = createFareMultiplier(fare)(); //I didn't get what was this function invoke for? :K
    return fare * 3;
}

function selectDifferentDrivers(drivers, func) {
    return func(drivers);
}