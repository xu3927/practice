# 函数作用域

v1 = 1
v3 = 3
v4 = 4
v6 = 6  # 测试嵌套作用域
print('全局v6-1:', v6)


def ff1():
    global v1
    v2 = 2
    print('ff1:', v1, v2)

    v1 += 11
    v4 = 41
    v5 = 15
    v6 = 16
    print('ff1中v6-1:', v6)

    def ff3():
        global v4
        v3 = 33
        v4 = v4 + 1
        # locals 输出当前局部变量
        # globals 输出全局变量
        print('locals:', locals())
        print('globals:', globals())

        # 定义嵌套作用域变量, 修改上层作用域的变量,不会修改全局中的
        nonlocal v6
        v6 = 36
        print('ff3中v6:', v6)

        # v1 使用 ff1 中的值, v4 使用全局中的值
        print('ff3:', v1, v2, v3, v4)
        # 会修改全局作用域中的值
        v4 = 444

    ff3()
    print('ff1中v6-2:', v6)


ff1()

print('v4:', v4)
print('全局v6-2:', v6)
