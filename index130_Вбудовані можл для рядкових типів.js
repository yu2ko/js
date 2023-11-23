console.log("==============================");
const a = "HelloWorld";

console.log(a.length); //10
console.log(String.fromCodePoint(128515));

//search: unicode table
console.log("===search: unicode table===========================");

console.log("==============================");
const b = "Ŀ";

console.log(b); //Ŀ

console.log("==============================");
const c = "Ŀ1213121";

console.log("Ŀ1213121".codePointAt()); //319 - Ŀ
console.log((123).toFixed()); //123

console.log("==============================");
const c1 = "Ŀ";

console.log(c1.codePointAt(0)); //319
console.log(String.fromCodePoint(319)); //Ŀ

console.log("==============================");
console.log(String.raw`www.test.com/catalog`); //www.test.com/catalog
console.log(String.raw`www.test.com\catalog`); //www.test.com\catalog

console.log(`www.test.com\catalog`); //www.test.comcatalog !!!

console.log(`www.test.com\ncatalog`); //www.test.com
//catalog буде перенос

console.log(String.raw`www.test.com\ncatalog`); //www.test.com\ncatalog

console.log("==============================");
const a1 = "HelloWorld"; // (0)H(1)e(2)l(3)l(4)o(5)W(6)o(7)r(8)l(9)d(10)
const b1 = "Ŀ";

console.log(a1.concat(" ", b, " ", "!")); //HelloWorld Ŀ !

console.log("===відлік з нуля===");
console.log(a1.includes("lo", 3)); //true
console.log(a1.includes("He", 0)); //false

console.log(a1.includes("lo")); //true
console.log(a1.includes("He")); //true

console.log("=Wwo=============================");
// const a1 = "HelloWorld"; // (0)H(1)e(2)l(3)l(4)o(5)W(6)o(7)r(8)l(9)d(10)
console.log(a1.includes("W", 5)); //true
console.log(a1.includes("w", 5)); //false
console.log(a1.includes("o", 6)); //true

console.log("==============================");
// const a1 = "HelloWorld"; // (0)H(1)e(2)l(3)l(4)o(5)W(6)o(7)r(8)l(9)d(10)
console.log(a1.indexOf("o")); //4
console.log(a1.indexOf("r")); //7
console.log(a1.indexOf("q")); //-1 немає

console.log("=12=============================");
const a1b = "HelloWorldooo";
console.log(a1b.lastIndexOf("o")); //12   // (0)H(1)e(2)l(3)l(4)o(5)W(6)o(7)r(8)l(9)d10)o(11)o(12)o

console.log("=He=el============================");
// const a1 = "HelloWorld"; // (0)H(1)e(2)l(3)l(4)o(5)W(6)o(7)r(8)l(9)d(10)
console.log(a1.startsWith("He")); //true

console.log(a1.startsWith("el", 1)); //true

console.log("==============================");
const a11 = "HelloWorld"; // (0)H(1)e(2)l(3)l(4)o(5)W(6)o(7)r(8)l(9)d(10)

console.log(a11.endsWith("ld")); //true
console.log(a11.endsWith("rl", 9)); //true

console.log("==============================");
console.log(a11.at(0)); //H

console.log("==============================");
const d = "HelloWorld"; // (0)H(1)e(2)l(3)l(4)o(5)W(6)o(7)r(8)l(9)d(10)

console.log(d.padEnd(15, "Start")); //HelloWorldStart
console.log(d.padEnd(15, "End")); //HelloWorldEndEn

console.log(d.padStart(15, "Start")); //StartHelloWorld
console.log(d.padStart(15, "St")); //StStSHelloWorld
console.log(d.padStart(18, "Started")); //StartedSHelloWorld

console.log(d.padStart(18, ".")); //........HelloWorld
console.log(d.padStart(18, " ")); //        HelloWorld

console.log("==============================");
console.log(d.repeat(5)); //HelloWorldHelloWorldHelloWorldHelloWorldHelloWorld

console.log("==============================");
// const d = "HelloWorld"; // (0)H(1)e(2)l(3)l(4)o(5)W(6)o(7)r(8)l(9)d(10)
console.log(d.slice(4)); //oWorld
console.log(d.slice(5)); //World
console.log(d.slice(5, 7)); //Wo
console.log(d.slice(5, 9)); //Worl
console.log(d.slice(-6)); //oWorld

console.log("==============================");
console.log(d.slice("afasfsfs")); //HelloWorld
console.log(d.substring(-5)); //HelloWorld

console.log("==============================");
console.log(d.toLowerCase()); //helloworld
console.log(d.toUpperCase()); //HELLOWORLD

console.log("==============================");
const e = "          HelloWorld           "; // (0)H(1)e(2)l(3)l(4)o(5)W(6)o(7)r(8)l(9)d(10)
console.log(e, "1"); //          HelloWorld            1
console.log(e.trim(), "1"); //HelloWorld 1

console.log(e.trimStart(), "1"); //HelloWorld            1
console.log(e.trimEnd(), "1"); //          HelloWorld 1
