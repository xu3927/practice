/**
 * 两个有序数组排序, 用双指针法
 */

let arr1 = [3, 8, 12, 19, 27]
let arr2 = [5, 8, 9, 19, 23, 25]

function sort_two_arr(arr1, arr2) {
    let i = 0
    j = 0
    let tmp = []
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            tmp.push(arr2[j])
            j++
        } else {
            tmp.push(arr1[i])
            i++
        }
    }
    if (i < arr1.length) {
        tmp = [...tmp, ...arr1]
    }
    if (j < arr2.length) {
        tmp = [...tmp, ...arr2]
    }
    return tmp
}

console.log(sort_two_arr(arr1, arr2))
