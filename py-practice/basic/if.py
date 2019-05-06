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
