let page = 1; 

document.addEventListener("DOMContentLoaded", () => {

    catalogo();
    

    document.querySelector('#categoria').addEventListener('change', () => {
        page = 1;
        catalogo();
    });
    

    document.querySelector('#buscar').addEventListener('click', () => {
        page = 1; 
        catalogo();
    });
});
