module.exports = function towelSort(matrix = []) {
    matrix.forEach((subArr, idx) => {
        return idx % 2 === 0
            ? subArr.sort((a, b) => a - b)
            : subArr.sort((a, b) => b - a);
    });
    return matrix.flat();
};
