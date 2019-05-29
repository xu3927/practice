# 延迟加载模块， 在方法被调用的时候才会加载该模块


def A(arg):
    from .a import echo1
    return echo1(arg)


def B(arg):
    from .b import echo2
    return echo2(arg)
