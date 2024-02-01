console.log("===1.1=Композит==============================");
class Comment1 {
  constructor(text) {
    this.text = text;
  }
  display() {
    console.log(`- Коментар: ${this.text}`);
  }
}

class Video1 {
  comments = null;
  constructor(title) {
    this.title = title;
  }

  display() {
    console.log(`Відео: ${this.title}`);
    if (this.comment) this.comment.display();
  }
}

const video1 = new Video1("Навчальне відео");

video1.comment = new Comment1("Дуже корисне відео");

video1.display();

// Відео: Навчальне відео
// - Коментар: Дуже корисне відео

console.log("===1.2=Композит==============================");
class Comment {
  constructor(text) {
    this.text = text;
  }
  display() {
    console.log(`- Коментар: ${this.text}`);
  }
}

class Video {
  comments = [];
  constructor(title) {
    this.title = title;
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  removeComment(comment) {
    const index = this.comments.indexOf(comment);
    if (index !== -1) {
      this.comments.splice(index, 1);
    }
  }

  display() {
    console.log(`Відео: ${this.title}`);
    for (const comment of this.comments) {
      comment.display();
    }
  }
}

const video = new Video("Навчальне відео");

video.addComment(new Comment("Дуже корисне відео"));
video.addComment(new Comment("Дякую за чудовий матеріал!"));

video.display();

// Відео: Навчальне відео
// - Коментар: Дуже корисне відео
// - Коментар: Дякую за чудовий матеріал!

console.log("===1.3=Композит==============================");
class Comment3 {
  comments = [];

  constructor(text) {
    this.text = text;
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  removeComment(comment) {
    const index = this.comments.indexOf(comment);
    if (index !== -1) {
      this.comments.splice(index, 1);
    }
  }

  display() {
    console.log(`- Коментар: ${this.text}`);
    for (const comment of this.comments) {
      comment.display();
    }
  }
}

class Video3 {
  comments = [];

  constructor(title) {
    this.title = title;
  }

  addComment(comment) {
    this.comments.push(comment);
  }

  removeComment(comment) {
    const index = this.comments.indexOf(comment);
    if (index !== -1) {
      this.comments.splice(index, 1);
    }
  }

  display() {
    console.log(`Відео: ${this.title}`);
    for (const comment of this.comments) {
      comment.display();
    }
  }
}

const video3 = new Video3("Навчальне відео");

video3.addComment(new Comment3("Дуже корисне відео"));
video3.addComment(new Comment3("Дякую за чудовий матеріал!"));

video3.comments[0].addComment(new Comment3("Відповідь: Згоден!"));

video3.display();
// Відео: Навчальне відео
// - Коментар: Дуже корисне відео
// - Коментар: Відповідь: Згоден!
// - Коментар: Дякую за чудовий матеріал!

console.log("===1.3.1=Композит==============================");
console.log(video3.comments);
// [
//   Comment3 { comments: [ [Comment3] ], text: 'Дуже корисне відео' },
//   Comment3 { comments: [], text: 'Дякую за чудовий матеріал!' }
// ]

console.log("===1.4=Композит==============================");
class Composite {
  comments = [];

  addComment(comment) {
    this.comments.push(comment);
  }

  removeComment(comment) {
    const index = this.comments.indexOf(comment);
    if (index !== -1) {
      this.comments.splice(index, 1);
    }
  }
}

class Comment4 extends Composite {
  constructor(text) {
    super();
    this.text = text;
  }

  display() {
    console.log(`- Коментар: ${this.text}`);
    for (const comment of this.comments) {
      comment.display();
    }
  }
}

class Video4 extends Composite {
  constructor(title) {
    super();
    this.title = title;
  }

