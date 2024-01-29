console.log("===1==============================");
class RecentPurchases {
  static #instance = null;

  constructor() {
    this.purchases = [];
  }

  static create() {
    if (!this.#instance) {
      this.#instance = new RecentPurchases();
    }
    return this.#instance;
  }
  add(item) {
    this.purchases.push(item);
  }
  get() {
    return this.purchases;
  }
}
const lastPurchaseList = RecentPurchases.create();
//===other program===
const lastPurchaseList2 = RecentPurchases.create();

console.log(lastPurchaseList === lastPurchaseList2); //true

lastPurchaseList2.add("Телефон");
lastPurchaseList2.add("Навушники");

console.log("===1.1==============================");
console.log(lastPurchaseList.get()); //[ 'Телефон', 'Навушники' ]

console.log("===2==============================");
class RecentPurchases2 {
  static #instance = null;

  static #purchases = [];

  static create() {
    if (!this.#instance) {
      this.#instance = new RecentPurchases2();
    }
    return this.#instance;
  }
  static add(item) {
    this.#purchases.push(item);
  }
  static get() {
    return this.#purchases;
  }
}
RecentPurchases2.create();

RecentPurchases2.add("Телефон");
RecentPurchases2.add("Навушники");

console.log(RecentPurchases2.get()); //["Телефон", "Навушники"]

console.log("===3=Фабрика=============================");
class Button {
  constructor({ text, color }) {
    this.text = text;
    this.color = color;
  }

  render() {
    return `<button class="color:${this.color};">${this.text}</button>`;
  }
}

class IconButton {
  constructor({ icon, color }) {
    this.icon = icon;
    this.color = color;
  }

  render() {
    return `<button class="color:${this.color};"><img src="${this.icon}"/></button>`;
  }
}

console.log("===3.1=Фабрика=============================");
class ButtonFactory {
  static TYPE = {
    BASIC: "basic",
    ICON: "icon",
  };
  static createButton(type, options) {
    switch (type) {
      case this.TYPE.BASIC:
        return new Button(options);
      case this.TYPE.ICON:
        return new IconButton(options);
      default:
        throw new Error(`Такого типу кнопки не існує:${type}`);
    }
  }
}
const myIconButton = ButtonFactory.createButton(ButtonFactory.TYPE.ICON, {
  color: "red",
  icon: "/icon/my-icon.svg",
});
console.log(myIconButton); //IconButton { icon: '/icon/my-icon.svg', color: 'red' }

console.log("===3.2=Фабрика=============================");
class ButtonFactory2 {
  static TYPE = {
    BASIC: "basic",
    ICON: "icon",
  };
  static createButton(type, options) {
    if (options.icon) {
      return new IconButton(options);
    }

    if (options.text) {
      return new Button(options);
    }
    throw new Error(`Такого типу кнопки не існує:${type}`);
  }
}
const myIconButton2 = ButtonFactory2.createButton(ButtonFactory2.TYPE.ICON, {
  color: "red",
  icon: "/icon/my-icon.svg",
});
console.log(myIconButton2); //IconButton { icon: '/icon/my-icon.svg', color: 'red' }

console.log("===4=Спостерігач=============================");
class User {
  constructor(email) {
    this.email = email;
  }

  sendEmail(message) {
    console.log(`Відправка на email ${this.email} повідомлення: ${message}`);
  }
}

class Video {
  constructor(name) {
    this.name = name;
  }
}

class Channel {
  constructor(name) {
    this.name = name;
    this.subscribers = [];
  }

  subscribe(user) {
    //Підписка на канал
    this.subscribers.push(user);
  }

  unsubscribe(user) {
    //Відписка на канал
    this.subscribers = this.subscribers.filter((sub) => sub !== user);
  }

  createVideo(name) {
    //Створення нового відео
    const video = new Video(name);
    this.sendNotify(video);
  }

