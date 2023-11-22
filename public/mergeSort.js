async function merge(array, start, mid, end) {
    let result = [];
    let i = start;
    let j = mid + 1;

    while (i <= mid && j <= end) {
        updateColors(i, j, 'compare');
        if (array[i] < array[j]) {
            result.push(array[i++]);
        } else {
            result.push(array[j++]);
        }
        await new Promise(resolve =>
            setTimeout(() => {
                resolve();
            }, 300)
        );
    }

    while (i <= mid) {
        updateColors(i, null, 'sorted');
        result.push(array[i++]);
        await new Promise(resolve =>
            setTimeout(() => {
                resolve();
            }, 300)
        );
    }

    while (j <= end) {
        updateColors(null, j, 'sorted');
        result.push(array[j++]);
        await new Promise(resolve =>
            setTimeout(() => {
                resolve();
            }, 300)
        );
    }

    // Copy the sorted result back into the original array
    for (let i = start; i <= end; i++) {
        array[i] = result[i - start];
    }
}

async function mergeSort(array, start = 0, end = array.length - 1) {
    if (start >= end) {
        return;
    }
    let mid = Math.floor((start + end) / 2);
    await mergeSort(array, start, mid);
    await mergeSort(array, mid + 1, end);
    await merge(array, start, mid, end);
    displayArray();
}