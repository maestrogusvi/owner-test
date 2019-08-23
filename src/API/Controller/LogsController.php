<?php

  require_once "./Model/LogsClass.php";

class LogsController{

/**
	  * Crear un Log.
	  *
	  *
	  * @param string $search Cadena a buscar
	  * @param Date   $date_search Fecha de la busqueda
	  * @param int    $number_record Numero de registros obtenidos
	  *
	  * @return void
	  */
    public function create($search,$date_search,$number_record){
        $log= new LogsClass();
        $log->setDate_search($date_search);
        $log->setSearch($search);
        $log->setNumber_record($number_record);
        $log->create();
    }

/**
	  * Devuelve todos los logs realizados
	  *
	  * @return JSON Regresa el total de registros de logs
	  */
    public function show(){
        $log= new LogsClass();
        $log->show();
    }

}
