var esprima = require("esprima");
var estraverse = require("estraverse");
var escodegen = require("escodegen");

//  read our code into an object
var fs = require("fs");
var code = fs.readFileSync("./index.js", {
  encoding: "UTF-8"
});

var fn_nodes = [];
var call_nodes = [];

// collect our functions and call expressions.
var ast = esprima.parseScript(code, {}, function(node, meta) {
  if (node.type === esprima.Syntax.FunctionDeclaration) {
    fn_nodes.push(node);
  }
  if (node.type === esprima.Syntax.CallExpression) {
    call_nodes.push(node);
  }
});

// get all our used functions
var used_fns = [];

fn_nodes.forEach(function(fn_node) {
  call_nodes.forEach(function(call_node) {
    if (fn_node.id.name === call_node.callee.name) {
      // check if fn is already in the array
      if (used_fns.indexOf(fn_node) >= 0) {
        // donont do anything
      } else {
        used_fns.push(fn_node);
      }
    }
  });
}, this);

// use estraverse to traverse adn delete the function.
modified_ast = estraverse.replace(ast, {
  enter: function(node) {
    if (node.type === esprima.Syntax.FunctionDeclaration && used_fns.indexOf(node) === -1) {
        this.remove();
    }
    return node;
  }
});

// generate modified code.
var modified_code = escodegen.generate(modified_ast);


// write out your output
fs.writeFileSync("output.js", modified_code);
console.log("check output.js");
