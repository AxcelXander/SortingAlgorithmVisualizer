async function heapify(array, length, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < length && array[left] > array[largest]) {
        largest = left;
    }

    if (right < length && array[right] > array[largest]) {
        largest = right;
    }

    if (largest !== i) {
        updateColors(i, largest, 'swap');
        [array[i], array[largest]] = [array[largest], array[i]];
        displayArray();
        await new Promise(resolve => setTimeout(resolve, 300));
        await heapify(array, length, largest);
    }
    updateColors(i, largest, 'sorted');
}

async function heapSort(array) {
    let length = array.length;

    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        await heapify(array, length, i);
    }

    for (let i = length - 1; i >= 0; i--) {
        updateColors(0, i, 'swap');
        [array[0], array[i]] = [array[i], array[0]];
        displayArray();
        await new Promise(resolve => setTimeout(resolve, 300));
        await heapify(array, i, 0);
    }
}
  