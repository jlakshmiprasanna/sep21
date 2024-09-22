// 1.(take two strings with spaces)
var str1="  Good    Morning  ";
var str2="Everyone";
console.log(str1);
console.log(str1.trim());
console.log(str2);
var resultstr=(str1.concat(str2));
console.log(resultstr);
console.log(resultstr.toUpperCase());

// 2.(Extract Middle Portion of the string and get the last index of char)
var a="Devara";
console.log(a.charAt(5));
console.log(a.toLowerCase(a));

// 3.(take a single char and concat string to that char)
var c="Junior";
var d="Ntr"
var resultstr1=a.concat(d);
console.log(resultstr1);
// (convert string to uppercase )
console.log(c.toUpperCase(resultstr1));
// (extract the last second char)
var e="JuniorNTR";
console.log(e.charAt(4));

// 5.(You are given a string with extra spaces at the beginning and end.)
let f="     Jonnalagadda        Prasanna        ";
console.log(f.trim());
// (make the first and last characters uppercase,)
console.log(f.toUpperCase());
// (extract a specific part of the string,)
let g="prasanna";
console.log(g);
// (concatenate it with another string)
let i="hai";
let final=g.concat(f);
console.log(final);

// 6.(find the index of are word in the sentence)
let j = "hello there, how are you";
let k = "are";
let l = j.indexOf(k);
console.log(l);