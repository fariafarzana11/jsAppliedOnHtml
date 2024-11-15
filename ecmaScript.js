//1.let,const
// let name = "nim";
// name = 'dim';
// console.log(name);

// const number = 10;
// number = 20;
// console.log(number) //number change hbe na; output:typeError asbe

//arrow function
// const fun =(a,b)=>a*b;
// console.log(fun(4,8));

//Destructuring object
// const profile = {
//     name: "Mehru",
//     profession: "student",
//     age: "26",
//     address: "dhaka",
//     summation: function(a,b){
//         return a+b;
//     },

//     result: this.summation(10,20)
// }
//console.log(profile.profession)

//const {name,address,profession,age,summation} = profile;
// console.log(name,address,age,profession)
//console.log(summation)

//array destructuring
// const number = [12,23,45,56,76];
// const [nim,shim,rim,vim,tim] = number;
//console.log(rim)


//spread operator
// const number =[23,21,24,45,65];
// const newArr= [...number,12,34,56];
// // const newArr= [...number];
// // newArr.push(89)
// console.log(number)
// console.log(newArr)


// const number = [12,21,23,44];
// for(const num of number){
//     console.log(num)
// }


//map
// const number = [12,21,23,44];
// number.map(Value=>console.log(Value))


//filter
// const number = [12,21,23,44,78,90];
// const result = number.filter(value => value<50);
// console.log(result)

// //find
// const number = [12,21,23,44,78,90];
// const result = number.find(value => value<50);
// console.log(result)

//foreach
const number = [12,21,23,44,78,90];
const result = number.forEach(value =>console.log (value*2));
console.log(result)