function GenerarVentanaModal(mensaje){
    document.querySelector('#mensaje').innerHTML=mensaje;
    var elem= document.querySelector('#mensajeModal');
    var instance = M.Modal.getInstance(elem);
    instance.open();
}