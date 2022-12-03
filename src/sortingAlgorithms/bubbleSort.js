export function getBubbleSortAnimations(auxiliaryArray) {
    const animations = [];
    if (auxiliaryArray.length <= 1) return auxiliaryArray;
    bubbleSortHelper(auxiliaryArray, animations);
    return animations;
}

function bubbleSortHelper(auxiliaryArray, animations) {
    for(let i = 0; i < auxiliaryArray.length; i++){
        // array may be sorted and does not need next pass
        //if current # is bigger than next #, swap
        for(let j = 0; j < (auxiliaryArray.length - i - 1); j++){
            if(auxiliaryArray[j] > auxiliaryArray[j + 1]){

                let temp = auxiliaryArray[j];

                animations.push([j + 1, j]);
                animations.push([j + 1, j]);
                animations.push([j + 1, temp]);

                animations.push([j, j + 1]);
                animations.push([j, j + 1]);
                animations.push([j, auxiliaryArray[j + 1]]);


                auxiliaryArray[j] = auxiliaryArray[j + 1];
                auxiliaryArray[j + 1] = temp;
            }
        }
    }
}