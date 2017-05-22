/** 接口 **/
function interfaces (): void {
    // 接口类型检测的简单实例
    // 接口只说明所需的属性及其类型. 不关心多余的值
    function say (people: {name: string}) {
        console.log('my name is' + people.name);
    }
    let linghuchong = {name: '令狐冲', age: 19, legNum: 2};
    say(linghuchong);

    /**
     * 使用interface 定义接口
     * interface是对参数格式类型的一种描述, 只有当传入的参数符合接口所定义的类型, 才会被允许.
     * 接口不关心参数的顺序, 只关心所需的参数是否存在, 及该参数类型是否正确.
     */
    interface people {
        name: string;
        age?: number; // 问号表示该参数可选
        readonly legNum: number; // 属性前添加 readonly表示只读属性
    }
    // 定义函数 say2, 参数 p 使用接口 people
    function  say2 (p: people):void {
        console.log('my name is' + p.name, 'my age is' + p.age);
    }
    say2(linghuchong);

    /**
     * readonly 只读属性
     * 一些属性只能在创建时定义值, 后续不可以修改, 可以定义为只读属性
     */
    interface Point {
        readonly x: number;
        readonly y: number;
    }
    let p1: Point = { x: 10, y: 20 };
    // p1.x = 5; // error! 不可以修改只读属性

    /** ReadonlyArray<T>类型 **/
    // TypeScript具有ReadonlyArray<T>类型，它与Array<T>相似，只是把所有可变方法去掉了，因此可以确保数组创建后再也不能被修改：
    let a: number[] = [1, 2, 3, 4];
    let ro: ReadonlyArray<number> = a;
    // ro[0] = 12; // error!
    // ro.push(5); // error!
    // ro.length = 100; // error!
    // a = ro; // error! 把只读数组赋值给一个普通数组也会报错, 不过可以用类型断言重写：
    a = ro as number[]; // 用类型断言可以重写
    console.log('ro:', ro);
    /**
     * 接口描述函数类型
     */
    // 定义一个函数接口
    interface ifWinFn {
        (harmVal1: number, harmVal2: number): boolean;
    }
    // 定义一个函数变量, 并定义起接口类型
    let ifWin: ifWinFn;
    // 给该函数变量赋值, 函数中的参数名不一定要与接口中的参数名称一样, 但是参数的类型需要符合.
    ifWin = function (val1, val2) {
        if (val1 > val2) {
            return true;
        } else {
            return false;
        }
    }
    let res = ifWin(99, 123);
    console.log('ifWin:', res);

    /**
     * Indexable types 可索引类型
     * 索引类型支持2种索引, string, number. 但是, number类型的索引的返回值必须是 string 类型索引的返回值的子类型. 因为 number索引也会被转换为string再去索引对象.
     */

    interface stringArray {
        [index: number]: string; // 索引是number, 值是string
    }
    let arr: stringArray = ['少林', '武当', '崆峒'];
    let str: string = arr[0];
    console.log(str);

    interface NumberDictionary {
        [index: number]: string;
        length: number; // 正确, length 是 number的子类型
        // name: string; // error! 索引'name'的类型不是number的子类型
    }
    let arr2: NumberDictionary =  ['少林', '武当', '崆峒'];

    /**
     * 只读类型索引签名
     */
    interface ReadonlyStringArray {
        readonly [index: number]: string;
    }
    let myArray: ReadonlyStringArray = ["Alice", "Bob"];
    // myArray[2] = "Mallory"; // error! 不能设置, 因为索引签名是只读的
}
export default interfaces;