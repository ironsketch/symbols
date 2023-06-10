<?php
include 'connection.php';

$url = $_SERVER['REQUEST_URI'];
$url_components = parse_url($url);
parse_str($url_components['query'], $params);

$username = $params['username'];
$password = $params['password'];

$playerresult = [];

$sql = "SELECT `password` FROM player WHERE `playerName`='$username'";
$result = mysqli_query($link,$sql) or die("Unable to select: ".mysql_error());

while($row = mysqli_fetch_row($result)) {
  array_push($playerresult, $row);
}
if (count($playerresult) > 0) {
  $matches = $playerresult[0][0] == $password;
  echo json_encode(['data'=>$matches]);
} else {
  echo json_encode(['data'=>false]);
}
mysqli_close($link);
?>