async function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    let mid = Math.floor(array.length / 2);
    let left = array.slice(0, mid);
    let right = array.slice(mid);
    return await merge(await mergeSort(left), await mergeSort(right));
}

async function merge(left, right) {
    let result = []; 
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i++]);
        } else {
            result.push(right[j++]);
        }
        displayArray();
        await new Promise(resolve =>
            setTimeout(() => {
                resolve();
            }, 300)
        );
    }

    while (i < left.length) {
        result.push(left[i++]);
        displayArray();
        await new Promise(resolve =>
            setTimeout(() => {
                resolve();
            }, 300)
        );
    }

    while (j < right.length) {
        result.push(right[j++]);
        displayArray();
        await new Promise(resolve =>
            setTimeout(() => {
                resolve();
            }, 300)
        );
    }

    return result;
}