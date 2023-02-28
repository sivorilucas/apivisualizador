<!DOCTYPE html>
<!------------CONEXIONES------------->
<?php
// Conexion SQL
// include "conexion.php";
// include "consultas.php";
// fin de tabla ///

?>
<!------------FIN CONEXIONES------------->

<html>
  <head>
    <meta charset="UTF-8" />
    <title>Visualizador</title>
  
    <!-- amcharts -->
  
    <link rel="stylesheet" href="bootstrap/style.css" />
    <link rel="stylesheet" href="css/visualizador.css" />
    <link rel="stylesheet" href="css/dataTables.bootstrap.min.css"> 
    <!-- <link rel="stylesheet" href="visualizador/datatable/datatable/css/dataTables.bootstrap.min.css">  -->
    <link rel="icon" type="image/x-icon" href="img/Icono_Komo_SA.png"/>
    <script src="bootstrap/jquery-3.2.1.slim.min.js"></script>

    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"> -->


    <!-- Bootstrap core CSS -->
    <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
  
    <!-- Ionic icons -->
  <!-- <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet"> -->
  <link href= "css/iconos/css/ionicons.min.css" rel="stylesheet">


 
  
<!-- 

<link href="bootstrap/ionicons.min.css" rel="stylesheet"> -->
  
  
  </head>
<style>

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    padding: 0;
    margin: 0;
    background-color: #dddbdb;
    
  }

  #chartdiv-tp1,
  #chartdiv-tp2,
  #chartdiv-tp3,
  #chartdiv-tp4 {
    width: 100%;
    height: 500px;
    font-size: 2.0rem !important;
  }

  
  #chartdiv-tc1,
  #chartdiv-tc2,
  #chartdiv-tc3,
  #chartdiv-tc4 {
    width: 100%;
    height: 500px;
    padding: 0;
    font-size: 2.0rem !important;
  }

  #chartdiv-tf1,
  #chartdiv-tf2,
  #chartdiv-tf3,
  #chartdiv-tf4 {
    width: 100%;
    height: 500px;
    font-size: 2.0rem !important;
  }



  #chartdiv-tcp1,#chartdiv-tpp1, #chartdiv-tfp1 {
    width: 100%;
    height: 500px;
    padding: 0;
    font-size: 2.0rem !important;
  }


  #chartdiv-tcd1{
    width: 100%;
    height: 45vh;
    padding: 0;
    font-size: 0.7rem;
    font-size: 2.0rem !important;
  }
  
  .titulo-pallet {

    align-items: center;
    display: flex;
    justify-content: center;

  }

  .titulo-pallet-nm {

    display: flex;
    align-items: center;
    justify-content: center;

  }

  .titulo-txt {
    font-family: sans-serif;
    font-size: 10vh;
    color: #ffffff;
  }


  .titulo-txt-F {
    font-family: sans-serif;
    font-size: 6vh;
    color: #ffffff;
  }


  .titulo-caja {
    font-size: 10vh;
    color: #ffffff;
  }

  .titulo-tablero{
    font-size: 2rem !important;

  }

  .contenedor-1 {
    border: #dddbdb 2rem solid;
    background-color: #f4f4f4;
  }

  .caja-til {
    background-color: #01acc4;
    color: #ffffff;
  }

  .caja-num {
    background-color: #234389;
    color: #ffffff;
  }

  .fondo-blanco {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;

  }
  .img-logo {

    width: 18VH;
    height: 18vh;
    margin: 1rem;
    margin-left: 3rem;
  }

  .fondo-azulo {
    background-color: #234389;
    height: 23vh;
  }

  .fondo-azulc {
    background-color: #295799;
    height: 23vh;
  }

  .progress-bar-success{
    background-color: #18995d !important;

  }

  .barra-p{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .progress{
    background-color: #dee2e7 !important;
    border: #8d8383 0.1rem solid;
    height: 3rem;
    font-size:2.5rem;
  }

.BTN-FLECHAS{
     display: flex;
    align-items: center;
    justify-content: center;

}

.btn-hidden{
    display: none!important;
}


.btnpdf {
  background-color: #01acc4;
  /* background-color: DodgerBlue; */
  border: none;
  color: white;
  padding: 12px 30px;
  cursor: pointer;
  font-size: 13px;
}

.cajapdf {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

.btnpdf:hover {
  background-color: RoyalBlue;
}


.mes-hidden{
            display: none!important;
        }

.semana-hidden{
    display: none!important;
}


.flecha-menu{
  position: fixed;
  /* margin-top:25rem; */
  z-index: 1001;
	top: 23vh;
	left: 0.5rem; 
  /* margin-top:12rem;
  margin-left:4rem; */
  /* margin-top:4rem;
  margin-left:1rem; */
  background: rgb(17, 27, 84);
  color: #fff;
 
}


/* .btn{
  color: #f8f9fa !important;
} */

.cerrar-menu{
  color: #ffffff;
}

#abrir {
  display: none;

}

#sidebar-container .menu {
    width: 25rem !important;
    font-size: 1.7rem;
}

