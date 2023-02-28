<?php


$tipo = $_POST['tipo'];



if($tipo == "cargoimagen")
{
   cargoimagen();
}


///////////////////////////////////
///////// FUNCIONES SQL ///////////
///////////////////////////////////


// CONEXION A LA BASE 

function Conectarse()
{
     

   $cons_usuario="root";
   $cons_contra="qazqwe123A*";
   $cons_base_datos="trazatest";
   $cons_equipo="localhost";


   $obj_conexion= mysqli_connect($cons_equipo,$cons_usuario,$cons_contra,$cons_base_datos);
      
   if(!$obj_conexion)
   {
      exit();
   }

   return $obj_conexion;

}


///////////////////////////////////
///// CARGA DATA TABLA VISOR //////
///////////////////////////////////



function cargoimagen()
{
   $obj_conexion = Conectarse();

   $swhere = "";
   $valorfiltro = $_POST['valor'];
   $codformu = $_POST['codformu'];
   $nomformu = $_POST['nomformu'];
   

   if ($valorfiltro == 1){
      $swhere = " where FORMULARIO = ".$codformu;
   }

   if ($valorfiltro == 2){
      $swhere = " where NOMFORMU = '".$nomformu."'";
   }


   $var_consulta_cargaformu = "select id_visualiza,DIRARCEXT_CL,DIRARCEXT_BL,NOMFORMU,FORMULARIO FROM dbtrabajo.tab_visuaimg  ".$swhere;
   $resultado_cargaformu = $obj_conexion->query($var_consulta_cargaformu);

   $data = array();

   if ($obj_conexion->affected_rows > 0) {
      while ($var_fila = $resultado_cargaformu->fetch_array()) {
         $data[]= ['rutacolor' => $var_fila["DIRARCEXT_CL"], 'rutabyn' => $var_fila["DIRARCEXT_BL"],'valornom' => $var_fila["NOMFORMU"],'valorcod' => $var_fila["FORMULARIO"]];
      }
   } 

   echo json_encode($data);

   $obj_conexion->close();


}

