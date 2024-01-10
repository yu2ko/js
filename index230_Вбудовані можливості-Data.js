console.log("===1=====================================");
const date = new Date();
console.log(date); //2024-01-09T17:02:18.104Z

// якщо ввести в консолі браузера - буде інше:
// const date = new Date();
// console.log(date); //2024-01-09T17:02:18.104Z
// VM88:2 Tue Jan 09 2024 19:02:35 GMT+0200 (за східноєвропейським стандартним часом)

console.log("===2=====================================");
const date2 = new Date();
const dateString = date2.toISOString();
console.log(dateString); //2024-01-09T20:16:12.487Z

console.log("===2.1=====================================");
console.log(new Date(dateString)); //2024-01-09T20:16:12.487Z

console.log("===2.2=====================================");
const date22 = Date.parse(dateString);
console.log(date22); //1704833690455

console.log("===2.3=====================================");
const date23 = Date.parse(dateString) + 5000;
console.log(date23); //1704833695455

console.log("===2.4=====================================");
const date24 = new Date();
console.log(date24.toString()); //Tue Jan 09 2024 23:01:10 GMT+0200 (за східноєвропейським стандартним часом)
console.log(date24); //2024-01-09T21:01:10.699Z

console.log("===2.5=====================================");
const date25 = new Date();
console.log(date25.toUTCString()); //Tue, 09 Jan 2024 21:29:30 GMT

// якщо ввести в консолі браузера: Tue, 09 Jan 2024 21:32:08 GMT

console.log("===2.5.1=====================================");
const date251 = new Date();
const dateString251 = date251.toISOString();
console.log(date251.toString()); //Tue Jan 09 2024 23:38:55 GMT+0200 (за східноєвропейським стандартним часом)
console.log("===2.5.2=====================================");
console.log(date251.toUTCString()); //Tue, 09 Jan 2024 21:41:18 GMT - краще використовувати!!!
console.log("===2.5.3=====================================");
console.log(date251.toISOString()); //2024-01-09T21:42:32.195Z

console.log("===2.5.4=====================================");
console.log(date251.toDateString()); //Tue Jan 09 2024

console.log("===2.5.5=====================================");
console.log(date251.toTimeString()); //23:45:57 GMT+0200 (за східноєвропейським стандартним часом)

console.log("===2.6=====================================");
const zone = date.getTimezoneOffset();
console.log(zone); //-120

console.log("===2.6.1=====================================");
const zone1 = date.getTimezoneOffset() / -60;
console.log(zone1); //2

console.log("===3=====================================");
const user = -3;
function getUserTimeZone(timezone) {
  const date = Date.now();
  return date.toString();
}
console.log(getUserTimeZone(user)); //1704837458885
console.log(new Date().toString(1704837458885)); //Wed Jan 10 2024 00:00:58 GMT+0200 (за східноєвропейським стандартним часом)

console.log("===3.1=====================================");
const user1 = -3;
function getUserTimeZone(timezone) {
  const date = Date.now();
  const myTimeZone = new Date().getTimezoneOffset() / -60;
  console.log(myTimeZone); //2
  // return date.toString() еквівалентно return date
  return date;
}
console.log(getUserTimeZone(user1)); //1704837458885
console.log(new Date().toString(1704837458885)); //Wed Jan 10 2024 15:22:23 GMT+0200 (за східноєвропейським стандартним часом)

console.log("===3.2=====================================");
const user2 = -3;
function getUserTimeZone(timezone) {
  let date = Date.now();
  const myTimeZone = new Date().getTimezoneOffset() / -60;
  date -= 1000 * 60 * 60 * myTimeZone;
  return date;
}
console.log(new Date(getUserTimeZone(user2)).toString()); //Wed Jan 10 2024 14:13:40 GMT+0200 (за східноєвропейським стандартним часом)
console.log("===3.3=====================================");
console.log(new Date().toUTCString()); //Wed, 10 Jan 2024 14:13:40 GMT

console.log("===3.4=====================================");
const user4 = -3;
function getUserTimeZone(timezone) {
  let date = Date.now();
  const myTimeZone = new Date().getTimezoneOffset() / -60;
  date -= 1000 * 60 * 60 * myTimeZone;
  date += 1000 * 60 * 60 * timezone;
  return date;
}
console.log(new Date(getUserTimeZone(user4)).toString()); //Wed Jan 10 2024 11:21:14 GMT+0200 (за східноєвропейським стандартним часом)
console.log("===3.5=====================================");
console.log(new Date().toUTCString()); //Wed, 10 Jan 2024 14:21:14 GMT

