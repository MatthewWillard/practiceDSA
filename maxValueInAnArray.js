function max(array) {
    if (array.length === 0) {
        return null;
    }

    let currentMax = array[0];
    for (let i = 1; i < array.length; i++) {
        const item = array[i];
        if (item > currentMax) {
            currentMax = item;
        }
    }
    return currentMax;
};

//this has an O(n) best, average and worst case.