#sidebar-container .logo{
    padding: 0.875rem 1rem;
}

.caja-row{
  --bs-gutter-x: 0rem !important

}

</style>


<body>


<div class="d-flex" id="content-wrapper">

<!-- Sidebar -->


<div class="w-100" id="contenido">


<seccion id="tablero-menuvisor" class="seccion-hidden ">

 <div class="contenedor">
 <div class="row">
 


 <div class="col-1 titulo-menu clickfuera"> <a  href=""><img class="logo-b4" src="img/Logo_Komo_SA.png"> </a></div>
  <div class="col-10 titulo-menu clickfuera"> 
      <span class="span_titulo " id="titulo-analis">Visualizador </span>   
   </div>
<!--LOGO A LA IZQUIERDA-->


<!--MENU BOTONES -->
   <div class="row"> 
   <div class="col-2 clickfuera"></div>
    <div class="col-4 clickfuera">

        <div class="row"> 
           <div class="col-6">
               <span class = "titulo-botones">Codigo de Barra</span>
               <input id ="codigoformulario" onkeypress="pulsar(event)" class="form-control form-control-lg" type="text" >
          </div>
          <div class="col-6">
               <span  class = "titulo-botones">Nombre Archivo</span>
               <input  id ="nomformu" onkeypress="pulsar(event)"  class="form-control form-control-lg" type="text" >
          </div>
        </div>

    </div>
    
    <div class="col-4 ">

   <div class="card cajabotones">
              <div class="card-header">
              </div>
              <div class="card-body">



              <!-- zoommenos -->
      <div class="row">
          <div class="col-4 ">
                <div class="caja-zoom">
                        <button type="button" onclick="zoommenos()" class="btn btn btn-zoom "> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-zoom-out" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                            <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
                            <path fill-rule="evenodd" d="M3 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                        </button>
                        <!-- <input type="text" class="form-control imput-zomm" id="imputzoom" placeholder="100%"> -->
                        <button type="button"  onclick="zoomaumenta()"  class="btn btn-default btn-zoom">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-zoom-in" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                            <path d="M10.344 11.742c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1 6.538 6.538 0 0 1-1.398 1.4z"/>
                            <path fill-rule="evenodd" d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                      </button>
                </div>
          </div>
          
          <div class="col-4 ">
            <div class="btn-pag">
                      <div class=""><span><span id="pagimg" value = "0">01</span>/12</span></div>
                    <button   onclick="anteriorpag ()" type="button" class="btn btn btn-flecha"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                            <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
                            </svg>
                    </button>
                    <button type="button"  onclick="siguientepag ()" class="btn btn btn-flecha"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                            <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
                            </svg>
                    </button>
            </div>
          </div>  

          <div class="col-3 ">   
                <div class="form-check form-switch caja-swich">
                <input class="form-check-input" type="checkbox" id="switchcolor" >
                <label class="form-check-label" for="flexSwitchCheckChecked">Color</label>
              </div>
          </div>
          </div>
      </div>
      </div>

      </div><!-- 11-->
            
      <div class="col-2 clickfuera"></div>
  </div>