console.log("===4.1=====================================");
const user41 = -3;
function getUserTimeZone41(timezone) {
  let date41 = new Date(2023, 5, 26, 12, 30, 0, 0);
  console.log(date41); //2023-06-26T09:30:00.000Z
  const myTimeZone = new Date().getTimezoneOffset() / -60;
}
getUserTimeZone41(user41);

console.log("===4.2=====================================");
const user42 = -3;
function getUserTimeZone42(timezone) {
  let date42 = Date.UTC(2023, 5, 26, 12, 30, 0, 0);
  console.log(date42); //1687782600000
  const myTimeZone = new Date().getTimezoneOffset() / -60;
}
getUserTimeZone42(user42);

console.log("===4.3=====================================");
const user43 = -3;
function getUserTimeZone43(timezone) {
  let date43 = new Date(Date.UTC(2023, 5, 26, 12, 30, 0, 0));
  console.log(date43); //2023-06-26T12:30:00.000Z
  const myTimeZone = new Date().getTimezoneOffset() / -60;
}
getUserTimeZone43(user43);

console.log("===4.4=====================================");
const user44 = -3;
function getUserTimeZone44(timezone) {
  let date44 = new Date(Date.UTC(2023, 5, 26, 12, 30, 0, 0));
  console.log(date44.toString()); //Mon Jun 26 2023 15:30:00 GMT+0300 (за східноєвропейським літнім часом)
  const myTimeZone = new Date().getTimezoneOffset() / -60;
}
getUserTimeZone44(user44);

console.log("===4.5=====================================");
const user45 = -3;
function getUserTimeZone45(timezone) {
  let date45 = new Date(2023, 5, 26, 12, 30, 0, 0);
  console.log(date45.toString()); //Mon Jun 26 2023 12:30:00 GMT+0300 (за східноєвропейським літнім часом)
  const myTimeZone = new Date().getTimezoneOffset() / -60;
}
getUserTimeZone45(user45);

console.log("===4.6=====================================");
const user46 = -3;
function getUserTimeZone46(timezone) {
  let date46 = new Date(2023, 5, 26, 12, 30, 0, 0);
  console.log(date46.toUTCString()); //Mon, 26 Jun 2023 09:30:00 GMT
  const myTimeZone = new Date().getTimezoneOffset() / -60;
}
getUserTimeZone46(user46);

console.log("===4.7=====================================");
const user47 = -3;
function getUserTimeZone47(timezone) {
  let date47 = new Date(Date.UTC(2023, 5, 26, 12, 30, 0, 0));
  console.log(date47.toUTCString()); //Mon, 26 Jun 2023 12:30:00 GMT
  const myTimeZone = new Date().getTimezoneOffset() / -60;
}
getUserTimeZone47(user47);

console.log("===4.8=====================================");
const user48 = -3;
function getUserTimeZone48(timezone) {
  let date48 = new Date(Date.UTC(2023, 5, 26, 12, 30, 0, 0));
  console.log(date48.getTime()); //1687782600000
  const myTimeZone = new Date().getTimezoneOffset() / -60;
}
getUserTimeZone48(user48);
console.log("===4.8.1=====================================");
console.log(new Date(1687782600000).toString()); //Mon Jun 26 2023 15:30:00 GMT+0300 (за східноєвропейським літнім часом)

console.log("===4.8.2=====================================");
console.log(new Date(1687782600000).toUTCString()); //Mon, 26 Jun 2023 12:30:00 GMT

console.log("===4.9=====================================");
const user49 = -3;
function getUserTimeZone49(timezone) {
  let date49 = new Date(Date.UTC(2023, 5, 26, 12, 30, 0, 0));
  console.log(date49.getTime()); //1687782600000
  const myTimeZone49 = date49.getTimezoneOffset() / -60;
  date49.setTime(date49.getTime() - 1000 * 60 * 60 * myTimeZone49);
  date49.setTime(date49.getTime() + 1000 * 60 * 60 * timezone);
  return date49;
}
const userDate = getUserTimeZone49(user49);
console.log(userDate.toString()); //Mon Jun 26 2023 09:30:00 GMT+0300 (за східноєвропейським літнім часом)
console.log(userDate.toUTCString()); //Mon, 26 Jun 2023 06:30:00 GMT

