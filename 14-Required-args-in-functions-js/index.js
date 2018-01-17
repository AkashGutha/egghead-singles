
const required = function(param){
    throw new Error(`
        ${param} is not defined
    `)
}

const Division = function(
    a=required("a"),
    b=required("b")
){
    return a/b
}

console.log(Division(10, 2))
