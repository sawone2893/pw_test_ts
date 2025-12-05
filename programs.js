// str = "Hello World Hello Hello";
// // String Length: Return the length of a string.
// console.log(str.length);
// // Uppercase: Convert string to uppercase.
// console.log(str.toUpperCase());
// // To Lowercase: Convert string to lowercase.
// console.log(str.toLowerCase());
// //First Character: Return the first char.
// console.log(str[0]);
// console.log(str.at(0));
// //Last Character: Return the last char.
// console.log(str.at(-1));
// //Char at Index: Return char at index n.
// n = 6;
// console.log(str.charAt(n));
// //Concatenation: Join using + operator.
// s1 = "Hi";
// s2 = "Hello";
// console.log(s1 + " " + s2);
// //Interpolation: Join using template literals.
// console.log(`${s1} ${s2}`);
// // Trim Whitespace: Remove space from both ends.
// str_space = "    India   ";
// console.log(str_space.trim());
// //Trim Start: Remove space from start.
// console.log(str_space.trimStart());
// //Trim End: Remove space from end.
// console.log(str_space.trimEnd());
// //Repeat String: Repeat string n times.
// console.log(s1.repeat(n));
// //Replace Substring: Replace first occurrence.
// console.log(str.replace("Hello", "Hi"));
// //Replace All: Replace all occurrences.
// console.log(str.replaceAll("Hello", "Hi"));
// //Check Contains: Check if string includes word.
// console.log(str.includes("Hello"));
// //Check Start: Check if starts with word.
// console.log(str.startsWith("Hello"));
// //Check End: Check if ends with word.
// console.log(str.endsWith("Hello"));
// //Index Of: Find index of first char occurrence.
// console.log(str.indexOf("Hello"));
// //Last Index Of: Find index of last occurrence.
// console.log(str.lastIndexOf("Hello"));
// //Slice String: Extract part from index A to B.
// console.log(str.slice(2, 6));
// //Substring: Extract part using .substring().
// console.log(str.substring(2, 6));
// //Split to Array: Split sentence into words.
// sentence = "I love India";
// console.log(sentence.split(" "));
// //Split by Char: Split string by delimiter.
// console.log(s2.split(""));
// //Type Check: Check if variable is string.
// console.log(typeof s1);
// //Empty Check: Check if empty or whitespace.
// emp = "";
// console.log(emp.length == 0);

//Reverse String: Reverse "hello" to "olleh".
let reverseString = (str) => {
  revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  return revStr;
};
//str = "shabbir";
//console.log(reverseString(str));

//Palindrome Check: Reads same forward/back.
//console.log(reverseString(str) === str);
//Count Vowels: Count a, e, i, o, u.
let countVowel = (str) => {
  let count = 0;
  for (let ch of str) {
    if ("aeiou".includes(ch)) {
      count++;
    }
  }
  return count;
};

//console.log(`Vowel count: ${countVowel("india")}`);

let countConsonant = (str) => {
  let count = 0;
  for (let ch of str) {
    if (!"aeiou".includes(ch)) {
      count++;
    }
  }
  return count;
};
// console.log(`Consonant count: ${countConsonant("india")}`);

//Capitalize First: Capitalize first letter.
let capitalizeFirstLeter = (str) => {
  return str[0].toUpperCase() + str.slice(1);
};

//console.log(`Capitalize first letter ${capitalizeFirstLeter("india")}`);

//Title Case: Capitalize every word.
let titleCase = (str) => {
  let titleCaseStr = "";
  for (let word of str.split(" ")) {
    titleCaseStr += capitalizeFirstLeter(word) + " ";
  }

  return titleCaseStr;
};
//console.log(`Title case String: ${titleCase("india is great cuntry")}`);

