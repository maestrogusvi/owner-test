<?php
abstract class ConexionClass{

    protected function conDB(){
        $con = new PDO("mysql:host=localhost;dbname=owner_test","root","");
        return $con;
    try{
    }catch(PDOException $er){
        echo $er->getMessage();
    }

    }
}