  display() {
    console.log(`Відео: ${this.title}`);
    for (const comment of this.comments) {
      comment.display();
    }
  }
}

const video4 = new Video4("Навчальне відео");

video4.addComment(new Comment4("Дуже корисне відео"));
video4.addComment(new Comment4("Дякую за чудовий матеріал!"));

video4.comments[0].addComment(new Comment4("Відповідь: Згоден!"));

video4.display();
// Відео: Навчальне відео
// - Коментар: Дуже корисне відео
// - Коментар: Відповідь: Згоден!
// - Коментар: Дякую за чудовий матеріал!

console.log("===1.4.1=Композит==============================");
console.log(video4.comments);
// [
//   Comment4 { comments: [ [Comment4] ], text: 'Дуже корисне відео' },
//   Comment4 { comments: [], text: 'Дякую за чудовий матеріал!' }
// ]

console.log("===2.1=Муха======================================");
class Category {
  static #categories = {};

  constructor(name) {
    this.name = name;
  }

  static create(name) {
    if (!this.#categories[name]) {
      this.#categories[name] = new Category(name);
    }
    return this.#categories[name];
  }
}

const electronics = Category.create("Electronics");
const books = Category.create("Books");
const electronics2 = Category.create("Electronics");

console.log(electronics, books, electronics2); //Category { name: 'Electronics' } Category { name: 'Books' } Category { name: 'Electronics' }
console.log(electronics === electronics2); //true

console.log("===2.2=Муха======================================");
class Category2 {
  static #categories = {};

  constructor(name) {
    this.name = name;
  }

  static create(name) {
    if (!this.#categories[name]) {
      this.#categories[name] = new Category2(name);
    }
    return this.#categories[name];
  }
}

class Product {
  constructor(name, category) {
    this.name = name;
    this.category = category;
  }

  display() {
    console.log(`Product: ${this.name}, Category: ${this.category.name}`);
  }
}

const electronics21 = Category2.create("Electronics");
const books21 = Category2.create("Books");
const electronics22 = Category2.create("Electronics");

console.log(electronics21, books21, electronics22); //Category2 { name: 'Electronics' } Category2 { name: 'Books' } Category2 { name: 'Electronics' }
console.log(electronics21 === electronics22); //true

const product1 = new Product("Laptop", electronics21);
const product2 = new Product("Headphones", electronics21);
const product3 = new Product("Book Title", books21);
// const product4 = new Product("Smartphone", electronics22);
const product4 = new Product("Smartphone", new Category("Electronics22")); //якщо ця строка, row:276, буде активна, замість row:275,
// то product4 не побачимо після виконання row: 296

product1.display();
product2.display();
product3.display();
product4.display();
// Product: Laptop, Category: Electronics
// Product: Headphones, Category: Electronics
// Product: Book Title, Category: Books
// Product: Smartphone, Category: Electronics

console.log("===2.2.1=Муха======================================");
console.log(product1.category === product4.category); //true

console.log("===2.2.2=Муха======================================");
const list = [product1, product2, product3, product4].filter(
  (product) => product.category === Category2.create("Electronics")
);

console.log(list);
// [
//   Product {
//     name: 'Laptop',
//     category: Category2 { name: 'Electronics' }
//   },
//   Product {
//     name: 'Headphones',
//     category: Category2 { name: 'Electronics' }
//   },
//   Product {
//     name: 'Smartphone',
//     category: Category2 { name: 'Electronics' }
//   }
// ]

//якщо строка, row:276, буде активна, замість row:275, то product4 не побачимо після виконання row: 296
// [
//   Product {
//     name: 'Laptop',
//     category: Category2 { name: 'Electronics' }
//   },
//   Product {
//     name: 'Headphones',
//     category: Category2 { name: 'Electronics' }
//   }
// ]

console.log("===3=Шаблонний метод=====================================");
class CoffeeMachine {
  prepareCoffee() {
    this.boilWater();
    this.grindCoffeeBeans();
    this.#brewCoffee();
    this.pourIntoCup();
    this.addIngredients();
    this.serveCoffee();
  }

  boilWater() {
    console.log("Boiling water...");
  }

  grindCoffeeBeans() {
    console.log("Grinding coffee beans...");
  }

  #brewCoffee() {
    console.log("Brewing coffee...");
  }

  pourIntoCup() {
    console.log("Pouring coffee into cup...");
  }

  addIngredients() {
    console.log("Boiling water...");
    //Цей метод залишається пустим і може бути перевизначений у підкласах
  }

