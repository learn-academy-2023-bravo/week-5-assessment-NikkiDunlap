// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.
    // Pseudocode:
        // Create a describe function named encodedString
        // Create 4 tests that describe different situations that the function should be able to test for
        // Use the given variables to make sure the expected output is correct
        // Test 2 checks to see if our function will return an empty string when it's given an input of an empty sting
        // Test 3 checks to see if our function will give us the correct output when we are given a string with no vowels as an input
        // Test 4 checks 
        // Use the .toBe to check whether the output matches the expected output when our input has lowercase and uppercase letters
        // Use "for" loop to iterate through each character in our input string. Use .toLowerCase to in order for the function to pick up lowercase and uppercase letters in our string. If the character is one of the vowels listed, it will replace it with the encoded value
        // Return the encodedStr using our expected outputs


// a) Create a test with expect statements using the variables provided.
describe("encodedString", () => {
    it("returns a string with a coded message", () => {
        const secretCodeWord1 = "Lackadaisical"
        // Expected output: "L4ck4d41s1c4l"
        const secretCodeWord2 = "Gobbledygook"
        // Expected output: "G0bbl3dyg00k"
        const secretCodeWord3 = "Eccentric"
        // Expected output: "3cc3ntr1c"
        expect(encodedString(secretCodeWord1)).toBe("L4ck4d41s1c4l")
        expect(encodedString(secretCodeWord2)).toBe("G0bbl3dyg00k")
        expect(encodedString(secretCodeWord3)).toBe("3cc3ntr1c")})
    it("should return an empty string when given an empty string", () => {
        expect(encodedString("")).toBe("")
    })
    it("should return strings without vowels", () => {
        expect(encodedString("xyz")).toBe("xyz")
    })
    it("should return strings with upper and lowercase vowels", () => {
        expect(encodedString("CaT")).toBe("C4T")
    })
})
    // b) Create the function that makes the test pass.
        const encodedString = (string) => {
            const vowels = {"a": "4", "e": "3", "i": "1", "o": "0"}
        let encodedStr = ("")
        for (let i = 0; i < string.length; i++) {
            let char = string[i].toLowerCase();
            if (vowels[char]) {
              encodedStr += vowels[char];
            } else {
              encodedStr += string[i];
            }
          }
          
          return encodedStr;
        }
// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.
        // Pseudocode:
            // Given an array of fruits 
            // Create 4 tests that describe different situations that the function should be able to test for
            // Use the given variables to make sure the expected output is correct
            // Create 2 test cases that define the variables 'letterA' and 'letterE' to filter the array
            // Define our 'givenExpectedOutput' variable so it contains the expected output 
            // Define the filterTheWords function that takes an array of strings array and a string letter as input parameters
            // Use the "filter" method to create a new array that contains ONLY the string that "include" the specific letter that out outputs call for
            // Return the filterTheWords function to return the filtered array
// a) Create a test with expects statement using the variable provided.

describe("filterTheWords", () => {
    const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
    it("returns an array of words with the letter 'a' in it", () => {
        const letterA = "a"
        const givenExpectedOutput = ["Mango", "Apricot", "Peach"]
        const ourResult = filterTheWords(fruitArray, letterA)
        expect(ourResult).toEqual(givenExpectedOutput)
    })
   it("returns an array of words with the letter 'e' in it", () => {
    const letterE = 'e'
    const givenExpectedOutput = ["Cherry", "Blueberry", "Peach"]
    const ourResult = filterTheWords(fruitArray, letterE)
    expect(ourResult).toEqual(givenExpectedOutput)
   })
})
    // b) Create the function that makes the test pass.
    const filterTheWords = (array, letter) => {
        return array.filter((word) => word.includes(letter))
    }

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.
    // Pseudocode:
        // Create a function named 'isAFullHouse' that takes in an array of numbers and returns true is the hand is a fullhouse and it will return false if it is not
        // Create two sets of test where the first test checks to see if the function with the given arrays are hands with a fullhouse
        // The second test will check the given arrays with a parameter set to false for a hand that is not a fullhouse
        // Create a passing test that sorts the hand in order using .sort()
        // Create an object called counts
        // Create a "for" loop that iterates over each card in the hand, checking the value of each card
        // Create an array called values that counts the value of each card in the hand
        // Use the Object.value method to get the vaues of the 'counts' object.
        // Use .length to check if the length of the values array is 2 because there are only 2 unique card values in the hand
        // If it === to 3 instead of 2, the function will return true. If not, it will return false
        // Get expected output
        // I truly struggled with this one, and I am not sure if I used the right technique to get an answer

// a) Create a test with expect statements using the variable provided.

describe("isAFullHouse", () => {
    it("returns true for a fullhouse")
        const hand1 = [5, 5, 5, 3, 3]
        const firstResult = isAFullHouse(hand1)
        expect(firstResult).toEqual(true)

        const hand4 = [7, 2, 7, 2, 7]
        const fourthResult = isAFullHouse(hand4)
        expect(fourthResult).toEqual(true)
})
    it("returns false for a hand that is not a fullhouse", () => {
        const hand3 = [5, 5, 5, 5, 4]
        const thirdResult = isAFullHouse(hand3)
        expect(thirdResult).toEqual(false)

        const hand2 = [5, 5, 3, 3, 4]
        const secondResult = isAFullHouse(hand2)
        expect(secondResult).toEqual(false)
    })
// b) Create the function that makes the test pass.
const isAFullHouse = (hand) => {
    hand.sort((a, b) => a - b);
    const counts = {};
    for (const card of hand) {
      counts[card] = (counts[card] || 0) + 1;
    }
    const values = Object.values(counts);
    return values.length === 2 && (values[0] === 2 || values[0] === 3);
  }
