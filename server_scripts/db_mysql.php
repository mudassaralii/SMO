<?php
/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-01-24 11:54:15
 * @LastEditors: mudassaralii mudassaralii@hotmail.com
 * @LastEditTime: 2024-05-06 14:27:31
 * @Description: **
 * @FilePath: \server_scripts\db_mysql.php
 */
$db_mysql = mysqli_connect('localhost', 'root', 'root', 'oms', '3306');
// $db_mysql = new PDO('mysql:dbname=oms;host=localhost;charset=utf8', 'root', '7374');
// $db_mysql->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
// $db_mysql->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

define('MYSQL_USER', 'root');
define('MYSQL_PASSWORD', 'root');
define('MYSQL_HOST', 'localhost');
define('MYSQL_DATABASE', 'oms');

$pdoOptions = array(
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_EMULATE_PREPARES => false
);

$pdo = new PDO(
    "mysql:host=" . MYSQL_HOST . ";dbname=" . MYSQL_DATABASE, //DSN
    MYSQL_USER, //Username
    MYSQL_PASSWORD, //Password
    $pdoOptions //Options
);