  serveCoffee() {
    console.log("Coffee served!");
  }
}

class LatteMachine extends CoffeeMachine {
  // constructor() {
  //   super();
  // }

  addIngredients() {
    console.log("Adding milk to make a latte...");
    //...
  }
  //...
}

class CappuccinoMachine extends CoffeeMachine {
  addIngredients() {
    console.log(
      "Adding frothed milk and sprinkle of cocoa powder to make a cappuccino..."
    );
  }
}

console.log("===3.1=Шаблонний метод=====================================");
const latteMachine = new LatteMachine();
latteMachine.prepareCoffee();
// Boiling water...
// Grinding coffee beans...
// Brewing coffee...
// Pouring coffee into cup...
// Adding milk to make a latte...
// Coffee served!

console.log("===3.2=Шаблонний метод=====================================");
const cappuccinoMachine = new CappuccinoMachine();
cappuccinoMachine.prepareCoffee();
// Boiling water...
// Grinding coffee beans...
// Brewing coffee...
// Pouring coffee into cup...
// Adding frothed milk and sprinkle of cocoa powder to make a cappuccino...
// Coffee served!

console.log("===4.1=Visitor=Відвідувач====================================");
class TextFile {
  constructor(name, content) {
    this.name = name;
    this.content = content;
  }
}

class ImageFile {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
}

class VideoFile {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;
  }
}

class TextEditor {
  files = [];

  addFile(file) {
    this.files.push(file);
  }
}

const textEditor = new TextEditor();

const textFile = new TextFile("document.txt", "Lorem ipsum dolor sit amet."); //Клієнт дуже задоволений
const imageFile = new ImageFile("image.jpg", 1024);
const videoFile = new VideoFile("video.mp4", 60);

textEditor.addFile(textFile);
textEditor.addFile(imageFile);
textEditor.addFile(videoFile);

console.log(textEditor.files);
// [
//   TextFile {
//     name: 'document.txt',
//     content: 'Lorem ipsum dolor sit amet.'
//   },
//   ImageFile { name: 'image.jpg', size: 1024 },
//   VideoFile { name: 'video.mp4', duration: 60 }
// ]

console.log("===4.2=Visitor=Відвідувач====================================");
class TextFile42 {
  constructor(name, content) {
    this.name = name;
    this.content = content;
  }
}

class ImageFile42 {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }
}

class VideoFile42 {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;
  }
}

class TextEditor42 {
  files = [];

  addFile(file) {
    this.files.push(file);
  }

  readTextFile(file) {
    console.log(
      `Text file: ${file.name}, Size: ${file.content.length} characters`
    );
  }

  readImageFile(file) {
    console.log(`Image file: ${file.name}, Size: ${file.size} KB`);
  }

  readVideoFile(file) {
    console.log(`Video file: ${file.name}, Duration: ${file.duration} minutes`);
  }

  readFiles() {
    for (const file of this.files) {
      if (file instanceof TextFile) {
        this.readTextFile(file);
      } else if (file instanceof ImageFile) {
        this.readImageFile(file);
      } else if (file instanceof VideoFile) {
        this.readVideoFile(file);
      }
    }
  }
}

const textEditor42 = new TextEditor42();

const textFile42 = new TextFile42(
  "document.txt",
  "Lorem ipsum dolor sit amet."
);
//Клієнт дуже задоволений

const imageFile42 = new ImageFile42("image.jpg", 1024);
const videoFile42 = new VideoFile42("video.mp4", 60);

textEditor42.addFile(textFile);
textEditor42.addFile(imageFile);
textEditor42.addFile(videoFile);

console.log("===4.2.1=Visitor=Відвідувач====================================");
console.log(textEditor42.files);
// [
//   TextFile {
//     name: 'document.txt',
//     content: 'Lorem ipsum dolor sit amet.'
//   },
//   ImageFile { name: 'image.jpg', size: 1024 },
//   VideoFile { name: 'video.mp4', duration: 60 }
// ]

console.log("===4.2.2=Visitor=Відвідувач====================================");
textEditor42.readFiles();
// Text file: document.txt, Size: 27 characters
// Image file: image.jpg, Size: 1024 KB
// Video file: video.mp4, Duration: 60 minutes

