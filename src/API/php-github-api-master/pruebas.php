<?php

require_once "../Controller/LogsController.php";

//$search= $_POST["buscar"];
$search= "machine learnings";


$date = date('Y/m/d');
echo $date;
$logs= new LogsController();
$logs->create($search,$date,1);

