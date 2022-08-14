export function getSumOfTheElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

export function getAvarageOfTheElements(arr) {
  let average = getSumOfTheElements(arr) / arr.length;
  return average;
}
