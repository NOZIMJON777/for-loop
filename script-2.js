
let str = 'WEBbraingjdkdvbdvkbdvjbASFFFOJVHVHGCXEAEAS';

let newStr = '';


// for (i = 0; i < str.length; i++) {
//     if (str[i] === 'f' || str[i] === 'F') {
//         // newStr += str[i]
//         newStr++
//     }
// }
// console.log('F-', newStr);

for (i = 0; i < str.length; i++)
    if (str[i] === str[i].toUpperCase()) {
        newStr += str[i]
    }
console.log(newStr);