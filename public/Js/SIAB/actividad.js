$(function(e){
  $("#RegistrarActividad").on('click', function(){
    registro('AddActividad');
  }); 

  $("#ModificarActividad").on('click', function(){
    registro('EditActividad');
  });   

    function registro (url){  
      var token = $("#token").val();
      var formData = new FormData($("#actividad")[0]);       
      
      $.ajax({
          url: url,  
          type: 'POST',
          data: formData,
          contentType: false,
          processData: false,
          dataType: "json",
          success: function (xhr) {
            $('#alert_actividad').html('<div class="alert alert-dismissible alert-success" ><strong>Exito!</strong>'+xhr.Mensaje+'</div>');
            $('#mensaje_actividad').show(60);
            $('#mensaje_actividad').delay(2000).hide(600);        
            Reset_campos();
          },
          error: function (xhr){
            validador_errores(xhr.responseJSON);
          }
      });
    }

    var validador_errores = function(data){
      $('#actividad .form-group').removeClass('has-error');

      $.each(data, function(i, e){
        $("#"+i).closest('.form-group').addClass('has-error');
      });
    }

    $('#Fecha_Programada').datepicker({format: 'yyyy-mm-dd', autoclose: true,});
    $('#Fecha_Realizada').datepicker({format: 'yyyy-mm-dd', autoclose: true,});

    $("#Crear_Nueva").on('click', function(){

      $('#actividad .form-group').removeClass('has-error');
      $("#actividad").hide('slow');
      $("#actividad").show('slow');        
      $("#Actividad").val('').change();
      $("#Otro_Actividad").val('');
      $("#Descripcion").val('');
      $("#DeportistaP").val('');
      $("#DeportistaA").val('');
      $("#MultiP").val('');
      $("#MultiA").val('');
      $("#EntrenadorP").val('');
      $("#EntrenadorA").val('');
      $("#ComisionadoP").val('');
      $("#ComisionadoA").val('');
      $("#Otros").val('');
      $("#OtrosP").val('');
      $("#OtrosA").val('');
      $("#Fecha_Programada").val('');
      $("#Fecha_Realizacion").val('');
      $("#Reprogramacion").val('');
      $("#Total_Asistentes").val('');
      $("#Observaciones").val('');
      $("#Total_Evaluadores").val('');
      $("#Nombre_Gestor").val('');
      $("#Nombre_Coordinador").val('');


      $("#actividad").show('slow');
      $("#Otro_Actividad").hide('slow');
      $("#DeportistaA").hide('slow');
      $("#MultiA").hide('slow');
      $("#EntrenadorA").hide('slow');
      $("#ComisionadoA").hide('slow');
      $("#OtrosA").hide('slow');
      $("#FechaRealizadaDate").hide('slow');
      $("#Reprogramacion").hide('slow');
      $("#Total_Asistentes").hide('slow');
      $("#Observaciones").hide('slow');
      $("#Total_Evaluadores").hide('slow');
      $("#DeportistaAL").hide('slow');
      $("#MultiAL").hide('slow');
      $("#EntrenadorAL").hide('slow');
      $("#ComisionadoAL").hide('slow');
      $("#OtrosAL").hide('slow');
      $("#Fecha_RealizadaL").hide('slow');
      $("#ReprogramacionL").hide('slow');
      $("#Total_AsistentesL").hide('slow');
      $("#ObservacionesL").hide('slow');
      $("#Total_EvaluadoresL").hide('slow');
      $("#RegistrarActividad").show('slow');
      $("#ModificarActividad").hide('slow');
      $("#ActividadId").val('');
    });

    $(".ver").click(function(e){

      $('#actividad .form-group').removeClass('has-error');
      $("#actividad").val($(this).val());
      var id = $(this).val();
      $.get("TraeActividad/"+id, function (actividad) {

        $("#actividad").hide('slow');
        $("#actividad").show('slow');
        $("#ActividadId").val(actividad['Id']);        
        $("#Actividad").val(actividad['Tipo_Actividad_Id']).change();
        $("#Otro_Actividad").val(actividad['Otro_Actividad']);
        $("#Descripcion").val(actividad['Descripcion']);
        $("#DeportistaP").val(actividad['DeportistaP']);
        $("#DeportistaA").val(actividad['DeportistaA']);
        $("#MultiP").val(actividad['MultidisciplinarioP']);
        $("#MultiA").val(actividad['MultidisciplinarioA']);
        $("#EntrenadorP").val(actividad['EntrenadorP']);
        $("#EntrenadorA").val(actividad['EntrenadorA']);
        $("#ComisionadoP").val(actividad['ComisionadoP']);
        $("#ComisionadoA").val(actividad['ComisionadoA']);
        $("#Otros").val(actividad['Otros']);
        $("#OtrosP").val(actividad['OtrosP']);
        $("#OtrosA").val(actividad['OtrosA']);
        $("#Fecha_Programada").val(actividad['Fecha_Programada']);
        $("#Fecha_Realizada").val(actividad['Fecha_Realizacion']);
        $("#Reprogramacion").val(actividad['Reprogramacion']);
        $("#Total_Asistentes").val(actividad['Total_Asistentes']);
        $("#Observaciones").val(actividad['Observaciones']);
        $("#Total_Evaluadores").val(actividad['Total_Evaluadores']);
        $("#Nombre_Gestor").val(actividad['Nombre_Gestor']);
        $("#Nombre_Coordinador").val(actividad['Nombre_Coordinador']);

        $("#RegistrarActividad").hide('slow');
        $("#ModificarActividad").show('slow');
      });     
    });

    $("#Actividad").on('change',function (e){
    var id = $("#Actividad").val();
    if(id==4){      
      $("#Otro_Actividad").show("slow");
    }else{
      $("#Otro_Actividad").hide("slow");
    }
  });

  function Reset_campos(){
    $("#actividad").hide('slow');
    $("#ActividadId").val('');
    $("#Actividad").val('').change();
    $("#Otro_Actividad").val('');
    $("#Descripcion").val('');
    $("#DeportistaP").val('');
    $("#DeportistaA").val('');
    $("#MultiP").val('');
    $("#MultiA").val('');
    $("#EntrenadorP").val('');
    $("#EntrenadorA").val('');
    $("#ComisionadoP").val('');
    $("#ComisionadoA").val('');
    $("#Otros").val('');
    $("#OtrosP").val('');
    $("#OtrosA").val('');
    $("#Fecha_Programada").val('');
    $("#Fecha_Realizacion").val('');
    $("#Reprogramacion").val('');
    $("#Total_Asistentes").val('');
    $("#Observaciones").val('');
    $("#Total_Evaluadores").val('');
    $("#Nombre_Gestor").val('');
    $("#Nombre_Coordinador").val('');

    $("#RegistrarActividad").hide('slow');
    $("#ModificarActividad").hide('slow');

  }

});
/*
$(document).ready(function () {
    TablaActividades();
});
function TablaActividades() {
    $('#TablaActividades').DataTable({
        retrieve: true,
        select: true,
        "responsive": true,
        "ordering": true,
        "info": true,
        "language": {
            url: 'public/DataTables/Spanish.json',
            searchPlaceholder: "Buscar"
        }
    });
}*/