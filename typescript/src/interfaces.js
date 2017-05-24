"use strict";
exports.__esModule = true;
/** 接口 **/
function interfaces() {
    // 接口类型检测的简单实例
    // 接口只说明所需的属性及其类型. 不关心多余的值
    function say(people) {
        console.log('my name is' + people.name);
    }
    var linghuchong = { name: '令狐冲', age: 19, legNum: 2 };
    say(linghuchong);
    // 定义函数 say2, 参数 p 使用接口 people
    function say2(p) {
        console.log('my name is' + p.name, 'my age is' + p.age);
    }
    say2(linghuchong);
    var p1 = { x: 10, y: 20 };
    // p1.x = 5; // error! 不可以修改只读属性
    /** ReadonlyArray<T>类型 **/
    // TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
    var a = [1, 2, 3, 4];
    var ro = a;
    // ro[0] = 12; // error!
    // ro.push(5); // error!
    // ro.length = 100; // error!
    // a = ro; // error! 把只读数组赋值给一个普通数组也会报错, 不过可以用类型断言重写：
    a = ro; // 用类型断言可以重写
    console.log('ro:', ro);
    // 定义一个函数变量, 并定义起接口类型
    var ifWin;
    // 给该函数变量赋值, 函数中的参数名不一定要与接口中的参数名称一样, 但是参数的类型需要符合.
    ifWin = function (val1, val2) {
        if (val1 > val2) {
            return true;
        }
        else {
            return false;
        }
    };
    var res = ifWin(99, 123);
    console.log('ifWin:', res);
    var arr = ['少林', '武当', '崆峒'];
    var str = arr[0];
    console.log(str);
    var arr2 = ['少林', '武当', '崆峒'];
    var myArray = ["Alice", "Bob"];
    // myArray[2] = "Mallory"; // error! 不能设置, 因为索引签名是只读的
}
exports["default"] = interfaces;
//# sourceMappingURL=interfaces.js.map