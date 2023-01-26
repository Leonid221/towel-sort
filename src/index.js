
// You should implement your task here.

module.exports = function towelSort (matrix) {

    let resultArr = [];

    if (!Array.isArray(matrix)) {
        return resultArr;
    } else {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let result = i % 2 === 0 ? j : (matrix[i].length - j - 1);
            resultArr.push(matrix[i][result]);
        }
    }
}

    return resultArr;
}
