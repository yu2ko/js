console.log("===0=====================================");
//regex101.com/

https: console.log("===1=====================================");
// regex email stackoverflow:
// How can I validate an email address using a regular expression
// https://stackoverflow.com/questions/201323/how-can-i-validate-an-email-address-using-a-regular-expression

// (?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])

console.log("===2=====================================");
// regex password stackoverflow:
// Regex for password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters
// https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a

// Minimum eight characters, at least one letter and one number:
// "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"

// Minimum eight characters, at least one letter, one number and one special character:
// "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"

// Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
// "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"

// Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
// "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"

// Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:
// "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"

console.log("===2=====================================");
//c.t
//c\.t
//^c\.t$
//^...$
//\.$ - перевірка на крапку у кінці речення
//[cat]- збіг по символам
// [A-z]
// [A - Za-z0-9$#@!.]
// [^A - Za-z0-9$#@!.] - заборона
// ^([^A - Z])([a-z0-9$#@!.])
// ^([A - Z])\d - цифра
// ^([A - Z])\D - не цифра
// ^\s - пробіл
// ^\S - все, окрім пробілa
// ^\S$ - все, окрім пробілa
// ^\S\S$
// ^\w\w$
// ^\W\W$ - для знаходження будь-якого неалфавітного символу в рядку
// ^(\W)\W$
// ^(\W[^Її])\(W[^Її])$
// [^Її\w][^Її\w]$
// [^Її\wA-Яа-я][^Її\wA-Яа-я]$
// \b......\b$
// ....\b$
// \b....\b
// \b\w\w\w\w\b
// \B\w\w\w\w\B
// \b\w\w\w\w\B
// \b(\w{4})\B
// \b(\w{2,4})\B
// \b(\w*)\B
// .a*
// .a+
// .a?
// \b(ab|ax)\B
// \b((\w\w)|(\@\@))\B
// \b(\w{2,})(?=\s)\b
// \b(\w{2,})(?!\s)\b
// \b(?<=\s)(\w{2,})\b
// \b(?<=\.(\w{2,4})\b
// \b((?<=\s(\w{2,})|(\w{2,})(?!\s))\b
// \b(?<=\s)(\w{2,})(?=\s)\b
// \b(?<!\s)(\w{2,})(?=\s)\b
// \b(?<!\s)(\w{2,})(?!\s)\b
// \b(?<!\s)((\w{2})(\w{2}))(?!\s)\b
// \b(?<!\s)(?:(?:\w{2})(?:\w{2}))(?!\s)\b
// \b(?<!\s)(?:(?:\w{2})(?:\w{2}))(?=\n)\b

console.log("===3=Найбільш використовується=============");
// ^[A -Za-z\s\.\d]{1,}$
// ^[A -Z\s]{1,}
// [\w\-]{8,16}
console.log("===3.1=password============================");
// (?:[\w\-\@]+){8,16}
// (?:[\w\-](?=\@)){8,16}
// (?:[\w\-]){8,16}(?=\@)
// ^(?:[\w\-]){8,16}(?=\@)
// ^(?:[\w\-]){8,16}@

// ^(?:[\w\-]){8,16}@(?:[\w\-]){1,16}.(?:[\w\-]){1,16}$

// ^(?:[\w\-\@+]){8,16}
// ^(?=.*@)(?:[\w\-]){8,16}
// ^(?=.*[@])(?:[\w\-@]){8,16}
// ^(?=.*[\@\#\!\$])(?:[\w\-\@\#\!\$]){8,16}   //!23qweQWE@
