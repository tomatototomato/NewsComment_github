<!-- ローカル検証用 -->
<?php

$user = "ここにDBのユーザー名";
$pass = "ここにDBのパスワード";

//DBと接続
try {
    $pdo = new PDO('mysql:host=localhost;dbname=ここにDBの名前', $user, $pass);
    // echo "DBとの接続に成功しました。";
} catch (PDOException $error) {
    echo $error->getMessage();
}

?>

