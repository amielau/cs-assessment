const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i = 0; i < nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i = 0; i < nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i = 0; i < size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);



// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:
sumZero = false
for(i = 0; i < array.length; i++){
    for(j = 0; j < array.length; j++)
        if(array[i] + array[j] === 0 && i !== j){ 
            sumZero = true
        }
    }
console.log(sumZero)

//Time Complexity = O(n^2)
//Space Complexity = O(n)





function uniqueChars(word) {
    let array = [...word];
    let organizedArr = new Set([...array]);
    return array.length === organizedArr.size;
};

console.log(uniqueChars("Hello World"));

//Time Complexity = O(n)
//Space Complexity = O(n)




// MY FIRST ATTEMPT
// function isPangram(string) {
//     let alphaArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
//     let newStr = string.tolowercase()
//     let array = [...newStr];
//       if(array.includes(alphaArr)) {
//         return 'is a panagram'
//       } else {
//         return 'is not a panagram'
//       }
//   }
//   isPangram('Amie')


//Time Complexity = O(n) 
//Space Complexity = O(n)


//WITH HELP FROM THE INTERNET :(
    function pangrams(s) {
        let alphabet = "abcdefghijklmnopqrstuvwxyz";
        let regex = /\s/g;
        let lowercase = s.toLowerCase().replace(regex, "");
       
        for(let i = 0; i < alphabet.length; i++){
         if(lowercase.indexOf(alphabet[i]) === -1){
           return "not pangram";
         } else {
            return " is a pangram";
         }
        }
     }
     pangrams('The quick brown fox jumps over the lazy dog')

     // still doesn't work :(


     //Time Complexity = best guess: O(n)
     //Space Complexity = best guess: O(n)


     function findLongest(...str) {
        return str.sort(function(a, b) {return b.length - a.length})[0];
      }
      
      console.log(findLongest('JavaScript', 'React', 'Python'));
      //Time Complexity = best guess: O(n)
     //Space Complexity = best guess: O(1)

