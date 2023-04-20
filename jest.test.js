// describe("encodedString", () => {
//     it("returns a string with a coded message", () => {
//         const secretCodeWord1 = "Lackadaisical"
//         // Expected output: "L4ck4d41s1c4l"
//         const secretCodeWord2 = "Gobbledygook"
//         // Expected output: "G0bbl3dyg00k"
//         const secretCodeWord3 = "Eccentric"
//         // Expected output: "3cc3ntr1c"
//         expect(encodedString(secretCodeWord1)).toBe("L4ck4d41s1c4l")
//         expect(encodedString(secretCodeWord2)).toBe("G0bbl3dyg00k")
//         expect(encodedString(secretCodeWord3)).toBe("3cc3ntr1c")})
//     it("should return an empty string when given an empty string", () => {
//         expect(encodedString("")).toBe("")
//     })
//     it("should return strings without vowels", () => {
//         expect(encodedString("xyz")).toBe("xyz")
//     })
//     it("should return strings with upper and lowercase vowels", () => {
//         expect(encodedString("CaT")).toBe("C4T")
//     })
// })

// const encodedString = (string) => {
//     const vowels = {"a": "4", "e": "3", "i": "1", "o": "0"}
// let encodedStr = ("")
// for (let i = 0; i < string.length; i++) {
//     let char = string[i].toLowerCase();
//     if (vowels[char]) {
//       encodedStr += vowels[char];
//     } else {
//       encodedStr += string[i];
//     }
//   }
  
//   return encodedStr;
// }

// describe("filterTheWords", () => {
//     const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
//     it("returns an array of words with the letter 'a' in it", () => {
//         const letterA = "a"
//         const givenExpectedOutput = ["Mango", "Apricot", "Peach"]
//         const ourResult = filterTheWords(fruitArray, letterA)
//         expect(ourResult).toEqual(givenExpectedOutput)
//     })
//    it("returns an array of words with the letter 'e' in it", () => {
//     const letterE = 'e'
//     const givenExpectedOutput = ["Cherry", "Blueberry", "Peach"]
//     const ourResult = filterTheWords(fruitArray, letterE)
//     expect(ourResult).toEqual(givenExpectedOutput)
//    })
// })

// const filterTheWords = (array, letter) => {
//     return array.filter((word) => word.includes(letter))
// }

// describe("isAFullHouse", () => {
//     it("returns true for a fullhouse")
//         const hand1 = [5, 5, 5, 3, 3]
//         const firstResult = isAFullHouse(hand1)
//         expect(firstResult).toEqual(true)

//         const hand4 = [7, 2, 7, 2, 7]
//         const fourthResult = isAFullHouse(hand4)
//         expect(fourthResult).toEqual(true)
// })
//     it("returns false for a hand that is not a fullhouse", () => {
//         const hand3 = [5, 5, 5, 5, 4]
//         const thirdResult = isAFullHouse(hand3)
//         expect(thirdResult).toEqual(false)

//         const hand2 = [5, 5, 3, 3, 4]
//         const secondResult = isAFullHouse(hand2)
//         expect(secondResult).toEqual(false)
//     })

// const isAFullHouse = (hand) => {
//     hand.sort((a, b) => a - b);
//     const counts = {};
//     for (const card of hand) {
//       counts[card] = (counts[card] || 0) + 1;
//     }
//     const values = Object.values(counts);
//     return values.length === 2 && (values[0] === 2 || values[0] === 3);
//   }