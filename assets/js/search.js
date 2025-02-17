document.getElementById("buscar").addEventListener("click", () => {
    page = 1;
    categoria = "search";
    pelicula = document.getElementById("txt_nombre").value;
    catalogo();
});
