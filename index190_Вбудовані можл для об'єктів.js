const article = {
  id: 105423,
  title: "My article",
  description: "This is info about article",
  categoryId: 1423,
  likeAmount: 442,
};

articlePhoto = {
  photoUrl: "...url",
  photoId: 100,
  photoType: "big",
};

articleCommentList = {
  list: [{ id: 4323, user: "Ivan", message: "Крутий контент" }],
};

Object.assign(article, articlePhoto, articleCommentList);

console.log("===1=====================================");
console.log(article);
// {
//   id: 105423,
//   title: 'My article',
//   description: 'This is info about article',
//   categoryId: 1423,
//   likeAmount: 442,
//   photoUrl: '...url',
//   photoId: 100,
//   photoType: 'big',
//   list: [ { id: 4323, user: 'Ivan', message: 'Крутий контент' } ]
// }

console.log("===2=====================================");
console.log(Object.entries(article));
// [
//   ["id", 105423],
//   ["title", "My article"],
//   ["description", "This is info about article"],
//   ["categoryId", 1423],
//   ["likeAmount", 442],
//   ["photoUrl", "...url"],
//   ["photoId", 100],
//   ["photoType", "big"],
//   ["list", [[Object]]],
// ];

console.log("===3=====================================");
const article2 = {
  id: 105423,
  title: "My article",
  description: "This is info about article",
  categoryId: 1423,
  likeAmount: 442,
};

const ARTICLE_FIELD = {
  id: "ID статті",
  title: "Заголовок статті",
};

articlePhoto = {
  photoUrl: "...url",
  photoId: 100,
  photoType: "big",
};

articleCommentList = {
  list: [{ id: 4323, user: "Ivan", message: "Крутий контент" }],
};

Object.assign(article2, articlePhoto, articleCommentList);
console.log("===3.1=====================================");
console.log(Object.entries(article2));
// [
//   ["id", 105423],
//   ["title", "My article"],
//   ["description", "This is info about article"],
//   ["categoryId", 1423],
//   ["likeAmount", 442],
//   ["photoUrl", "...url"],
//   ["photoId", 100],
//   ["photoType", "big"],
//   ["list", [[Object]]],
// ];

const formList = Object.entries(article2);
const formListLayout = formList.map(([key, value]) => {
  return `${ARTICLE_FIELD[key]} : ${value}`;
});
console.log("===3.2=====================================");
console.log(formListLayout);
// [
//   "ID статті : 105423",
//   "Заголовок статті : My article",
//   "undefined : This is info about article",
//   "undefined : 1423",
//   "undefined : 442",
//   "undefined : ...url",
//   "undefined : 100",
//   "undefined : big",
//   "undefined : [object Object]",
// ];

console.log("===4=====================================");
const article4 = {
  info: {
    title: "My article",
    description: "This is info about article",
  },
  title: 105423,
  categoryId: 1423,
  likeAmount: 442,
};

const ARTICLE_FIELD4 = {
  title: "ID статті",
  description: "Заголовок статті",
};

articlePhoto = {
  photoUrl: "...url",
  photoId: 100,
  photoType: "big",
};

articleCommentList = {
  list: [{ id: 4323, user: "Ivan", message: "Крутий контент" }],
};

console.log("===4.1=====================================");
Object.assign(article4, articlePhoto, articleCommentList);
console.log(Object.entries(article4.info));
// [
//   ["title", "My article"],
//   ["description", "This is info about article"],
// ];

console.log("===4.2=====================================");
const formList4 = Object.entries(article4.info);
const formListLayout4 = formList4.map(([key, value]) => {
  // return `${ARTICLE_FIELD4[key]} : ${value}`;
  return [ARTICLE_FIELD4[key], value];
});
console.log(formListLayout4);
// [
//   ["ID статті", "My article"],
//   ["Заголовок статті", "This is info about article"],
// ];

console.log("===4.3=====================================");
const formList41 = Object.entries(article4.info);
const formListLayout41 = formList41.map(([key, value]) => {
  return `${ARTICLE_FIELD4[key]} : ${value}`;
});
console.log(formListLayout41);
// [
// 		"ID статті : My article",
// 		"Заголовок статті : This is info about article"
// ];

