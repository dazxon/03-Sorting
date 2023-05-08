describe("Split Array function", function () {
  it("es capaz de dividir el arreglo en dos partes", function () {
    let arr = [1, 2, 3, 4, 5, 6, 7];
    let result = splitArray(arr);
    expect(result.length).toBe(2);
    expect(result[0]).toEqual([1, 2, 3]);
    expect(result[1]).toEqual([4, 5, 6, 7]);
  });
});

describe("Merge", function () {
  it("Es capaz de combinar dos Arreglos ordenados en uno solo ordenado", function () {
    // testeá el algoritmo
    let arr1 = [1, 2, 3];
    let arr2 = [4, 5, 6, 7];
    let result = merge(arr1, arr2);
    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });
});

describe("merge sort", function () {
  it("Es capaz de devolver un arreglo ordenado", function () {
    // testeá el algoritmo
    let arr = [4, 2, 1, 5, 8, 7, 6];
    let result = mergeSort(arr);
    expect(result).toEqual([1, 2, 4, 5, 6, 7, 8]);
  });

  it("Debe usar merge() y splitArray() al menos una vez", () => {
    spyOn(window, "merge");
    spyOn(window, "splitArray").and.callThrough();
    const arr = [4, 2, 1, 3];
    mergeSort(arr);
    expect(window.merge).toHaveBeenCalled();
    expect(window.splitArray).toHaveBeenCalled();
  });
});
