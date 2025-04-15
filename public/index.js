document.addEventListener('DOMContentLoaded', () => {
    const dishes = [
        {
            id: 1,
            name: "Margherita Pizza",
            description: "Classic pizza with tomato sauce, mozzarella, and basil",
            price: 12.99,
            image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            category: "Italian"
        },
        {
            id: 2,
            name: "Beef Burger",
            description: "Juicy beef patty with cheese, lettuce, and special sauce",
            price: 9.99,
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            category: "American"
        },
        {
            id: 3,
            name: "Caesar Salad",
            description: "Fresh romaine lettuce with Caesar dressing, croutons and parmesan",
            price: 8.99,
            image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            category: "Salad"
        }
    ];

    const dishesContainer = document.getElementById('dishes-container');
    
    // Clear loading state or placeholder
    dishesContainer.innerHTML = '';

    // Error handling if container not found
    if (!dishesContainer) {
        console.error('Dishes container element not found');
        return;
    }

    // Function to create dish card
    const createDishCard = (dish) => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300';
        card.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}" 
                 class="w-full h-48 object-cover hover:scale-105 transition-transform duration-300">
            <div class="p-4">
                <div class="flex justify-between items-start">
                    <h3 class="font-semibold text-lg">${dish.name}</h3>
                    <span class="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">${dish.category}</span>
                </div>
                <p class="text-gray-600 text-sm mt-2">${dish.description}</p>
                <div class="mt-4 flex justify-between items-center">
                    <p class="text-red-600 font-bold">$${dish.price.toFixed(2)}</p>
                    <button class="add-to-cart bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700 transition"
                            data-id="${dish.id}">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
        return card;
    };

    dishes.forEach(dish => {
        try {
            const dishElement = createDishCard(dish);
            dishesContainer.appendChild(dishElement);
        } catch (error) {
            console.error(`Error rendering dish ${dish.id}:`, error);
        }
    });

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            const dishId = e.target.getAttribute('data-id');
            const dish = dishes.find(d => d.id == dishId);
            if (dish) {
                alert(`Added ${dish.name} to cart!`);
            }
        });
    });
});