// // difference between var, let, and const in JavaScript
// // var: function scoped, can be re-declared and updated
// // let: block scoped, cannot be re-declared but can be updated
// // const: block scoped, cannot be re-declared or updated

// var x = 10;
// console.log(x);
// var x= 20;
// console.log(x);
// x= 30;
// console.log(x);

// let y = 10;
// console.log(y);
//  y= 20;
// console.log(y);
// y= 30;
// console.log(y);
// const z = 10;
// console.log(z);
//  z= 20;
// console.log(z);

// // type conversion in JavaScript
// let n = 4 + 5 + "2";
// console.log(n);
// console.log(typeof n);
// let y1 = "4" + 5 + 2;
// console.log(y1);
// console.log(typeof y1);
// // // op1: 452   op2: 92 op3:11 op4:error

// console.log("10"+5);
// console.log("10"-5);

// console.log(4+6+0);
// console.log(4-3+1);
// console.log("4"-2+2);
// console.log("4"+"5"+7+8);
// console.log(4-"2"+1+3+"4");


// // conditional statements in JavaScript

// let num = 0;
// if (num > 0) {
//     console.log("The number is positive");
// }else if(num === 0){
//     console.log("The number is zero");
// }else {
//     console.log("The number is not positive");
// }


// // nested if else
//     // let condition = 1;

//     // if (condition) {
//     //     if (condition) {
            
//     //     } else {
            
//     //     }
        
//     // } else if(){
//     //     if (condition) {
            
//     //     } else if (condition){
            
//     //     }else{

//     //     }
        
//     // }else{

//     // }

// // looping statements in JavaScript

// for (let i = 1;i<10;i++){
//     console.log(i);
// }


// for(let i=1; i<2; ++i){
//     for(let j=1; j<3; j++){
//         i++;
//         console.log(i,j);
//     }
// }


// // patten printing

// let num1 = 5;
// for(let i = 1; i <= num1; i++) {
//     let str = "";
//     for(let j = 1; j <= n; j++) {
//         str += "* ";
//     }
//     console.log(str);
// }

// for (let i = 1; i <= num1; i++) {
//     let str = "";
//     for(let j = i; j <= num1; j++) {
//         str += "* ";
//     }
//     console.log(str);
// }

// // optput:
// // * * * * *
// // * * * *
// // * * *
// // * *
// // *



// for (let i = 1; i <= n; i++) {
//     let str = "";
//     for(let j = n-i+1; j <= n; j++) {
//         str += "* ";
//     }
//     console.log(str);
// }

// // output:
// // *
// // * *
// // * * *
// // * * * *
// // * * * * *



// for (let i = 1; i <= num1; i++) {
//     let str = "";
//     for(let j = 1; j <= num1; j++) {
//         if (j <= num1 - i) {
//             str += "  ";
//         } else {
//             str += "* ";
//         }
//     }
//     console.log(str);
// }
// // output:
// //         *
// //       * *
// //     * * *
// //   * * * *
// // * * * * *

// // try it out
// // * * * * *
// //   * * * *
// //     * * *
// //       * *
// //         *

//     //        *
//     //      * * *
//     //     * * * * *
//     //    * * * * * * *
//     //   * * * * * * * * *
//     //  * * * * * * * * * * *
//     //   * * * * * * * * *
//     //    * * * * * * *
//     //     * * * * *
//     //      * * *
//     //        *

// // arrays in js

// let arr = [1, 2, 3, 4, 5];
// console.log(arr[0].length);

// // join method
// console.log(arr.join("-"));
// console.log(typeof arr.join(""));

// // split
// let num2 = "12345";
// console.log(num2.split("4"));

// // let str = "1-2-3-4-5";

// // output:"1,2,3,4,5"

// let str1 = "Hi welcome to development world";
// console.log(str1.split(" ").length);
// console.log(str1.split("o")); //op: ["Hi welc","me t" " develp","ment wr","ld"]
// console.log(str1.split("uyew").length);
// console.log(str1.split("hi").length);
// console.log(str1.split(" Hi").length);
// console.log(str1.split("to"));
// console.log(str1.split(" to "));


// // let num = 12345;
// // console.log(num.split(""));

// // functions in js

// // This are es5 and below functions
// // function sample() {
// //     console.log("This is a sample function");
// // }

// // var sample = function() {
// //     console.log("This is a sample function");
// // }

// // sample();

// // es6 arrow functions
// // let a = 10;
// // let b = 20;

// // const sample = (a,b) => {
// //     console.log("This is a sample function");
// //     console.log(a+b);
// // }

// // sample();
// // let str = "name";

// // const sample = (a,b) => {
// //     return a+b;
// // }
// // let value = sample(1,2);
// // console.log(value);

// // const sample = () => {
// //     console.log("This is a sample function");
// // }

// // sample();

