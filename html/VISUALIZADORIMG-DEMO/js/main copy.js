

  $(document).ready(function () {
    // INICIALIZACIONES

    var txtversion = "V2.19";

    var colorimg = "byn";
    

    $('#cargando').modal({backdrop: 'static', keyboard: false})
    
    $("#codigoformulario").blur(function(){
      $('#nomformu').val("");
      ultimofocus = "cod"
      clickfuera ="ok"

      let txtformu =  $('#codigoformulario').val();
      let txtfnom =  $('#nomformu').val();

      if (txtformu != "" || txtfnom != ""){
        console.log("11111")
        $("#cargando").modal("show");
        cargarimagenvisor();
      }

   })

   $("#nomformu").blur(function(){
      $('#codigoformulario').val("");
      ultimofocus = "nom"
      clickfuera ="ok"

      let txtformu =  $('#codigoformulario').val();
      let txtfnom =  $('#nomformu').val();

      if (txtformu != "" || txtfnom != ""){
        console.log("2222")
        $("#cargando").modal("show");
        cargarimagenvisor();
      }


    })


    // $(".clickfuera").click(function(){

    //   //console.log("clickfuera"+clickfuera)
       
    //   if (clickfuera =="ok"){
    //     //console.log("adent5roif")
    //     cargarimagenvisor();
    //     clickfuera = ""
    //   }
    
    //   //console.log("clickfuera click activado")

    // })

  

    $("#switchcolor").click(function () {


      let codigoformulario = $('#codigoformulario').val();
      let nomformu = $('#nomformu').val();

      if (codigoformulario != "" || nomformu != ""){

      ////console.log("cambio color")
      colorimg = cambiarcantimg();
      textpag = $("#pagimg").text();
      numpag = parseInt(textpag);
      valorpag = String(numpag);

      ////console.log("colorimg: "+colorimg)
      ////console.log("colorimg2: "+colorimg2)
      
      valorpag = String(numpag - 1);
      if (valorpag.length == 1) {
        valorpag = "0" + valorpag;
      }

      nzoom = zoom;
      ////console.log("swich.nzoom:"+nzoom)
      if (nzoom == 0.6) {
        $("#IMG-FORMU").removeClass("IMG-FORMU-center");
        $("#IMG-FORMU").addClass("IMG-FORMU-left");
      }

      if (nzoom == 0.22) {
        $("#IMG-FORMU").removeClass("IMG-FORMU-left");
        $("#IMG-FORMU").addClass("IMG-FORMU-center");
      }

      // asdf
      // //console.log("numpag"+numpag)
      // //console.log("colorimg2"+colorimg2)
      // //console.log("nzoom"+nzoom)
      // //console.log("rutacolor"+rutacolor)
      // //console.log("rutabyn"+rutabyn)

       //console.log("ultimofocus"+ultimofocus)
      //generarimagen(numpag, colorimg2, nzoom,rutacolor,rutabyn);
      cargarimagenvisor()
    }

    });

  });


function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

////////////////////////////
// DATATABLE FUNCIONES ////
////////////////////////////


// MODAL IMAGEN

let canvasEl;
let ctx;
let image;
let isDragging;
let isMousedown;
let startPanX = 0;
let startPanY = 0;
let zoom = 0.6;
let panX = 0;
let panY = 0;
let colorimg2 = "byn"
let valorpag = "00" 
let countformu = 1 
let ultimofocus =""
let xcor = 0
let ycor = 0
let verizoom = 2.1
let vCONTROL = ""
let verixcor = 0;
let veriycor = 0;
let rutacolor = ""
let rutaby = ""
let clickfuera = ""
let veriprimero = ""

///////////////////////////////
/////// FUNCIONES ZOOM ////////
///////////////////////////////

  
function zoomaumenta() {

  let codigoformulario = $('#codigoformulario').val();
  let nomformu = $('#nomformu').val();


  if (codigoformulario != "" || nomformu != ""){

    ////console.log("image: "+image)
    $("#IMG-FORMU").removeClass("IMG-FORMU-center");
    $("#IMG-FORMU").addClass("IMG-FORMU-left");

    zoom = 0.6;

    
    
    let textpag = $("#pagimg").text();
    let numpagz = parseInt(textpag);

  // redraw(image, zoom);
  cargarimagenvisor() 
  // generarimagen(numpagz, colorimg2, zoom,rutacolor,rutabyn)
   // stitchCanvases(image, zoom,0,0)
    document.getElementById("IMG-FORMU").scrollTop = 10;

  }
}