console.log("===5.1=Adapter============================================");
//Система електронних платежів з власним API
class ElectronicPaymentSystem {
  makePayment(amount) {
    const convertedAmount = this.convertAmount(amount);
    console.log(`Making electronic payment: $${convertedAmount}`);
  }

  convertAmount(amount) {
    //Логіка конвертації суми платежу
    return amount * 1.2; //Припустимо, що необхідна конвертація у відсотках
  }
}

const electronicPaymentSystem = new ElectronicPaymentSystem();
electronicPaymentSystem.makePayment(100);
// Making electronic payment: $120

console.log("===5.2=Adapter============================================");
//Система електронних платежів з власним API
class ElectronicPaymentSystem52 {
  makePayment(amount) {
    const convertedAmount = this.convertAmount(amount);
    console.log(`Making electronic payment: $${convertedAmount}`);
  }

  convertAmount(amount) {
    //Логіка конвертації суми платежу
    return amount * 1.2; //Припустимо, що необхідна конвертація у відсотках
  }
}

class OtherPaymentSystem {
  submit(amount) {
    console.log(`Submitting payment request: ${amount}`);
  }
}

const electronicPaymentSystem52 = new ElectronicPaymentSystem52();
electronicPaymentSystem.makePayment(100);
// Making electronic payment: $120

console.log("===5.3=Adapter============================================");
class Order {
  constructor(amount) {
    this.amount = amount;

    if (amount < 100) {
      this.paymentSystem = new OtherPaymentSystem();
    } else {
      this.paymentSystem = new ElectronicPaymentSystem();
    }
  }

  makePayment() {
    if (this.paymentSystem.makePayment) {
      return this.paymentSystem.makePayment(this.amount);
    }

    if (this.paymentSystem.submit) {
      return this.paymentSystem.submit(this.amount);
    }
  }
}

const order1 = new Order(1000);
order1.makePayment();
//Making electronic payment: $1200

const order2 = new Order(10);
order2.makePayment();
//Submitting payment request: 10

console.log("===5.4=Adapter============================================");
class PaymentAdapter {
  constructor(paymentSystem) {
    this.paymentSystem = paymentSystem;
  }

  makePayment(amount) {
    const convertedAmount = this.convertAmount(amount);
    this.paymentSystem.submit(convertedAmount);
  }

  convertAmount(amount) {
    return amount * 1.2;
  }
}

class Order54 {
  constructor(amount) {
    this.amount = amount;

    if (amount < 100) {
      this.paymentSystem = new PaymentAdapter(new OtherPaymentSystem());
    } else {
      this.paymentSystem = new ElectronicPaymentSystem();
    }
  }

  makePayment() {
    return this.paymentSystem.makePayment(this.amount);
  }
}

const order51 = new Order54(1000);
order51.makePayment();
// Making electronic payment: $1200

const order52 = new Order54(10);
order52.makePayment();
// Submitting payment request: 12

console.log("===6.1=Strategy============================================");
class ShoppingCart {
  items = [];

  addItem(item) {
    this.items.push(item);
  }

  calculateTotalPrice() {
    let totalPrice = 0;
    for (const item of this.items) {
      totalPrice += item.price;
    }

    const finalPrice = totalPrice;
    // const finalPrice = totalPrice + discount;

    return finalPrice;
  }
}

const shoppingCart1 = new ShoppingCart();

shoppingCart1.addItem({ name: "Product 1", price: 100 });
shoppingCart1.addItem({ name: "Product 2", price: 50 });

console.log(shoppingCart1.calculateTotalPrice()); //150

console.log("===6.2=Strategy============================================");
class ShoppingCart62 {
  items = [];

  addItem(item) {
    this.items.push(item);
  }

  calculateTotalPrice() {
    return this.items.reduce((acc, item) => acc + item.price, 0);
  }
}

const shoppingCart62 = new ShoppingCart62();

shoppingCart62.addItem({ name: "Product 1", price: 100 });
shoppingCart62.addItem({ name: "Product 2", price: 50 });

console.log(shoppingCart62.calculateTotalPrice()); //150

