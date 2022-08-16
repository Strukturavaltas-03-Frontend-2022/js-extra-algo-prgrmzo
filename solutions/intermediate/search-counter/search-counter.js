function searchAndCount(arr, searchValue) {
  let searchCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchValue) {
      searchCount++;
    }
  }
  return searchCount;
}

export default searchAndCount;
