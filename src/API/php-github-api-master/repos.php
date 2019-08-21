<?php
require_once __DIR__ . '/vendor/autoload.php';
require_once "../Controller/LogsController.php";
$client = new \Github\Client();
//$search= $_POST["buscar"];
$search= "machine learning";
if($search==""){
    return 0;
}
$repos = $client->api('search')->repositories($search);

$date = date('Y/m/d');
$logs= new LogsController();
$logs->create($search,$date,count($repos));
$jsondatos = array();
$x=0;
foreach ($repos["items"] as $value) {

    $jsondatos[$x]= array(
        "fullName"=>$value["full_name"],
        "name"=>$value["name"],
        "owner"=>$value["owner"]["login"],
        "description"=>$value["description"],
        "created"=>$value["created_at"],
        "language"=>$value["language"],
    );
    $x++;
}
header('Content-type: application/json; charset=utf-8');
echo  json_encode($jsondatos);









