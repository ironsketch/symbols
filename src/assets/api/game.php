<?php
include 'connection.php';
$entryTags = [];

$sql = "SELECT * FROM game";
$result = mysqli_query($link,$sql) or die("Unable to select: ".mysql_error());
while($row = mysqli_fetch_row($result)) {
  array_push($entryTags,$row);
}
echo json_encode(['data'=>$entryTags]);
mysqli_close($link);
?>