console.log("===6.3=Strategy=discount=====================================");
class ShoppingCart63 {
  items = [];

  addItem(item) {
    this.items.push(item);
  }

  discountStrategy(price) {
    return price > 100 ? price * 0.9 : price;
  }

  calculateTotalPrice() {
    const price = this.items.reduce((acc, item) => acc + item.price, 0);
    return this.discountStrategy(price);
  }
}

const shoppingCart63 = new ShoppingCart63();

shoppingCart63.addItem({ name: "Product 1", price: 100 });
shoppingCart63.addItem({ name: "Product 2", price: 50 });

console.log(shoppingCart63.calculateTotalPrice()); //135

console.log("===6.4=Strategy=discount=====================================");
class ShoppingCart64 {
  constructor(discountStrategy) {
    this.discountStrategy = discountStrategy;
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  calculateTotalPrice() {
    const price = this.items.reduce((acc, item) => acc + item.price, 0);
    return this.discountStrategy.calculateDiscount(price);
    // return price + this.discountStrategy.calculateDiscount(price);
  }
}

class DiscountStrategy {
  calculateDiscount(price) {
    return price;
  }
}

//Стратегія знижки для звичайних клієнтів
class RegularDiscountStrategy extends DiscountStrategy {
  calculateDiscount(price) {
    return price * 1.1; //10% знижка
  }
}

//Стратегія знижки для преміум клієнтів
class PremiumDiscountStrategy extends DiscountStrategy {
  calculateDiscount(price) {
    return price * 1.2; //20% знижка
  }
}

//Стратегія знижки для нових клієнтів
class NewCustomerDiscountStrategy extends DiscountStrategy {
  calculateDiscount(price) {
    return price * 1.05; //5% знижка
  }
}

//========================================================================
const shoppingCart64 = new ShoppingCart64(new RegularDiscountStrategy());

shoppingCart64.addItem({ name: "Product 1", price: 100 });
shoppingCart64.addItem({ name: "Product 2", price: 50 });

console.log(shoppingCart64.calculateTotalPrice()); //165

//========================================================================
const shoppingCart641 = new ShoppingCart64(new PremiumDiscountStrategy());

shoppingCart641.addItem({ name: "Product 1", price: 100 });
shoppingCart641.addItem({ name: "Product 2", price: 50 });

console.log(shoppingCart641.calculateTotalPrice()); //180

//========================================================================
const shoppingCart642 = new ShoppingCart64(new NewCustomerDiscountStrategy());

shoppingCart642.addItem({ name: "Product 1", price: 100 });
shoppingCart642.addItem({ name: "Product 2", price: 50 });

console.log(shoppingCart642.calculateTotalPrice()); //157.5

console.log("===7=Iterator======================================");
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }
}

class UserGroup {
  users = [];

  addUser(user) {
    this.users.push(user);
  }
}

//клас приховує доступ до приватних методів, пов'язаних з особистими даними (name/password)
class UserIterator {
  #users = null;
  #currentIndex = 0;

  constructor(userGroup) {
    this.#users = userGroup.users;
  }

  #hasNext() {
    return this.#currentIndex < this.#users.length;
  }

  //Метод, який повертає наступний елемент
  next() {
    if (this.#hasNext()) {
      const name = this.#users[this.#currentIndex].name;
      this.#currentIndex++;
      return name;
    }
    return null;
  }

  list() {
    return this.#users.map((user) => user.name).join(", ");
  }
}

const group7 = new UserGroup();
group7.addUser(new User("John Doe", "john@example.com", "password1"));
group7.addUser(new User("Jane Smith", "jane@example.com", "password2"));
// console.log(group7.users.map((user) => user.password).join(", "));
// password1, password2
// John Doe
// Jane Smith
// null
// John Doe, Jane Smith

console.log(group7.users.map((user) => user.name).join(", "));
// John Doe, Jane Smith

const iterator = new UserIterator(group7);

console.log("===7=Iterator======================================");
console.log(iterator.next()); // John Doe
console.log(iterator.next()); // Jane Smith
console.log(iterator.next()); // null

console.log("===7=Iterator======================================");
console.log(iterator.list()); // John Doe, Jane Smith

