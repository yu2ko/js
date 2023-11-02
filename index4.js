const a = 1 + 1;
const b = a + 2 + "Test" + " " + "10";
const c = `${a} Hello 10`;
const d = "Test" + "Hello" + "World";
const e = "Test" + " " + "Hello" + " " + "World";
const f = `Test Hello World`;

// якщо потрібно перетворити змінну на текст, - достатньо додати пустий рядок:
const g = 1 + 1;
const g2 = 1 + 1 + "";

console.log(b);
console.log(b + 2);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

console.log(g);
console.log(g2);

// NaN:
const h = 1 + 1 - "Test";

const h2 = 1 + 1 - "10";
console.log(h, h2);

// Перетворення рядка у число:
const i = -"10";
console.log(i);
// ==============================

const i2 = -(-"10");
console.log(i2);

const j = -a;
console.log(a, j);

const k = a * j;
console.log(k);

// Перетворення рядка у число(a=1+1):
const l = a * "10";
console.log(l);
// ==============================
// Nan:
const m = a * "10f";
console.log(m);
// ==============================
const n = "10" * "10";
console.log(n);

// !!!ділення аналогічно множенню! Символ: "/"!!!

// Степень. Символ: "**"
const o = 5 ** 4;
const o1 = "5" ** 4;
const o2 = "5f" ** 4;
console.log(o, o1, o2);

// Остача
const p = 10 % 6;
const p2 = 3 % 6;
console.log(p, p2);

// Інкремент
// ====================
let r1 = 6;
console.log(r1); //6
r1 = r1 + 1;
console.log(r1); //7
// ====================
let r2 = 6;
console.log(r2); //6
r2 = ++r2;
console.log(r2); //7
// ====================
let r21 = 6;
console.log(r21); //6
r2 = r21++;
console.log(r21); //7
// ====================
let f3 = "5" ** "4";
let r3 = 6;
console.log(f3, r3);
f3 = r3++;
console.log(f3, r3); //6 7
// ====================
let f4 = "5" ** "4";
let r4 = 6;
console.log(f4, r4);
f4 = ++r4;
console.log(f4, r4); //7 7
// ====================
let r = 5;
let s = ++r; //s=6,r=6
let t = r++; //t=6,r=7
console.log(r, s, t); //7 6 6
// =======================
let f5 = "5" ** "4";
let r5 = 6;
console.log(f5, r5);
f5 = ++r5 + 1;
console.log(f5, r5); //8 7
// ====================
let f6 = "5" ** "4";
let r6 = 6;
console.log(f6, r6);
f6 = r6++ + 1;
console.log(f6, r6); //7 7
// ====================
// !!! декремент:
// =======================
let f11 = "5" ** "4";
let r11 = 6;
console.log(f11, r11);
f11 = --r11;
console.log(f11, r11); //5 5
// ====================
let f12 = "5" ** "4";
let r12 = 6;
console.log(f12, r12);
f12 = r12--;
console.log(f12, r12); //6 5
// ====================
let f13 = "5" ** "4";
let r13 = 6;
console.log(f13, r13);
f13 = --r13 + 1;
console.log(f13, r13); //6 5
// ====================
let f14 = "5" ** "4";
let r14 = 6;
console.log(f14, r14);
f14 = r14-- + 1;
console.log(f14, r14); //7 5
// ====================
x = 1;
x = x * 5;
x *= 5; //25
x -= 5; //20
x %= 3; //2

console.log(x);

let y = 6 % 7;
console.log(y); //6
y = y++;
console.log(y); //6
