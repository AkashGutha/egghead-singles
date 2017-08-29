
// Lesson : Array includes method in ES2016 (ES7)
// Author : Akash Gutha

const x = [NaN];

console.log(x.includes(NaN));

// older method
console.log( x.indexOf(NaN) >= 0 )

console.log([-0].includes(+0))

const y = Uint8Array.of(1,5,6,6,7,8)
console.log( y.includes(8) )
