# Sorting Algorithm Visualizer

This project is a simple web-based visualization tool for sorting algorithms. It currently supports Bubble Sort, Quick Sort, Merge Sort, and Heap Sort.

## Features

- Visualize the process of sorting algorithms
- Control panel to start sorting, reset array, and select sorting algorithm
- Random array generation for each reset
- Fetches algorithm descriptions from the server when an algorithm is selected

## Server-Side Storage

Algorithm descriptions are stored on the server. When a user selects an algorithm, the corresponding description is fetched from the server and displayed. This approach keeps the client-side JavaScript code clean and maintainable.

## How to Use

1. Start the server by running `node server.js` in your terminal.
2. Open `http://127.0.0.1:3000/` in your web browser.
3. Select a sorting algorithm from the dropdown menu. The description of the selected algorithm will be fetched from the server and displayed.
4. Click 'Start Sorting' to begin the visualization.
5. Click 'Reset Array' to generate a new array.

## Future Enhancements

- Add more sorting algorithms
- Improve UI/UX
- Add speed control for sorting process

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)