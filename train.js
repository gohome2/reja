//----------MIT TASK------------   // D-TASK:

class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  vaqt() {
    const date = new Date();
    const hour = date.getHours();
    let minute = date.getMinutes();

    if (minute < 10) {
      minute = "0" + minute;
    }

    return hour + ":" + minute;
  }

  qoldiq() {
    console.log(
      `Hozir ${this.vaqt()}da ${this.non}ta non, ${this.lagmon}ta lagmon va ${this.cola}ta cola mavjud!`,
    );
  }

  sotish(mahsulot, miqdor) {
    if (mahsulot === "non") {
      this.non = this.non - miqdor;
    } else if (mahsulot === "lagmon") {
      this.lagmon = this.lagmon - miqdor;
    } else if (mahsulot === "cola") {
      this.cola = this.cola - miqdor;
    } else {
      console.log("Bunday mahsulot mavjud emas!");
      return;
    }

    console.log(`Hozir ${this.vaqt()}da ${miqdor}ta ${mahsulot} sotildi!`);
  }

  qabul(mahsulot, miqdor) {
    if (mahsulot === "non") {
      this.non = this.non + miqdor;
    } else if (mahsulot === "lagmon") {
      this.lagmon = this.lagmon + miqdor;
    } else if (mahsulot === "cola") {
      this.cola = this.cola + miqdor;
    } else {
      console.log("Bunday mahsulot mavjud emas!");
      return;
    }

    console.log(
      `Hozir ${this.vaqt()}da ${miqdor}ta ${mahsulot} qabul qilindi!`,
    );
  }
}

const shop = new Shop(4, 5, 2);

shop.qoldiq();
shop.sotish("non", 3);
shop.qabul("cola", 4);
shop.qoldiq();

//----------MIT TASK------------   // C-TASK:

// function checkContent(str1, str2) {
//   if (str1.length !== str2.length) {
//     return false;
//   }

//   let letters = str2.split("");

//   for (let i = 0; i < str1.length; i++) {
//     let found = false;

//     for (let j = 0; j < letters.length; j++) {
//       if (str1[i] === letters[j]) {
//         letters.splice(j, 1);
//         found = true;
//         break;
//       }
//     }

//     if (found === false) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(checkContent("mitgroup", "gmtiprou"));
// console.log(checkContent("hello", "olelh"));
// console.log(checkContent("hello", "world"));

//----------MIT TASK------------   // B-TASK:

// function countDigits(str) {
//   let count = 0;

//   for (let char of str) {
//     if (char >= "0" && char <= "9") {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countDigits("ad2a54y79w4e5t0sfgb9"));

//----------MIT TASK------------ A-TASK

// function countLetter(letter, word) {
//   letter = letter.toLowerCase();
//   word = word.toLowerCase();

//   let count = 0;

//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countLetter("E", "ENGINEER")); // 3

// console.log("Jeck Ma Maslahatlari");

// const list = [
//   "yahshi talaba boling", // 0-20
//   "togri boshliq tanlang va koproq hato qiling", // 20-30
//   "uzingizga ishlashingizni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq endi", // 60
// ];
// //---------------------------------------------
// //CALLBACK FUNCTION
// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) (null, list[1]);
//   else if (a > 30 && a <= 40) (null, list[2]);
//   else if (a > 40 && a <= 50) (null, list[3]);
//   else if (a > 50 && a <= 60) (null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }

// console.log("passed here 0");

// maslahatBering(70, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log(data);
//   }
// });

// console.log("passed here 1");
//---------------------------------------------
//AYNC FUNCTION
// async function masLahatBering(a) {
//   if (typeof a !== "number") {
//     throw new Error("insert a number");
//   } else if (a <= 20) {
//     return list[0];
//   } else if (a <= 30) {
//     return list[1];
//   } else if (a <= 40) {
//     return list[2];
//   } else if (a <= 50) {
//     return list[3];
//   } else if (a <= 60) {
//     return list[4];
//   }

//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(list[5]);
//     }, 5000);
//   });
// }

//---------------------------------------------
// return new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(list[5]);
//   }, 5000);
// });
//---------------------------------------------
// setTimeout(function () {
//   return list[5];
// }, 50);
//---------------------------------------------

//---------------------------------------------
//CALL via then/catch

//then/catch
// console.log("Passed here 0");
// maslahatBering(23)
//   .then((data) => {
//     console.log("JAVOB:", data);
//   })
//   .catch((err) => {
//     console.log("ERROR:", err);
//   });
// console.log("Passed here 1");
//---------------------------------------------

//CALL via async await

//async/ await
// async function run() {
//   let javob = await maslahatBering(23);
//   console.log(javob);
//   javob = await maslahatBering(97);
//   console.log(javob);
//   javob = await maslahatBering(12);
//   console.log(javob);
// }
// run();