function zoommenos() {

  let codigoformulario = $('#codigoformulario').val();
  let nomformu = $('#nomformu').val();

  if (codigoformulario != "" || nomformu != ""){

    $("#IMG-FORMU").removeClass("IMG-FORMU-left");
    $("#IMG-FORMU").addClass("IMG-FORMU-center");

    zoom = 0.22;

    
    let textpag = $("#pagimg").text();
    let numpagz = parseInt(textpag);

    //redraw(image, zoom);
    cargarimagenvisor()
    //generarimagen(numpagz, colorimg2, zoom,rutacolor,rutabyn)
   // stitchCanvases(image, zoom,0,0)
    document.getElementById("IMG-FORMU").scrollTop = 10;
  }
}


///////////////////////////////////////////
/////// FUNCIONES CAMBIO FORMULARIO ////////
/////////////////////////////////////////////


function anteriorpag() {
  valorpag = "";
  textpag = $("#pagimg").text();
  numpag = parseInt(textpag) - 1;

  if (numpag == 0) {
    numpag = 12;
  }
  valorpag = String(numpag);

  if (valorpag.length == 1) {
    valorpag = "0" + valorpag;
  }
  document.getElementById("pagimg").innerHTML = valorpag;

  valorpag = String(numpag - 1);
  if (valorpag.length == 1) {
    valorpag = "0" + valorpag;
  }
  nzoom = zoom;

  if (nzoom == 0.6) {
    $("#IMG-FORMU").removeClass("IMG-FORMU-center");
    $("#IMG-FORMU").addClass("IMG-FORMU-left");
  }

  if (nzoom == 0.22) {
    $("#IMG-FORMU").removeClass("IMG-FORMU-left");
    $("#IMG-FORMU").addClass("IMG-FORMU-center");
  }

  cargarimagenvisor() 
  //generarimagen(numpag, colorimg2, nzoom,rutacolor,rutabyn);

}

function siguientepag() {
  valorpag = "";
  textpag = $("#pagimg").text();
  numpag = parseInt(textpag) + 1;

  if (numpag > 12) {
    numpag = 1;
  }
  valorpag = String(numpag);

  if (valorpag.length == 1) {
    valorpag = "0" + valorpag;
  }
  document.getElementById("pagimg").innerHTML = valorpag;

  valorpag = String(numpag - 1);
  if (valorpag.length == 1) {
    valorpag = "0" + valorpag;
  }
  nzoom = zoom;

  if (nzoom == 0.6) {
    $("#IMG-FORMU").removeClass("IMG-FORMU-center");
    $("#IMG-FORMU").addClass("IMG-FORMU-left");
  }

  if (nzoom == 0.22) {
    $("#IMG-FORMU").removeClass("IMG-FORMU-left");
    $("#IMG-FORMU").addClass("MG-FORMU-center");
  }

////console.log("numpag"+numpag)
////console.log("colorimg2"+colorimg2)
////console.log("nzoom"+nzoom)
////console.log("rutacolor"+rutacolor)
////console.log("rutabyn"+rutabyn)

cargarimagenvisor() 
 // generarimagen(numpag, colorimg2, nzoom,rutacolor,rutabyn);

}

function cambiarcantimg() {
  if (colorimg2 == "color") {
    colorimg2 = "byn";
  } else {
    colorimg2 = "color";
  }

  // $("#IMG-FORMU").removeClass("IMG-FORMU-center");
  // $("#IMG-FORMU").addClass("IMG-FORMU-left");

  return colorimg2;
}



///////////////////////////////////////////
/////// FUNCIONES ACTIVA CARGAR IMAGEN ////////
/////////////////////////////////////////////

