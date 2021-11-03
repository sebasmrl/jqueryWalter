console.log('Archivos con JQuery')


$('#i-buscar').change((e)=>{
    console.log(e.target.value)
    if(e.target.value === '') $("#cards").fadeIn()

})

$('#btn-buscar').click((e)=>{
    console.log('Searching...', e.target);
    e.preventDefault();

    const value = $('#i-buscar').val()
    if(!(value === '')) $("#cards").fadeOut()
});


//navbarSupportedContent show
// btn-colapsado collapsed

//Para ver este efecto es necesario reducir el tamaño de la ventana
$('#btn-colapsado').click((e)=>{
    
    if(!$('#navbarSupportedContent').hasClass('show')){
        $('#navbarSupportedContent').addClass('show') 
    }else{
        $('#navbarSupportedContent').removeClass('show');
    }

    if(!$('#btn-colapsado').hasClass('collapsed')){ 
        $('#btn-colapsado').addClass('collapsed') 
    }else{
        $('#btn-colapsado').removeClass('collapsed')
    }

})
