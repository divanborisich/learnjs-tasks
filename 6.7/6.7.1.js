function getFunc() {
    let value = "test";
    console.log(value)

    let func = function() { console.log(value); };

    return func;
}

getFunc()(); // "test", из лексического окружения функции getFunc