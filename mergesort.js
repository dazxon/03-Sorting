function splitArray(ar) {
  /* tu código acá para definir el firstHalf y secondHalf array */
  let middleIndex = Math.floor(ar.length / 2);
  let firstHalf = ar.slice(0, middleIndex);
  let secondHalf = ar.slice(middleIndex);
  return [firstHalf, secondHalf];
}

function merge(arr1, arr2) {
  let cont1 = 0;
  let cont2 = 0;
  let mergeado = [];

  while (cont1 < arr1.length || cont2 < arr2.length) {
    if (arr1[cont1] < arr2[cont2] || !arr2[cont2]) {
      mergeado.push(arr1[cont1]);
      cont1++;
    } else {
      mergeado.push(arr2[cont2]);
      cont2++;
    }
  }

  return mergeado;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let [firstHalf, secondHalf] = splitArray(arr);
  let sortedFirstHalf = mergeSort(firstHalf);
  let sortedSecondHalf = mergeSort(secondHalf);

  return merge(sortedFirstHalf, sortedSecondHalf);
}
