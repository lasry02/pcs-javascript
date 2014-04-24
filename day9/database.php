<?php
$dsn = 'mysql:host=localhost;dbname=class';
$username = 'class';
$password = 'test';
$options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);

try {
	$db = new PDO($dsn, $username, $password, $options);
} catch (PDOException $e) {
	$error_message = $e->getMessage();
	exit();
}