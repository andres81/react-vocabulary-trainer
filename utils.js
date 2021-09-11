/**
    Take x random indexes of an array with length n
    For example:
    [102, a, "do it", "or not", 42] and x = 3, will result possibly in: [4, 1, 3]

    1. Create an array with the numbers 0 up to and including (n-1), called indexArray
    2. Create an empty array, called resultArray
    3. Do x times:
        a. Calculate a random index between 0 and indexArray.length-1, called calculatedIndex:
                indexArray[ Math.random * indexArray.length ]
        a. Take an element from indexArray using calculatedIndex
        b. Put the element in resultArray
        c. Remove calculatedIndex from indexArray: indexArray.splice(index, 1)
*/
export const randomArrayIndexes = (x, array) => {
    if (!array || array.length === 0 || x < 1 || x > array.length) {
        throw 'Invalid parameters for randomArrayindexes: [' + x + '] [' + array + ']';
    }
    let indexArray = [];
    array.forEach((elem, index) => indexArray.push(index));
    let resultArray = [];
    for (let i=0;i<x;++i) {
        let calculatedIndex = randomNumber(indexArray.length-1);
        resultArray.push(indexArray[calculatedIndex]);
        indexArray.splice(calculatedIndex, 1);
    }
    return resultArray;
}

export const removeArrayElement = (array, elem) => {
    let index = array.indexOf(elem);
    if (index < 0) return;
    array.splice(index, 1);
}

export const randomNumber = (roof) => {
    return Math.floor(Math.random()*roof+0.5);
}

export const deepCopy = (object) => {
    return JSON.parse(JSON.stringify(object));
}

export const addElementNofTimes = (array, element, nofTimes) => {
    return array.concat(Array(nofTimes).fill(element));
}

export const replaceIntInArray = (array, oldItem, newItem) => {
    let index = array.indexOf(parseInt(oldItem));
    if (index >= 0) {
        array[index] = newItem;
    }
}

export const randomElementFromArray = (array) => {
    let index = array.length === 1 ? 0 : randomNumber(array.length-1);
    return array[index];
}

export const createNaturalNumbersArray = (size) => {
    let naturalNumbersArray = [];
    for (let i=0;i<size;++i) {
        naturalNumbersArray.push(i);
    }
    return naturalNumbersArray;
};