<!-- FIN MENU BOTONE -->

<!-- LIENZO-->
<div class="col-12 clickfuera ">
      <div id="scroll-container" class="text-center sinresultadovh imgcroll">
         <div id ="cuadro1"> 
              <!-- <img id ="borrar" src="img/sin-resultados-search4.png" class="rounded img-form" alt="...">  -->
        </div>
          <div id="IMG-FORMU" class="IMG-FORMU-left scrollprimero">
          <canvas 
                    id="canvasformu" 
                    width="1700"
                    height="3000"
                    oncontextmenu="return false"
              >
          </canvas> 
         
          </div>
      </div>
  </div>

<!-- FIN LIENZO-->

 </div>
</div>

</seccion>


  <div>
</div>
</div>



<div id = "cargando" class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document" data-backdrop="static" data-keyboard="false" >
    <div class="modal-content">
      <div class="modal-body">
      <div class="cajacargando2">
      <span class="titulocagando" >Buscando Imagen</span>     </div>
        <div class="cajacargando">
         
          <img  src="img/search2.gif" class="rounded img-form2" alt="..."> 
          <!-- <img  src="img/search2.gif" class="rounded img-form2" alt="...">  -->
          </div>
      </div>
    </div>
  </div>
</div>


<!------------LIBRERIAS JS------------->

  <script src="bootstrap/js/bootstrap.min.js"></script>
  <script src="bootstrap/js/bootstrap.js"></script>
  <script src="bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="bootstrap/js/bootstrap.bundle.js"></script>
  
 
  <script src="js/main.js"></script>
  <script src="js/jquery-1.12.3.js"></script>
	<script src="js/jquery.dataTables.min.js"></script>
	<script src="js/dataTables.bootstrap.js"></script>
	<script src="js/dataTables.buttons.min.js"></script>
	<script src="js/buttons.bootstrap.min.js"></script>

  <script src="bootstrap\js\tiff.min.js"></script>



  <!-- <link rel="stylesheet" href="https://cdn.datatables.net/select/1.3.1/css/select.dataTables.min.css">
<script src="https://cdn.datatables.net/select/1.3.1/js/dataTables.select.min.js"></script> -->


<link rel="stylesheet" href="bootstrap/datatables/select.dataTables.min.css">

<script src="bootstrap/datatables/dataTables.select.min.js"></script> 

 <script src="bootstrap/datatables/Select-1.4.0/js/dataTables.select.min.js"></script> 
 <!-- cambiar server -->
 <!-- <link href="bootstrap/datatables/Select-1.4.0/css/select.bootstrap.min.css" rel="stylesheet"> -->
<!-- <script src=""></script>  -->



<!-- <script src="https://cdn.datatables.net/scroller/2.0.7/js/dataTables.scroller.min.js"></script> --> 

<link rel="stylesheet" href="bootstrap/datatables/Scroller/css/scroller.bootstrap.min.css">
<script src="bootstrap/datatables/Scroller/js/dataTables.scroller.min.js"></script> 


<!-- <script src="https://cdn.datatables.net/keytable/2.7.0/js/dataTables.keyTable.min.js"></script>  -->
<!-- <script src="bootstrap/datatables/KeyTable/css/keyTable.bootstrap.min.css"></script> 
<script src="bootstrap/datatables/Select-1.4.0/js/dataTables.keyTable.min.js"></script>  -->


  <script type="text/javascript" src="bootstrap/html2pdf/dist/html2pdf.bundle.min.js"></script>


<!------------ // js// ---------------->

<script>
  $(document).ready(function () {
 
    TableroMenuVisor()
  
  });


 function TableroMenuVisor() {

  menufinaliza = ""

  localStorage.setItem("inputTablero_veri", "Menu_visor");

  var elemento2 = document.getElementById("tablero-menuvisor");
  elemento2.className = "seccion-block";

}



</script>



</body>
</html>

