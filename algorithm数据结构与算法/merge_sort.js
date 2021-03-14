/**
 * 归并排序 merge sort, 从中间把数组分为左右两部分, 假设两部分都是排好序的, 则对这两个有序数组排序即可
 */

var arr = [46, 35, 49, 8, 24, 5, 42, 21, 10, 9, 40, 24, 12, 26]

var merge_sort = (originArr, l, r) => {
    if (l > r || l < 0) {
        return []
    } else if (l === r) {
        return [originArr[l]]
    } else {
        var mid = parseInt((l + r) / 2)
        let leftArr = merge_sort(originArr, l, mid)
        let rightArr = merge_sort(originArr, mid + 1, r)

        let tmp = []
        let i = 0
        j = 0
        while (i < leftArr.length && j < rightArr.length) {
            if (leftArr[i] > rightArr[j]) {
                tmp.push(rightArr[j])
                j++
            } else {
                tmp.push(leftArr[i])
                i++
            }
        }
        for (let k = i; k < leftArr.length; k++) {
            tmp.push(leftArr[k])
        }
        for (let k = j; k < rightArr.length; k++) {
            tmp.push(rightArr[k])
        }

        return tmp
    }
}

var run = () => {
    var res = merge_sort(arr, 0, arr.length - 1)
    console.log(res)
}

run(arr)
