// - `number-string-sorter` mappa:
//   Írj egy függvényt, amely paraméterként egy olyan tömböt kap,
//    amely azonos darabú egész számot és string-et tartalmaz véletlenszerű sorrendben!
//   Rendezd úgy a tömböt, hogy minden szám után egy string következzen!
//   Add vissza a tömböt!

const numberAndStringSorter = (arr) => {
  let numArr = [];
  let strArr = [];
  let mixedArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      numArr.push(arr[i]);
    } else {
      strArr.push(arr[i]);
    }
  }
  for (let i = 0; i < numArr.length; i++) {
    mixedArr.push(numArr[i], strArr[i]);
  }
  return mixedArr;
};

export default numberAndStringSorter;
