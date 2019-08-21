<?php

include("ConexionClass.php");

class LogsClass extends ConexionClass{

    private $id;
    private $search;
    private $date_search;
    private $number_record;

    function __construct(){}
    public function show(){

        $q = $this->conDB()->prepare("SELECT * FROM search_log");
        $q->execute();
        $jsondatos = array();
        $it=0;
        while($x=$q->fetch(PDO::FETCH_ASSOC)){
            $jsondatos[$it]=[
                "id"=>$x["id"],
                "search"=>$x["search"],
                "date_search"=>$x["date_search"],
                "number_records"=>$x["number_records"]
            ];

            $it++;

        }

        header('Content-type: application/json; charset=utf-8');
        echo  json_encode($jsondatos);

    }

    public function setSearch($search){
        $this->search= $search;
    }

    public function getSearch(){
        return $this->search;
    }

    public function setDate_search($date_search){
         $this->date_search= $date_search;
    }

    public function getDate_search(){
        return $this->date_search;
    }
    public function setNumber_record($number_record){
        $this->number_record= $number_record;
    }

    public function getNumber_record(){
        return $this->number_record;
    }

    public function create(){
        $q = $this->conDB()->prepare("insert into search_log values(NULL,:search,:date_search,:number_records)");
        $q->bindValue('search',$this->getSearch());
        $q->bindValue('date_search',$this->getDate_search());
        $q->bindValue('number_records',$this->getNumber_record());
        $q->execute();
    }

}