//Swap Case: Swap upper to lower & vice versa.
let swapCase = (str) => {
  //let swapCaseStr = "";
  // for (let ch of str) {
  //   if (ch >= "a" && ch <= "z") {
  //     swapCaseStr += ch.toUpperCase();
  //   } else if (ch >= "A" && ch <= "Z") {
  //     swapCaseStr += ch.toLowerCase();
  //   }
  // }
  // return str.split('').map((ch) => {
  //   if (ch >= "a" && ch <= "z") {
  //     return ch.toUpperCase();
  //   } else if (ch >= "A" && ch <= "Z") {
  //     return ch.toLowerCase();
  //   }
  // }).join('');

  return str
    .split("")
    .map((ch) => {
      if (ch === ch.toLowerCase()) {
        return ch.toUpperCase();
      } else if (ch === ch.toUpperCase()) {
        return ch.toLowerCase();
      }
    })
    .join("");
  //return swapCaseStr;
};
// console.log(`Swap case String: ${swapCase("inDIA")}`);

//Remove Numbers: Strip digits from string.
let removeDigit = (str) => {
  return str
    .split("")
    .map((ch) => {
      if (!(ch >= "0" && ch <= "9")) {
        return ch;
      }
    })
    .join("");
};
// console.log(`String without numbers: ${removeDigit("sh2jh28j")}`);

//Remove Symbols: Strip non-alphanumeric.
let removeSymbols = (str) => {
  return str
    .split("")
    .map((ch) => {
      if (
        (ch >= "0" && ch <= "9") ||
        (ch >= "a" && ch <= "z") ||
        (ch >= "A" && ch <= "Z")
      ) {
        return ch;
      }
    })
    .join("");
};
//console.log(`String without Symbols: ${removeSymbols("s^*&^*&^*&&h2jh28j")}`);

//Mask Credit Card: Show only last 4 digits.
let maskCreditCard = (last4Digit) => {
  return last4Digit.padStart(16, "*");
};
//console.log(`Mask Credit Card: ${maskCreditCard("5611")}`);

//Extract Initials: "John Doe" -> "J.D.".
let extractInitials = (str) => {
  return (
    str
      .split(" ")
      .map((word) => word[0])
      .join(".") + "."
  );
};
//console.log(`Extract Initials: ${extractInitials("Shabbir Rayeen")}`);

//Word Count: Count words in sentence.
let countWords = (str) => {
  return str.split(" ").length;
};
//console.log(`Words Count: ${countWords("india is great")}`);

//Snake to Camel: snake_case to camelCase.
let snakeTocamelCase = (str) => {
  return str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
};
//console.log(snakeTocamelCase("case_file_in_to"));

//Camel to Snake: camelCase to snake_case.
let camelToSnake = (str) => {
  return str
    .replace(/([A-Z])/g, "_$1") // Add underscore before uppercase letters
    .toLowerCase(); // Convert everything to lowercase
};
//console.log(camelToSnake("caseFileInTo"));

//Remove Duplicates: Remove duplicate chars.
let removeDuplicateChar = (str) => {
  // uniqueChars=[];
  // for(let ch of str){
  //   if(!uniqueChars.includes(ch)){
  //     uniqueChars.push(ch);
  //   }
  // }

  // return uniqueChars.join('');
  return [...new Set(str)].join("");
};
//console.log(`after duplicate remove: ${removeDuplicateChar("shabbirrrr")}`);

//Find Longest Word: Return longest word.
let getLongestWord = (str) => {
  longWord = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i].length > longWord.length) {
      longWord = str[i];
    }
  }
  return longWord;
};
//console.log(`Longest Word: ${getLongestWord(["India","Country","Go","Strawberry"])}`);
//Find Shortest Word: Return shortest word.
let getShortestWord = (str) => {
  shortWord = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i].length < shortWord.length) {
      shortWord = str[i];
    }
  }
  return shortWord;
};
// console.log(
//   `Shortest Word: ${getShortestWord(["India", "Country", "Go", "Strawberry"])}`
// );

//Count Occurrences: Count specific char.
let getCharOccurrences = (str) => {
  let data = {};
  for (let ch of str) {
    data[ch] = data[ch] + 1 || 0;
  }

  return data;
};
let data=getCharOccurrences("aaabbbcccce");
for(record in data){
console.log(`Key: ${record}, value:${data[record]}`);
}
