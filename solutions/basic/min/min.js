function getTheSmallestElement(arr) {
  let smallestElement = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallestElement) {
      arr[i] = smallestElement;
    }
  }
  return smallestElement;
}

export default getTheSmallestElement;