  sendNotify(video) {
    //Відправка повідомлення підписникам про нове відео
    this.subscribers.forEach((subscriber) => {
      subscriber.sendEmail(
        `Нове відео "${video.name}" на Youtube каналі ${this.name}!`
      );
    });
  }
}
const channel = new Channel("IT Brains");

const user1 = new User("john@example.com");
const user2 = new User("jane@example.com");
const user3 = new User("alice@example.com");

channel.subscribe(user1);
channel.subscribe(user2);
channel.subscribe(user3);

channel.createVideo("Урок про HTML");

// Відправка на email john@example.com повідомлення: Нове відео "Урок про HTML" на Youtube каналі IT Brains!
// Відправка на email jane@example.com повідомлення: Нове відео "Урок про HTML" на Youtube каналі IT Brains!
// Відправка на email alice@example.com повідомлення: Нове відео "Урок про HTML" на Youtube каналі IT Brains!

channel.unsubscribe(user1);

console.log("===4.1=Спостерігач=============================");
channel.createVideo("Урок про CSS");
// Відправка на email jane@example.com повідомлення: Нове відео "Урок про CSS" на Youtube каналі IT Brains!
// Відправка на email alice@example.com повідомлення: Нове відео "Урок про CSS" на Youtube каналі IT Brains!

console.log("===5=Декоратор=============================");
class Coffee {
  name = "Кава";
  cost = 10;
  cook() {
    console.log(`Приготування ${this.name}`);
    // логіка приготування кавового напою
  }
}

class MilkDecorator {
  constructor(coffee, amount) {
    this.coffee = coffee;
    this.amount = amount;
  }

  get name() {
    return `${this.coffee.name}, з ${this.amount} мл молока`;
  }

  get cost() {
    const milkPrice = 0.05;
    return this.coffee.cost + milkPrice * this.amount;
  }

  cook() {
    console.log(`Приготування ${this.name}`);
    // логіка приготування кави з молоком
  }
}

// Створення об'єкту базової кави
let coffee = new Coffee();
console.log(coffee.name);
console.log(coffee.cost);
coffee.cook();

// Додавання декоратора молока до кави
let latteCoffee = new MilkDecorator(coffee, 300);
console.log(latteCoffee.name);
console.log(latteCoffee.cost);
latteCoffee.cook();

// Кава
// 10
// Приготування Кава
// Кава, з 300 мл молока
// 25
// Приготування Кава, з 300 мл молока

console.log("===5=Мементо=============================");
class TextEditor {
  #text = "";

  set text(text) {
    this.#text = text;
    this.#save();
  }

  get text() {
    return this.#text;
  }

  #save() {
    Snapshot.create(this.text);
  }

  restore() {
    this.#text = Snapshot.restore().text;
  }
}

class Snapshot {
  constructor(text) {
    this.text = text;
  }

  static #snapshots = [];

  static create(text) {
    // console.log(text);
    this.#snapshots.push(new Snapshot(text));
  }

  static restore() {
    this.#snapshots.pop();
    return this.#snapshots[this.#snapshots.length - 1];
  }
}
const editor = new TextEditor();

editor.text = "Це початовий текст";
editor.text = "Це редагований текст";
editor.text = "Це оновлений текст";

console.log("===5.1=Мементо=============================");
console.log(editor.text); //Це оновлений текст

console.log("===5.2=Мементо=============================");
editor.restore();
console.log(editor.text); //Це редагований текст

editor.restore();
console.log(editor.text); //Це початовий текст

console.log("===6=Chain of responsibility=============================");
class AuthHandler {
  setNextHandler(handler) {
    this.nextHandler = handler;
    return handler;
  }

  login(user, password) {
    if (this.nextHandler) {
      return this.nextHandler.login(user, password);
    } else {
      return false;
    }
  }
}

