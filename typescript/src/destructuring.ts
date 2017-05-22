/**
 * destructuring 解构 和 spread operator 扩展运算符
 * 可以对数组或对象解构
 */

function destructuring (): void {
    // 数组解构
    let menpai: string[] = ['华山派', '嵩山派', '衡山派', '少林寺'];
    let [huashan, songshan, ...rest] = menpai; // 利用解构语法创建了3个新的变量huashan, songshan, rest
    console.log(huashan, songshan, rest); // 输出: 华山派 嵩山派 ["衡山派", "少林寺"]
    // 只获取需要的值
    let [, str1, , str2] = menpai;
    console.log('str1:', str1, 'str2:', str2); // 输出: str1: 嵩山派 str2: 少林寺
    // 对象解构
    let linghuchong = {
        name: '令狐冲',
        sex: 'male',
        age: 19,
        skill: '独孤九剑'
    };
    let {name, age} = linghuchong; // 创建2个新的变量 name, age
    console.log('name', name, 'age', age); // 输出:  name 令狐冲 age 19
    // 对象也可以使用rest语法
    let {sex, ...restVal} = linghuchong;
    console.log('sex:', sex, 'restVal:', restVal); // 输出: sex: male ; restVal: {name: "令狐冲", age: 19, skill: "独孤九剑"}

    // spread operator 扩展运算符 ...
    // 数组
    let skill1: string[] = ['独孤九剑', '易筋经'];
    let skill2: string[] = ['吸星大法', '冲灵剑法'];
    let skillAll: Array<string> = [...skill1, ...skill2];
    console.log(skillAll);
    /**
     * 扩展object
     * 后面的属性会覆盖前面的属性
     * 只能扩展自身的可枚举的(enumerable)属性, 不会扩展原型链上的.
     */
    let man = {
        name: 'man',
        arms: 2
    };
    let newPerson = {...man, ...linghuchong};
    let newPerson2 = {...linghuchong, ...man};
    console.log('newPerson:', newPerson); // 输出: {name: "令狐冲", arms: 2, sex: "male", age: 19, skill: "独孤九剑"}
    console.log('newPerson2:', newPerson2); // 输出: {name: "man", sex: "male", age: 19, skill: "独孤九剑", arms: 2}
    class People {
        name = 'people';
        say () {
            console.log('I am ' + this.name);
        }
    }
    let instance = new People();
    console.log('newObject:', {...instance, ...linghuchong}); // 输出 {name: "令狐冲", sex: "male", age: 19, skill: "独孤九剑"}, 无法扩展 say 方法
}

export default destructuring;