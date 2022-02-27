//Obtengo los elementos de mi HTML
document.getElementById('crear').addEventListener('click',crear);
document.getElementById('mostrar').addEventListener('click',mostrar);
document.getElementById('editar').addEventListener('click',editar);
document.getElementById('eliminar').addEventListener('click',eliminar);

//Creo las funcionaliades para cada botón
    function crear()
    {
        /*Asigno la clave y el valor
        Además puedo configurar otros atributos, como la expiración*/
        document.cookie = "usuario=Alf por cookie; expires=Thu, 31 May 2022 12:00:00 UTC; path=/ max-age=60*60";
    }

    function mostrar()
    {
        alert(document.cookie);
    }
    function editar()
    {
        document.cookie = "usuario=Alfredo por Cookie; expires=Thu, 31 May 2022 12:00:00 UTC; path=/ max-age=60*60";
    }

    function eliminar()
    {
        document.cookie = "usuario=Alfredo por Cookie; expires=Thu, 31 May 2022 12:00:00 UTC; path=/ max-age=60*60";
    }