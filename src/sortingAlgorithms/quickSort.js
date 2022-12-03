export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    quickSort(array, 0, array.length - 1, animations)
    return animations;
}

function swap(array, leftIndex, rightIndex, animations){
    let temp = array[leftIndex];

    animations.push([leftIndex, rightIndex]);
    animations.push([leftIndex, rightIndex]);
    animations.push([rightIndex, temp]);

    animations.push([leftIndex, rightIndex]);
    animations.push([leftIndex, rightIndex]);
    animations.push([leftIndex, array[rightIndex]]);


    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
}

function partition(array, left, right, animations) {
    let pivot = array[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(array, i, j, animations); //sawpping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(array, left, right, animations) {
    let index;
    if (array.length > 1) {
        index = partition(array, left, right, animations); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(array, left, index - 1, animations);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(array, index, right, animations);
        }
    }
    return array;
}