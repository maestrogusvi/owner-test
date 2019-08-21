<?php
require_once __DIR__ . '/vendor/autoload.php';
$client = new \Github\Client();
//$owner= $_POST["owner"];
//$repo= $_POST["repo"];
$owner= 'KnpLabs';
$repo= "php-github-api";
$comments = $client->api('pull_request')->comments()->all($owner, $repo,5);
$json = array();
$y=0;
    for($x=count($comments)-1;$x>=0;$x--){
        $value=$comments[$x];
        $json[$y]= array(
            "user"=>$value["user"]["login"],
            "body"=>$value["body"],
            "date"=>$value["created_at"]
        );
        $y++;
    }

header('Content-type: application/json; charset=utf-8');
echo  json_encode($json);
