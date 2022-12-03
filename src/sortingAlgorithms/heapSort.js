export function getHeapSortAnimations(auxiliaryArray) {
    const animations = [];
    if (auxiliaryArray.length <= 1) return auxiliaryArray;
    heapSortHelper(auxiliaryArray, animations);
    return animations;
}

// Call max Heapify
function heapSortHelper(auxiliaryArray, animations) {

    // Build Max Heap
    let arraySize = auxiliaryArray.length;
    for(let i = Math.floor(arraySize / 2) - 1; i >= 0; i--){
        heapSort(auxiliaryArray, arraySize, i, animations);
    }

    // Perform Heapify
    for(let i = arraySize - 1; i >= 0; i--){

        const temp = auxiliaryArray[0];
        // Values Swapping change color of array

        animations.push([0,i])
        animations.push([0,i])
        animations.push([i,temp]);

        animations.push([0,i])
        animations.push([0,i])
        animations.push([0, auxiliaryArray[i]])

        // Swapping in auxiliary array
        auxiliaryArray[0] = auxiliaryArray[i];
        auxiliaryArray[i] = temp;

        //Inserted lines below
        heapSort(auxiliaryArray, i, 0, animations);
    }
}

// Implement minHeap
function heapSort(auxiliaryArray, arraySize, currentIndex, animations){
    let largest = currentIndex;
    let left = 2 * currentIndex + 1;
    let right = 2 * currentIndex + 2;

    // If left child is larger than root
    if (left < arraySize && auxiliaryArray[left] > auxiliaryArray[largest]) largest = left;

    // If right child is larger than largest so far
    if (right < arraySize && auxiliaryArray[right] > auxiliaryArray[largest]) largest = right;

    // If largest is not root
    if (largest !== currentIndex) {
        let swap = auxiliaryArray[currentIndex];

        // swapping in animations
        animations.push([currentIndex,largest])
        animations.push([currentIndex,largest])
        animations.push([currentIndex,auxiliaryArray[largest]]);

        animations.push([currentIndex,largest])
        animations.push([currentIndex,largest])
        animations.push([largest,swap]);

        // Swapping in auxilary Array
        auxiliaryArray[currentIndex] = auxiliaryArray[largest];
        auxiliaryArray[largest] = swap;

        heapSort(auxiliaryArray, arraySize, largest, animations);
    }
}