console.log("===4.4=====================================");
const formList42 = Object.entries(article4.info);
const formListLayout42 = formList42.map(([key, value]) => {
  return `<p> <strong> ${ARTICLE_FIELD4[key]} </strong> </br> <span> ${value} </span> </p>`;
});
console.log(formListLayout42);
// [
//   "<p> <strong> ID статті </strong> </br> <span> My article </span> </p>",
//   "<p> <strong> Заголовок статті </strong> </br> <span> This is info about article </span> </p>",
// ];

console.log("===5=====================================");
const objArr = [
  ["id", 100432],
  ["title", "My product name"],
  ["price", 1203],
];
console.log(Object.fromEntries(objArr)); //{ id: 100432, title: 'My product name', price: 1203 }

console.log("===5=====================================");
const article5 = {
  id: 105423,
  comment: "My article",
  description: "This is info about article",
  categoryId: 1423,
  likeAmount: 442,
};

console.log("===5.1=====================================");
console.log(article5.hasOwnProperty("id")); //true

console.log("===5.2=====================================");
console.log(article5.hasOwnProperty("123")); //false

console.log("===6.1=====================================");
console.log(article5.propertyIsEnumerable("id")); //true

console.log("===6.2=====================================");
console.log(article5.propertyIsEnumerable("propertyIsEnumerable")); //false

console.log("===6.3=====================================");
console.log(article5.propertyIsEnumerable("123")); //false

console.log("===7.1=freeze====================================");
Object.freeze(article5);
article5.title = "Hello";
delete article5.id;
console.log(article5);
// {
//   id: 105423,
//   comment: 'My article',
//   description: 'This is info about article',
//   categoryId: 1423,
//   likeAmount: 442
// }
// article.title = "Hello"; - не записалось
// delete article5.id; - не видаляє

console.log("===7.2=freeze====================================");
console.log(article5.hasOwnProperty("title")); //false

console.log("===7.3=====================================");
const article6 = {
  id: 105423,
  comment: "My article",
  description: "This is info about article",
  categoryId: 1423,
  likeAmount: 442,
};
article6.title = "Hello";
console.log(article6);
// {
//   id: 105423,
//   comment: 'My article',
//   description: 'This is info about article',
//   categoryId: 1423,
//   likeAmount: 442,
//   title: 'Hello'
// }

console.log("===7.4=freeze====================================");
console.log(article6.hasOwnProperty("title")); //true

console.log("===7.5=freeze====================================");
console.log(Object.isFrozen(article5)); //true
console.log(Object.isFrozen(article6)); //false

console.log("===8=====================================");
const article8 = {
  id: 105423,
  comment: "My article",
  description: "This is info about article",
  categoryId: 1423,
  likeAmount: 442,
};
console.log("===8.1=====================================");
Object.preventExtensions(article8);
delete article8.id; //працює
article8.id = "123";
console.log(article8);
// {
//   comment: 'My article',
//   description: 'This is info about article',
//   categoryId: 1423,
//   likeAmount: 442
// }

console.log("===8.2=заборона розширення====================================");
Object.preventExtensions(article8);
article8.categoryId = "237324827123"; // замінює
console.log(article8);
// {
//   comment: 'My article',
//   description: 'This is info about article',
//   categoryId: '237324827123',
//   likeAmount: 442
// }

console.log("===8.3=====================================");
console.log(Object.isExtensible(article8)); //false

console.log("===9=====================================");
const article9 = {
  id: 105423,
  comment: "My article",
  description: "This is info about article",
  categoryId: 1423,
  likeAmount: 442,
};

Object.seal(article9);
delete article9.id; //не працює
console.log(article9.id); //105423
console.log(Object.isExtensible(article9)); //false

console.log("===9.1=====================================");
console.log(Object.isSealed(article9)); //true

console.log("===10=====================================");
console.log(Object.keys(article9)); //[ 'id', 'comment', 'description', 'categoryId', 'likeAmount' ]

console.log("===10=====================================");
console.log(Object.values(article9)); //[ 105423, 'My article', 'This is info about article', 1423, 442 ]
