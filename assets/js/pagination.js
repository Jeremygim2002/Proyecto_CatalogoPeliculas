document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#siguiente').addEventListener('click', () => {
        page = Math.min(page + 1, 20);
        document.querySelector('header p span').textContent = page;
        catalogo();
    });

    document.querySelector('#atras').addEventListener('click', () => {
        page = Math.max(page - 1, 1);
        document.querySelector('header p span').textContent = page;
        catalogo();
    });
});
