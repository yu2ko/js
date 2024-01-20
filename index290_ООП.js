console.log("===1============================");
const Animal = {
  name: "Тварина",
  voice: "Звук",
  say() {
    console.log(`${this.name} каже ${this.voice}`);
  },
};
const dog = { ...Animal };
dog.name = "Бобік";
dog.voice = "Звук";
dog.say();
// Бобік каже Звук

console.log("===1.1============================");
const dog1 = { name: "Бобік", ...Animal };
// dog.name = "Бобік";
dog1.voice = "Гав";
dog1.say();
// Тварина каже Гав
console.log(dog1); // { name: 'Тварина', voice: 'Гав', say: [Function: say] }

console.log("===2.1============================");
const Animal2 = {
  name: "Тварина",
  voice: "Звук",
  say() {
    console.log(`${this.name} каже ${this.voice}`);
  },
};
const dog2 = Object.create(Animal2);
dog2.name = "Бобік";
dog2.voice = "Гав";
dog2.say();
// Бобік каже Гав
console.log(dog2); // { name: 'Бобік', voice: 'Гав' }

Animal2.go = function () {
  console.log(`${this.name} біжить`); // Бобік біжить
};
dog2.go();

console.log("===2.2============================");
console.log(dog2.__proto__); // об'єкт-прототип
// {
//   name: 'Тварина',
//   voice: 'Звук',
//   say: [Function: say],
//   go: [Function (anonymous)]
// }

console.log("===2.3============================");
console.log(Object.getPrototypeOf(dog2)); // об'єкт-прототип
// {
//   name: 'Тварина',
//   voice: 'Звук',
//   say: [Function: say],
//   go: [Function (anonymous)]
// }

console.log("===2.4============================");
console.log(Object.getPrototypeOf(dog2) === Animal2); //true

console.log("===2.5============================");
console.log(Animal2.isPrototypeOf(dog2)); //true

console.log("===2.5============================");
Object.setPrototypeOf(dog2, null);
console.log(Object.getPrototypeOf(dog2)); //null

console.log("===2.6============================");
Object.setPrototypeOf(dog2, { asd: "123" });
console.log(Object.getPrototypeOf(dog2)); //{ asd: '123' }

console.log("===3============================");
const Animal3 = {
  name: "Тварина",
  voice: "Звук",
  say() {
    console.log(`${this.name} каже ${this.voice}`);
  },
};
const dog3 = Object.create(Animal3);
dog3.name = "Бобік";
dog3.voice = "Гав";
dog3.say(); //Бобік каже Гав

dog3.age = 10;

console.log(dog3.age); //10

dog3.age = 15;

console.log(dog3.age); //15

delete dog3.age;

console.log(dog3.age); //undefined

Animal3.go = function () {
  console.log(`${this.name} біжить`); //Бобік біжить
};
dog3.go();

console.log("===4============================");
const Animal4 = {
  name: "Тварина",
  voice: "Звук",
  say() {
    console.log(`${this.name} каже ${this.voice}`);
  },
};
const dog4 = Object.create(Animal4);
dog4.name = "Бобік";
dog4.voice = "Гав";
// dog4.say(); //Бобік каже Гав

Object.defineProperty(dog4, "age4", {
  set(value) {
    this._age4 = value * 2;
  },

  get() {
    return `${this._age4 || 0} років`;
  },
});

console.log(dog4.age4); //0 років

dog4.age4 = 15;

console.log(dog4.age4); //30 років

delete dog4.age4;

console.log(dog4.age4); //30 років
console.log(dog4); //{ name: 'Бобік', voice: 'Гав', _age4: 30 }

// Animal4.go = function () {
//   console.log(`${this.name} біжить`); //Бобік біжить
// };
// dog4.go();

console.log("===5============================");
const Animal5 = {
  name: "Тварина",
  voice: "Звук",
  say() {
    console.log(`${this.name} каже ${this.voice}`);
  },
};
const dog5 = Object.create(Animal5);
dog5.name = "Бобік";
dog5.voice = "Гав";
// dog5.say(); //Бобік каже Гав

Object.defineProperty(dog5, "age5", {
  set(value) {
    this._age5 = value * 2;
  },

  get() {
    return `${this._age5 || 0} років`;
  },
});

Object.defineProperty(dog5, "location", {
  value: "Ukraine",
  writable: true,
  configurable: true,
  enumerable: true,
});
console.log(dog5.location); //Ukraine
delete dog5.location;
console.log(dog5.location); //undefined

console.log("===5.1============================");
Object.defineProperty(dog5, "location", {
  value: "Ukraine",
  writable: true,
  // configurable: true,
  enumerable: true,
});
console.log(dog5.location); //Ukraine
delete dog5.location;
console.log(dog5.location); //Ukraine

console.log("===5.2============================");
console.log(Object.keys(dog5)); //[ 'name', 'voice', 'location' ]

