<?php
header("Access-Control-Allow-Origin: *");
require_once "./Controller/LogsController.php";
$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
      $logs = new LogsController();
      $logs->show();
        break;

}


