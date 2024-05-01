//solution
function Sorting(arr) {
    const flattened = arr.reduce((acc, val) => acc.concat(val), []);
    return flattened.sort((a, b) => a - b);
  }
  
  const input = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];
  const output = Sorting(input);
  console.log(output); 
  