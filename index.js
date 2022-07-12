// 1. Sum Zero 

function addToZero(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(i !== j) {
                if(array[i] + array[j] === 0) {
                    console.log(true);
                } 
                else {console.log(false)}
            }
            }
        }   
}

addToZero([1, 2, 3, -2])

//////// I think runtime would be O(n^2), quadratic time, because there is nested for loops and the array amount you put in can keep increasing influencing runtime. 
//Space Complexity would be O(n) because space will be determined by the size of the array.  



//2. Unique Characters

function hasUniqueChars(word) {
    let uniqueChars = new Set([])
    for(let i = 0; i < word.length; i++) {
        uniqueChars.add(word[i])
    }
    return uniqueChars.size === word.length
}

console.log(hasUniqueChars('no'))

//////// I think the runtime would be linear O(n) because the runtime would increase or decrease based on the array length. 
//Space Complexity would be O(n) because it takes in an array and the space would be determined by the size of that array. 



//3.Pangram Sentence 

function isPangram(string) {
    let lowercase = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for(let i = 0; i < alphabet.length; i++) {
        if(lowercase.indexOf(alphabet[i]) < 0) {
            console.log(false);
        }
    }
    console.log(true);
}

isPangram('The brown fox jumps over the lazy dog!')

//////// I think this function's runtime would be O(n) as well because you have to loop through an array which would change based on the array length. 
//Space Complexity would be O(n) because it takes in an array and the space would be determined by the size of that array. 



//4. Longest Word

let zeroLength = 0;
let longest = '';

function findLongest(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > zeroLength) {
            let zeroLength = arr[i].length;
            longest = arr[i]      
        } 
    }
    console.log(longest.length)
}

let arr = ['red', 'blue', 'green', 'orange'];
findLongest(arr)

//////// I think this function's runtime would be linear O(n) becasue you have an array going through a loop which can change each time the function is run influencing how long it takes. 
//Space Complexity would also be O(n) because it would be altered by the length of the array being put in. 
