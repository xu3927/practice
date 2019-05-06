#!/bin/sh
# 关闭回显, 键盘的输入不会显示出来
stty -echo
echo -n "输入密码: "
# 读取用户的输入, 并存到变量pass中
read pass
# 打开回显
stty echo
echo -e "\n输入的密码锁: $pass"
