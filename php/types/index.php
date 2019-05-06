<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>数据类型</title>
</head>
<body>
<h1>基本类型</h1>
<h2>基本类型</h2>
<h3>布尔</h3>

<?php 
    $foo = True; 
    $foo2 = False; 
    echo $foo; // 1
?>
<?php 
    $action = 'show_version';
    if ($action == "show_version") {
        echo "The version is 1.23";
    }
?>

<h3>整形</h3>
<div>

<?php
  $large_number = 9223372036854775807;
  var_dump($large_number);                     // int(9223372036854775807)
  
  $large_number = 9223372036854775808;
  var_dump($large_number);                     // float(9.2233720368548E+18)
  
  $million = 1000000;
  $large_number =  50000000000000 * $million;
  var_dump($large_number);                     // float(5.0E+19)
  ?>

</div>
<div>
<?php 
var_dump(25/7);         // float(3.5714285714286)
var_dump((int) (25/7)); // int(3)
var_dump(round(25/7));  // float(4)
?>
</div>

<div>
转整型
<?php 
    $b1 = TRUE;
    $b2 = FALSE;
    echo ($b1); //1
    echo ($b2); //0
    echo (int)(3.1 + 1.2); // 4
    echo (2 + '9'); // 11 字符串转整型
?> 
超出范围
<?php
$max = 1/0;
echo $max; // INF
?>
</div>

<h4>浮点数</h4>

<?php
$a = 1.234;
$b = 1.2e3;
$c = 7E-10;
echo $a;
echo $b;
echo $c;
?>
<div>

</div>
<h4>字符串</h4>

<div>
<?php

$haha = '哈哈哈';
echo 'this is a simple string';

// 可以录入多行
echo 'You can also have embedded newlines in 
strings this way as it is
okay to do';

// 输出： Arnold once said: "I'll be back"
echo 'Arnold once said: "I\'ll be back"';

// 输出： You deleted C:\*.*?
echo 'You deleted C:\\*.*?';

// 输出： You deleted C:\*.*?
echo 'You deleted C:\*.*?';

// 输出： This will not expand: \n a newline
echo 'This will not expand: \n a newline';

// 输出： Variables do not $expand $either
echo 'Variables do not $haha $either';
?>
</div>

<div>
<?php 
echo "变量会被解析 $haha";
echo "美元符号\$";
echo "制表符";
?>
</div>
<h4>Heredoc</h4>
<div>
<?php 
$str = <<<EOD
Example of string
spanning multiple lines
using heredoc syntax.
EOD;

echo $str;

/* 含有变量的更复杂示例 */
class foo
{
    var $foo;
    var $bar;

    function foo()
    {
        $this->foo = 'Foo';
        $this->bar = array('Bar1', 'Bar2', 'Bar3');
    }
}

$foo = new foo();
$name = 'MyName';

echo <<<EOT
My name is "$name". I am printing some $foo->foo.
Now, I am printing some {$foo->bar[1]}.
This should print a capital 'A': \x41
EOT;

?>
</div>


</body>
</html>