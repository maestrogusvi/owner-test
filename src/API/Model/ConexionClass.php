<?php

abstract class ConexionClass{
/**
	  * Devuelve la conexion
	  *
	  * @return PDO conexion a la bd
	  */
    protected function conDB(){
        $con = new PDO("mysql:host=localhost;dbname=owner_test","root","");
        return $con;
    try{
    }catch(PDOException $er){
        echo $er->getMessage();
    }

    }
}