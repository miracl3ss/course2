<?php
session_start();
include('db_connect.php');
$email = $_POST['email'];
$password = $_POST['password'];
$md5_password = md5($password);
$query = mysqli_query($db, "SELECT * FROM `users` WHERE `email` = '{$email}'");
if (mysqli_num_rows($query) == 0) {
    $_SESSION['user'] = ['email' => $email];
    mysqli_query($db, "INSERT INTO `users` (`email`, `password`) VALUES ('{$email}', '{$md5_password}')");
    header('location: ./pages/user.php');
} else {
    echo("Ошибка: Данный email уже зарегистрирован");
}