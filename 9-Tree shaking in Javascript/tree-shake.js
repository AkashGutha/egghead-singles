var esprima = require("esprima");
var estraverse = require("estraverse");
var escodegen = require("escodegen");

// read the index file
var fs = require("fs");
var code = fs.readFileSync("./index.js", {
  encoding: "UTF-8"
});


// collect our functions and call expressions.
var fn_nodes = [];
var call_nodes = [];
var ast = esprima.parseScript(code, {}, function(node){
    if(node.type == esprima.Syntax.FunctionDeclaration){
        // add it to the fns array
        fn_nodes.push(node)
    }
    if(node.type == esprima.Syntax.CallExpression){
        // add it to the fns array
        call_nodes.push(node)
    }
})

// get all our used functions
var used_fns = []

fn_nodes.forEach(function(fn_node) {
    call_nodes.forEach(function(call_node) {
        
        if(fn_node.id.name === call_node.callee.name && used_fns.indexOf(fn_node) <= 0){
            // valid fn 
            used_fns.push(fn_node);
        }

    }, this);
}, this);


// use estraverse to traverse and delete the unused functions.
var modified_ast = estraverse.replace(ast, {
    enter: function(node){
        if(node.type === esprima.Syntax.FunctionDeclaration && used_fns.indexOf(node) === -1){
            this.remove();
        }
        return node;
    }
})

// generate modified code. output
var modified_code = escodegen.generate(modified_ast);


// write out your output
fs.writeFileSync("output.js", modified_code);
console.log("check output.js");
