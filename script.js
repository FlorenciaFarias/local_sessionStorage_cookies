//Obtengo los elementos de mi HTML
document.getElementById('crear').addEventListener('click',crear);
document.getElementById('mostrar').addEventListener('click',mostrar);
document.getElementById('editar').addEventListener('click',editar);
document.getElementById('eliminar').addEventListener('click',eliminar);

//Creo las funcionaliades para cada botón
    function crear()
    {
        sessionStorage.setItem('usuario','Alf');
    }

    function mostrar()
    {
        alert(sessionStorage.getItem('usuario'));
    }
    function editar()
    {
        sessionStorage.setItem('usuario','Alfredo');
    }

    function eliminar()
    {
        sessionStorage.removeItem('usuario');
    }