// EVALUA SI SE TOCA LA TECLA DE ENTER EN LA CAJA DE DATO NUEVO
function pulsar(e) {
  
  let txtformu =  $('#codigoformulario').val();
  let txtfnom =  $('#nomformu').val();

  if (txtformu != "" || txtfnom != ""){
  ////console.log("ultimofocus pulsar: "+ultimofocus)
  if (e.keyCode === 13 && !e.shiftKey) {

    const focuscod= document.getElementById("codigoformulario");
    const focusnom = document.getElementById("nomformu");
  
    if (focuscod === document.activeElement){
      ////console.log("codigo tru");
      ultimofocus = "cod"
    }
    if (focusnom === document.activeElement){
      ////console.log("codigo nom ");
      ultimofocus = "nom"
    }
        e.preventDefault();
        ////console.log("hola 123")
        $("#cargando").modal("show");
        cargarimagenvisor();
  }
}
}


///////////////////////////////////////////
/////// FUNCIONES DIBUJA IMAGEN //////////////
/////////////////////////////////////////////

// ------DIBUJA IMAGEN-----  //


async function stitchCanvases( image, zoom, xcor,ycor ) {
  return new Promise(( resolve ) => {
    canvasEl = document.getElementById("canvasformu");

    ctx = canvasEl.getContext('2d');
  ////console.log("stitchCanvases")
    if (!ctx) {
      return;
    }
    ctx.clearRect(0, 0, canvasEl.width, canvasEl.height); // Clear canvas
    const perceivedWidth = image.width * zoom ;
    const perceivedHeight = image.height * zoom ;
  
    let dx = 0;
    let dy = 0;
  
    // Center the image as you zoom in using dx and dy offsets
  
    if (zoom == 1.5) {
      dx = xcor * -1;
      dy = ycor * -1;
      //////console.log("mas x= "+dx+" y= "+dy)
    } else {
      dy = -ycor / 1.5 * verizoom;
      dx = -xcor / 1.5 * verizoom;
      
    }
  
    // dx = xcor * -1;
    // dy = ycor * -1;
  
   boundPan2();
  ////console.log("panX"+panX)
  var  multiplica = 1.5
  if(vCONTROL == "SI"){ 
    var  multiplica = 1.5
  }else{
    var  multiplica = 1
  }
  

  ctx.drawImage(
    image,
    panX*multiplica,
    panY*multiplica,
    image.width*multiplica,
    image.height*multiplica,
    dx,
    dy,
    perceivedWidth,
    perceivedHeight
  );

      resolve(canvasEl)
  })
}

// ------AJUSTA IMAGEN-----  //

function boundPan2() {

  const padding = 50 * zoom;
  if ((panX - padding) < -image.width) {
   panX = -image.width + padding;
  }

  if ((panX + padding) > image.width) {
    panX = image.width - padding;
  }

  if ((panY - padding) < -image.height) {
    panY = -image.height + padding;
   }

   if ((panY + padding) > image.height) {
     panY = image.height - padding;
   }

}


function limpiarformu() {
  rutacolor = ""
  rutaby = ""
  canvasEl = document.getElementById("canvasformu");
  ctx = canvasEl.getContext('2d');
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
}



///////////////////////////////////////////
/////// FUNCION CARGA IMAGEN //////////////
/////////////////////////////////////////////