console.log("===5.3============================");
const dog53 = Object.create(Animal5);
dog53.name = "Бобік";
dog53.voice = "Гав";
Object.defineProperty(dog53, "location", {
  value: "Ukraine",
  writable: true,
  // configurable: true,
  // enumerable: true,
});
console.log(Object.keys(dog53)); //[ 'name', 'voice' ]
dog53.location = "USA";
console.log(dog53.location); //USA

console.log("===5.4============================");
const dog54 = Object.create(Animal5);
dog54.name = "Бобік";
dog54.voice = "Гав";
Object.defineProperty(dog54, "location", {
  value: "Ukraine",
  // writable: true,
  // configurable: true,
  // enumerable: true,
});
// console.log(Object.keys(dog54)); //[ 'name', 'voice' ]
dog54.location = "USA";
console.log(dog54.location); //Ukraine

console.log("===6============================");
const dog6 = Object.create(Animal5);
dog6.name = "Бобік";
dog6.voice = "Гав";
Object.defineProperty(dog6, "age", {
  set(value) {
    this._age = value * 2;
  },

  get() {
    return `${this._age || 0} років`;
  },
});
console.log(dog6.age); //0 років
dog6.age = 15;
console.log(dog6.age); //30 років
delete dog6.age;
console.log(dog6._age); //30

console.log("===7============================");
const dog7 = Object.create(Animal5);
dog7.name = "Бобік";
dog7.voice = "Гав";
Object.defineProperty(dog7, "_age", {
  value: 5,
  writable: true,
});

Object.defineProperty(dog7, "age", {
  set(value) {
    this._age = value * 2;
  },

  get() {
    return `${this._age} років`;
  },
});
console.log(dog7.age); //5 років
dog7.age = 15;
console.log(dog7.age); //30 років
delete dog7._age;
console.log(dog7.age); //30 років
console.log(Object.keys(dog7)); //[ 'name', 'voice' ]

console.log("===8============================");
const dog8 = Object.create(Animal5);
dog8.name = "Бобік";
dog8.voice = "Гав";

Object.defineProperty(dog8, "_space", {
  value: 1,
  writable: true,
});

Object.defineProperty(dog8, "space", {
  set(value) {
    this._space = value * 4;
  },

  get() {
    return `${this._space} px`;
  },
});
console.log(dog8.space); //1 px
dog8.space = 4;
console.log(dog8.space); //16 px

console.log("===8.1============================");
console.log(Object.getOwnPropertyDescriptor(dog8, "space"));
// {
//   get: [Function: get],
//   set: [Function: set],
//   enumerable: false,
//   configurable: false
// }

console.log("===8.2============================");
console.log(Object.getOwnPropertyDescriptor(dog8, "_space")); //{ value: 16, writable: true, enumerable: false, configurable: false }

console.log("===8.3============================");
const Animal83 = {
  name: "Тварина",
  voice: "Звук",
  say() {
    console.log(`${this.name} каже ${this.voice}`);
  },
};
const dog83 = Object.create(Animal83);
dog83.name = "Бобік";
dog83.voice = "Звук";
// dog83.say();
console.log(dog83.hasOwnProperty("say")); //false
console.log("===8.3.1============================");
console.log(dog83.say); //[Function: say]

console.log("===8.3.2============================");
console.log(dog83.hasOwnProperty("voice")); //true
console.log(dog83.voice); //Звук

console.log("===9=MainBlock===========================");
const Tag = {
  render(value) {
    return `<${this.className}>${value}<>`;
  },
  className: null,
};

///======

const Button = Object.create(Tag);

Button.render = function (value = "") {
  return `button class="${this.className}" style="${this.style}">${value}</button>`;
};

///======

const mainButton = Object.create(Button, {
  style: {
    value: "background: red;",
    writable: true,
  },
  className: {
    value: "my-button",
  },
});

console.log("===9.1============================");
console.log(mainButton.render("Click")); //button class="my-button" style="background: red;">Click</button>

console.log("===9.1.1============================");
console.log(mainButton.className); //my-button

///======

const Input = Object.create(Tag);

Input.render = function () {
  return `input placeholder="${this.placeholder}" style="${this.style}"/>`;
};

///======

const loginInput = Object.create(Input, {
  style: {
    value: "border: 1px solid red;",
    writable: true,
  },
  placeholder: {
    value: "Login...",
  },
});

console.log("===9.2============================");
console.log(loginInput.render()); //input placeholder="Login..." style="border: 1px solid red;"/>

console.log("===9.3============================");
console.log(loginInput.className); //null

///======

console.log("===9.4============================");
const serverRequest = {
  data: null,
  sendData() {
    ///...
  },
  render() {
    this.data = this.getData();
    return `...`;
  },
};

///======

const Page = {
  components: [],
  path: "/.../.../",
  render() {
    ///...
  },
};

///======
