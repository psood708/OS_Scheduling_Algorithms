<?php
$server_name = "localhost:3306";
$username = "root";
$password = "apsn8xb6e";
$database_name = "mru";

$conn = mysqli_connect($server_name, $username, $password, $database_name);
//now checking the connection
if (!$conn) {
    die("Connection Failed:" . mysqli_connect_error());

}

if (isset($_POST['save'])) {
    $file_name = $_POST['user'];
    $Frame = $_POST['frame'];
    $Hit = $_POST['hits'];
    $Miss = $_POST['miss'];
    $Hratio = $_POST['hitratio'];
    $Mratio = $_POST['missratio'];

    $sql_query = "INSERT INTO mru (File_name,No_of_Frame,
	Total_Hits,Total_Misse,Hit_Ratio,	Miss_Ratio)
	 VALUES ('$file_name',' $Frame', '$Hit','$Miss','$Hratio',' $Mratio'
	 )";

    if (mysqli_query($conn, $sql_query)) {

        header('location:mru.php');
    } else {
        echo "Error: " . $sql . "" . mysqli_error($conn);
    }
    mysqli_close($conn);
}

?>