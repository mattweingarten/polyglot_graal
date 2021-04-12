
var p_total = 0;
var ru_total = 0;
// var r_total = 0;
var N = 1000;



start = performance.now()

for (let i = 0; i < N; i++) {
    var scalar_product_python = Polyglot.eval('python', `
a = [1,2,3,4];
b = [1,2,3,4];
sum(i * l for i,l in zip(a, b))
`);
    p_total += scalar_product_python;
}

var end = performance.now();

console.log("Python runtime:");
console.log(end - start);

console.assert(p_total === ru_total)


var start = performance.now()


for (let i = 0; i < N; i++) {
    var scalar_product_ruby = Polyglot.eval("ruby", `
    require "matrix";
    a = Vector[1,2,3,4];
    b = Vector[1,2,3,4];
    a.inner_product(b)
    `)
    ru_total += scalar_product_ruby;
    }
    console.log("Ruby runtime:");
    
    end = performance.now();
    console.log(end - start);
    
    



for (let i = 0; i < N; i++) {
    var scalar_product_python = Polyglot.eval('python', `
a = [4,3,2,1];
b = [4,3,2,1];
sum(i * l for i,l in zip(a, b))
`);
    p_total += scalar_product_python;
}

var end = performance.now();

console.log("Second python runtime:");
console.log(end - start);

start = performance.now()



for (let i = 0; i < N; i++) {
    var scalar_product_ruby = Polyglot.eval("ruby", `
    require "matrix";
    a = Vector[4,3,2,1];
    b = Vector[4,3,2,1];
    a.inner_product(b)
    `)
    ru_total += scalar_product_ruby;
    }
    console.log("Second ruby runtime:");
    
    end = performance.now();
    console.log(end - start);
    console.assert(p_total === ru_total)



    for (let i = 0; i < N; i++) {
        var scalar_product_python = Polyglot.eval('python', `
a = [4,3,2,1];
b = [4,3,2,1];
sum(i * l for i,l in zip(a, b))
    `);
        p_total += scalar_product_python;
    }
    
    var end = performance.now();
    
    console.log("Third python runtime:");
    console.log(end - start);
    
    start = performance.now()
    
    
    
    for (let i = 0; i < N; i++) {
        var scalar_product_ruby = Polyglot.eval("ruby", `
        require "matrix";
        a = Vector[4,3,2,1];
        b = Vector[4,3,2,1];
        a.inner_product(b)
        `)
        ru_total += scalar_product_ruby;
        }
        console.log("Third ruby runtime:");
        
        end = performance.now();
        console.log(end - start);
        console.assert(p_total === ru_total)
    