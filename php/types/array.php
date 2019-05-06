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
    $arr = array(
        "foo" => "bar",
        "bar" => "foo",
    );
    echo $arr["foo"]."<br/>";

    // key 都会被转为 1
    $arr2 = [
        1 => "a",
        "1" => "b",
        1.5 => "c",
        true => "d"
    ];
    var_dump($arr2);
    echo "</br>";
    echo $arr2[1];
?>
</div>
<div>

<?php 
$arr3 = array(
    "foo" => "bar",
    100 => -100,
    -100 => 100
);
var_dump($arr3);
echo "<br>".$arr3[-100];
?>
</div>
<h3>没有键名</h3>
<div>

<?php 
$arr4 = array("foo", "bar", "hallo", "world");
var_dump($arr4);
?>
</div>
<h3>只指定部分键名</h3>
 <div>
<?php
$arr5 = array(
    "a",
    "b",
    6 => "c", // key 为 6
    "d", // key 为 7
    "e"
);
var_dump($arr5);
?> 
 </div>
 <h3>多维数组</h3>
 <div>
 <?php
 $arr6 = array(
     "a" => "a",
     42 => 24,
     "multi" => array(
         "dimensional" => array(
             "haha" => "foo",
         )
     )
);
 var_dump($arr6);
 echo "<br/>";
 echo $arr6["multi"]["dimensional"]["haha"]
 ?>
 </div>

 <h3>数组值更新</h3>

<div>
<?php
$arr7 = array(
    "a",
    "b",
    "c"
);
$arr7[2] = "e";
var_dump($arr7);
echo "<br>";
$arr7[] = "f";
$arr7["x"] = "xx";
var_dump($arr7);
echo "<br>";
unset($arr7[2]); // 删除某项
unset($arr7); //删除该数组, 得到 NULL
var_dump($arr7);

?>
</div>

</body>
</html>