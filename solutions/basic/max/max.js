function getTheLargestElement(arr) {
  let largestElement = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestElement) {
      largestElement = arr[i];
    }
  }
  return largestElement;
}

export default getTheLargestElement;
