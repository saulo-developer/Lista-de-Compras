const removeItems = document.querySelectorAll(".delete-btn");
const addItems = document.querySelector(".add-btn")
let deletedCount = 0; 

// Adding items in the list
addItems.addEventListener("click", (e) => {
    e.preventDefault();
    
    const content = document.getElementById("campo-1").value.trim(); // Obtém o valor do input

    if (content) {
        alert("Item adicionado: " + content);
    } else {
        alert("Por favor, insira um item antes de adicionar!");
    }
});


// Removing items from the list, including notification which pops up when delete button is clicked
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        e.preventDefault();

        const listItem = e.target.parentElement;
        listItem.remove();
        
        // Obtém a notificação
        let notification = document.getElementById("notification");

        // Atualiza o texto da notificação
        notification.textContent = `Item deletado. Total deletado: ${++deletedCount}`;

        // Exibe a notificação
        notification.style.display = "block";

        // Oculta a notificação após 3 segundos
        setTimeout(() => {
            notification.style.display = "none";
        }, 3000);
    } else {
        // Oculta a notificação se não for clicado em um botão de deletação
        let notification = document.getElementById("notification");
        notification.style.display = "none";
    }
});