class TwoFactorAuthHandler extends AuthHandler {
  login(user, password) {
    if (
      user === "john" &&
      password === "password" &&
      this.isValidTwoFactorCode()
    ) {
      console.log("Вхід дозволено з двофакторною аутентифікацією");
      return true;
    } else {
      return super.login(user, password);
    }
  }

  isValidTwoFactorCode() {
    return true;
  }
}

console.log("===6.1=Chain of responsibility=============================");
const handler1 = new TwoFactorAuthHandler();
handler1.setNextHandler({
  login: (...arg) => {
    console.log(arg);
  },
});
handler1.login("login", "password");
// ["login", "password"];

console.log("===6.2=Chain of responsibility=============================");
handler1.setNextHandler({
  login: (login, password) => {
    const result =
      login === "login" && password == "password"
        ? "Користувач увійшов в акаунт"
        : "Користувач не увійшов в акаунт";
    console.log(result);
    return result;
  },
});
handler1.login("login", "password");
// Користувач увійшов в акаунт

// ===========================================================================
// ===========================================================================
// ===========================================================================

console.log("===6.3=Chain of responsibility=============================");
class RoleHandler extends AuthHandler {
  login(user, password) {
    if (user === "guest") {
      console.log("Вхід дозволено з роллю гостя");
      return true;
    } else {
      return super.login(user, password);
    }
  }
}

class CredentialsHandler extends AuthHandler {
  login(user, password) {
    if (user === "admin" && password === "admin123") {
      console.log("Вхід дозволено з логіном і паролем");
      return true;
    } else {
      return super.login(user, password);
    }
  }
}

const handler = new TwoFactorAuthHandler();

const handler2 = new CredentialsHandler();

handler2.setNextHandler(new RoleHandler());

handler.setNextHandler(handler2);

handler.login("admin", "admin123"); //Вхід дозволено з логіном і паролем

handler.login("guest", "admin123"); //Вхід дозволено з роллю гостя

console.log("===6.4=Chain of responsibility=============================");
class HandlerBuilder {
  constructor() {
    this.firstHandler = null;
    this.lastHandler = null;
  }

  add(handler) {
    if (!this.firstHandler) {
      this.firstHandler = handler;
      this.lastHandler = handler;
    } else {
      this.lastHandler.setNextHandler(handler);
      this.lastHandler = handler;
    }
    return this;
  }

  create() {
    this.firstHandler;
  }
}
const handlerBuilder = new HandlerBuilder();
const handler3 = handlerBuilder
  .add(new CredentialsHandler())
  .add(new TwoFactorAuthHandler())
  .add(new RoleHandler())
  .create();

handler.login("admin", "admin123"); //Вхід дозволено за логіном і паролем
handler.login("john", "password"); //Вхід дозволено з двофакторною аутентифікацією
handler.login("guest", "guest123"); //Вхід дозволено з роллю гостя
handler.login("user", "password"); //Вхід заборонено

// Вхід дозволено з логіном і паролем
// Вхід дозволено з двофакторною аутентифікацією
// Вхід дозволено з роллю гостя

console.log("===6.5=Міст=============================");
class User6 {
  constructor(name, messenger) {
    this.name = name;
    this.messenger = messenger;
  }

  sendMessage(message) {
    const formattedMessage = this.formatMessage(message);
    this.messenger.sendMessage(formattedMessage);
  }

  formatMessage(message) {
    return `[${this.name}]: ${message}`;
  }
}

//через СМС
//через email
//через телеграм-бот

class SMSMessenger {
  static sendMessage(message) {
    console.log(`Відправлено SMS: ${message}`);
  }
}

class EmailMessenger {
  static sendMessage(message) {
    console.log(`Відправлено Email: ${message}`);
  }
}

const john = new User6("John", SMSMessenger);
const jane = new User6("John", EmailMessenger);

john.sendMessage("Привіт!"); //Відправлено SMS: [John]: Привіт!
jane.sendMessage("Привіт!"); //Відправлено Email: [John]: Привіт!
