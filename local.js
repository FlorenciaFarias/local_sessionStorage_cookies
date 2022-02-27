//Obtengo los elementos de mi HTML
document.getElementById('crearLocal').addEventListener('click',crearL);
document.getElementById('mostrarLocal').addEventListener('click',mostrarL);
document.getElementById('editarLocal').addEventListener('click',editarL);
document.getElementById('eliminarLocal').addEventListener('click',eliminarL);


//Creo las funcionaliades para cada botón
    function crearL()
    {
        localStorage.setItem('usuario','Alf');
    }

    function mostrarL()
    {
        alert(localStorage.getItem('usuario'));
    }
    function editarL()
    {
        localStorage.setItem('usuario','Alfredo');
    }

    function eliminarL()
    {
        localStorage.removeItem('usuario');
    }