/**
   * edit distance 最小编辑距离
   * 给定字符串 a, 只允许做3种操作: 插入一个字符, 删除一个字符, 替换一个字符
   * 求从a转换为 b 的最小操作次数
   * 参考资料:
   * https://github.com/youngwind/blog/issues/106
   * http://qinxuye.me/article/get-edit-distance-by-dynamic-programming/
   */

/**
* 递归法
* 设 字符串 a 为 a[0]a[1]a[2]...a[m] 
* 设 字符串 b 为 b[0]b[1]b[2]...b[n] 
* d[m][n]为最小编辑距离
* - 如果 a[m] === b[n], 则d[m][n] === d[m-1][n-1] 
* - 如果 a[m] !== b[n], 如 xyz => abc. 则通过一次操作(插入, 删除, 替换)可以使 a[m] === b[n]
*   - 插入: xyz => abc, 插入 c xyzc => abc, 则d[m][n] === d[m - 1][n] + 1
*   - 删除: 如 xyz => aby, 删除 z, 则 d[m][n] === d[m][n - 1] + 1
*   - 替换: 如 xyz => abc, 则替换 z 为 c 则 d[m][n] === d[m-1][n-1] + 1
*   - 需要找出这3种方法中编辑路径最短的.因此采用递归调用
*   - 则 d[m - 1][n - 1] + 1 === d[m][n]
*   
* - 如果 m === 0, 即字符串 a 为空字符串 则 d[m][n] = n
* - 如果 n === 0, 即字符串 b 为空字符串 则 d[m][n] = m
*/

function recursion(a, b) {
    /**
     * @param {string} a 原字符串 a
     * @param {string} b 目的字符串 b
     * @param {string} i 字符串 a 的长度 i
     * @param {string} j 字符串 b 的长度  j
     * @return {number} 字符串 a 到字符串 b 的最小编辑距离
     */
    function iterator(_a, _b, i, j) {
        if (i === 0) {
            return j
        }
        if (j === 0) {
            return i;
        }
        if (_a.substr(i, 1) === _b.substr(j, 1)) {
            return iterator(_a, _b, i - 1, j - 1)
        }
        // 求出三种方法中的最小值
        // 插入
        let insert = iterator(_a, _b, i - 1, j) + 1
        let del = iterator(_a, _b, i, j - 1) + 1
        let replace = iterator(_a, _b, i - 1, j - 1) + 1
        return Math.min(insert, del, replace)
    }
    return iterator(a, b, a.length, b.length)
}

let x = 'ab'
let y = 'axy'
console.log(recursion(x, y))

/**
 * 参考 https://plushunter.github.io/2017/08/07/%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84%E4%B8%8E%E7%AE%97%E6%B3%95%E9%A2%98%E8%A7%A3%EF%BC%887%EF%BC%89%EF%BC%9A%E6%9C%80%E7%9F%AD%E7%BC%96%E8%BE%91%E8%B7%9D%E7%A6%BB/
 * 动态规划算法 算法复杂度 O(m * n) 又叫 Levenshtein distance [wiki](https://en.wikipedia.org/wiki/Levenshtein_distance)
 * 从d[0][0]向后规划
 * - 如果 a[1] === b[1], 则 d[1][1] === d[0][0]
 * - 如果 a[1] !== b[1]. 如 ab => ax
 *  - 则 d[0][0] 通过一次插入(a => ab), 替换(ab => ax), 删除(ab => a)操作可以得到 d[1][1]
 *  - 相邻字符交换位置, 如 abcd => abdc, 则交换 cd 的位置可以实现, 此时一次操作可以调整2个相邻字符的位置
 * 建立一个二维矩阵, 纵向为s1, 横坐标为 s2 值为函数计算结果 edit(i, j), 即字符串1中的长度为 i 的子串变为字符串2中长度为 j 的子串的最小编辑距离.
 *   0 a b c
 * 0 0 1 2 3
 * x 1 2 3 4
 * b 2 3 3 4
 * y 3 4 4 4
 */

/**
 * 动态规划计算最小编辑距离
 * @param {string} s1 源字符串
 * @param {string} s2 目标字符串
 * @return {number} 编辑次数
 */
function dynamicProgram(s1, s2) {

    let str1_arr = s1.split(''),
        str2_arr = s2.split('');

    let len1 = str1_arr.length,
        len2 = str2_arr.length;

    if (len1 === 0) return len2;
    if (len2 === 0) return len1;

    // 初始化二维矩阵
    let matrix = new Array(len1 + 1).fill('').map(item => new Array(len2 + 1).fill(''));

    for (let i = 0; i <= len1; i++) {

        for (let j = 0; j <= len2; j++) {

            if (i === 0) {
                matrix[0][j] = j
            }
            if (j === 0) {
                matrix[i][0] = i
            }

            if (i > 0 && j > 0) {
                // 如果s1[i] === s2[j], 则不需要变更
                if (str1_arr[i] === str2_arr[j]) {
                    matrix[i][j] = matrix[i - 1][j - 1]
                } else {
                    // 如果交换位置可以实现, 则该次调整不计数 如 abdce => abcde 调整 c, d 即可 
                    if (str1_arr[i] === str2_arr[j - 1] && str1_arr[i - 1] === str2_arr[j]) {
                        matrix[i][j] = matrix[i - 1][j - 1]
                    } else {
                        matrix[i][j] = Math.min(matrix[i - 1][j], matrix[i][j - 1], matrix[i - 1][j - 1]) + 1
                    }
                }
            }
        }
    }
    console.log(matrix)
    return matrix[len1][len2]
}

let s1 = 'abcdexy', s2 = 'abdce'
console.log(s1, s2, '的距离为', dynamicProgram(s1, s2))

