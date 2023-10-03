<?php
require_once('config.php');

//insert, update, delete, select
//SQL: insert, update, delete

function execute($sql) {
    // open connection
    $conn = mysqli_connect(HOST, DATABASE, USERNAME, PASSWORD);
    mysqli_set_charset('utf8');

    //Query
    mysqli_query($conn, $sql);

    //Close connection
    mysqli_close($conn);
}

// SQL: select -> lay du lieu dau ra

