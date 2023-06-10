<?php
include 'connection.php';
$tags = [];

$sql = "SELECT * FROM table_name";
$result = mysqli_query($link,$sql) or die("Unable to select: ".mysql_error());
while($row = mysqli_fetch_row($result)) {
  array_push($tags,$row);
}
  echo json_encode(['data'=>$tags]);
mysqli_close($link);
?>