window.swap = swap;
describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it("Un Arreglo desordenado que termine ordenado.", function () {
    let arr = [5, 3, 1, 4, 2];
    let sorted = bubbleSort(arr);
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });

  it("Un Arreglo ordenado que debe mantenerse ordenado.", function () {
    let arr = [1, 2, 3, 4, 5];
    let sorted = bubbleSort(arr);
    expect(sorted).toEqual([1, 2, 3, 4, 5]);
  });

  it("Un Arreglo a la inversa ([3,2,1]) que termine ordenado.", function () {
    let arr = [3, 2, 1];
    let sorted = bubbleSort(arr);
    expect(sorted).toEqual([1, 2, 3]);
  });

  it("Debe usar swap n cantidad de veces", function () {
    let arr = [5, 3, 1, 4, 2, 6, 8, 7];
    let swaps = calculateSwaps(arr);
    spyOn(window, "swap").and.callThrough();
    bubbleSort(arr);
    expect(window.swap.calls.count()).toBe(swaps);
  });
});

function calculateSwaps(arr) {
  let cont = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        cont++;
      }
    }
  }

  return cont;
}
