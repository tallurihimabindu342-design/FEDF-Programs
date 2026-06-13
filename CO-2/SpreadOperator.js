function mergeArrays() {

    const input1 =
        document.getElementById("array1").value;

    const input2 =
        document.getElementById("array2").value;

    const arr1 =
        input1.split(",").map(Number);

    const arr2 =
        input2.split(",").map(Number);

    const mergedArray = [...arr1, ...arr2];

    document.getElementById("output").textContent =
        `Merged Array: ${mergedArray}`;
}