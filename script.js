const arrayContainer = document.getElementById("arrayContainer");
const algorithmSelector = document.getElementById("algorithmSelector");
let array = [];

function resetArray() {
    array = [];
    for (let i = 0; i < 20; i++) {
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
        arrayContainer.appendChild(bar);
    });
}

async function startSorting() {
    let algorithm = algorithmSelector.value;
    switch (algorithm) {
        case "bubbleSort":
            await bubbleSort(array);
            break;
        case "quickSort":
            await quickSort(array, 0, array.length - 1);
            break;
        case "mergeSort":
            array = await mergeSort(array);
            break;
        default:
            break;
    }
    displayArray();
}

resetArray(); // Initialize with a random array
