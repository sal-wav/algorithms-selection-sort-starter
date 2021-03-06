// Try to implement swap on your own, this time.
function swap(array, index1, index2) {
  let temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
}

function selectionSort(list) {
  // list  : array of items
  // n     : size of list
  let n = list.length;
  for(let i = 0; i <= n-1; i++) {
    let min = i;
    for (let j = i+1; j <= n-1; j++){
      if (list[j] < list[min]) {
        min = j;
      }
      if (min !== i) {
        swap(list, min, i);
      }
    }
  }
  // for i = 1 to n - 1
  // /* set current element as minimum*/
  //    min = i
  //
  //    /* check the element to be minimum */
  //
  //    for j = i+1 to n
  //       if list[j] < list[min] then
  //          min = j;
  //       end if
  //    end for
  //
  //    /* swap the minimum element with the current element
  //       using the above swap function*/
  //    if indexMin != i  then
  //       swap list[min] and list[i]
  //    end if
  // end for
}

module.exports = {
  selectionSort,
  swap
};
