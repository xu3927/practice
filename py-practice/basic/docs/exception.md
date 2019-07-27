# Exception 错误处理

[官方文档](https://docs.python.org/3/library/exceptions.html#exception-hierarchy)

python中所有的异常都是 BaseException 类的实例。 

try... except... 语句可以处理 BaseException 产生的错误。 

错误信息通常是一个字符串，或一个元组（包含 code，和 错误信息）

用户可以通过 Exception 或 Exception 的子类来创建新的 exceptions 通常不建议使用 BaseException 来创建错误类。

[自定义错误](https://docs.python.org/3/tutorial/errors.html#user-defined-exceptions)

## 手动触发错误

```
raise ValueError('数据错误')
```

不要抛出普通的 Exception 错误
```
# 错误示范
raise Exception('I know Python!') # Don't! If you catch, likely to hide bugs.
```

会隐藏一些 bug
```
def demo_bad_catch():
    try:
        raise ValueError('Represents a hidden bug, do not catch this')
        raise Exception('This is the exception you expect to handle')
    except Exception as error:
        print('Caught this error: ' + repr(error))

>>> demo_bad_catch()
Caught this error: ValueError('Represents a hidden bug, do not catch this',)
```

捕获具体的错误类型不能捕获到通用的错误
```
def demo_no_catch():
    try:
        raise Exception('general exceptions not caught by specific handling')
    except ValueError as e:
        print('we will not catch exception: Exception')


>>> demo_no_catch()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
  File "<stdin>", line 3, in demo_no_catch
Exception: general exceptions not caught by specific handling
```

### 最佳实践

抛出具体的错误类型

```
raise ValueError('A very specific bad thing happened')

# 还可以传入参数， 可以再 err.args 中捕获到
raise ValueError('A very specific bad thing happened', 'foo', 'bar', 'baz')
```

```
try:
    some_code_that_may_raise_our_value_error()
except ValueError as err:
    print(err.args)

==> ('message', 'foo', 'bar', 'baz')    
```


## Exception 类结构

```
BaseException
 +-- SystemExit
 +-- KeyboardInterrupt
 +-- GeneratorExit
 +-- Exception
      +-- StopIteration
      +-- StopAsyncIteration
      +-- ArithmeticError
      |    +-- FloatingPointError
      |    +-- OverflowError
      |    +-- ZeroDivisionError
      +-- AssertionError
      +-- AttributeError
      +-- BufferError
      +-- EOFError
      +-- ImportError
      |    +-- ModuleNotFoundError
      +-- LookupError
      |    +-- IndexError
      |    +-- KeyError
      +-- MemoryError
      +-- NameError
      |    +-- UnboundLocalError
      +-- OSError
      |    +-- BlockingIOError
      |    +-- ChildProcessError
      |    +-- ConnectionError
      |    |    +-- BrokenPipeError
      |    |    +-- ConnectionAbortedError
      |    |    +-- ConnectionRefusedError
      |    |    +-- ConnectionResetError
      |    +-- FileExistsError
      |    +-- FileNotFoundError
      |    +-- InterruptedError
      |    +-- IsADirectoryError
      |    +-- NotADirectoryError
      |    +-- PermissionError
      |    +-- ProcessLookupError
      |    +-- TimeoutError
      +-- ReferenceError
      +-- RuntimeError
      |    +-- NotImplementedError
      |    +-- RecursionError
      +-- SyntaxError
      |    +-- IndentationError
      |         +-- TabError
      +-- SystemError
      +-- TypeError
      +-- ValueError
      |    +-- UnicodeError
      |         +-- UnicodeDecodeError
      |         +-- UnicodeEncodeError
      |         +-- UnicodeTranslateError
      +-- Warning
           +-- DeprecationWarning
           +-- PendingDeprecationWarning
           +-- RuntimeWarning
           +-- SyntaxWarning
           +-- UserWarning
           +-- FutureWarning
           +-- ImportWarning
           +-- UnicodeWarning
           +-- BytesWarning
           +-- ResourceWarning
```