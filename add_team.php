<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: *");

$conn = new mysqli("localhost", "root", "", "football");

if ($conn->connect_error) {
    die(json_encode(["error" => $conn->connect_error]));
}

$TeamName = $_POST['team_name'];
$TeamManager = $_POST['team_manager'];
$Phone=$_POST['phone_num'];
$TotalPlayers = $_POST['total_players'];

$uploadDir = "uploads/";
$logoName = time() . "_" . basename($_FILES["team_logo"]["name"]);
$uploadFile = $uploadDir . $logoName;

if (!move_uploaded_file($_FILES["team_logo"]["tmp_name"], $uploadFile)) {
    echo json_encode(["error" => "Failed to upload image"]);
    exit();
}

$sql = "INSERT INTO teams (TeamName, TeamManager,Phone, TotalPlayers, TeamLogo)
        VALUES ('$TeamName', '$TeamManager', $Phone,'$TotalPlayers', '$logoName')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Team added successfully"]);
} else {
    echo json_encode(["error" => $conn->error]);
}

$conn->close();
