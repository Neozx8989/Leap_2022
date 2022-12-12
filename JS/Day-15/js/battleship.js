/* 
* Game setup

* User should guess a number

* we need to create new ship on the board

*| 0 | 1 | 2 | 3 | 4 | 5 | 6 |
*| x | x | o | o | o | x | x |

*/

let guesses = 0;
let isSunk = false;
let hit = 0;

// let location1 = 3;
// let location2 = 4;
// let location3 = 5;

let locations = [false, false, true, true, true, false];

for(let i = 0; i <= 5; i++ ) {
    console.log(locations[i]);
    
}


// while(!isSunk) {
//     console.log("Togloom ehelle")

//     let userGuess = Number(prompt("Nadad bairlal zaaj uguuch?"));
//     guesses = guesses + 1;
//     if (guesses > 6) {
//         console.log(guesses);
//         break;
//     }
//     if (userGuess > 0 && userGuess < 7) {     
//         console.log(userGuess);
//         if (location1 == userGuess || location2 == userGuess || location3 == userGuess) {
//             hit = hit + 1;
//         }
//         if (location1 == userGuess) {
//             location1 = -1;
//         }
//         if (location2 == userGuess) {
//             location1 = -1;
//         }
//         if (location3 == userGuess) {
//             location1 = -1;
//         }
//         console.log(hit);
//         if (hit == 3) {
//             isSunk = true;
//             alert("You win");
//         } 
//     } else {
//         alert("Nadad 0 ees 6 iin hoorond too uguh bolomjtoi");
//     }
// }


// alert("Togloom duusla");
