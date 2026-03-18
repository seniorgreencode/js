function heapSort(arr) {
  let n = arr.length;
  // Buduj kopiec (max heap)
  for(let i = Math.floor(n / 2) - 1; i >= 0; i--)
    heapify(arr, n, i);

  // Wyjmuj elementary po kolei
  for (let i = n-1; i > 0; i--) {
    // Przenies korzen na koniec
    [arr[0], arr[i]] = [arr[i]];
    // Napraw zredykowany kopiec
    heapify(arr, i, 0);
  }
}

function heapify(arr, n, i){
  let largest = i;
  let l = 2 * i + 1; // Lewy
  let r = 2 * i + 2; // Lewy

  if (l < n && arr[l] > arr[largest]) largest = l;
  if (r < n && arr[r] > arr[largest]) largest = r;

  if (largest != 1){
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}
