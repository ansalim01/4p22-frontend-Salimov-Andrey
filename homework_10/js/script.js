'use strict'

// const fibonacci=()=> {
//     let fn0=0;
//     let fn1=1;
//     let fn2=1;
//     let Fn;
//     console.log(fn0);
//     console.log(fn1);
//     console.log(fn2);
    
//     for (let n = 0; n < 10; n++) {

//         Fn=fn1+fn2;
    
//         fn1=fn2;
//         fn2=Fn;
        
//         console.log(Fn);
//     // Fn=(Fn-1)+(Fn-2);
//     }
//     fibonacci();
// }

/*
const fibonacci=(function () {
    let fn0=0;
    let fn1=1;
    let fn2=1;
    let Fn;
    
    console.log(fn0);
    console.log(fn1);
    console.log(fn2);

    for (let n = 0; n < 10; n++) {

        Fn=fn1+fn2;
        fn1=fn2;
        fn2=Fn;

        console.log(Fn);

    // Fn=(Fn-1)+(Fn-2);
    }
 }());

*/
// const fibonacci=function() {
//     let kryg=0;
//     let fn1=1;
//     let fn2=1;
//     let Fn;
//     function tyr() {
//         if (kryg===0) {
//             console.log(0);
//         }else if(kryg===1) {
//             console.log(1);
//         }else if(kryg===2) {
//             console.log(1);
//         }else{
//             Fn=fn1+fn2;
//             fn1=fn2;
//             fn2=Fn;
    
//             console.log(Fn);
//         }
//         kryg++;
//     }
//     tyr();
//     tyr();
//     tyr();
//     tyr();
//     tyr();
    
// }
// fibonacci();







// const fibonacci=function() {
    
//     let a = 0;
//     function azx() {
//         a+=1;
//         console.log(a);
        
//     }
//     azx();
// }

/*
function makeCounter() {
    var currentCount = 1;
    var fn1=1;
    var fn2=1;
    var fn;

    

    
    return function() {
        if (currentCount===1) {
            return currentCount++,fn1;
        }else if (currentCount===2) {
            return currentCount++,fn1;
        }
        fn=fn1+fn2;
        fn1=fn2;
        fn2=fn;
      return currentCount++,fn;
    };
}
  
var counter = makeCounter();

console.log(counter());
*/

// let counter = [function () {
//     var currentCount = 1;
//     var fn1=1;
//     var fn2=1;
//     var fn;
    

//     return function() {
//         if (currentCount===1) {
//             return currentCount++,fn1;
//         }else if (currentCount===2) {
//             return currentCount++,fn1;
//         }
//         fn=fn1+fn2;
//         fn1=fn2;
//         fn2=fn;
    
        
//       return currentCount++,fn;
//     };
// }];

// counter[0]();






  
// var counter = function makeCounter() {
    
//     function counter() {
//       return counter.currentCount++;
//     };
//     counter.currentCount = 1;
  
//     return counter;
//   }
  
// // var counter = makeCounter();

// counter();



// const getabg =()=>{
//     var num=0;
//     console.log(num);
//     return (function () {
//         console.log(num);
//          num++;
//     })();
// }
const fibonacci =(function () {
    var num=0;
    var fn1=1;
    var fn2=1;
    var fn;
    return ()=>{
        if (num===0) {
            console.log(0);
            return num++;
        }else if (num===1) {
            console.log(1);
            return num++;
        }
        else if (num===2) {
            console.log(1);
            return num++;
        }else{
            fn=fn1+fn2;
            fn1=fn2;
            fn2=fn;
            console.log(fn);
            return num++;
        }
    }
})();


fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();
fibonacci();