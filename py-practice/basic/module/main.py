
# 直接执行脚本时 __name__ 会被设为 __main__
import sys
import builtins
print(__name__)

print(sys.path)
print(dir())