// // iife function 
// // (function(){
// //  console.log("This is an iife function");
// // })();

// // let arr = [1,2,3,4,5];

// // map method

// // let newArr = arr.map((ele) => {
// //     // console.log("Element:", ele);
// //     return ele + 2;
// // });

// // let newArr = arr.map( e => e * 2);

// // let newArr = arr.map( (e) => {
// //     if (e % 2 === 0) {
// //         return e ;
// //     }
// // })

// // console.log(newArr);

// // filter method
// // let arr = [1,2,3,4,5,6,7,8,9,10];

// // let newArr = arr.filter( (e,i) => {
// //     if(e%2 === 0){
// //         return e * 2;
// //     }
// // });
// // let newArr = arr.filter( e => e % 2 === 0 );
// // let newArr = arr.filter((a) => {
// //     if(a>25){
// //         return a;
// //     }
// // })
// // console.log(newArr);

// // reduce method

// // let arr = [1,2,3,4,5];

// // let val = arr.reduce( (acc, curr) => {
// //     console.log("Accumulator:", acc);
// //     console.log("Current Value:", curr);
// //     return acc + curr;
// // }, 0);

// // console.log(val);

// // let arr = [1,2,3,4,5];

// // add only even numbers using reduce

// // if odd number means add value by 2 if even number means mul value by 2


// // default parameters in functions
// // function sample(a = 5, b = 10) {
// //     return a + b;
// // }
// // console.log(sample());


// // json objects
// // let str = "name"

// // let data = {
// //     name: "name1",
// //     age: 25,
// //     address: {
// //         street: "street1",
// //         country: "country1"
// //     },
// //     // marks: [90, 80, 70]
// // }
// // console.log(data[str]);
// // console.log(data.address.country);
// // console.log(data['address']['country']);
// // console.log(data.marks[2]);
// // data.sample = "sample data";
// // console.log(data);


// let data = [
//     {
//         name: "name1",
//         age: 25,
//         address: {
//             street: "street1",
//             country: "country1"
//         },
//     },
//     {
//         name: "name2",
//         age: 30,
//         address: {
//             street: "street2",
//             country: "country2"
//         },
//     },
//     {
//         name: "name3",
//         age: 28,
//         address: {
//             street: "street3",
//             country: "country3"
//         },
//     }
// ]

// data.map( (val) => {
//     console.log("Value-before", val);
//     val.address.city = "chennai"
//     console.log("Value-after", val);
//     return val;
// })

// console.log(data);


// // closures in js

// const outerFunction = (outerVariable) => {
//     const innerFunction = (innerVariable) => {
//         console.log("Outer Variable:", outerVariable);
//         console.log("Inner Variable:", innerVariable);
//     }
//     innerFunction(5);
       
// }

// outerFunction(10);

// // callback function in js
// const callbackFunction = (message) => {
//     console.log("Message from callback function:", message);
// }

// const parentFunction = (callback , str) => {
//     console.log(str);
//     callback("Hello from parent function");
// }
// parentFunction(callbackFunction , "This is parent function");

// // default callback function
// const sample = () => {
//     setTimeout(() => {
//         console.log("this will print after 4 sec");
//     },4000)
// }
// sample();

// callback hell
// const callbackHell = () => {
//     setTimeout(() => {
//         console.log(5);
//         setTimeout(()=> {
//             console.log(4);
//             setTimeout(() => {
//                 console.log(3);
//                 setTimeout(() => {
//                     console.log(2);
//                     setTimeout(() => {
//                         console.log(1);
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     }, 1000);
// }
// callbackHell();

// promises in js

// const promiseExample = () => {
//     return new Promise( (resolve, reject) => {
//         let condition = false;
//         if (condition) {
//             resolve("Promise resolved successfully");
//         } else {
//             reject("Promise rejected");
//         }
//     });
// }

// promiseExample()
//     .then( (message) => {
//         console.log(message);
//     }).then( () => {
//         console.log("This is second then block");
//     })
//     .catch( (error) => {
//         console.log(error);
//     });

// const wait = (ms) => {
//     return new Promise( (res , rej) => {
//         if( ms < 0 ) {
//             rej("Invalid time");
//         }
//         setTimeout(() => {
//             res();
//         }, ms);
//     });
// }

// wait(1000).then( () => {
//     console.log(5);
//     return wait(1000);
// }).then( () => {
//     console.log(4);
//     return wait(1000);
// }).then( () => {
//     console.log(3);
//     return wait(-25);
// }).then( () => {
//     console.log(2);
//     return wait(1000);
// }).then( () => {
//     console.log(1);
// }).catch( (error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("End of promise chain");
// });


// async await in js

const example = async () => {
    try {
        let response = await fetch('https://restcountries.com/v3.1/independent?status=true');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error:", error);
    }
}

example();
