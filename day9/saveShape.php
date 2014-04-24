<?php
include_once("database.php");
//global $db;

$type = $_POST["type"];
$data = $_POST["data"];
$room = $_POST["room"];
$query = "INSERT INTO shapes VALUES (NULL, :type, :data, :room)";
$statement = $db->prepare($query);
$statement->bindValue(':type', $type);
$statement->bindValue(':data', $data);
$statement->bindValue(':room', $room);
$statement->execute();
?>