<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>PHP首页</h1>
    <div>
        <?php echo '哈哈'; ?>
    </div>
    <div>
        <!-- 查看用户浏览器版本 -->
        <?php 
        echo $_SERVER['HTTP_USER_AGENT']; 
        ?>
    </div>
    <div>
        <!-- 查看 php 信息 -->
    <!-- <?php phpinfo(); ?> -->
    </div>
    <div>
        <?php  
            echo a;
            // echo b;
            # echo c;
            echo d;
            echo e
        ?>
    </div>
</body>
</html>