// const friends = ['Mishu','Nishu','Tishu'];
// const number = [[12,23,43],[78,54,33]];
// //array of object
// const objects = [
//     {
//         name:"Rim",
//         address: "Dhaka",
//         phone:"1234567"
//     },
//     {
//         name:"jhim",
//         address: "Rajshahi",
//         phone:"1234767"
//     }
// ]

// //promise
// const haveCar = true;

// let promise = new Promise((resolve, reject) =>{
//     if(haveCar){
//         resolve([
//             {
//                 name: "Rim",
//                 address: "Dhaka",
//                 phone: "23467"
//             },
//             { 
//                 name: "Jhim",
//                 address: "Rajshahi",
//                 phone: "98765"
//             }
//         ])
//     }
//     else{
//         reject("can't find any data")
//     }
// })
// promise.then(res => {
//     console.log(res)
// })
// promise.then(err => {
//     console.log(err)
// })



const anoy = function(){
    console.log("anonymus function")
}
 anoy() //output: anonymus function

const ann = function fun(){
    console.log("function") //output: kichui dibe na
}

const annoy = ()=>{
    console.log('arrow function')
}
annoy() //output: arrow function 

const sum = (a,b)=>a*b
console.log(sum(10,20))


//higher order function
// function sum(a,b){
//     return a+b;
// }

// function multiple(a,b,fun){
//     const c = a+b;
//     const d = a-b;

//     function multiply(){
//         const m = fun(a,b)
//         return m*c*d;
//     }
//     return multiply;
// }

// const result = multiple(10,20,sum)
// console.log(res)


// // Callback function, passed as a parameter in the higher order function
// function callbackFunction(){
//     console.log('I am  a callback function');
// }

// // higher order function
// function higherOrderFunction(func){
//     console.log('I am higher order function')
//     func()
// }

// higherOrderFunction(callbackFunction);


