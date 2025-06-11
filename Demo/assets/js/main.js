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
//Part 01
//String [object] methods.
// let userName = "Eslam Ashraf Abdelazem";

// //01 - String.length [property inside string object] - Return the length of string object
// let userNameLength = userName.length;//property
// console.log("userNameLength = "+userNameLength);//userNameLength = 22

// //02 - String.toUpperCase() [Converts all the alphabetic characters in a string to uppercase.]
// let userNameUpper = userName.toUpperCase();
// console.log("userNameUpper = "+userNameUpper);//userNameUpper = ESLAM ASHRAF ABDELAZEM

// //03 - String.toLowerCase() [Converts all the alphabetic characters in a string to lowercase.]
// let userNameLower = userName.toLowerCase();
// console.log("userNameLower = "+userNameLower);//userNameLower = eslam ashraf abdelazem

// //04 - String.includes(searchString: string, position?: number): boolean - Returns true if searchString appears as a substring of the result of converting this object to a String, at one or more positions that are greater than or equal to position; otherwise, returns false.
// let userNameInclude0 = userName.includes("Ashraf");//search on the string from index 0
// console.log("userNameInclude0 = "+userNameInclude0);//userNameInclude = true
// let userNameInclude7 = userName.includes("Ashraf",7);//search on the string from index 7
// console.log("userNameInclude7 = "+userNameInclude7);//userNameInclude = false

// //05 - String.indexOf(searchString: string, position?: number): number - Returns the position of the first occurrence of a substring.
// let userNameindexOf0 = userName.indexOf("Abdelazem");
// console.log("userNameindexOf0 = "+userNameindexOf0);//userNameindexOf = 13
// let userNameindexOf15 = userName.indexOf("Abdelazem",15);
// console.log("userNameindexOf15 = "+userNameindexOf15);//userNameindexOf = -1 [falsy value (-1) if the return is of type number ]

// //06 - String.slice(start?: number, end?: number): string - Returns a section of a string.
// let userNameSliceNoParameter = userName.slice();
// console.log("userNameSliceNoParameter = "+userNameSliceNoParameter);//userNameSliceNoParameter = Eslam Ashraf Abdelazem
// let userNameSliceWithStartParameter = userName.slice(6);//start from index 6 and take rest of chars
// console.log("userNameSliceWithStartParameter = "+userNameSliceWithStartParameter);//userNameSliceWithStartParameter = Ashraf Abdelazem
// let userNameSliceWithStartAndEndParameter = userName.slice(0,5);//start from index 0 and take 5 chars
// console.log("userNameSliceWithStartAndEndParameter = "+userNameSliceWithStartAndEndParameter);//userNameSliceWithStartAndEndParameter = Eslam
// let userNameSliceNegativeValue = userName.slice(-5,-2);
// console.log("userNameSliceNegativeValue = "+userNameSliceNegativeValue);//userNameSliceNegativeValue = laz

// //07 - String.substring(start: number, end?: number): string - Returns the substring at the specified location within a String object.
// // It's same as String.slice() but it's not accept negative values as parameters.
// let userNameSubstringNoParameter = userName.substring();
// console.log("userNameSubstringNoParameter = "+userNameSubstringNoParameter);//userNameSubstringNoParameter = Eslam Ashraf Abdelazem
// let userNameSubstringWithStartParameter = userName.substring(6);//start from index 6 and take rest of chars
// console.log("userNameSubstringWithStartParameter = "+userNameSubstringWithStartParameter);//userNameSubstringWithStartParameter = Ashraf Abdelazem
// let userNameSubstringWithStartAndEndParameter = userName.substring(0,5);//start from index 0 and take 5 chars
// console.log("userNameSubstringWithStartAndEndParameter = "+userNameSubstringWithStartAndEndParameter);//userNameSubstringWithStartAndEndParameter = Eslam

// //08 - String.split(separator: string | RegExp, limit?: number): string[] (+1 overload) - Split a string into substrings using the specified separator and return them as an array.
// let IP_Address = "192.168.1.1";
// let IP_Address_Split = IP_Address.split(".");
// console.log(IP_Address_Split);//(4) ['192', '168', '1', '1']

// let userNameSplit = userName.split(" ");
// console.log(userNameSplit);//(3) ['Eslam', 'Ashraf', 'Abdelazem']
// let userNameSlit02 = userName.split("");
// console.log(userNameSlit02);//(22) ['E', 's', 'l', 'a', 'm', ' ', 'A', 's', 'h', 'r', 'a', 'f', ' ', 'A', 'b', 'd', 'e', 'l', 'a', 'z', 'e', 'm']
// let userNameSplit03 = userName.split();
// console.log(userNameSplit03);//['Eslam Ashraf Abdelazem']

