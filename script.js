const arrayContainer = document.getElementById("arrayContainer");
const algorithmSelector = document.getElementById("algorithmSelector");
let array = [];

function resetArray() {
    array = [];
    for (let i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random() * 500));
    }
    displayArray();
}

function displayArray() {
    arrayContainer.innerHTML = "";
    array.forEach(value => {
        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${value}px`;

        const barValue = document.createElement("span");
        barValue.textContent = value;
        bar.appendChild(barValue);

        arrayContainer.appendChild(bar);
    });
}

function updateColors(index1, index2, action) {
    const barOne = arrayContainer.children[index1];
    const barTwo = index2 !== null ? arrayContainer.children[index2] : null;

    if (!barOne || (index2 !== null && !barTwo)) {
        console.error(`Invalid indices: index1=${index1}, index2=${index2}`);
        return;
    }

    switch(action) {
        case 'compare':
            barOne.classList.add('comparing');
            barTwo.classList.add('comparing');
            break;
        case 'swap':
            barOne.classList.add('swapping');
            barTwo.classList.add('swapping');
            break;
        case 'sorted':
            barOne.classList.add('sorted');
            if (barTwo) barTwo.classList.add('sorted');
            break;
    }

    setTimeout(() => {
        barOne.classList.remove('comparing', 'swapping');
        if (barTwo) barTwo.classList.remove('comparing', 'swapping');
    }, 300);
}

async function startSorting() {
    let algorithm = algorithmSelector.value;
    switch (algorithm) {
        case "heapSort":
            await heapSort(array);
            break;
        case "bubbleSort":
            await bubbleSort(array);
            break;
        case "quickSort":
            await quickSort(array, 0, array.length - 1);
            break;
        case "mergeSort":
            await mergeSort(array);
            break;
        default:
            break;
    }
    displayArray();
}

resetArray(); // Initialize with a random array

document.getElementById('algorithmSelector').addEventListener('change', function() {
    let title = '';
    let description = '';
    switch (this.value) {
        case 'heapSort':
            title = 'Heap Sort';
            description = 'Heap Sort is a comparison-based sorting algorithm that uses a binary heap data structure. ' ;
            break;
        case 'bubbleSort':
            title = 'Bubble Sort';
            description = 'Bubble Sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, ' +
            'compares each pair of adjacent items, and swaps them if they are in the wrong order. ' +
            'The pass through the list is repeated until no swaps are needed, which means the list is sorted. ' +
            'The algorithm gets its name because smaller elements "bubble" to the top of the list. ' +
            'Here\'s a step-by-step explanation of how Bubble Sort works: ' +
            '1. Starting at the Beginning: Begin at the start of the array. ' +
            '2. Comparing Adjacent Elements: Compare the first two elements of the array. If the first element is greater than the second element, they are swapped. ' +
            '3. Continue Through the Array: Move to the next pair of elements, compare their values, and swap them if necessary. Continue doing this for each pair of adjacent elements to the end of the array. ' +
            '4. Complete the Pass: At the end of this pass, the largest element will have "bubbled up" to the end of the array. ' +
            '5. Repeat: Repeat the entire process for the array, excluding the last element, which is already in its correct position. ' +
            '6. Reducing the Array Size: With each complete pass, the portion of the array to be sorted can be reduced by one, since the largest elements will have moved to their correct positions at the end of the array. ' +
            '7. Termination: The process is repeated until no more swaps are needed, which means the array is sorted. ' +
            'The main advantages of Bubble Sort are its simplicity and the fact that it is easy to understand and implement. However, it is not suitable for large datasets as its average and worst-case time complexity is quite high (O(n^2), where n is the number of items being sorted). ' +
            'There are more efficient algorithms available for sorting large lists, such as Quick Sort, Merge Sort, or Heap Sort.';
            break;
        case 'quickSort':
            title = 'Quick Sort';
            description = 'Quick Sort is a divide and conquer algorithm...';
            break;
        case 'mergeSort':
            title = 'Merge Sort';
            description = 'Merge Sort is a divide and conquer algorithm...';
            break;
    }
    document.getElementById('algorithmTitle').textContent = title;
    document.getElementById('algorithmDescription').textContent = description;
});