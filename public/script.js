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
    const algorithm = this.value;
    fetch(`http://localhost:3000/description/${algorithm}`)
        .then(response => response.text())
        .then(description => {
            document.getElementById('algorithmDescription').textContent = description;
        });
});
