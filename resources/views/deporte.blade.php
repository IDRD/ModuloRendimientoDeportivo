@extends('master')

@section('script')
    @parent

    <script src="{{ asset('public/Js/Tecnico/deporte.js') }}"></script> 
@stop

@section('content')
    <div class="content">
        <div class="panel panel-primary">
            <div class="panel-heading">
              <h3 class="panel-title">DEPORTE: Configuración de los deportes.</h3>
            </div>
            <div class="panel-body">
                
                <div class="row">
                   
                    <div class="col-xs-6 col-sm-8">
                        <div class="form-group">
                            <label class="control-label" for="Id_TipoDocumento">Deporte</label>
                            <select name="Id_Deporte" id="Id_Deporte" class="form-control">
                                <option value="">Seleccionar</option>
                                @foreach($deporte as $deportes)
                                    <option value="{{ $deportes['Id'] }}">{{ $deportes['Nombre_Deporte'] }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                    
                    <div class="col-xs-6 col-sm-4">
                        <label class="control-label" for="Id_TipoDocumento">Gestionar:</label>
                        <div class="form-group">
                            <div class="btn-group" role="group" aria-label="...">
                              <button type="button" class="btn btn-default" id="a_edicar">Editar</button>
                              <button type="button" class="btn btn-default" id="a_eliminar">Eliminar</button>
                              <button type="button" class="btn btn-success" id="a_nuevo">Nuevo</button>
                            </div>
                        </div>
                    </div> 

                </div>




                <div class="alert alert-danger" role="alert" style="display: none"id="div_mensaje">Debe elejir un deporte.</div>





                <!-- Editar -->
                <div class="row" id="div_editar" style="display: none">
                    <form id="form_edit">
                        <div class="col-xs-12">
                            <div class="page-header">
                                <h3>Editar</h3>
                            </div>
                        </div> 

                        <div class="col-xs-6 col-sm-4">
                            <label class="control-label" for="Id_TipoDocumento">Agrupación:</label>
                            <select name="Id_Agrupa" id="Id_Agrupa" class="form-control">
                                     <option value="">Seleccionar</option>
                                    @foreach($agrupacion as $agrupaciones)
                                        <option value="{{ $agrupaciones['Id'] }}">{{ $agrupaciones['Nombre_Agrupacion'] }}</option>
                                    @endforeach
                            </select>
                        </div>
                        
                        <div class="col-xs-6 col-sm-4">
                            <label class="control-label" for="Id_TipoDocumento">Deporte:</label>
                            <input type="text" class="form-control"  placeholder="Agrupación" id="nom_depot" name="nom_depot">
                            <input type="hidden" placeholder="Deporte" id="id_Dpt" name="id_Dpt">
                        </div> 
                        <div class="col-xs-6 col-sm-4">
                            <label class="control-label" for="Id_TipoDocumento">Acción:</label><br>
                            <button type="button" class="btn btn-primary" id="btn_editar">Modificar</button>
                        </div> 
                    </form>
                    
                </div>





                <!-- Eliminar -->
                <div class="row" id="div_eliminar" style="display: none">
                
                    <div class="col-xs-12">
                        <div class="page-header">
                            <h3>Eliminar</h3>
                        </div>
                    </div> 
                    <div class="col-xs-6 col-sm-8">
                        <label class="control-label" for="label_eliminar">Confirmación:</label>
                        <br><label class="control-label" id="label_eliminar"></label>
                        <input type="hidden" id="id_deport"></input>
                    </div> 
            
                    <div class="col-xs-6 col-sm-4">
                        <label class="control-label" for="Id_TipoDocumento">Acción:</label><br>
                        <button type="button" class="btn btn-danger" id="btn_eliminar_dpt">Eliminar</button>
                    </div> 
                    
                </div>





                <!-- Crear Neuvo -->
                <div class="row" id="div_nuevo" style="display: none">
                    <form id="form_nuevo">
                        <div class="col-xs-12">
                            <div class="page-header">
                                <h3>Crear Deporte</h3>
                            </div>
                        </div> 
                    
                        <div class="col-xs-6 col-sm-4">
                            <label class="control-label" for="Id_TipoDocumento">Agrupación:</label>
                            <select name="Id_Agrupacion" id="Id_Agrupacion" class="form-control">
                                     <option value="">Seleccionar</option>
                                    @foreach($agrupacion as $agrupaciones)
                                        <option value="{{ $agrupaciones['Id'] }}">{{ $agrupaciones['Nombre_Agrupacion'] }}</option>
                                    @endforeach
                            </select>
                        </div>
                        
                        <div class="col-xs-6 col-sm-4">
                            <label class="control-label" for="Nom_Deporte">Nombre deporte:</label>
                            <input type="text" class="form-control"  placeholder="Agrupación" name="Nom_Deporte">
                        </div> 
                        <div class="col-xs-6 col-sm-4">
                            <label class="control-label" for="Id_TipoDocumento">Acción:</label><br>
                            <button type="button" class="btn btn-success" id="btn_crear_dpt">Crear</button>
                        </div> 
                    </form>  
                </div>

                <div class="row">
                    <div class="form-group">
                        <div class="col-xs-6 col-sm-12">
                        </div>
                </div>
                <div class="row">
                    <div class="form-group">
                        <div class="col-xs-12">
                            <div  role="alert" style="display: none"id="div_mensaje2"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>		    
    </div>
@stop