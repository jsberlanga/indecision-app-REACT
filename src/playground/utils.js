console.log('utils.js is running')

const square = (x) => x * x;
const add = (a, b) => a + b;

export { square, add as default };

// exports -> default export - named exports