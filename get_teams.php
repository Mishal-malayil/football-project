<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$conn = new mysqli("localhost", "root", "", "football");

$result = $conn->query("SELECT * FROM teams");

$teams = [];

while ($row = $result->fetch_assoc()) {
    $teams[] = $row;
}

echo json_encode($teams);

$conn->close();
