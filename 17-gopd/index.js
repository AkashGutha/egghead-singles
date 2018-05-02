const tiger = {
    name: "george",
    get type() { return "big cat" }
}

console.log(Object.getOwnPropertyDescriptors(tiger))

const clone = Object.create(
    tiger,
    Object.getOwnPropertyDescriptors(tiger)
)

console.log(clone)
console.log(Object.getOwnPropertyDescriptors(clone))

// Use case: copying properties into an object 

const target={};
Object.assign(target, tiger);
Object.defineProperties(target, Object.getOwnPropertyDescriptors(tiger))
console.log(Object.getOwnPropertyDescriptors(target))
target.type= "big cat"

// classes

class Tiger{
    constructor(){
        this.name = "george"
    }
}
var a =Object.getOwnPropertyDescriptors(Tiger)

var tiger = new Tiger();
var b =Object.getOwnPropertyDescriptors(tiger)

console.log(a);
console.log(b);