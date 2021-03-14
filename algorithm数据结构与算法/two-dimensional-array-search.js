/**
 * 二维数组查找
 * 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，
 * 每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，
 * 判断数组中是否含有该整数。
 const arr = [
    [1, 2, 8, 9],
    [2, 4, 9, 12],
    [4, 7, 10, 13],
    [6, 8, 11, 15],
]

1. 对角线遍历, 找到 val[x, y] < val < val[x + 1, y + 1] 的位置. 
2. 目标值位于该位置右上角和左下角的矩阵中
3. 遍历遍历左下角A[0, x; y = 1, max_y] 和右上角A[x + 1, max_x; 0, y]的矩阵

*/

function Find(target, array) {
    let matrix_max_x = array[0].length - 1
    let matrix_max_y = array.length - 1
    /**
     * 遍历子矩阵, 传入矩阵的四个点坐标
     * @param {*} min_x
     * @param {*} max_x
     * @param {*} min_y
     * @param {*} max_y
     * @returns
     */
    function iteratorMatrix(min_x, max_x, min_y, max_y) {
        console.log(`遍历矩阵区域[${min_x}, ${min_y}], [${max_x}, ${max_y}]`)
        min_x = min_x < 0 ? 0 : min_x
        min_y = min_y < 0 ? 0 : min_y
        max_x = max_x < 0 ? 0 : max_x
        max_y = max_y < 0 ? 0 : max_y

        max_x = max_x > matrix_max_x ? matrix_max_x : max_x
        max_y = max_y > matrix_max_y ? matrix_max_y : max_y
        min_x = min_x > matrix_max_x ? matrix_max_x : min_x
        min_y = min_y > matrix_max_y ? matrix_max_y : min_y

        max_x = min_x > max_x ? min_x : max_x
        max_y = min_y > max_y ? min_y : max_y

        // 只剩下一个元素时
        if (max_x === min_x && max_y === min_y) {
            if (array[min_y][min_x] === target) {
                return true
            }
            return false
        }

        // 沿对角线二分查找.
        let start_x = min_x
        let end_x = max_x
        let start_y = min_y
        let end_y = max_y

        while (end_x >= start_x && end_y >= start_y) {
            /**
             * 沿着对角线遍历矩阵, 找到当前比目标值小并且下个对角线位置比目标大的位置
             */
            let idx_x = Math.floor((start_x + end_x) / 2)
            let idx_y = Math.floor((start_y + end_y) / 2)
            let coordinate_cur = [idx_x, idx_y]
            let coordinate_next = [
                idx_x + 1 > max_x ? max_x : idx_x + 1,
                idx_y + 1 > max_y ? max_y : idx_y + 1,
            ]

            let val_current = array[coordinate_cur[1]][coordinate_cur[0]]
            let val_next = array[coordinate_next[1]][coordinate_next[0]]
            console.log('coordinate_cur', coordinate_cur, val_current)
            console.log('coordinate_next', coordinate_next, val_next)
            // 当前值比目标值小, 且下个值比目标值大, 遍历左下角A[0, x; y = 1, max_y] 和右上角A[x + 1, max_x; 0, y]的矩阵
            if (val_current === target) {
                return true
            } else if (val_current < target && val_next > target) {
                return (
                    // min_x, max_x, min_y, max_y
                    iteratorMatrix(min_x, idx_x, idx_y + 1, max_y) ||
                    iteratorMatrix(idx_x + 1, max_x, min_y, idx_y)
                )
            } else {
                // 起始和结束位置一样, 即矩阵只有一个值的情况
                if (end_x === start_x && end_y === start_y) {
                    return false
                }
                if (val_current > target) {
                    end_x = idx_x - 1 < start_x ? start_x : idx_x - 1
                    end_y = idx_y - 1 < start_y ? start_y : idx_y - 1
                } else {
                    start_x = idx_x + 1 > end_x ? end_x : idx_x + 1
                    start_y = idx_y + 1 > end_y ? end_y : idx_y + 1
                }
            }
        }
        if (array[start_y][start_x] === target) {
            return true
        }
        return false
    }
    let max_x = array[0].length - 1,
        max_y = array.length - 1
    return iteratorMatrix(0, max_x, 0, max_y)
}

// const arr = [
//     [1, 2, 8, 9],
//     [2, 4, 9, 12],
//     [4, 7, 10, 13],
//     [6, 8, 11, 15],
// ]

const arr = [
    [2, 5, 6, 9, 10, 12, 116],
    [4, 7, 10, 12, 15, 110, 117],
    [6, 10, 13, 14, 17, 120, 122],
    [9, 13, 16, 19, 22, 123, 124],
    [11, 14, 19, 22, 23, 126, 127],
    [13, 17, 22, 25, 26, 129, 132],
    [15, 18, 25, 28, 30, 131, 133],
]

console.log(225, Find(225, arr))
