function basicType () {
    let str: string = '我是string';
    let num: number = 999;
    /** 数组类型 **/
    // 定义数组有2种形式
    let arr: number[] = [1, 2, 3]; // 元素类型 + []
    let arr2: Array<string> = ['哈哈', '嘻嘻', '么么哒']; // Array + 元素类型
    // Tuple 元组 类型数组, 用于表示一个已知元素数量和类型的数组, 各元素的类型不必相同, 访问一个越界的元素会使用联合类型代替
    let tuple1: [string, number]; // 指定原数组类型, 当访问一个越界的元素，会使用联合类型替代 [string|number]
    tuple1 = ['华山派', 99]; // 正确定义
    // tuple1 = [999, '华山派']; 错误, 第0位定义的是string, 第1位定义的是number.
    let _s = tuple1[0].substr(0); // 正确, string有substr方法
    // let _s = tuple1[0].substr(1); // 错误, number类型没有substr方法
    // tuple1 = ['华山派', 99, 8766, '嵩山派']; // 错误
    tuple1 = ['华山派', 9] // 正确

    let tuple2: [string|number]; // 指定元素是string或number
    tuple2 = ['华山派']; // 正确定义
    tuple2 = [999]; // 正确定义
    console.log(str, num, arr, arr2, tuple1, tuple2);

    /**
     * Enum 枚举类型 **
     * 枚举类型可以用来定义一组有名的数值常量 (enum is helpful to standard a set of datatypes)
     * 可以通过name来获取数值, 也可以通过数值来获取该值的name
     * enum类型下标默认从0开始, 递增, 也可以给成员指定下标
     */
    enum Color {Red, Blue = 888, Green};
    let r: Color = Color.Red; // 0
    let b: Color = Color.Blue; // 888
    let g: Color = Color.Green; // 889 没有指定的值会递增
    let ColorName = Color[888]; // 通过值获取名称 Blue
    console.log(b, g, ColorName);
    // 常数枚举类型, 在编译后枚举定义会被删除, 只保留成员引用的值.
    const enum Week {
        Sunday,
        Monday,
        Tuesday,
        Saturday = 6
    };
    let d:Week = Week.Sunday;
    console.log('d:', d);

    /**
     * Any 类型
     * 不指定类型, 在编译时确定, 可以赋值为任何类型, 该类型可以很好的适配js.
     */
    let notSure: any = 999;
    notSure = '九阴真经';
    notSure = true;
    console.log('notSure:', notSure);

    /**
     * Void 类型, 只能被赋值为null 或 undefined.
     * 对于没有返回值的函数可以使用该类型
     */
    function noValReturn (a, b): void {
        console.log(a + b);
    }
    noValReturn(2, 6);
    let unusable: void = null;
    unusable = undefined;
    console.log('unusable', unusable);

    /**
     * Null and undefined
     * 其他基本类型如string / number 等可以被赋值为null / undefined
     */
    let n: null = null;
    let u: undefined = undefined;
    // n = undefined; // 报错
    let s: string = '九阴真经';
    s = undefined; // 正确
    s = null; // 正确
    console.log(n, u, s);
    /**
     * Type assertion
     */
    let activity: any = '华山论剑';
    // <>语法
    let len: number =  (<string>activity).length;
    // as 语法
    let len2: number = (activity as string).length;
    console.log(len, len2);
}
export default  basicType;