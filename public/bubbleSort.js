async function bubbleSort(array) {
    let len = array.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            updateColors(j, j + 1, 'compare');
            if (array[j] > array[j + 1]) {
                updateColors(j, j + 1, 'swap');
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                displayArray();
                await new Promise(resolve => setTimeout(resolve, 300)); // Add delay
            }
            updateColors(j, j + 1, 'sorted');
        }
    }
    return array;
}