console.log("===7.0=Iterator======================================");
const group1 = new UserGroup();
group1.addUser(new User("John Doe", "john@example.com", "password1"));

const group2 = new UserGroup();
group2.addUser(new User("Jane Smith", "jane@example.com", "password2"));

console.log(group1, group2);
// UserGroup {
//   users: [
//     User {
//       name: 'John Doe',
//       email: 'john@example.com',
//       password: 'password1'
//     }
//   ]
// } UserGroup {
//   users: [
//     User {
//       name: 'Jane Smith',
//       email: 'jane@example.com',
//       password: 'password2'
//     }
//   ]
// }

console.log("===7.1=Iterator======================================");
const group71 = new UserGroup();
group71.addUser(new User("John Doe", "john@example.com", "password1"));
group71.addUser(new User("Jane Smith", "jane@example.com", "password2"));

console.log(group71);
// UserGroup {
//   users: [
//     User {
//       name: 'John Doe',
//       email: 'john@example.com',
//       password: 'password1'
//     },
//     User {
//       name: 'Jane Smith',
//       email: 'jane@example.com',
//       password: 'password2'
//     }
//   ]
// }

console.log("===7.2=Iterator======================================");
console.log(group71.users);
// [
//   User {
//     name: 'John Doe',
//     email: 'john@example.com',
//     password: 'password1'
//   },
//   User {
//     name: 'Jane Smith',
//     email: 'jane@example.com',
//     password: 'password2'
//   }
// ]

console.log("===7.3=Iterator======================================");
console.log(group71.users.map((user) => user.name).join(", ")); //John Doe, Jane Smith

console.log("===7.4=Iterator======================================");
console.log(group71.users.map((user) => user.password).join(", ")); //password1, password2
// console.log(group7.users.map((user) => user.password).join(", "));
// password1, password2
// John Doe
// Jane Smith
// null
// John Doe, Jane Smith

console.log("===7.5.1=Iterator======================================");
// js:811 приховує доступ до приватних методів, пов'язаних з особистими даними (name/password)
console.log(group71.users.map((user) => user.name).join(", "));
// John Doe, Jane Smith

const iterator75 = new UserIterator(group71);

console.log("===7.5.2=Iterator======================================");
console.log(iterator75.next()); // John Doe
console.log(iterator75.next()); // Jane Smith
console.log(iterator75.next()); // null

console.log("===7.5.3=Iterator======================================");
console.log(iterator75.list()); // John Doe, Jane Smith

console.log("===8=Mediator======================================");
class User8 {
  constructor(name, chat) {
    this.name = name;
    this.chat = chat;
  }

  sendMessage(message) {
    console.log(`${this.name} відправив повідомлення ${message}`);
    return this.chat.sendMessage(this, message);
    //...
  }

  //Прийняття повідомлення від іншого користувача
  receiveMessage(user, message) {
    console.log(
      `${this.name} отримав повідомлення від ${user.name}: ${message}`
    );
  }
}

class Chat {
  constructor() {
    this.users = [];
  }

  //Додавання користувача до чату
  addUser(user) {
    this.users.push(user);
  }

  //Відправлення повідомлення в чат
  sendMessage(sender, message) {
    for (const user of this.users) {
      if (user !== sender) {
        user.receiveMessage(sender, message);
      }
    }
  }
}

const chatMediator = new Chat();

const user1 = new User8("John", chatMediator);
const user2 = new User8("Jane", chatMediator);
const user3 = new User8("Mike", chatMediator);

chatMediator.addUser(user1);
chatMediator.addUser(user2);
chatMediator.addUser(user3);

console.log("===8.1=Mediator======================================");
user1.sendMessage("Привіт, Всім!");
// John відправив повідомлення Привіт, Всім!
// Jane отримав повідомлення від John: Привіт, Всім!
// Mike отримав повідомлення від John: Привіт, Всім!

console.log("===8.2=Mediator======================================");
user2.sendMessage("Привіт, John!");
// Jane відправив повідомлення Привіт, John!
// John отримав повідомлення від Jane: Привіт, John!
// Mike отримав повідомлення від Jane: Привіт, John!
