function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b;
    };
}

function inArray(arr) {
    return function (x) {
        return arr.includes(x)
    }
}

let arr1 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr1.filter(inBetween(4, 7)));
console.log(arr1.filter(inArray([5, 2, 10])));
console.log(arr1.filter(inArray([5, 2, 10])));