function cargartic(ticruta,nzoom,npag) {
   //console.log("ENTRO A CARGATIC 1")
  ////console.log("ENTRO A CARGATIC")
  /////VACIO EL CANVAS///////
 //document.getElementById("canvasformu").value = null;
 ////console.log("ticruta: "+ticruta)

  let validaimg = ""
  let ticruta_TIC = ""
  let verrorr = ""
  canvasEl = document.getElementById("canvasformu");

  ctx = canvasEl.getContext("2d");
  ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  
  image = String.Empty;  
  
  /////LEVANTO N° PAGINA///////
  var pagina = $("#npagi").val();

  let headers = new Headers();
  headers.append("Content-Type", "application/json");
  //headers.append("Access-Control-Allow-Headers", "Origin");
 
  //header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  ////CARGO LA RUTA///////
 // data = $("#cajaidvar").val();

  // var ticruta = "../images/seteocordenadas/" +data + ".tic";
  
  // var ticruta = "visualizador/img/Demov2/Img/80010007_p223186493_49_c.tic";
  //console.log("ticruta:"+ticruta)

  //console.log("veriprimero:"+veriprimero)
  
  /////BUSCO LA PAGINA///////
  if (veriprimero == "ok" ){
    //console.log("1:")
  
    ticruta_TIC = ticruta;
  }else{
    //console.log("2:else")
    let formu = valcbformuveri.substring(2,10)
    //console.log("formu:"+formu)
    ticruta_TIC = ticruta.replace(".TIF", "_"+formu+".TIF");
    ticruta_TIC = ticruta_TIC.replace(".TIC", "_"+formu+".TIC");
  }

 
  //console.log("ticruta_TIC:"+ticruta_TIC)
  //console.log("valcbformuveri:"+valcbformuveri)
 
  fetch(ticruta_TIC, {
    method: "GET",
    headers: headers,
  })
    .then(status)
    .then((res) => res.blob()
    ) // Gets the response and returns it as a blob
    .catch(function(err)
    {
      ////console.log("error")
      ////console.log("veriprimero:"+veriprimero)
      ////console.log("validaimg:"+validaimg)
      //console.log("2ERROR TIC")

      if (veriprimero == "ok" ){
        verrorr = "ok"
      }


      if (veriprimero == "" && validaimg == "" ){
       //console.log("ERROR TIC")
        veriprimero = "ok"
    
        //let cbformuveri = $('#lb_verifica_cbformu').val()
        //var cbformuveri = $('#lb_verifica_cbformu').text();
        ////console.log("/////////valcbformuveri"+valcbformuveri)
        ticruta_TIC = ticruta;
       // document.getElementById("lb_cagaticveri").innerHTML = "ruta+CB";
        cargartic(ticruta_TIC,nzoom,npag)
      }

    })
    .then((blob) => {
      Tiff.initialize({
        TOTAL_MEMORY: 1000000000,
      });
   
      ////console.log("entor al fecht 1")
      /////CREO EL CANVAS NUEVO///////
      var fileReader = new FileReader();

      fileReader.onload = async function () {

        // file is now ArrayBuffer:
        var tiff = new Tiff({ buffer: this.result });
// zxc
        tiff.setDirectory(npag-1); // parse and convert
        var canvas = tiff.toCanvas(); // convert to canvas

        /////CARGO EL CANVAS///////
        canvasEl = document.getElementById("canvasformu");

        ctx = canvasEl.getContext("2d");

        image = canvas;

        ////console.log("IMAGE:"+image)

        zoom = nzoom ;
        xcor = 0 ;
        ycor = 0 ;
      
        //////console.log("redraw_veri cargartic"+verixcor+veriycor)
        //SIVOR

       

        ////console.log("image antes del awat: "+image)
        await stitchCanvases(image, zoom,xcor,ycor).then((img) => {
          console.log("2termino")
          $('#borrar').remove();  
          $("#scroll-container").removeClass("sinresultadovh");
          
          cerrarModal ()
          //document.getElementById("codigoformulario").focus();
          validaimg = "ok"
        });


       // await stitchCanvases(image, zoom,xcor,ycor);
        ////console.log("asyncasync")
       //redraw_veri(image, zoom,xcor,ycor);
       // setupListeners_verifica(canvasEl);
      
      }
      console.log("2222termino")
      fileReader.readAsArrayBuffer(blob)
      
      // fileReader.readAsText(blob);
   
    })
    .catch(function(err)
    {  
      console.log("error/////")   
      if(verrorr == "ok"){
        console.log("completo: "+err)   
        let errorimg = err;
        const result = errorimg.toString().substring(0, 9);
  
        if(result == "TypeError"){
            $('#borrar').remove();
            $("#scroll-container").removeClass("sinresultadovh");
            let html = `
                    <img id ="borrar" src="img/sn2-v2.png" class="rounded img-form" alt="..."> 
            `;
          
            $("#IMG-FORMU").addClass(" scrollprimero ");
            $("#cuadro1").append(html);
            $("#scroll-container").addClass("sinresultadovh");
            cerrarModal ()
        }     
      }
  
    
    
    })


    function status(response) {   
      if (response.ok) {
          return response;
      }
      return response.json().then(res => Promise.reject(res));
  }

 // cerrarModal ()
}


