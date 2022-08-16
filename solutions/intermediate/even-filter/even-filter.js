function getTheEvenElements(arr) {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

export default getTheEvenElements;
