document.addEventListener('alpine:init', () =>{
    Alpine.data('products', () => ({
        items: [
            { id: 1, name: 'Tumbler Classic', img:'1.jpeg', price: 450000},
            { id: 2, name: 'Tumbler Disney', img:'2.jpeg', price: 650000},
            { id: 3, name: 'Tumbler ', img:'3.jpeg', price: 380000},
            { id: 4, name: 'Classic Mug', img:'4.jpeg', price: 280000},
        ],
    }));
});