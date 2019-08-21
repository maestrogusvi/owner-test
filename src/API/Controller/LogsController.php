<?php

require_once "../Model/LogsClass.php";

class LogsController{

    public function create($search,$date_search,$number_record){
        $log= new LogsClass();
        $log->setDate_search($date_search);
        $log->setSearch($search);
        $log->setNumber_record($number_record);
        $log->create();
    }

    public function show(){
        $log= new LogsClass();
        $log->show();
    }

}