console.log("===5.1=====================================");
const user51 = -3;
function getUserTimeZone51(timezone) {
  let date51 = new Date(Date.UTC(2023, 5, 26, 12, 30, 0, 0));
  // console.log(date51.toString()); //Mon Jun 26 2023 15:30:00 GMT+0300 (за східноєвропейським літнім часом)
  console.log(date51.toUTCString()); //Mon, 26 Jun 2023 12:30:00 GM

  const myTimeZone51 = date51.getTimezoneOffset() / -60;
  date51.setTime(date51.getTime() - 1000 * 60 * 60 * myTimeZone51);
  date51.setTime(date51.getTime() + 1000 * 60 * 60 * timezone);
  return date51;
}
const userDate51 = getUserTimeZone51(user51);
// console.log(userDate51.toString()); //Mon Jun 26 2023 09:30:00 GMT+0300 (за східноєвропейським літнім часом)
console.log(userDate51.toUTCString()); //Mon, 26 Jun 2023 06:30:00 GMT

console.log("===5.2=====================================");
const user52 = -3;
function getUserTimeZone52(timezone) {
  let date52 = new Date(Date.UTC(2023, 5, 26, 12, 30, 0, 0));
  // console.log(date52.toString()); //Mon Jun 26 2023 15:30:00 GMT+0300 (за східноєвропейським літнім часом)
  console.log(date52.toUTCString()); //Mon, 26 Jun 2023 12:30:00 GM

  const myTimeZone52 = date52.getTimezoneOffset() / -60;
  date52.setTime(date52.getTime() - 1000 * 60 * 60 * myTimeZone52);
  date52.setTime(date52.getTime() + 1000 * 60 * 60 * timezone);
  return date52;
}
const userDate52 = getUserTimeZone52(user52);
// console.log(userDate52.toString()); //Mon Jun 26 2023 09:30:00 GMT+0300 (за східноєвропейським літнім часом)
console.log(userDate52.toUTCString()); //Mon, 26 Jun 2023 06:30:00 GMT

console.log("===6=====================================");
const user6 = -3;
function getUserTimeZone6(timezone) {
  let date6 = new Date(Date.UTC(2023, 5, 26, 12, 30, 0, 0));
  console.log(date6.getHours()); //15
  console.log(date6.getUTCHours()); //12

  date6.setHours(date6.getUTCHours() + timezone);
  return date6;
}
const userDate6 = getUserTimeZone6(user6);
console.log(userDate6.getHours()); //9
console.log(userDate6.getUTCHours()); //6

console.log(userDate6.toString()); //Mon Jun 26 2023 09:30:00 GMT+0300 (за східноєвропейським літнім часом)
console.log(userDate6.toTimeString()); //09:30:00 GMT+0300 (за східноєвропейським літнім часом)

console.log("===7=====================================");
const date7 = new Date();
// const dateString7 = date7.toISOString();
console.log(date7.getFullYear()); //2024
date7.setFullYear(2020);
console.log(date7.getFullYear()); //2020
console.log(date7); //2020-01-10T21:33:35.412Z

console.log("===8=====================================");
const date8 = new Date();
// const dateString8 = date8.toISOString();
console.log("year", date8.getFullYear()); //year 2024
date8.setFullYear(2020);
console.log("year", date8.getFullYear()); //year 2020

console.log("month", date8.getMonth()); //month 0
date8.setMonth(5);
console.log("month", date8.getMonth()); //month 5

console.log("date", date8.getDate()); //date 10
date8.setDate(30);
console.log("date", date8.getDate()); //date 30

console.log("minutes", date8.getMinutes()); //minutes 55
date8.setMinutes(27);
console.log("minutes", date8.getMinutes()); //minutes 27

//========================================================
console.log("minutes", date8.getMinutes()); //minutes 55
console.log(date8.setMinutes(27)); //1593466042979
console.log("minutes", date8.getMinutes()); //minutes 27
//========================================================

console.log("seconds", date8.getSeconds()); //seconds 34
date8.setSeconds(15);
console.log("seconds", date8.getSeconds()); //seconds 15

console.log("milliseconds", date8.getMilliseconds()); //milliseconds 304
date8.setMilliseconds(500);
console.log("milliseconds", date8.getMilliseconds()); //milliseconds 500

console.log("day", date8.getDay()); //day 2
console.log(date8.toDateString()); //Tue Jun 30 2020
