const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const descriptions = {
    'bubbleSort': 'Bubble Sort is a simple sorting algorithm that repeatedly steps through the list to be sorted, ' +
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
    'There are more efficient algorithms available for sorting large lists, such as Quick Sort, Merge Sort, or Heap Sort.',
    // ... other descriptions
};

app.get('/description/:algorithm', (req, res) => {
    const algorithm = req.params.algorithm;
    const description = descriptions[algorithm];
    res.send(description);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});