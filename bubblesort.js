function bubbleSort(arr) {
  /* tu codigo acá */

  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function swap(arr, num1, num2) {
  /* tu codigo acá */
  var temp = arr[num1];
  arr[num1] = arr[num2];
  arr[num2] = temp;
}
