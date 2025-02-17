let page = 1; // Definir la variable globalmente

document.addEventListener("DOMContentLoaded", () => {
    // Cargar películas al inicio
    catalogo();
    
    // Manejar el cambio de categoría
    document.querySelector('#categoria').addEventListener('change', () => {
        page = 1; // Reiniciar a la primera página al cambiar la categoría
        catalogo();
    });
    
    // Manejar la búsqueda
    document.querySelector('#buscar').addEventListener('click', () => {
        page = 1; // Reiniciar a la primera página al realizar una búsqueda
        catalogo();
    });
});
