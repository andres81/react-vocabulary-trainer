import * as util from "../utils"

test('Removes elem from array', () => {
    let testArray = [1, 2, 3, "Some other element"];
    util.removeArrayElement(testArray, 3)
    expect(testArray).toEqual([1, 2, "Some other element"]);
})

test('Creation of random number given a roof value', () => {
    for (let i=0;i<1000;++i) {
        let random = util.randomNumber(5)
        expect(random).toBeGreaterThanOrEqual(0);
        expect(random).toBeLessThanOrEqual(5);

        random = util.randomNumber(1)
        expect(random).toBeGreaterThanOrEqual(0);
        expect(random).toBeLessThanOrEqual(1);
    }
})

test('Test deepcopy is truely making a deep copy', () => {
    let object = {};
    object.deeperObject = {}
    let someArray = ["1", 2, true];
    object.deeperObject.deepArray = someArray;
    object.someArray = someArray;

    let deepCopy = util.deepCopy(object);

    deepCopy.deeperObject.deepArray[0] = "2";
    deepCopy.deeperObject.deepArray[1] = 3;
    deepCopy.deeperObject.deepArray[2] = false;

    expect(object.deeperObject.deepArray[0]).toBe("1");
    expect(object.deeperObject.deepArray[1]).toBe(2);
    expect(object.deeperObject.deepArray[2]).toBe(true);
});
