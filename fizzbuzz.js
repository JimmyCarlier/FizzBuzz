// FIZZBUZZ

// for (i = 0; i <= 100; i++) {
//   let prog = "";
//   if (i % 3 == 0) {
//     prog += "fizz";
//   }
//   if (i % 5 == 0) {
//     prog += "buzz";
//   }
//   if (prog == "") {
//     prog = i;
//   }
//   console.log(prog);
// }

// FIZZ BUZZ TAPIOCA
// let tableau = [
//     [3, "Fizz"],
//     [5, "Buzz"],    
//     [7, "Tapioca"], 
//     [13, "Formica"] 
//   ];

//   for (let i = 0; i <= 100; i++) {
//     let string = "";
//     for (let j = 0; j < tableau.length; j++) {
//       if (i % tableau[j][0] == 0) {
//         string += tableau[j][1];
//       }
//     }
//     console.log(string == "" ? i : string);
//   }