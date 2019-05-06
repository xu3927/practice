# while

running = True
number = 23
n = 1
while running:
    print('{0:_^5}'.format(''))
    print('第{n}次竞猜'.format(n=n))
    n = n + 1
    guess = int(input('输入一个数字: '))
    if guess == 100:
        print('执行了 continue')
        continue
    if guess > number:
        print('大了')
    elif guess == number:
        print('恭喜, 猜对了')
        running = False
    elif guess == 15:
        print('break 了')
        break
    else:
        print('小了')
else:
    print('循环结束')
