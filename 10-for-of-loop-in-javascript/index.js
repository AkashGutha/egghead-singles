let iterable = ["akash", "radhika", "seshu "]
Array.prototype.randomFn = ()=> {};

for( let variable in iterable ){
    console.log(variable);
}

console.log("-------------------");

for( let variable of iterable ){
    console.log(variable);
}

console.log("-------------------");

iterable = new Map([['one', 1], ['two', 2]]);

for( let variable of iterable ){
    console.log(variable);
}

console.log("-------------------");

iterable = new Set([1, 1, 2, 2, 1]);

for( let variable of iterable ){
    console.log(variable);
}
