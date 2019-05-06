<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    
<div>
<?php
// 使用 Heredoc 初始化静态变量的值 
// 静态变量
// function foo() 
// {
//     static $bar = <<<LABEL
//     Nothing in here...
// LABEL;
// }

// // 类的常量, 属性
// class foo
// {
//     const BAR = <<<FOOBAR
//     Constant example
// FOOBAR;

//     public $bar = <<<FOOBAR
//     Property example
// FOOBAR;
// }
?>
</div>
<h4>Nowdoc</h4>
<div>
<?php
$str = <<<'EOD'
Example of string
spanning multiple lines
using nowdoc syntax.
EOD;

/* 含有变量的更复杂的示例 */
class foo
{
    public $foo;
    public $bar;

    function foo()
    {
        $this->foo = 'Foo';
        $this->bar = array('Bar1', 'Bar2', 'Bar3');
    }
}

$foo = new foo();
$name = 'MyName';

echo <<<'EOT'
My name is "$name". I am printing some $foo->foo.
Now, I am printing some {$foo->bar[1]}.
This should not print a capital 'A': \x41
EOT;
?>

</div>

<h4>变量解析</h4>

<div>
<?php
// 显示所有错误
error_reporting(E_ALL);

class beers {
    const softdrink = 'rootbeer';
    public static $ale = 'ipa';
}

$rootbeer = 'A & W';
$ipa = 'Alexander Keith\'s';

// 有效，输出： I'd like an A & W
echo "I'd like an {${beers::softdrink}}\n";

// 也有效，输出： I'd like an Alexander Keith's
echo "I'd like an {${beers::$ale}}\n";
?>
</div>
</body>
</html>