async function quickSort(array, left, right) {
    if (left < right) {
        let pivot = await partition(array, left, right);
        await quickSort(array, left, pivot - 1);
        await quickSort(array, pivot + 1, right);
    }
    return array;
}

async function partition(array, low, high) {
    let pivot = array[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (array[j] < pivot) {
            i++;
            let temp = array[j];
            array[j] = array[i];
            array[i] = temp;
            displayArray();
            await new Promise(resolve =>
                setTimeout(() => {
                    resolve();
                }, 300)
            );
        }
    }
    let temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;
    displayArray();
    await new Promise(resolve =>
        setTimeout(() => {
            resolve();
        }, 300)
    );
    return i + 1;
}