function cerrarModal (){

  $('#cargando').modal('toggle');
  $('#cargando').modal('hide')
}

function cargarimagenvisor() {

  //$("#cargando").modal("show");

  $('#borrar').remove();  
  $("#scroll-container").removeClass("sinresultadovh");
  

  limpiarformu()

  $("#IMG-FORMU").removeClass("scrollprimero");

  numpag = $("#pagimg").text();
  //colorimg2 = "byn";
  let valorfiltro = 0
  let codigoformulario = $('#codigoformulario').val();
  let nomformu = $('#nomformu').val();
  veriprimero = ""

  if (codigoformulario != "" || nomformu != ""){



    if(ultimofocus == "cod"){
      valorfiltro = 1
    }

    if(ultimofocus == "nom"){
      valorfiltro = 2
    }

      $.ajax({
        data: { tipo: "cargoimagen", valor: valorfiltro,codformu:codigoformulario,nomformu:nomformu},
        url: "sql/conexion.php",
        method: "post",
        async:false,
        success: function (data) {

          ////console.log("ultimofocus"+ultimofocus)

          
          Array_Json = jQuery.parseJSON(data);

          if (Array_Json != "") {
            $('#borrar').remove();  
            $("#scroll-container").removeClass("sinresultadovh");
            rutacolor = Array_Json[0].rutacolor;
            rutabyn = Array_Json[0].rutabyn;
            let valorcod = Array_Json[0].valorcod;
            let valornom = Array_Json[0].valornom;
            valcbformuveri = Array_Json[0].valorcod;
            if(ultimofocus == "cod"){
              $('#nomformu').val(valornom)
            }

            if(ultimofocus == "nom"){
              $('#codigoformulario').val(valorcod)
            }

            ////console.log("va a cambiar la pagina a 01")
            //document.getElementById("pagimg").innerHTML = "01";
           // $("#switchcolor").prop("checked", false);
           // $("#IMG-FORMU").addClass("IMG-FORMU-left");
     
            //nzoom = zoom;

            // //console.log("numpag: "+numpag)
            // //console.log("colorimg2: "+colorimg2)
            // //console.log("zoom: "+zoom)
            // //console.log("rutacolor: "+rutacolor)
            // //console.log("rutabyn: "+rutabyn)
           
            generarimagen(numpag, colorimg2, zoom,rutacolor,rutabyn);
            document.getElementById("IMG-FORMU").scrollTop = 10;
          }else{
            if(ultimofocus == "cod"){
              $('#nomformu').val("")
            }

            if(ultimofocus == "nom"){
              $('#codigoformulario').val("")
            }

            $('#borrar').remove();
            $("#scroll-container").removeClass("sinresultadovh");
            let html = `
                    <img id ="borrar" src="img/sin-resultados-search4.png" class="rounded img-form" alt="..."> 
            `;
          
            $("#IMG-FORMU").addClass(" scrollprimero ");
            $("#cuadro1").append(html);
            $("#scroll-container").addClass("sinresultadovh");
            cerrarModal ()

          }

        }
      });

  }
}

async function generarimagen(numpag, cpag, czoom,Rutacolor,RutabYN) {

  $("#IMG-FORMU").removeClass("scrollprimero");

  let codigoformulario = $('#codigoformulario').val();
  let nomformu = $('#nomformu').val();
  
  if (codigoformulario != "" || nomformu != ""){

   img_color = cpag;

  if (img_color == "color") {
    img_ruta = Rutacolor
  }
  if (img_color == "byn") {
    img_ruta = RutabYN; 
  }

  img_pagina = numpag;
  nzoom = czoom;

  await cargartic(img_ruta,nzoom,img_pagina)

}

}

