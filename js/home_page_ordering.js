document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemName = this.getAttribute('data-item');

            addToCart(itemName);
        });
    });

    function addToCart(name) {
        const ul = document.querySelector('.menu-item');
        const li = document.createElement('li');
        li.textContent = name;
        ul.appendChild(li);
    }
    
});
