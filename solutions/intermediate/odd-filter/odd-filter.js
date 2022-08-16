function getOddEvenElements(arr) {
  let oddArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      oddArray.push(arr[i]);
    }
  }
  return oddArray;
}

export default getOddEvenElements;
