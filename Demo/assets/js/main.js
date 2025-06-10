// let username = "mohamed";
// let user = {
//     fname : "eslam",//property
//     lname : "ashraf",
//     age: 22,
//     login:()=>{
//         console.log("Hello from login method");
        
//     }//Method [Function related to object "user"].
// }

//-----------------------------------------------
//String [object] methods.
let userName = "Eslam Ashraf Abdelazem";

//01 - String.length [property inside string object] - Return the length of string object
let userNameLength = userName.length;//property
console.log("userNameLength = "+userNameLength);//userNameLength = 22

//02 - String.toUpperCase() [Converts all the alphabetic characters in a string to uppercase.]
let userNameUpper = userName.toUpperCase();
console.log("userNameUpper = "+userNameUpper);//userNameUpper = ESLAM ASHRAF ABDELAZEM

//03 - String.toLowerCase() [Converts all the alphabetic characters in a string to lowercase.]
let userNameLower = userName.toLowerCase();
console.log("userNameLower = "+userNameLower);//userNameLower = eslam ashraf abdelazem

//04 - String.includes(searchString: string, position?: number): boolean - Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
let userNameInclude0 = userName.includes("Ashraf");//search on the string from index 0
console.log("userNameInclude0 = "+userNameInclude0);//userNameInclude = true
let userNameInclude7 = userName.includes("Ashraf",7);//search on the string from index 7
console.log("userNameInclude7 = "+userNameInclude7);//userNameInclude = false

//05 - String.indexOf(searchString: string, position?: number): number - Returns the position of the first occurrence of a substring.
let userNameindexOf0 = userName.indexOf("Abdelazem");
console.log("userNameindexOf0 = "+userNameindexOf0);//userNameindexOf = 13
let userNameindexOf15 = userName.indexOf("Abdelazem",15);
console.log("userNameindexOf15 = "+userNameindexOf15);//userNameindexOf = -1 [falsy value (-1) if the return is of type number ]

//06 - String.slice(start?: number, end?: number): string - Returns a section of a string.
let userNameSliceNoParameter = userName.slice();
console.log("userNameSliceNoParameter = "+userNameSliceNoParameter);//userNameSliceNoParameter = Eslam Ashraf Abdelazem
let userNameSliceWithStartParameter = userName.slice(6);//start from index 6 and take rest of chars
console.log("userNameSliceWithStartParameter = "+userNameSliceWithStartParameter);//userNameSliceWithStartParameter = Ashraf Abdelazem
let userNameSliceWithStartAndEndParameter = userName.slice(0,5);//start from index 0 and take 5 chars
console.log("userNameSliceWithStartAndEndParameter = "+userNameSliceWithStartAndEndParameter);//userNameSliceWithStartAndEndParameter = Eslam
let userNameSliceNegativeValue = userName.slice(-5,-2);
console.log("userNameSliceNegativeValue = "+userNameSliceNegativeValue);//userNameSliceNegativeValue = laz

//07 - String.substring(start: number, end?: number): string - Returns the substring at the specified location within a String object.
// It's same as String.slice() but it's not accept negative values as parameters.
let userNameSubstringNoParameter = userName.substring();
console.log("userNameSubstringNoParameter = "+userNameSubstringNoParameter);//userNameSubstringNoParameter = Eslam Ashraf Abdelazem
let userNameSubstringWithStartParameter = userName.substring(6);//start from index 6 and take rest of chars
console.log("userNameSubstringWithStartParameter = "+userNameSubstringWithStartParameter);//userNameSubstringWithStartParameter = Ashraf Abdelazem
let userNameSubstringWithStartAndEndParameter = userName.substring(0,5);//start from index 0 and take 5 chars
console.log("userNameSubstringWithStartAndEndParameter = "+userNameSubstringWithStartAndEndParameter);//userNameSubstringWithStartAndEndParameter = Eslam

//08 - String.split(separator: string | RegExp, limit?: number): string[] (+1 overload) - Split a string into substrings using the specified separator and return them as an array.
let IP_Address = "192.168.1.1";
let IP_Address_Split = IP_Address.split(".");
console.log(IP_Address_Split);//(4) ['192', '168', '1', '1']

let userNameSplit = userName.split(" ");
console.log(userNameSplit);//(3) ['Eslam', 'Ashraf', 'Abdelazem']
let userNameSlit02 = userName.split("");
console.log(userNameSlit02);//(22) ['E', 's', 'l', 'a', 'm', ' ', 'A', 's', 'h', 'r', 'a', 'f', ' ', 'A', 'b', 'd', 'e', 'l', 'a', 'z', 'e', 'm']
let userNameSplit03 = userName.split();
console.log(userNameSplit03);//['Eslam Ashraf Abdelazem']
