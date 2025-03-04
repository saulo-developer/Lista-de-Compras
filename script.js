const removeItems = document.querySelectorAll(".delete-btn");
let firstNotification = true;

removeItems.forEach(removeItem => {
    removeItem.addEventListener("click", (e) => {
        e.preventDefault();
        
        // Get the parent list item
        const listItem = removeItem.parentElement;
        
        // Remove the list item
        listItem.remove();
        
        if (firstNotification === true) {
            // Show notification
            const notification = document.querySelector("#notification");
            notification.style.display = 'block';
            
            // Hide notification after 3 seconds
            setTimeout(() => {
                notification.style.display = 'none';
                firstNotification = false;
            }, 3000);
        }
    });
});


/*
function addItem() {
    // Get input and list elements
    const input = document.getElementById('new-item');
    const list = document.getElementById('shopping-list');
    
    // Check if input is not empty
    if (input.value.trim() !== '') {
        // Create new list item
        const newItem = document.createElement('li');
        newItem.innerHTML = `${input.value} <button class="remove-btn" onclick="removeItem(this)">🗑️</button>`;
        
        // Add to list
        list.appendChild(newItem);
        
        // Clear input
        input.value = '';
    }
}


*/
