function numberAndStringSorter(arr) {
  let nums = [];
  let strs = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "number") {
      nums.push(arr[i]);
    } else if (arr[i] === "string") {
      strs.push(arr[i]);
    }
  }
  let newArray = [];
  for (let j = 0; j < nums.length; j++) {
    newArray.push(nums[j], strs[j]);
  }
  return newArray;
}

export default numberAndStringSorter;
