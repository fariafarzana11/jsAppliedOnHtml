//callback

function simple(a,b,callback){
    const c = a + b;
    const d = a - b;

    const result = callback(c,d)
    return result;
}

function sum(first,second){
    const summation = first+second;
    return summation;
}
//console.log(simple(10,20,sum))

const result = simple(10,20,function(a,b){
    return a-b;
})
const result2 = simple(10,20,function(a,b){
    return a*b;
})
console.log(result2)