// //09 - String.trim(): string - Removes the leading and trailing white space and line terminator characters from a string.
// let accessName = "              Eslam Ashraf           Abdelazem           ";
// //Removes whitespaces from start and end only.
// let accessNameTrim = accessName.trim();
// console.log("accessNameTrim = "+accessNameTrim);

//-------------------------------------------------------------------------------------------------------------------------------------
//Part02
//Number Methods

let grade = 15.4952435;
//01 - Number.toFixed(fractionDigits?: number): string - Returns a string representing a number in fixed-point notation.
let gradeToFixedWithoutFractionDigits = grade.toFixed();
let gradeToFixedWithFractionDigits = grade.toFixed(4);
console.log("gradeToFixedWithoutFractionDigits = "+gradeToFixedWithoutFractionDigits);//gradeToFixedWithoutFractionDigits = 15
console.log("gradeToFixedWithFractionDigits = "+gradeToFixedWithFractionDigits);//gradeToFixedWithFractionDigits = 15.4952
console.log(typeof gradeToFixedWithoutFractionDigits);//string
//To convert the returned string from toFixed() from string to Number.
let x = +gradeToFixedWithoutFractionDigits;
console.log(typeof x);//number
//Or
let y = Number(gradeToFixedWithoutFractionDigits);
console.log(typeof y);//number

//02 - parseInt(string: string, radix?: number): number - Converts a string to an integer.
let gradeParseInt = parseInt(grade);
let stringGrade = "15.4952435";
let stringGradeParseInt = parseInt(stringGrade);
console.log("gradeParseInt = "+gradeParseInt);//gradeParseInt = 15
console.log("stringGradeParseInt = "+stringGradeParseInt);//stringGradeParseInt = 15
let gradeWithChars = "1545.78ss5";
let gradeWithCharsParseInt = parseInt(gradeWithChars);
console.log("gradeWithCharsParseInt = "+gradeWithCharsParseInt);//gradeWithCharsParseInt = 1545


//03 - parseFloat(string: string): number - Converts a string to a floating-point number.
let gradeParseFloat = parseFloat(grade);
console.log("gradeParseFloat = "+gradeParseFloat);//gradeParseFloat = 15.4952435
let gradeWithCharsParseFloat = parseFloat(gradeWithChars);
console.log("gradeWithCharsParseFloat = "+gradeWithCharsParseFloat);//gradeWithCharsParseFloat = 1545.78

//04 - isNaN(number: number): boolean - Returns a Boolean value that indicates whether a value is the reserved value NaN (not a number).
// Nan => Mean Not A Number
let gradeIsNan = isNaN(grade);
let stringGradeIsNan = isNaN(stringGrade); 
let name = "Eslam Ashraf";
let nameIsNan = isNaN(name);
console.log("gradeIsNan = "+gradeIsNan);//gradeIsNan = false [because grade variable hold Number value so it not NAN]
console.log("nameIsNan = "+nameIsNan);//nameIsNan = true [because name variable hold string value not Number so it NAN]
console.log("nameIsNan = "+nameIsNan);//nameIsNan = true [because name variable hold string value not Number so it NAN]
console.log("stringGradeIsNan = "+stringGradeIsNan);//stringGradeIsNan = false [because stringGrade variable hold string but it's number as string so it deal with it as Number so it's not Nan]

let result = 5+"eslam";//Concatenation "Valid Expression"
let result02 = 5*"eslam";//NAN => Not A Number
console.log(result);//5eslam
console.log(result02);//NaN
//Note => NaN is of type Number
console.log(typeof result02);//number

//------------------------------------------------------------------------------------

//Math Methods
//01 - Math.round(x: number): number - Returns a supplied numeric expression rounded to the nearest integer.
console.log(Math.round(4.6));//5

//02 - Math.floor(x: number): number - Returns the greatest integer less than or equal to its numeric argument.
console.log(Math.floor(4.9));//4

//03 - Math.ceil(x: number): number - Returns the smallest integer greater than or equal to its numeric argument.
//ceil => معناها سقف
console.log(Math.ceil(4.1));//5

//04 - Math.max(...values: number[]): number - Returns the larger of a set of supplied numeric expressions.
console.log(Math.max(100,200,500,10,20));//500

//05 - Math.min(...values: number[]): number - Returns the smaller of a set of supplied numeric expressions.
console.log(Math.min(100,200,500,10,20));//10

//06 - Math.random(): number - Returns a pseudorandom number between 0 and 1.
console.log(Math.random());//0.07854902963741417



