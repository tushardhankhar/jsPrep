function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}


// Explanation
// Loop Backwards: Starting from the last element and moving to the first, the algorithm ensures each position is swapped only once, leading to an even distribution.
// Random Index Selection: For each element at position i, it picks a random index j from 0 to i.
// Swap: It swaps the elements at positions i and j.
// In-place Modification: The function modifies the array directly and returns it, as required.