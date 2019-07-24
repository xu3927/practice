# if
number = 23
guess = int(input('输入一个数字: '))
if guess > number:
    print('大了')
elif guess == number:
    print('恭喜, 猜对了')
else:
    print('小了')
print('完成')

# if 做三元运算
# 语法 value_when_true if condition else value_when_false
result = "true value" if 5 > 2 else "false value"
